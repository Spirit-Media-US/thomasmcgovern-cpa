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

### Completed on Dev (continued)
- Phase 5: CAR / Transformation Layer Report — 9 scans run, critical fixes applied, fidelity check passed

### Completed on Dev (continued)
- Phase 6: Design Refinement — forms wired, blog content populated, mobile polish

### Completed on Dev (continued)
- Phase 7: QA — all 9 scans pass, Lighthouse 86/91/100/69 (SEO low due to dev branch noindex)

### Still Pending
- Phase 8: Launch (merge dev → main, requires Kevin's approval)
  - Pre-launch: Sanity webhook ✅, redirects ✅, all scans ✅
  - Pending: Kevin approval to merge, domain DNS, UptimeRobot, portal update, sitemap submission
- Phase 9: Client Delivery

## URL Redirects (301)
| Old URL | New URL |
|---------|---------|
| /contact-u | /contact |
| /5-myths-about-professionalizing-college-sports | /blog/5-myths-about-professionalizing-college-sports |
| /the-tax-debate-that-could-change-ncaa-forever | /blog/the-tax-debate-that-could-change-ncaa-forever |
| /why-title-ix-could-be-the-sleeper-issue | /blog/why-title-ix-could-be-the-sleeper-issue |

## Phase 7 — QA Results (2026-04-16)

### Automated Scans (9/9 pass)
All scans pass — no external URLs, no WordPress leftovers, no missing SEO, build succeeds, sitemap covers all pages.

### Lighthouse Scores (dev preview)
| Category | Score |
|----------|-------|
| Performance | 86% |
| Accessibility | 91% |
| Best Practices | 100% |
| SEO | 69% (dev branch noindex — production will score higher) |

### Fixes Applied
- Testimonial dot buttons: added aria-labels for screen readers
- Eyebrow text: improved contrast ratio (gold darkened to #b8960a, weight 600)

### Known Limitations
- SEO score suppressed by CF Pages dev branch `X-Robots-Tag: noindex` — resolves on production
- Contact/newsletter forms use MailChannels via CF Pages Functions — requires DNS SPF record for deliverability
- Blog posts have body content but no inline images yet

## Phase 5 — CAR Report Summary (2026-04-16)

### Part One: Already Delivered
- Homepage with all sections: hero, featured logos, about, stats, book, issues, testimonials, blog, newsletter
- Blog index page fetching from Sanity CMS
- Individual blog post pages with portable text rendering, JSON-LD, OG meta
- Contact page with form, sidebar, social links, book CTA
- 404 page
- Global header with transparent overlay nav, mobile slide-in menu
- Footer with 4-column grid, copyright bar, social icons
- Sanity Studio embedded at /studio
- Sanity schemas: blogPost, testimonial
- 3 blog posts + 3 testimonials migrated to Sanity
- Sanity → CF Pages auto-rebuild webhook configured
- CORS origins configured for live domain + dev preview
- Fluid typography (clamp()), 48px touch targets, iOS zoom prevention
- Mobile responsive: all sections stack at 768px breakpoint
- All images hosted on Sanity CDN — zero external URLs

### Part Two: Critical Fixes (applied)
- Removed stale TODO comment in sanity.ts
- All alt text verified (decorative images use alt="", content images have descriptive alt)
- No WordPress/dev URLs remaining
- No external image URLs
- Build passes, sitemap covers all pages

### Part Three: Recommended Improvements (Phase 6)
- Reduce inline styles — migrate to CSS classes/design tokens
- Add form submission handler (currently no backend — forms don't submit)
- Add loading states / animations (counter animation exists, could add scroll reveals)
- Blog posts need body content in Sanity (currently empty)
- Consider adding breadcrumbs to blog post pages
- Newsletter form needs backend integration
- Lighthouse performance audit and optimization

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
