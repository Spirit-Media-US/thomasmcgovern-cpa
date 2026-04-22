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
<!--
100 Club commitments template — copy this block verbatim into a site's CLAUDE.md
during Phase 2H of the execute plan. Substitute thomasmcgovern-cpa with the actual R2 path slug.
The guardrails script (/home/deploy/bin/100club-lint.sh) self-skips any site whose
CLAUDE.md lacks the heading "## 100 Club commitments", so installing this block
activates the pre-commit lint on the site.
-->

---

## 100 Club commitments (locked — do not regress)

**100 Club bar (all pages, current and future — anything less is not acceptable):**
- **Homepage**: desktop 100/100/100/100, mobile 100/100/100 + Perf ≥ 95 (flagship, median-of-5)
- **Every other page**: mobile ≥ 90, desktop ≥ 95 (Google's "Good" zone, median-of-3)
- v4 execute plan brings the homepage into the 100 Club; inner pages are enforced by this site-wide tiered bar.

Every commitment below is a LOAD-BEARING structural decision. Do not "re-add" any of them without understanding the consequences.

### Hero image(s) are R2-only, NOT Sanity
- **URL pattern**: `https://assets.spiritmediapublishing.com/thomasmcgovern-cpa/hero-*.webp` (plus any other LCP images moved to R2 per this site's hero structure)
- **Why**: same origin as fonts (one TLS handshake), stable URL enables 103 Early Hints, hardcoded URL survives Sanity edits without rebuild
- **To change a hero**: upload a new WebP (matching sizes at matching quality) to the same R2 path. Any Sanity fields for the hero image have been removed from the schema — editors cannot change the hero via the CMS.

### CSS must stay wrapped in @layer base
- `Layout.astro`'s `<style is:inline>` wraps everything in `@layer base` except `@font-face` and `@keyframes`.
- **Why**: unlayered rules beat every `@layer` rule regardless of specificity. Tailwind v4 ships utilities in `@layer utilities`. If critical CSS is unlayered, `.grid-cols-1` overrides external `.lg:grid-cols-4` and grids collapse site-wide.

### ClientRouter is OFF
- No `<ClientRouter />`, no `import { ClientRouter }` in Layout.astro.
- **Why**: static marketing sites don't need SPA nav. Saves ~125ms forced reflow + ~100ms script eval on mobile.
- All page JS uses `DOMContentLoaded` with readyState guard.

### GA loads on first user interaction
- Events: scroll, mousemove, touchstart, keydown, click. 8s fallback timeout.
- **Why**: Lighthouse never interacts, so GA doesn't load in audits. Real users get GA after they engage (post-LCP).

### `<a>` elements on dark backgrounds MUST have an explicit default-state color class
- Base `a { color: var(--color-red|primary) }` rule in `global.css` otherwise applies → brand color on dark bg fails WCAG.
- Any new `<a href="tel:">`, `<a href="mailto:">`, or link in a dark section needs `text-stone-400` / `text-stone-100` / similar. `hover:text-*` doesn't protect the default state.

### `[data-animate]` transitions are transform-only, no opacity
- `global.css`: `transition: transform 0.65s cubic-bezier(...)`. **Do NOT add `opacity` back to the transition.**
- **Why**: Lighthouse captures frames mid-transition; a 0.65s opacity fade catches text at ~50% opacity → 40+ false color-contrast failures. Transform-only gives the same visual slide-in without the a11y artifact.
- If the site doesn't use `data-animate` at all, this commitment is preventive only.

### Early Hints, CSP, X-Robots-Tag in public/_headers
- `X-Robots-Tag: index, follow` overrides CF Pages' default `noindex` on `*.pages.dev`
- CSP allows CF Insights (`static.cloudflareinsights.com` in `script-src`, `cloudflareinsights.com` in `connect-src`) + all origins actually used by this site
- `Link:` headers for 2 critical fonts on `/*` + hero image on `/` → CF Pages promotes to HTTP/2 103 Early Hints

### Images: width/height attrs match urlFor dimensions
- Every below-fold `<img>` has both attrs. Any urlFor resize change must update the attrs in the same commit.
- `sizes` attribute = actual display width in px, NOT `100vw` (the latter forces over-delivery at DPR 2).

### Build pipeline
- `inlineStylesheets: 'auto'` (NOT `'always'`)
- `scripts/async-css.mjs` postbuild rewrites external CSS to `media="print" onload` swap (invoked from `package.json` build script)
- `scripts/100club-verify.mjs` post-build Playwright asserts grids + h-N images + console errors — blocks bad builds
- `/home/deploy/bin/100club-lint.sh` is wired into `lefthook.yml` pre-commit
- No `@playform/inline` / Beasties — incompatible with TW v4 utility-heavy markup

<!-- perf-traits:start (auto-generated by /home/deploy/bin/perf-traits-audit.sh) -->
## Perf Traits

**Score:** 6/7 · last audited 2026-04-22

**Gaps (1):**
- T8: 1 of 9 <img> missing dims


Run `/home/deploy/bin/perf-traits-audit.sh thomasmcgovern-cpa` for full detail. Remediation guidance in [performance-gate.md](/home/deploy/claude-config/rules/performance-gate.md).
<!-- perf-traits:end -->
