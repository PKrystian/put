# Contributing

Thanks for wanting to help out. This is a small personal project, so the process is
intentionally lightweight.

## What's welcome

- Bug reports and fixes (navigation, search, rendering, etc.)
- Corrections to existing published notes under `public/notes/` (typos, factual errors,
  outdated syllabus info)
- Improvements to the app itself (`src/`, `scripts/ingest-notes.js`)

## What's not

Please don't submit raw lecture transcripts, private notes, slides, or any other source
material used to *generate* the published notes. Those are intentionally never committed
to this repo, for RODO/privacy reasons see the "Jak powstają notatki?" section on the
homepage. Only the already-published, generated markdown under `public/notes/` is fair
game for corrections.

## Local setup

```bash
npm install
npm start
```

Requires Node 20+ (see `.nvmrc` / `engines` in `package.json`).

## Making changes

- **App code**: standard TypeScript + React + Tailwind. Keep components consistent with
  the existing dark theme (see `src/index.css` for the color variables).
- **Note content**: edit the relevant `.md` file directly under `public/notes/`, then run:

  ```bash
  npm run ingest
  ```

  This regenerates `public/notes/index.json` (folder tree, prev/next order, search
  headings) and `public/sitemap.xml`. Commit the regenerated files along with your edit
  don't hand-edit `index.json`, it's a build artifact.

## Before opening a PR

```bash
npx tsc --noEmit
npm run build
```

Both should be clean. A `ci.yml` workflow will also run these automatically on your PR.

## Questions

Open an issue, either the bug report or "missing/outdated notes" template, whichever
fits.
