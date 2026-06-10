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

## v10.0 — 2026-06-10 · `claude/verify-github-access-3iqxfn`
Baseline for tracked versioning. Current production state (inherits all v1–v9
work — see HANDOFF.md §8). This release also:
- Verified the full pipeline: branch → push → preview → merge → main
- Formalized the branch-per-change workflow and version tracking
- Removed the temporary `testing.md` pipeline-verification artifact
