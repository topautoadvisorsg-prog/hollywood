# SPEC — 7845 Torrison Drive, Hollywood Hills

**Status:** Draft for client approval. Nothing gets built against this until it's signed off.
**Supersedes:** `homepage-options-spec.md` and `site-pages-options-spec.md` (both kept as reference — this doc absorbs both and makes the calls).
**Author:** Claudio (Smart Click Agency)

---

## 0. What this document is

The two option sheets you had were built to hand a client a menu. This is the opposite of a menu — it's the build spec. For every section I've made the call, said why, and only left open the handful of things that are genuinely a client decision (a name, and which raw assets we're working with). If you disagree with a call, tell me which one and I'll swap it — the reasoning is written down so you can push back on the reasoning, not just the pick.

Recommendations below are informed by real luxury-real-estate site patterns and by a distinctiveness pass — a few of the option-sheet defaults (centered-logo full-bleed hero, flat 3-column trust row, even 50/50 split) are the pattern almost every competitor site already uses. Where I picked against the "safe" option, I say so explicitly.

---

## 1. Name / Story Direction

**Recommendation: White Oak.** Pending client sign-off — this is the one call in this document that's genuinely yours, not mine.

**Why:** Cielo Alto and Sundown Ridge are mood names — they'd work for any hilltop LA property with a view. White Oak is the only one of the three tied to a fixed, physical, photographable feature of *this* property. We already have footage of the tree and the swing. It gives the whole site a recurring visual anchor (see §3, signature element) instead of an abstract feeling we'd have to manufacture with stock-feeling sky shots.

If you want to see the other 21 names before committing, say so — they exist, I just don't think you need them to make this call.

---

## 2. Design System

The brief already pins the direction (white/bone base, olive + gold/brass accents, oversized serif headlines, no dark theme) — I'm not deviating from that, I'm making it specific enough to build from.

### Color tokens
| Token | Hex | Use |
|---|---|---|
| `bone` | `#FAF7F0` | Primary background |
| `stone` | `#EFE9DC` | Secondary section background, card fills |
| `ink` | `#24261F` | Body text, headlines (warm near-black, not pure black — keeps it out of dark-theme territory) |
| `olive` | `#5C6B45` | Primary accent — buttons, dividers, active states |
| `olive-deep` | `#3B4530` | Hover/pressed states |
| `brass` | `#B8935A` | CTA highlights, small-caps label color, link-hover underline |

### Type
- **Display serif:** Zodiak (Fontshare, free for commercial use). Two rejections behind this pick: Playfair Display is the legacy luxury-real-estate default, and Fraunces — my own first pick — turned out on review to be the 2026 replacement default ("Fraunces, Cormorant Garamond, DM Serif Display have replaced Playfair as the go-to display serif" per current type-trend coverage). Same problem, newer font. Zodiak is a warm, high-contrast editorial serif that holds up at oversized sizes, isn't saturated in the luxury-property space, and comes from the same foundry as the body face so the pairing is coherent by design.
- **Body sans:** General Sans (Fontshare). Not Inter — Inter is the default every AI-assisted build reaches for, and it reads as generic at this price point. General Sans is a free, warm humanist grotesque that doesn't compete with the display face.
- **Utility/caption:** General Sans, light weight, wide letter-spacing, small-caps — for the section labels + thin rule lines called out in the shared spec.
- Three distinct roles (display / body / utility) mirrors how top-tier brokerages run type as brand infrastructure (e.g. Compass's three-register system: luxury, human, data) — this isn't decoration, it's the same discipline scaled to one property.

### Motion
Scroll-triggered reveal + micro-interactions as specified, sitewide. One rule: reduced-motion is respected everywhere (`prefers-reduced-motion` disables parallax/scroll-jacking, falls back to simple fades). Framer Motion for all of it, installed at project init per stack standard.

### Signature element
**The oak line-mark.** A single-line ink illustration of the oak canopy (thin, minimal, brass or olive stroke) used as the section-divider mark sitewide, replacing generic icon dividers or numbered markers. It's the one recurring graphic element the whole site is built around, and it's literal to the property and the name — not decoration for its own sake.

**Bookend structure:** hero opens on live video (golden hour), closing CTA closes on live video (dusk/firepit). Same time-of-day logic, open and close — the site reads as one day at the property, not a stack of disconnected sections.

---

## 3. Homepage — Section-by-Section Decisions

| # | Section | Decision | Why |
|---|---|---|---|
| 1 | Hero | **Split Editorial (B)** | Full-bleed-centered-logo (A) is the default every luxury rental site already runs. Split editorial with oversized type is the actual differentiator the brief's own "recipe" line points at. |
| 2 | Trust Strip | **Off-Grid Asymmetric (B)** | Keeps the editorial rhythm the hero just established. A flat 3-column row directly under an asymmetric hero would read as the template snapping back on. |
| 3 | Setting / Location | **Full-Width Landscape Moment (A)** | This is the site's second big visual beat. The view is the actual product differentiator (proximity to studios, hilltop privacy) — it earns an undiluted full-bleed treatment before we start explaining the house. |
| 4 | The Estate | **Overlapping Collage (B)** | Straight alternating split (A) is what Page 2 already does in full detail — repeating that pattern on the homepage preview would make both pages feel like the same section twice. Collage keeps this a *preview*, gallery-like, and visually distinct from the dedicated Estate page. |
| 5 | The Oak Moment | **Short Video Loop (B)** | The shared spec already says video should replace stills for exactly this kind of moment (the oak, the pool, the view). Given this is the section the name direction is built around, it should be the one guaranteed to move. |
| 6 | Stay vs. Host | **60/40 Weighted, Host emphasized (B)** | Host an Event is the higher-margin line per the option sheet's own note. A 50/50 split is a non-decision dressed up as balance — weighting it is information, not just a style choice, and it's the same "structure encodes meaning" logic the brief already applies to the trust strip. |
| 7 | Gallery Preview | **Masonry Grid (A)** | Between a full-bleed Setting section and a full-bleed video CTA, a third full-bleed slideshow here is one cinematic beat too many. Horizontal scroll rail (C) is the highest-effort, highest mobile-risk technique on either sheet — save it for the dedicated Gallery page where a real curated set justifies it (see §5). |
| 8 | Social Proof | **Press-Style Strip (B)** | Karen's press mentions and music-video credits are already expected assets. A plain stat row is filler until those land; building press-style from day one means the section doesn't need rebuilding when they arrive. |
| 9 | Closing CTA | **Video Background (B)** | Completes the bookend structure (§2) — video open, video close. |

---

## 4. Page 2 — The Estate

**Decision: Sticky Image / Scrolling Copy (B).**

Vertical alternating split (A) is the pattern already ruled out for the homepage preview (§3.4) — using it here too would mean the site's two most detail-heavy sections both default to the same layout. Sticky-scroll is the actual "magazine spread" feel the oversized-serif/editorial direction is chasing, and it's a proven pattern on high-end architecture sites, not an invented one.

Room tabs (C) is faster to browse but optimizes for someone who already knows what they want — a location scout jumping straight to "Pool." That's a real use case, not the primary one. **Gap-fill:** add a lightweight jump-nav (anchor links to each room) as a progressive enhancement on top of the sticky-scroll build, so scouts get the fast path without the whole page defaulting to utility-first.

---

## 5. Page 3 — Stay

**Decision: Story-First, Booking Second (B).**

This keeps the same narrative logic already locked in for the rest of the site: feeling before form. The homepage leads with the view before the house; this page should lead with what a stay *feels like* before amenities and before the booking ask. Matches the proven pattern cited in the option sheet (theestateatriverrun.com) rather than inventing a new structure just for this page.

Two-column utility (C) is worth revisiting post-launch if analytics show visitors are arriving pre-decided and bouncing before the story section — that's a real possibility for repeat Airbnb guests, but not something to design against without data.

**Booking mechanics (gap the option sheets never answered):** for v1, the Stay CTA is an outbound link to the live Airbnb listing — no on-site booking engine. Industry data says direct bookings average roughly double the value of an Airbnb booking ($1,935 vs $906 per reservation), so a direct-booking engine with a "book direct and save" incentive is the obvious post-launch upsell to pitch the client — but it needs payment processing, calendar sync, and guest-vetting decisions that are out of scope for a launch site. Build the Stay CTA as a swappable component so the Airbnb link becomes a booking widget later without touching the page.

---

## 6. Page 4 — Host an Event

**Decision: Segmented by Use Case (C) — conditional on Karen's past-event footage.**

C is the strongest conversion structure: it pre-qualifies the visitor (film shoot vs. corporate vs. wedding) and folds capacity data and social proof *into* each tailored path instead of making every visitor read all of it. But C only works once there's real past-event material to populate each segment with.

**Competitor research (2026 venue-site conversion patterns):** current best practice across top event-venue sites is exactly this — one page should prioritize one primary conversion objective per audience segment, with first-screen clarity on audience fit before anything else. Logistics (capacity, dimensions, AV specs) get shown to reduce uncertainty *before* the visitor reaches the form, and CTAs land at high-confidence moments — after value framing, after logistics, near proof — not just once at the bottom. That's the exact shape of C: each segment (Film & Photo / Corporate / Weddings) gets its own value framing → capacity specs → proof, funneling into the shared form at the point each visitor is actually ready, instead of one generic scroll everyone has to sit through regardless of why they're here. The "mosaic gallery of past events, click through to details" pattern that recurs across luxury estate event sites is also the direct precedent for folding proof into each segment rather than running it as one undifferentiated block (which is what A does).

**Fallback, explicitly not a redesign:** if the footage isn't in hand at build time, ship **Capacity-First (A)** first — it needs no additional assets — and upgrade to C in a fast follow the moment Karen's material lands. Build the page's content model so this is a data swap, not a rebuild.

---

## 7. Page 5 — Gallery / Press

**Decision: Hybrid — not one of the three as-is.**

The option sheet's own notes flag the real tension: slideshow suits a curated highlight set, horizontal rail suits a tight 15–20 image set, and masonry is the only one of the three that scales to "the entire photo library." Picking just one loses either the wow-factor or the completeness.

**Build:** a short horizontal highlight rail (10–15 best shots, the wow-factor technique) at the top of the page, full masonry grid with filter tabs (Interiors / Exteriors / Events / Press) below it for the complete library. This gets both things the three options were each solving for half of.

Press strip stays as specified once Karen's mentions/credits are confirmed.

---

## 8. Tech Stack & Delivery

- React + Vite, Tailwind CSS
- Framer Motion (installed at project init, per standard)
- Deployed via Vercel, repo on GitHub, auto-deploy on push
- 21st.dev checked first for any component before hand-building one

### Video performance budget (binding — this site has four video moments)
The spec calls for video in the hero, the Setting section, the Oak loop, and the closing CTA. Four autoplaying videos is how a cinematic site becomes a slow site, so these rules are not optional:
- Hero video: MP4/H.264, ≤4MB desktop; mobile gets the poster image by default (mobile is over 60% of accommodation-booking traffic — battery and data matter more than the loop)
- All videos: `muted autoplay loop playsinline` + a real `poster` attribute — the poster is an LCP candidate, so it's a hand-picked frame, compressed, never a black frame
- Headline renders before video buffers; below-fold videos (Oak loop, closing CTA) lazy-load
- `prefers-reduced-motion` swaps every video for its poster
- Loops stay 5–15 seconds; anything longer gets cut down, not uploaded

### Site chrome & plumbing (gaps the option sheets never covered)
- **Nav:** sticky header per shared spec — wordmark left, five links (Home / The Estate / Stay / Host an Event / Gallery), brass-accented "Inquire" button always visible. Mobile: full-screen overlay menu, not a cramped dropdown.
- **Footer:** wordmark, nav links, inquiry email, Airbnb listing link, oak line-mark as the closing graphic. No fake social icons — only links that exist.
- **Inquiry form backend:** static site has no server — form posts to a form service (Formspree or equivalent) forwarding to the client's email. `.env.example` carries the endpoint ID.
- **SEO/meta:** per-page titles + descriptions, OG image (hero still), favicon derived from the oak line-mark.
- **Analytics:** Vercel Analytics (zero-config) at launch; anything heavier is a client decision later.

### Output structure
```
/torrison-drive
├── /src
├── README.md
├── deploy-instructions.md
└── .env.example
```

---

## 9. Open Items — need client input before build starts

1. **Name direction** — confirm White Oak, or ask to see the extended 22-name list (§1).
2. **Video/photo assets** — current mockup plan uses Airbnb listing photos as placeholders. Karen's walkthrough video and unreleased music-video footage are expected for: homepage hero, Host an Event past-events section, Gallery highlights rail. Build proceeds with placeholders regardless — assets get swapped in when they land, not blocking.
3. **Host an Event footage timing** — determines whether Page 4 ships as Capacity-First or Segmented-by-Use-Case at launch (§6).

---

## 10. What happens next

On approval of this spec: mockup build starts against the White Oak direction (or your correction), three initial name/section combinations get built out per the original option-sheet plan for side-by-side comparison, then we converge on one build from there.

---

## 11. Client Comparison Mode — July 2026 Update

The first deliverable is an interactive client-facing concept comparison, not a single locked layout. A persistent switch lets the client move between three coherent directions while the property facts and navigation remain stable:

1. **Editorial Residence** — asymmetric, story-first, tactile, and suited to luxury-stay positioning.
2. **Cinematic Escape** — full-bleed, emotionally led, and suited to a name/story reveal.
3. **Production Venue** — information-forward, high-clarity, and suited to events, shoots, and lead conversion.

The comparison covers Home, The Estate, Stay, Host an Event, Gallery, and Contact. Each direction changes hierarchy, composition, CTA emphasis, imagery treatment, and narrative pacing—not only colors or typography.

The prototype uses polished placeholder imagery until Karen's approved assets arrive. Final asset replacement must preserve crops, poster-frame performance requirements, meaningful alt text, and mobile art direction.
