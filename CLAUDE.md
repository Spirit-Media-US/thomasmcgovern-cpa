# Thomas McGovern CPA

> **CLAUDE.md belongs in version control — NEVER add it to .gitignore. This file is the shared source of truth for all developers and all Claude Code sessions.**

This site: Thomas McGovern CPA | Repo: github.com/Spirit-Media-US/thomasmcgovern-cpa | Domain: thomasmcgovern.cpa | Sanity ID: fkqsnbt5

**Migration protocol:** /home/deploy/bin/tools-api/pipelines/migration/CLAUDE.md
**Client URL:** https://thomasmcgovern.cpa (original site)
**Infrastructure:** CF Pages: thomasmcgovern-cpa.pages.dev | Dev preview: dev.thomasmcgovern-cpa.pages.dev

## Dev Commands

- `npm run dev` — local preview
- `npm run build` — production build to dist/

## Mandatory — Before Starting Work
Always start Claude sessions from inside this directory:
```
cd /srv/sites/thomasmcgovern-cpa && claude
```
Running Claude from ~/ or ~/Sites/ bypasses this project's CLAUDE.md. A pre-edit hook enforces this, but following the workflow prevents warnings and ensures all project rules are loaded.

Then run: `git checkout dev && git pull origin dev`

## Stack

- Astro 5 + Tailwind CSS v4
- Sanity CMS (projectId: fkqsnbt5, dataset: production)
- Cloudflare Pages (project: thomasmcgovern-cpa, auto-deploys main + dev)

## Status — as of 2026-04-15

### Completed & Live on Main
- (none yet)

### Completed on Dev
- Phase 1: Infrastructure — repo, Sanity project, CF Pages, dev branch created

### Still Pending
- Phase 2: Content + CSS Extraction
- Phase 3: Design + Build
- Phase 4: Wire Sanity CMS
- Phase 5: CAR / Transformation Layer Report
- Phase 6: Design Refinement
- Phase 7: QA
- Phase 8: Launch
- Phase 9: Client Delivery

## Rules

- All work goes to the **dev** branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
