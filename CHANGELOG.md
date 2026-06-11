# Changelog — MAT BLK Supplements / TENET

Tracks every change merged to `main` (production). Newest first.

## Versioning convention
- Format: **vMAJOR.MINOR**
- **MINOR** bumps for each approved feature/fix branch merged to `main`
- **MAJOR** bumps for large redesigns or relaunches
- Each entry records: version · date · branch · what changed
- The full pre-tracking history (v1–v9-punchlist) lives in `HANDOFF.md` §8

## Workflow
Every change gets its own temporary branch (`claude/<short-name>`). The branch
is pushed, reviewed on its Vercel preview, and only merged to `main` after
explicit approval. Branches are kept (not deleted) so any prior version can be
revisited. `main` is always the production source of truth.

---

## v10.1 — 2026-06-11 · `master-pass`
Master implementation pass merging the fixes from both site audits.
- Claims compliance. Scrubbed "no crash" phrasing, removed fabricated Verified
  badges and the 200+ reviews stat, gated rating/review structured data and the
  review form behind a hasRealReviews flag, FAQ certification rewrite, spelled
  out Food and Drug Administration in both disclaimers, harmonized the 30 day
  refund promise, stated the ~200mg total caffeine
- SEO. robots.txt, sitemap, canonicals on every page, Organization and WebSite
  schema, PDP de-orphaned and made the canonical product URL, single branded
  titles, apple touch icon and web manifest, product image 1.65MB to 174KB
- Toolchain. Removed 13 unused dependencies and 8 unused components (audit 29
  vulns to 2), deleted scaffold files, re-enabled TypeScript and ESLint build
  checks with a new flat config, Next bumped to 15.5.19, engines and .nvmrc
- Accessibility. Focus trap and inert state for all five overlays, bone-500
  contrast fix, inline form errors with aria-live, 44px touch targets, reduced
  motion scroll, semantics batch, error boundary, security headers
- Capture. Single subscribe() seam for Mailchimp, TCPA SMS consent disclosure,
  announcement banner above the header, popup now triggers at 50% scroll

## v10.0 — 2026-06-10 · `claude/verify-github-access-3iqxfn`
Baseline for tracked versioning. Current production state (inherits all v1–v9
work — see HANDOFF.md §8). This release also:
- Verified the full pipeline: branch → push → preview → merge → main
- Formalized the branch-per-change workflow and version tracking
- Removed the temporary `testing.md` pipeline-verification artifact
