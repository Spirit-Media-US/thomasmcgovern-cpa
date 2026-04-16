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

## Status — as of 2026-04-16

### Completed & Live on Main
- (none yet)

### Completed on Dev
- Phase 1: Infrastructure — repo, Sanity project, CF Pages, dev branch created
- Phase 2: Content + CSS Extraction — design tokens, images uploaded to Sanity, site inventory
- Phase 3: Design + Build — homepage, blogs, contact, 404, Layout with header/footer, global.css
- Phase 4: Wire Sanity CMS — schemas (blogPost, testimonial), content migrated, pages wired, Studio embedded at /studio, webhook configured

### Still Pending
- Phase 5: CAR / Transformation Layer Report
- Phase 6: Design Refinement
- Phase 7: QA
- Phase 8: Launch
- Phase 9: Client Delivery

## Sanity Content Audit

### Homepage (/)
| Content Block | Decision | Reasoning |
|---|---|---|
| Hero heading/subheading/CTA | Static | Core brand messaging, rarely changes |
| Book cover image | Static (Sanity CDN URL) | Single product, won't change |
| Featured In logos carousel | Static | Media features unlikely to change often |
| About Me bio + headshot | Static | Bio text rarely changes |
| Stats counters | Static | Numbers unlikely to change frequently |
| Book section (overview, quote, chapters) | Static | Book content is fixed |
| Issues section (infographic, text) | Static | Book-related analysis, fixed |
| **Testimonials** | **Sanity** | Client will add new endorsements |
| **Blog posts** | **Sanity** | Client publishes new articles |
| Newsletter section | Static | Simple signup form |

### Blogs (/blogs)
| Content Block | Decision | Reasoning |
|---|---|---|
| **Blog post list** | **Sanity** | Dynamic content from blogPost schema |

### Blog Post (/blog/[slug])
| Content Block | Decision | Reasoning |
|---|---|---|
| **Full blog post** | **Sanity** | Title, body, image, tags, author, date |

### Contact (/contact)
| Content Block | Decision | Reasoning |
|---|---|---|
| Contact form | Static | Form structure won't change |
| Contact info (email) | Static | Unlikely to change |
| Social links | Static | Structural |

## Sanity Schemas
- **blogPost** — title, slug, excerpt, heroImage, author, publishDate, tags, body (portable text), SEO fields
- **testimonial** — quote, name, role, order

## Webhooks
- Sanity → CF Pages auto-rebuild webhook configured (hook: orpfkKElhF6aTH5Y)

## Rules

- All work goes to the **dev** branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
