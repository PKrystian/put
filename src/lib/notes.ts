export type NoteType = 'note' | 'pdf';

export interface TreeNote {
  type: NoteType;
  name: string;
  slug: string;
  path: string;
  headings?: string[];
}

export interface TreeFolder {
  type: 'folder';
  name: string;
  slug: string;
  children: TreeNode[];
}

export interface TreeProject {
  type: 'project';
  name: string;
  slug: string;
  entryPath: string;
}

export type TreeNode = TreeFolder | TreeNote | TreeProject;

export interface NoteRef {
  slug: string;
  path: string;
  name: string;
  type: NoteType;
  headings?: string[];
}

export interface NotesIndex {
  generatedAt: string;
  tree: TreeNode[];
  notes: NoteRef[];
  attachments: Record<string, string>;
}

const base = process.env.PUBLIC_URL || '';

export const notesBaseUrl = `${base}/notes`;

export function fileUrl(relPath: string): string {
  return `${notesBaseUrl}/${relPath.split('/').map(encodeURIComponent).join('/')}`;
}

let cached: Promise<NotesIndex> | null = null;

export function loadNotesIndex(): Promise<NotesIndex> {
  if (!cached) {
    cached = fetch(`${notesBaseUrl}/index.json`).then((res) => {
      if (!res.ok) throw new Error('Could not load notes index');
      return res.json() as Promise<NotesIndex>;
    });
  }
  return cached;
}

export function findNoteBySlug(index: NotesIndex, slug: string): NoteRef | undefined {
  return index.notes.find((n) => n.slug === slug);
}

function courseKeyOf(path: string): string {
  const parts = path.split('/');
  return parts.slice(0, Math.min(2, parts.length - 1)).join('/');
}

export function getPrevNext(index: NotesIndex, slug: string): {
  prev?: NoteRef;
  next?: NoteRef;
} {
  const note = findNoteBySlug(index, slug);
  if (!note) return {};
  const key = courseKeyOf(note.path);
  const scoped = index.notes.filter((n) => courseKeyOf(n.path) === key);
  const i = scoped.findIndex((n) => n.slug === slug);
  if (i === -1) return {};
  return {
    prev: i > 0 ? scoped[i - 1] : undefined,
    next: i < scoped.length - 1 ? scoped[i + 1] : undefined,
  };
}

export function breadcrumb(path: string): string[] {
  return path
    .split('/')
    .map((seg) => seg.replace(/\.[^.]+$/, ''));
}

export function formatDisplayName(name: string): string {
  const m = /^semester-(\d+)$/i.exec(name);
  return m ? `Semestr ${m[1]}` : name;
}

export function findFolderByPathSegments(
  tree: TreeNode[],
  segments: string[]
): TreeFolder | undefined {
  let nodes = tree;
  let found: TreeFolder | undefined;
  for (const seg of segments) {
    found = nodes.find((n) => n.type === 'folder' && n.name === seg) as TreeFolder | undefined;
    if (!found) return undefined;
    nodes = found.children;
  }
  return found;
}

export function findFirstNoteInFolder(folder: TreeFolder): NoteRef | undefined {
  for (const child of folder.children) {
    if (child.type === 'folder') {
      const found = findFirstNoteInFolder(child);
      if (found) return found;
    } else if (child.type === 'note' || child.type === 'pdf') {
      return { slug: child.slug, path: child.path, name: child.name, type: child.type };
    }
  }
  return undefined;
}
