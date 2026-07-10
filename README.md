# PUT Notes

Notes from **Politechnika Poznańska** (Poznań University of Technology)

## Getting started

```bash
npm install
npm start
```

> Requires **Node 20+** (react-router 7). On older Node you'll see EBADENGINE warnings.

## Syncing notes from Obsidian

Notes live under `public/notes/`, mirroring your vault's folder structure. A single
script imports them and (re)builds the index the app reads.

```bash
npm run ingest -- --path "/path/to/ObsidianVault"

npm run ingest
```

The script:

- copies `.md` files and attachments (`png/jpg/jpeg/gif/svg/webp/avif/bmp`, `pdf`) into
  `public/notes/`, preserving the folder tree;
- skips junk (`node_modules`, `.git`, `.obsidian`, `.trash`, `.DS_Store`, lockfiles);
- generates `public/notes/index.json` the folder tree, a flat note list (for
  prev/next navigation) and an attachment map (for resolving Obsidian `![[embeds]]`);
- writes `public/sitemap.xml` (set `SITE_URL` to your domain, e.g.
  `SITE_URL=https://notes.example.com npm run ingest`).

Obsidian `![[image.png]]` embeds, `[[wikilinks]]` and relative image paths are resolved
at render time.

## Build & deploy

```bash
npm run build
```

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs, re-indexes,
builds, and publishes `build/` to GitHub Pages.

## Structure

```
public/notes/
scripts/ingest-notes.js
src/
  lib/
  components/
  pages/
```

## Contributing

Bug reports, corrections, and pull requests are welcome see
[CONTRIBUTING.md](CONTRIBUTING.md).

## License

The application source code is MIT-licensed see [LICENSE](LICENSE).

The note content under `public/notes/` is **not** covered by that license and
remains © Krystian Pińczak, all rights reserved.
