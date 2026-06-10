# HANDOFF — MAT BLK Supplements / TENET

Persistent context for any future Claude Code session picking up this project.
Read this top to bottom before making changes.

---

## 1. PROJECT SNAPSHOT

| Thing | Value |
|---|---|
| Brand | MAT BLK Supplements |
| Product | TENET (Daily Driver Pre Workout) |
| Live URL | https://matblksupps.com |
| Hosting | Vercel — `main` auto-deploys to production in ~60–90s |
| Repo | https://github.com/CarterDonVice/matblksupps |
| Owner | CarterDonVice |
| Working directory | `/home/user/matblksupps` |
| Stack | Next.js 15.5.15 (App Router), React 18, TypeScript, Tailwind 3, shadcn/ui primitives |

---

## 2. GIT + DEPLOY WORKFLOW

### The local `origin` is broken on purpose
`git push` against the default remote routes through a local proxy that returns 403 for `CarterDonVice`. **Don't waste retries on it.** Every push must use a direct GitHub URL with a Personal Access Token.

### Push pattern (use this every time)
```bash
GH_PAT='<paste fine-grained PAT here — see Section 3>'

git push "https://x-access-token:${GH_PAT}@github.com/CarterDonVice/matblksupps.git" <branch> 2>&1 | sed "s|${GH_PAT}|***|g"

# Always sync the local remote ref or the stop-hook complains about "unpushed commits"
git update-ref refs/remotes/origin/<branch> HEAD
```

### Fetch pattern (same idea)
```bash
git fetch "https://x-access-token:${GH_PAT}@github.com/CarterDonVice/matblksupps.git" main 2>&1 | sed "s|${GH_PAT}|***|g"
```

### Two workflows the user expects

**A — Feature branch (default for new work)**
1. `git checkout main` and pull latest
2. `git checkout -b claude/<short-name>`  (keep branch name short — Vercel preview URL is truncated past ~63 chars)
3. Make changes, typecheck + build, commit
4. Push branch
5. Give the user a preview URL block:
   ```
   🔗 Preview: https://matblksupps-git-claude-<short-name>-carterdonvices-projects.vercel.app
   📝 Branch:  https://github.com/CarterDonVice/matblksupps/tree/claude/<short-name>
   🔍 Commit:  https://github.com/CarterDonVice/matblksupps/commit/<sha>
   ```
6. Wait for the user to say "merge" / "ship it" / "push to main"
7. On approval:
   ```bash
   git fetch origin main (via PAT URL)
   git checkout -B main FETCH_HEAD
   git merge --no-ff claude/<name> -m "Merge claude/<name> into main — <what>"
   git push main (via PAT URL)
   git update-ref refs/remotes/origin/main HEAD
   git push --delete claude/<name> (via PAT URL)
   git branch -D claude/<name>
   ```

**B — Direct to main (only when user explicitly says so)**
Examples in history: removing the dev login gate, the image placeholder removal. Used for tiny, low-risk, already-discussed fixes.
```bash
git checkout main
# edit
git add -A && git commit -m "..."
git push (via PAT URL)
git update-ref refs/remotes/origin/main HEAD
```

### Commit message style
- Subject line summarises *what changed*, not the version label
- Body: bullet list of changes grouped by area
- Always include footer: `https://claude.ai/code/session_<id>`

### Don't
- Don't push with `-u origin` to the broken local remote
- Don't store the PAT in `.env`, git config, `package.json`, or any committed file
- Don't push to `main` for new feature work without explicit user approval
- Don't keep feature branches around after merge — delete remote + local

---

## 3. CREDENTIALS

The PAT used for pushing lives **outside the repo** in a private note kept by the user. Ask for it at the start of each session if it isn't already in context.

For convenience, it's typically pasted into chat once and reused throughout the session via an env var. **Never commit it to a file inside the repo** — the repo is public and GitHub auto-revokes detected tokens.

If the user pastes a new PAT, immediately use it via the env-var pattern in Section 2 and warn them to rotate it after the session because it's now in chat history.

---

## 4. VERCEL

- Connected to GitHub repo since 6/15/25 (long history of deployments)
- **Production branch:** `main` — auto-deploys to `matblksupps.com` and `matblksupps.vercel.app`
- **Preview deployments:** any branch push gets a preview at `matblksupps-git-<sanitized-branch>-carterdonvices-projects.vercel.app`
- **Deployment Protection** (legacy Standard) is ON — preview URLs require the user to be signed in to the Vercel account that owns the project. Production URL is publicly accessible.
- The dashboard's preview thumbnail showing "403: Forbidden" is the screenshot service hitting the auth wall, **not** the real site failing. Production is fine.

### Common Vercel gotchas
- Long branch names get truncated/hashed in the preview URL. If the predictable URL 404s, tell the user to find the actual one in Vercel Dashboard → Deployments → filter Preview.
- Pressing "Redeploy" on an old deployment card rebuilds *that exact commit*, not the latest. Push a new commit instead if a re-trigger is needed.
- Vulnerable Next.js versions get blocked at build time. Currently pinned to `15.5.15` in `package.json`.

---

## 5. BRAND, COPY, AND CONTENT RULES

These have accumulated across many iterations. Honour them in every edit.

### Product naming
- **Product name:** TENET (always caps, Bebas Neue display weight when in headlines)
- **Descriptor:** "Daily Driver Pre Workout" (no hyphens — see Hyphen Rule)
- **Brand:** MAT BLK Supplements / MAT BLK
- **Variant in development (do NOT add to site):** inSTIMity (capitalised exactly like that — high-stim sibling, not launched)

### Hyphen rule (matters more than it sounds)
- **No** compound-word hyphens in sentence-style copy. `warm-up` → `warm up`. `pre-workout` → `pre workout`. `transparent-label` → `transparent label`. `moderate-stim` → `moderate stim`. `mind-muscle` → `mind muscle`. `research-backed` → `research backed`. `GMP-compliant` → `GMP compliant`.
- **Keep** em-dashes between distinct phrases. `100% Satisfaction Guarantee — Love it or we make it right.` stays.
- **Keep** hyphens in chemical / brand names: `L-citrulline`, `L-Citrulline`, `L-tyrosine`, `L-Tyrosine`, `Beta-Alanine`, `Alpha-GPC`, `NO3-T®`, `HydroPrime®`.
- The `category: 'pre workout'` literal in `src/lib/types.ts` is intentionally space-separated (no hyphen) so it matches the brand-voice rule even in internal type literals.

### Signature brand terms (always uppercase, treat as proper nouns, no ™ / ® yet)
- `DUAL PUMP PATHWAYS` = L-Citrulline (nitric oxide) + Glycerol/HydroPrime® (cellular hyperhydration)
- `DUAL CAFFEINE SYSTEM` = Caffeine Anhydrous + Di Caffeine Malate
- `TENET`, `THE BLACKLIST`, `inSTIMity` — same treatment

### Hard facts in the formula
- Total caffeine: **~200mg** (NOT 233mg — Di Caffeine Malate is ~75% caffeine by weight)
- **7 of 10** active ingredients clinically dosed. Don't claim "all clinically dosed" anywhere.
- The 7: L-Citrulline 6g, Glycerol/HydroPrime® 3g, Beta-Alanine 3.2g, L-Tyrosine 2g, Taurine 1g, Piperine 5mg, Alpha-GPC 600mg
- The 3 at "clinically referenced" doses: Caffeine Anhydrous 100mg, Di Caffeine Malate 133mg, Huperzine A 15mg

### Banned phrases (zero tolerance, scan before shipping)
Crash-free · Energy without the crash · Third-party tested · Third-party verified · Naturally sweetened · No artificial sweeteners · Clean ingredients · Cleanest pre workout · Pure ingredients · Clean-label · Boosts testosterone · Burns fat · Boosts metabolism · Weight loss · Improves memory · Treats brain fog · Cures/Treats/Prevents/Heals (any disease verb) · Stronger/Better than [competitor] · No side effects · 100% safe · Best high-stim pre workout · Best pre workout for beginners · Reddit consensus · Strongest pre workout · Unleash your potential · Engineered for elite · No maltodextrin (use broader "no fillers")

### Year stamp rule
- "2026" appears only in the PDP meta description (currently). It used to appear in a "How does TENET compare to other pre workouts in 2026?" FAQ but that FAQ was removed in v9-punchlist.
- Footer copyright `© 2026 MAT BLK Supplements LLC` is a copyright year, not a freshness stamp — leave it.
- Review `date` fields in `src/lib/products.ts` are ISO dates in structured data — leave them.

### FDA-claim discipline
- Only the **filed structure/function claims** appear in body copy (full list in `src/components/product/ProductSEOContent.tsx` for reference)
- Every page with a S/F claim has the FDA disclaimer (already global via `src/components/site/Footer.tsx`)
- `NO3-T®` trademark notice was replaced with `HydroPrime®` notice (Pinnacle Ingredients, LLC) when the formula swapped — both in NutritionFacts and Footer

---

## 6. DESIGN TOKENS (don't drift)

### Colors
| Token | Hex | Use |
|---|---|---|
| `ink` / `bg-ink` | `#141414` | Main matte black bg |
| `ink-800` | `#1e1e1e` | Card backgrounds, section dividers |
| `ink-700` | `#262626` | Input fields, selected states |
| `ink-600` | `#333333` | Subtle borders |
| `bone` | `#f0ece4` | Main body text (warm eggshell) |
| `bone-600` | `#b0aca4` | Subtext |
| `bone-500` | `#6e6a64` | Placeholder / disabled |
| `white` | `#ffffff` | Buttons, high-contrast |
| `success` | `#4caf7d` | **Verified badges ONLY** |
| `gold` | `#D4AF37` | **Review stars ONLY** (outline `#E8D4A0`) |

No other accent colors. Restraint is the luxury statement.

### Typography
- Display: **Bebas Neue** (`var(--font-display)`) — section headings
- Condensed: **Barlow Condensed** (`var(--font-condensed)`) — uppercase labels
- Body: **DM Sans** (`var(--font-body)`)
- Wired via `next/font/google` in `src/app/layout.tsx`

### Buttons (universal rule)
- Pure white `#ffffff` background, dark text
- `hover:scale-[1.02] hover:bg-bone active:scale-[0.99] transition-all duration-200`
- Apply to: Add to Cart, Subscribe, Submit, Show More, Write a Review, Claim 20%, Shop CTA, etc.
- Filter pills + sort dropdowns stay as pills (not white CTAs)

### Atmospheric utilities (in `src/app/globals.css`)
- `.texture-grain` — subtle film grain
- `.texture-wordmark` — large faded MAT BLK SVG watermark (used in IngredientList/NewsletterSignup/Footer/etc.)
- `.product-glow` — radial glow behind product image
- `.vignette` — corner darkening on product stage

---

## 7. CODEBASE MAP

```
src/
  app/
    layout.tsx              # Root layout: providers (Reviews, Cart, Selection, Coupon)
                            # fonts, sitewide metadata, CartDrawer + StickyDiscountButton mounts
    page.tsx                # Homepage composition
    globals.css             # Tokens, utilities, base styles
    product/[slug]/page.tsx # PDP — generateStaticParams → /product/tenet
    science/page.tsx        # Full ingredient deep-dive
    (legal)/
      layout.tsx            # Shared header/footer wrapper for legal/info pages
      about/page.tsx        # Three pillars: Clinically Dosed / Transparent Label / For Lifters Who Read the Panel
      contact/page.tsx      # Form + sidebar
      privacy/page.tsx
      terms/page.tsx
      refund/page.tsx
  components/
    site/
      Header.tsx            # Sticky header, FullLogo.png, cart icon (bumps), left-slide nav drawer
      Footer.tsx            # 4-col grid desktop / accordion mobile, FDA + HydroPrime® disclaimers
      SocialProofBar.tsx    # ★4.9 / 7 Clinical Doses / 0 Fillers / 0 Prop Blends
      Comparison.tsx        # "WHY TENET" / "What's Different" table
      WhatYoullFeel.tsx     # 4-stage timeline (Absorption/Onset/Peak/Taper)
      CustomerReviews.tsx   # Master section: featured cards + filterable list + write-a-review
      WriteReviewModal.tsx
      FAQ.tsx               # Reads from src/lib/faq.ts (single source for visible + JSON-LD)
      GuaranteeAndBlacklist.tsx # Side-by-side desktop / stacked mobile
      ContactForm.tsx
      FillerBand.tsx        # Typography-only band; 3 inline variants
      Reveal.tsx            # IntersectionObserver fade-in wrapper
      JsonLd.tsx            # ProductJsonLd + FAQJsonLd (FAQ schema only on PDP)
    product/
      Hero.tsx              # Gallery + TENET h1 (sr-only continuation) + meta + PurchaseBlock
      ProductGallery.tsx    # Main slide + thumbnail strip (strip hidden when 1 image)
                            # Cursor-tracked desktop zoom; mobile tap → fullscreen ZoomViewer
      PurchaseBlock.tsx     # FlavorSelector + PurchaseTypeSelector + QuantitySelector
                            # + Add to Cart + Band 2 ("Fast onset…") + guarantee badge
                            # + TrustBadges + QuickTestimonial (lg) + NutritionFacts (mobile)
      FlavorSelector.tsx    # Gradient-backed cards, stacked names
      PurchaseTypeSelector.tsx
      QuantitySelector.tsx
      NutritionFacts.tsx    # variant="dropdown" (mobile) | "static" (desktop, under gallery)
      TrustBadges.tsx       # GMP / Made in USA / Transparent Formula
      QuickTestimonial.tsx  # Desktop-only pull-quote in PurchaseBlock
      ProductSEOContent.tsx # PDP-only deep H2/H3 section block
    cart/
      CartDrawer.tsx        # Right-slide drawer, line items, qty, subtotal, free-ship bar
    marketing/
      CouponPopup.tsx       # CouponProvider + dialog + StickyDiscountButton
                            # Once per visitor at 10s via localStorage flags
    ui/                     # shadcn primitives (don't touch unless you know why)
    ui/StarSharp.tsx        # Custom sharp 5-point gold star (NOT the Lucide one)
  contexts/
    SelectionContext.tsx    # flavorId, purchaseType, quantity, unitPrice, totalPrice, cartCount
    CartContext.tsx         # localStorage-persisted cart, drawer open state
    ReviewsContext.tsx      # localStorage-persisted user reviews + aggregate rating
  hooks/                    # mostly shadcn (use-toast etc.)
  lib/
    products.ts             # `tenet` product object + seeded `reviews` array
    faq.ts                  # Source of truth for FAQ (visible AND JSON-LD)
    types.ts                # Product / Flavor / Ingredient / Review / CartItem types
    scroll.ts               # scrollToId helper (offset-aware)
    utils.ts                # cn() shadcn helper
public/images/
  FullLogo.png              # Header
  AbrevLogo.png             # Square monogram (About page)
  AbrevLogoMini.png         # Favicon + nav drawer
  product_image_1.png       # Real product image (currently NOT rendered — `images: [null]`)
```

### Key architectural decisions worth knowing
- **FAQ visible content + JSON-LD share `src/lib/faq.ts`.** When you change one, the other updates automatically.
- **Reviews aggregate (★ 4.9 / N reviews) is computed live from `ReviewsContext`** which merges localStorage user reviews with seeded ones in `src/lib/products.ts`. The Hero and CustomerReviews both read from the context — keep it that way.
- **Cart drawer is mounted globally** in root layout. PurchaseBlock's "Add to Cart" calls `cart.addItem(...)` then `cart.openCart()`. No more old sticky bottom bar.
- **Coupon popup auto-fires once per visitor at 10s** via `localStorage` flags. After dismissal, the `StickyDiscountButton` appears bottom-right until claimed or its X is clicked.
- **`ProductGallery.images` is `(string | null)[]`.** A `null` slot renders a blank rounded square placeholder (no icon, no text — was stripped down in the last image-removal commit). Currently `[null]`.
- **Reveal wrapper** applies a one-time fade-in via IntersectionObserver to most homepage sections. Don't wrap the Hero (above the fold).
- **Comparison table eyebrow says "Why TENET"** — that section absorbed the old "Why TENET" feature card grid; don't re-introduce a separate Why TENET section.

---

## 8. CURRENT STATE OF MAIN

As of the last handoff commit:

- **Live URL** publicly accessible (dev login gate was removed)
- **Product image:** blank rounded placeholder square — `src/lib/products.ts` has `images: [null]`. Real product photography hasn't been uploaded yet.
- **Formula:** 10 ingredients. Sodium Nitrate replaced with Glycerol (HydroPrime®) at 3,000 mg.
- **DUAL PUMP PATHWAYS:** Citrulline + Glycerol (was Citrulline + Nitrate)
- **Caffeine total:** 200mg (not 233mg)
- **FAQ:** 10 items, in `src/lib/faq.ts`
- **No dev gate, no middleware, no /login route**
- **Vercel Deployment Protection** still on (default Vercel behaviour)

### Reference: how to verify current commit
```bash
git log --oneline -5
```

### Version tracking
- Every merge to `main` is logged in `CHANGELOG.md` (newest first).
- Scheme: **vMAJOR.MINOR** — MINOR per approved branch merged to main, MAJOR for big redesigns.
- Tracked versioning starts at **v10.0** (2026-06-10). Update `CHANGELOG.md` on every merge.
- Workflow rule the owner set: every change → its own temp branch → review on the Vercel preview → merge to main only after explicit approval. **Branches are kept, not deleted**, so any prior version can be revisited.

### Recent versions / themes (for context only — code is the source of truth)
- v1–v4: scaffolded the site, picked the matte black aesthetic, renamed product to TENET
- v5–v6: desktop refinements, static nutrition facts under gallery, larger flavor card text
- v7: featured reviews rename, search/filter/count on reviews, combined Guarantee+Blacklist banner
- v8: functional cart drawer, popup overhaul + sticky discount button, mobile zoom viewer, scroll fade-in
- v9: FAQ rewrite, comparison table, `/science` page, filler bands, /contact rebuild, footer expansion
- v9.1/9.2: trimmed page, merged Featured Reviews + What They're Saying
- v9-seo: sitewide SEO/AEO copy overhaul, FAQ JSON-LD, ProductSEOContent block, hybrid TENET/Daily Driver naming
- v9-punchlist: stat banner re-order, comparison row tweaks, FAQ down to 10, NO3-T → HydroPrime swap, hyphen scrub, NO3-T → HydroPrime, image removal

---

## 9. SESSION CONVENTIONS

Things the user has come to expect:

- **TodoWrite for any multi-step work.** Keep it tight, don't over-track.
- **Always typecheck + production build** before commit. `npx tsc --noEmit && npx next build`.
- **Always sed-redact the PAT** from any `git push` output piped to stdout.
- **After push, `git update-ref refs/remotes/origin/<branch> HEAD`** to silence the stop-hook git check.
- **Brief replies.** The user reads on phone often; long preambles waste their time.
- **Give the preview URL block** in the standard format after every feature-branch push.
- **"merge" / "ship it" / "push to main"** all mean: do the merge dance to main, push, delete the feature branch.
- **"don't merge yet"** / **"keep it on a branch"** means hold the merge — they're still iterating.

### Don'ts the user has flagged
- Don't add em-dashes mid-sentence in copy I author
- Don't keyword-stuff alt text
- Don't re-introduce removed FAQs or sections without explicit ask
- Don't touch CSS/layout when the brief says "copy-only"
- Don't ask permission for trivial follow-on fixes obviously needed to complete the user's request

---

## 10. QUICK-START FOR NEW SESSION

1. Check `git status` and `git log --oneline -3`
2. Confirm you're on `main` and the working tree is clean
3. Ask the user for the PAT if it isn't already in conversation
4. Read this file plus `src/lib/products.ts`, `src/lib/faq.ts`, `src/lib/types.ts`, and `src/app/layout.tsx` to ground yourself
5. Hear the request, decide if it's a feature-branch task or a direct-to-main task
6. Execute, using the patterns in Section 2

That's it. Welcome back.
