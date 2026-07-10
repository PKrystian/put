#!/usr/bin/env node
/**
 * Usage:
 *   npm run ingest -- --path "/path/to/ObsidianVault"
 *   npm run ingest
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const NOTES_DIR = path.join(ROOT, 'public', 'notes');

const NOTE_EXT = new Set(['.md']);
const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif', '.bmp']);
const DOC_EXT = new Set(['.pdf']);
const SKIP_DIRS = new Set(['node_modules', '.git', '.obsidian', '.trash', '.idea', '.vscode']);
const SKIP_FILES = new Set(['.DS_Store', 'package.json', 'package-lock.json', 'yarn.lock']);

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--path') args.path = argv[++i];
    else if (argv[i] === '--out') args.out = argv[++i];
  }
  return args;
}

function isWanted(file) {
  if (SKIP_FILES.has(file)) return false;
  const ext = path.extname(file).toLowerCase();
  return NOTE_EXT.has(ext) || IMAGE_EXT.has(ext) || DOC_EXT.has(ext);
}

function isProjectDir(base, rel) {
  return fs.existsSync(path.join(base, rel, 'index.html'));
}

function walkProject(base, rel, acc) {
  const abs = path.join(base, rel);
  for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name) || SKIP_FILES.has(entry.name)) continue;
    const childRel = path.join(rel, entry.name);
    if (entry.isDirectory()) walkProject(base, childRel, acc);
    else acc.push(childRel);
  }
}

function walk(base, rel = '', acc = []) {
  const abs = path.join(base, rel);
  for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
    if (entry.name.startsWith('.') && entry.isDirectory()) continue;
    if (SKIP_DIRS.has(entry.name)) continue;
    const childRel = path.join(rel, entry.name);
    if (entry.isDirectory()) {
      if (isProjectDir(base, childRel)) walkProject(base, childRel, acc);
      else walk(base, childRel, acc);
    } else if (entry.isFile() && isWanted(entry.name)) {
      acc.push(childRel);
    }
  }
  return acc;
}

function extractHtmlTitle(html) {
  const m = /<title>([^<]*)<\/title>/i.exec(html);
  return m ? m[1].trim() : undefined;
}

function slugify(text) {
  return text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function slugPath(relPath) {
  return relPath
    .split(path.sep)
    .map((seg, i, arr) => (i === arr.length - 1 ? slugify(seg) : slugify(seg)))
    .join('/');
}

function displayName(fileOrDir) {
  return fileOrDir.replace(/\.[^.]+$/, '').trim();
}

function extractHeadings(markdown) {
  const headings = [];
  const re = /^#{1,6}\s+(.+)$/gm;
  let m;
  while ((m = re.exec(markdown))) {
    const text = m[1]
      .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_x, target, label) => (label || target).trim())
      .replace(/[*_`]/g, '')
      .trim();
    if (text) headings.push(text);
  }
  return headings;
}

function copyVault(vaultPath, outDir) {
  if (!fs.existsSync(vaultPath)) {
    console.error(`✗ Vault path not found: ${vaultPath}`);
    process.exit(1);
  }
  console.log(`→ Copying from vault: ${vaultPath}`);
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  const files = walk(vaultPath);
  let copied = 0;
  for (const rel of files) {
    const src = path.join(vaultPath, rel);
    const dest = path.join(outDir, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    copied++;
  }
  console.log(`✓ Copied ${copied} files into public/notes/`);
}

function buildIndex(notesDir) {
  const attachments = {};
  const notes = [];

  function build(rel) {
    const abs = path.join(notesDir, rel);
    const entries = fs
      .readdirSync(abs, { withFileTypes: true })
      .filter((e) => e.name !== 'index.json' && !e.name.startsWith('.'))
      .sort((a, b) => {
        const aSyl = a.isFile() && /sylabus/i.test(a.name);
        const bSyl = b.isFile() && /sylabus/i.test(b.name);
        if (aSyl !== bSyl) return aSyl ? -1 : 1;
        if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1;
        return a.name.localeCompare(b.name, undefined, { numeric: true });
      });

    const children = [];
    for (const entry of entries) {
      const childRel = path.join(rel, entry.name);
      const posixRel = childRel.split(path.sep).join('/');

      if (entry.isDirectory()) {
        if (isProjectDir(notesDir, childRel)) {
          const html = fs.readFileSync(path.join(abs, entry.name, 'index.html'), 'utf8');
          children.push({
            type: 'project',
            name: extractHtmlTitle(html) || displayName(entry.name),
            slug: slugPath(childRel),
            entryPath: `${posixRel}/index.html`,
          });
          continue;
        }
        const sub = build(childRel);
        if (sub.length) {
          children.push({
            type: 'folder',
            name: displayName(entry.name),
            slug: slugPath(childRel),
            children: sub,
          });
        }
        continue;
      }

      const ext = path.extname(entry.name).toLowerCase();
      if (IMAGE_EXT.has(ext) || (DOC_EXT.has(ext) && false)) {
        attachments[entry.name] = posixRel;
        continue;
      }
      if (NOTE_EXT.has(ext) || DOC_EXT.has(ext)) {
        const headings = NOTE_EXT.has(ext)
          ? extractHeadings(fs.readFileSync(path.join(abs, entry.name), 'utf8'))
          : undefined;
        const node = {
          type: DOC_EXT.has(ext) ? 'pdf' : 'note',
          name: displayName(entry.name),
          slug: slugPath(childRel),
          path: posixRel,
          ...(headings && headings.length ? { headings } : {}),
        };
        children.push(node);
        notes.push({ slug: node.slug, path: node.path, name: node.name, type: node.type, ...(headings && headings.length ? { headings } : {}) });
        if (DOC_EXT.has(ext)) attachments[entry.name] = posixRel;
      }
    }
    return children;
  }

  const tree = build('');
  return { generatedAt: new Date().toISOString(), tree, notes, attachments };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const outDir = args.out ? path.resolve(args.out) : NOTES_DIR;

  if (args.path) {
    copyVault(path.resolve(args.path), outDir);
  } else {
    console.log('→ No --path given; re-indexing existing public/notes/');
  }

  if (!fs.existsSync(outDir)) {
    console.error('✗ public/notes/ does not exist. Run with --path <vault> first.');
    process.exit(1);
  }

  const index = buildIndex(outDir);
  fs.writeFileSync(path.join(outDir, 'index.json'), JSON.stringify(index, null, 2));
  console.log(
    `✓ Indexed ${index.notes.length} notes, ${Object.keys(index.attachments).length} attachments → public/notes/index.json`
  );

  writeSitemap(index);
}

function writeSitemap(index) {
  const site = (process.env.SITE_URL || 'https://put.krystianpinczak.com').replace(/\/$/, '');
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    `  <url><loc>${site}/</loc><lastmod>${today}</lastmod></url>`,
    ...index.notes.map(
      (n) => `  <url><loc>${site}/note/${n.slug}</loc><lastmod>${today}</lastmod></url>`
    ),
  ];
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.join('\n') +
    `\n</urlset>\n`;
  fs.writeFileSync(path.join(ROOT, 'public', 'sitemap.xml'), xml);
  console.log(`✓ Wrote sitemap.xml (${index.notes.length + 1} urls, base ${site})`);
}

main();
