# White Oak Competitor UX Review V2

**Project:** White Oak, 7845 Torrison Drive  
**Audiences:** Stay · Shoot · Gather  
**Purpose:** Independent secondary review and developer-ready UX guidance  
**Date:** 28 July 2026

---

## 1. Executive Summary

Version 1 correctly identified several broad visual patterns: most hospitality-led competitors use serif display typography, warm neutrals are common, and direct-service brands place more emphasis on emotion than marketplaces. The second review confirms those observations but corrects three important conclusions.

### Correction 1: video is not the underlying luxury signal

Version 1 concluded that the rejected White Oak concepts probably failed because they lacked video. The evidence does not support that causal claim.

- Aman delivers top-tier positioning with photography, restrained motion, sparse copy, and disciplined hierarchy.
- Onefinestay, Boutique Homes, and Plum Guide create desire through curated photography and strong editorial framing without depending on a video-led homepage.
- Rosewood uses multiple video elements, but its value comes from controlled story sequencing and explicit playback controls, not the mere presence of video.
- River Run's video is relevant to event storytelling, but its long page, repeated calls to action, and extensive motion are not automatically appropriate for White Oak.

**Corrected conclusion:** White Oak should support a cinematic hero video when approved footage exists, but must not make video a structural dependency. A strong poster image, immediate audience routing, and a meaningful first-screen proposition are more important.  
**Evidence:** Directly Observed + Code Confirmed.  
**White Oak decision:** **MODIFIED**.

### Correction 2: Haute Retreats is useful, but not a universal north star

Haute Retreats is a marketplace and concierge service covering thousands of villas. White Oak is one property with three distinct use cases. Haute Retreats offers excellent patterns for trust, concierge messaging, response expectations, and low-risk inquiry language. Its destination search, account system, inventory statistics, and global footer architecture should not be copied.

**Corrected conclusion:** use Haute Retreats as the service-language reference, not the information-architecture reference.  
**Evidence:** Directly Observed.  
**White Oak decision:** **MODIFIED**.

### Correction 3: the White Oak system needs three audience funnels, not a single luxury funnel

No single reviewed competitor fully matches White Oak. The strongest pattern set is composite:

- **Stay:** Onefinestay and Haute Retreats for curated hospitality and human reassurance.
- **Shoot:** Peerspace for activity-first language and pre-qualification.
- **Gather:** River Run for event-specific storytelling and social proof.
- **Brand restraint:** Aman.
- **Gallery and editorial authority:** Boutique Homes and Rosewood.
- **Trust architecture:** Plum Guide.

White Oak should therefore use a shared brand shell with three distinct user routes rather than forcing every visitor through the same linear story.

### Highest-priority recommendations

1. Put **Stay · Shoot · Gather** in the first-screen decision architecture.
2. Use a persistent, compact header after the hero; do not hide all utility inside a theatrical menu.
3. Give each audience a dedicated page, facts, proof, and CTA language.
4. Use cinematic motion to clarify hierarchy, not to delay access.
5. Treat images as authored sequences with captions, categories, and room/use metadata.
6. Make concierge value concrete: response time, process, what is handled, and what happens next.
7. Use real capacity, access, parking, sound, curfew, and production information for Shoot/Gather.
8. Use progressive disclosure for dense logistics; do not conceal primary qualification facts.
9. Avoid fake press, invented testimonials, decorative statistics, autoplay sound, and scroll-jacking.
10. Ship a static, accessible, fast experience first; layer video and motion as enhancement.

---

## 2. Method and Evidence Discipline

### Inputs reviewed

- `COMPETITOR_UX_RESEARCH.md`
- `DESIGN_LANGUAGE_COMPARISON.md`
- All available files in `design-extracts/` for ten competitors
- Extracted intent, section roles, design tokens, visual DNA, motion tokens, form states, stack signals, HTML previews, component anatomy, and implementation recipes
- Current publicly available page structure for all ten competitor URLs

### Evidence labels

| Label | Meaning in this report |
|---|---|
| **Directly Observed** | Present in the current live page content or rendered structure reviewed during this pass |
| **Code Confirmed** | Present in captured HTML, CSS, DOM, attributes, tokens, or local extraction artifacts |
| **Documentation Supported** | Backed by an identified platform/library behavior or established browser/API behavior |
| **Inferred** | Plausible interpretation that was not proven by interaction or code |

### Important limitations

- Current web retrieval exposed page content and control labels but did not provide a complete interactive desktop/mobile test for every competitor.
- Onefinestay and Peerspace were bot-blocked during the original extraction. Their local extraction data is not reliable beyond the block page. Current live content was available in this pass, but internal implementation remains **Unknown**.
- Rosewood's original section extraction captured a consent interface instead of the complete homepage. Current live content corrects the page-structure gap, while implementation details remain partial.
- Machine-generated motion-token files prove declarations existed in captured CSS; they do not prove every token was used in a visible interaction.
- Extreme values such as River Run's extracted `103846s` duration are treated as media/runtime artifacts, not design animation values.

---

## 3. Competitor Reviews

## 3.1 Aman

### What is working

- A clear global navigation separates Destinations, Experiences, Offers, Residences, and Contact. **Directly Observed**
- “Reserve” remains a distinct utility action rather than being disguised as editorial text. **Directly Observed**
- The homepage uses a small number of large editorial themes—destination, wellness, seasonal experiences, villas, and the wider brand world—rather than a dense card marketplace. **Directly Observed**
- Extracted structure includes multiple gallery/content regions and a deep destination navigation system. **Code Confirmed**
- Extracted motion durations cluster at 100, 200, 350, and 500 ms with scroll-linked declarations. **Code Confirmed**

### Risks and limitations

- The global destination mega-navigation is far too large for a single property.
- Aman can rely on existing brand recognition; White Oak must explain what the property is and what users can do.
- The homepage mixes corporate brand, retail, hotels, residences, and editorial stories. That breadth is not useful to White Oak.

### White Oak application

| Pattern | Decision | Reason |
|---|---|---|
| Sparse first-screen copy | **YES** | One defining sentence is stronger than generic luxury copy |
| Visible primary utility CTA | **YES** | Stay/Shoot/Gather actions should never be hidden |
| Restrained 100–500 ms transitions | **YES** | Supports polish without blocking |
| Large destination mega-menu | **NO** | Wrong scale and information model |
| Brand-first ambiguity | **NO** | White Oak needs immediate property and audience clarity |

---

## 3.2 Rosewood Hotels

### What is working

- The global navigation exposes Hotels, Residences, Dining, Wellness, Events, and Shop with rich subnavigation. **Directly Observed**
- Event navigation is segmented by purpose, including Weddings and Meetings. **Directly Observed**
- Hero/editorial media includes visible Previous, Next, Pause, and Play controls. **Directly Observed**
- Repeated property and experience collections use labeled content rather than image-only mystery cards. **Directly Observed**
- Extracted motion declarations include 100, 200, 300, and 500 ms timings and a strong ease-out curve `cubic-bezier(0.19, 1, 0.22, 1)`. **Code Confirmed**

### Risks and limitations

- The mega-menu is appropriate for a global portfolio, not White Oak.
- Multiple homepage videos increase transfer, decode, and attention costs.
- Generic repeated “Discover” links depend on surrounding context and can become ambiguous for assistive technology.

### White Oak application

| Pattern | Decision | Reason |
|---|---|---|
| Visible media controls | **YES** | Any autoplay media needs pause/play |
| Purpose-based event routing | **YES** | Gather and Shoot need different logistics |
| Labeled editorial collections | **YES** | Captions make the gallery useful |
| Video in many cards | **NO** | Performance cost and unnecessary repetition |
| Repeated “Discover” CTA copy | **MODIFIED** | Use specific actions such as “View pool and terraces” |

---

## 3.3 The Estate at River Run

### What is working

- Top navigation directly exposes Weddings, Events, Lodging, Gallery, and Inquire. **Directly Observed**
- The experience is use-case aware rather than treating all visitors as generic leads. **Directly Observed**
- The page combines property atmosphere, event examples, testimonials, gallery content, press, and a prominent final inquiry. **Directly Observed**
- Captured DOM includes a skip-to-content link. **Code Confirmed**
- Extracted stack signals indicate Squarespace and Google Analytics. **Code Confirmed**
- Extracted CSS includes multiple duration/easing values, including 170, 300, 450, and 1000 ms plus ease-out curves. **Code Confirmed**
- A loading spinner was detected in the captured state inventory. **Code Confirmed**

### Risks and limitations

- The captured homepage is approximately 9,500 px before the footer at 1280 px width. **Code Confirmed**
- Repeated story/testimonial structures create emotional density but may hide planning facts.
- Uppercase tracked typography can become difficult to scan when applied beyond labels and short headlines.
- The extracted 103846-second duration is a media artifact and must not be treated as an animation recommendation.

### White Oak application

| Pattern | Decision | Reason |
|---|---|---|
| Separate lodging/events paths | **YES** | Direct fit for Stay/Gather |
| Event stories and testimonials | **YES** | Strong proof when real assets exist |
| Skip link | **YES** | Required accessibility baseline |
| 1000 ms scene transitions | **MODIFIED** | Reserve for large scene changes only |
| Very long emotional homepage | **NO** | White Oak should distribute detail across real pages |
| All-caps body-scale typography | **NO** | Reduces readability |

---

## 3.4 The Maimon Group

### What is working

- The live structure mixes villa discovery with concierge and property-management content. **Directly Observed**
- Extracted section roles include hero regions, pricing/table structures, a feature grid, testimonial, and footer. **Code Confirmed**
- Three forms and one modal were detected in the captured form-state inventory. **Code Confirmed**
- Google Analytics and PostHog signals were detected. **Code Confirmed**
- Extracted timings include 150, 200, 300, 500, and 880 ms with material-style and expressive ease-out curves. **Code Confirmed**
- The combination of cream, dark ink, and champagne accent supports premium presentation without depending on saturated color. **Code Confirmed**

### Risks and limitations

- Its inventory/search business model is broader than White Oak.
- Playfair Display and predictable navy/gold treatment can read as category default.
- Multiple business lines compete for hierarchy.

### White Oak application

| Pattern | Decision | Reason |
|---|---|---|
| Concierge adjacent to property discovery | **YES** | Service belongs near the decision point |
| Modal inquiry | **MODIFIED** | Only for a focused secondary task; dedicated pages remain primary |
| 150–500 ms interface timing | **YES** | Practical motion range |
| 880 ms reveal timing | **MODIFIED** | Use sparingly for major image reveals |
| Generic navy/gold luxury styling | **NO** | White Oak needs a property-specific identity |

---

## 3.5 LucidWild Estate

### What is working

- Navigation organizes Visit, Events, Wines, Acquire, Club, Accolades, About, and News. **Directly Observed**
- Event navigation explicitly separates private/corporate events, weddings, previous event videos, and FAQs. **Directly Observed**
- The site uses concrete operating hours, address, email, and phone in the footer. **Directly Observed**
- WordPress and Google Analytics signals were detected. **Code Confirmed**
- Motion tokens include 100, 200, 300, and 450 ms timings. **Code Confirmed**

### Correction to Version 1

Version 1 described LucidWild primarily as proof that a dark, sans-serif single-estate direction can work. That visual observation is valid, but its more useful UX contribution is the explicit division of Visit and Events, plus event-specific FAQ and past-event media. The current live homepage is heavily product-led, so it is not a direct property-presentation template.

### White Oak application

| Pattern | Decision | Reason |
|---|---|---|
| Visit vs Events architecture | **YES** | Maps cleanly to Stay vs Gather |
| Previous event media | **YES** | Valuable proof when approved |
| Event-specific FAQ | **YES** | Reduces inquiry friction |
| Wine/product repetition | **NO** | Not relevant |
| Dark styling as differentiation alone | **NO** | Color is not a UX strategy |

---

## 3.6 Haute Retreats

### What is working

- The hero combines a benefit-led statement, destination/date/guest search, specialist curation, WhatsApp, and phone. **Directly Observed**
- Trust appears immediately: return-rate claim, vetting process, dedicated specialist, and recognition. **Directly Observed**
- The service process is explained in three steps. **Directly Observed**
- The site provides a concrete promise: three curated villas within 24 hours, at no cost and with no obligation. **Directly Observed**
- Contact choices include WhatsApp, email, and phone. **Directly Observed**
- WordPress, Google Analytics, three forms, and 50 scripts were detected. **Code Confirmed**
- Motion declarations include 100, 200, 300, 700, and 800 ms plus a 6-second looping duration. **Code Confirmed**

### Correction to Version 1

The claim that Haute Retreats is the single best overall comp overstates its match. It is a 2,400-property, 83-destination marketplace with authentication, global search, and extensive account/contact infrastructure. Its strongest transferable lesson is **service de-risking**, not page structure or visual design.

### White Oak application

| Pattern | Decision | Reason |
|---|---|---|
| Specific response promise | **YES** | “We reply within one business day” lowers anxiety |
| Process explanation | **YES** | Useful for events and productions |
| Multiple contact channels | **MODIFIED** | Include only channels the operator can maintain |
| Immediate trust details | **YES** | Use verified White Oak facts and service commitments |
| Destination/date marketplace search | **NO** | One property does not need destination search |
| Login and account creation | **NO** | Adds friction without value |
| 50-script implementation weight | **NO** | White Oak should remain substantially lighter |

---

## 3.7 Boutique Homes

### What is working

- The value proposition is concrete: vacation rentals for people who believe good design improves travel. **Directly Observed**
- Search includes place, dates, and guests. **Directly Observed**
- Press is linked to actual external coverage. **Directly Observed**
- Guest stories name the property and describe specific architectural/experiential details. **Directly Observed**
- The editorial section “Point of View” builds authority through architecture and travel content. **Directly Observed**
- Google Analytics and Hotjar signals were detected. **Code Confirmed**
- Five forms and animation timings from 150 to 800 ms were detected; a 12-second value likely supports a loop rather than a UI transition. **Code Confirmed**

### Correction to Version 1

Version 1 called this one of the least relevant models because it is a marketplace. That is true for its search architecture but misses its useful editorial proof model. Boutique Homes shows how specific design commentary, property-linked guest stories, and external press create taste-based authority.

### White Oak application

| Pattern | Decision | Reason |
|---|---|---|
| Specific architectural point of view | **YES** | Supports White Oak's design positioning |
| Property-specific guest stories | **YES** | Better than generic star ratings |
| External press links | **YES** | Verifiable proof |
| Magazine content program | **MODIFIED** | Only if the client can maintain it |
| Marketplace filters and account UI | **NO** | Wrong product model |
| Hotjar by default | **NO** | Requires privacy review and may be unnecessary |

---

## 3.8 Onefinestay

### What is working

- “Where good taste travels” provides a short, memorable brand proposition. **Directly Observed**
- “Find a stay” is explicit and task oriented. **Directly Observed**
- The copy differentiates homes by perspective, address, character, and way of living. **Directly Observed**
- A skip-to-main-content link is present. **Directly Observed**
- The live page exposes previous/next controls for its property collection. **Directly Observed**

### Technical confidence

The local extraction captured a bot-protection page with only two scripts and a footer. No implementation conclusions should be drawn from it. Carousel library, animation implementation, responsive behavior, and image-loading strategy are **Unknown**.

### White Oak application

| Pattern | Decision | Reason |
|---|---|---|
| Short taste-led proposition | **YES** | Gives the estate a clear identity |
| Explicit task label | **YES** | “View availability” beats vague “Discover” |
| Property-as-way-of-living copy | **YES** | Useful for Stay storytelling |
| Marketplace carousel | **MODIFIED** | Use only for rooms or stories with visible controls |
| Favorites/login | **NO** | No value for a single property |

---

## 3.9 Plum Guide

### What is working

- Search tasks and guest-count details are explicit. **Directly Observed**
- Trust is built in layers: awards, vetting, service, protection, and linked Trustpilot reviews. **Directly Observed**
- The value proposition is backed by a measurable top-3% acceptance claim. **Directly Observed**
- Reviews are attributed and linked to their external source. **Directly Observed**
- Google Analytics and Heap signals were detected. **Code Confirmed**
- Motion declarations cluster at 100, 200, and 300 ms. **Code Confirmed**

### White Oak application

| Pattern | Decision | Reason |
|---|---|---|
| Layered trust architecture | **YES** | Use factual property/service proof |
| Linked review source | **YES** | Prevents unverifiable social proof |
| Clear guest categories | **YES** | Useful if children/pets affect policies |
| “Top 3%” style claim | **NO** | White Oak has no defensible equivalent |
| Booking-protection promise | **NO** | Unless contractually supported |
| Marketplace destination search | **NO** | Wrong scope |

---

## 3.10 Peerspace

### What is working

- The first task is explicit: activity, location, date, search. **Directly Observed**
- Activity taxonomy includes photo shoot, meeting, video shoot, workshop, wedding reception, music video, corporate event, and film shoot. **Directly Observed**
- The content connects spaces to outcomes and examples rather than describing architecture alone. **Directly Observed**
- Location and activity pages support task-specific discovery. **Directly Observed**

### Technical confidence

The original extraction captured a bot-protection page, so framework, carousel, motion, breakpoint, and loading conclusions remain **Unknown**. The current page confirms the information architecture, not its internal implementation.

### White Oak application

| Pattern | Decision | Reason |
|---|---|---|
| “What are you planning?” language | **YES** | Excellent opening for Shoot/Gather |
| Activity segmentation | **YES** | Lets White Oak tailor capacity and logistics |
| Activity + location + date search | **MODIFIED** | Use activity/date/headcount inquiry, not marketplace search |
| Endless activity/city taxonomy | **NO** | White Oak needs a small verified set |
| Hourly marketplace framing | **NO** | Could cheapen a premium private-estate inquiry |

---

## 4. Interaction Inventory

| Interaction | What happens / why it exists | Desktop | Mobile | Accessibility | Difficulty | White Oak |
|---|---|---|---|---|---|---|
| Audience gateway | Routes users to Stay, Shoot, or Gather before detail overload | Three editorial choices with short proof | Full-width stacked choices | Real links; clear focus; no hover dependency | Low | **YES** |
| Sticky header | Keeps routes and current CTA available | Condenses after hero | Compact wordmark + menu + CTA | Must not cover focused targets; respect zoom | Medium | **YES** |
| Full-screen menu | Reveals secondary navigation and contact | Optional for editorial direction | Primary mobile navigation | Focus trap, Escape, restored focus, scroll lock | Medium | **MODIFIED** |
| Hero media control | Pauses/plays autoplay video | Visible unobtrusive control | Same; poster may replace video | Native button, state label, reduced-motion fallback | Medium | **YES if video** |
| Room/use tabs | Changes focused content without long repetition | Horizontal tablist | Scrollable tabs or accordion | Correct tab ARIA and keyboard arrows | Medium | **MODIFIED** |
| Gallery filters | Narrows images by room/use/time | Sticky category row | Horizontally scrollable chips | Buttons with pressed state; announce count | Medium | **YES** |
| Accessible lightbox | Opens larger image and metadata | Centered viewer with thumbnails | Edge-to-edge viewer with swipe and buttons | Dialog semantics, focus trap, Escape, alt/caption | High | **YES** |
| Carousel | Moves through stories or rooms | Buttons, index, optional drag | Swipe plus visible buttons | No auto-advance; announce position | Medium | **MODIFIED** |
| Sticky scrollytelling | Keeps image fixed while copy chapters change | Appropriate on Estate story | Becomes normal sequence | Reading order remains logical; reduced motion | High | **MODIFIED** |
| Capacity disclosure | Shows use-specific facts | Table/cards with use selector | Labeled stacked cards | No color-only distinction | Medium | **YES** |
| Inquiry personalization | Adapts fields to Stay/Shoot/Gather | Route selector above form | Step or accordion only if short | Preserve values; announce changes | High | **YES** |
| Date selection | Captures preferred and flexible dates | Calendar + flexible option | Native-friendly calendar | Keyboard support; textual errors | High | **MODIFIED** |
| Map/location context | Shows travel relationships, not exact security detail | Static map with distances | List-first, optional map | Text alternative for every point | Medium | **YES** |
| Download location packet | Gives qualified production facts | Clear PDF action | Same | Accessible PDF; file type/size disclosed | Medium | **YES after facts approved** |
| Progressive FAQ | Reduces page density | Accordion | Accordion | Native `details` or correct ARIA | Low | **YES** |
| Concierge contact choices | Offers email/phone/text where maintained | Inline alternatives | Tap-to-call/message | Explicit labels and hours | Low | **MODIFIED** |
| Form success state | Confirms receipt and next step | Replaces form with confirmation | Same | Focus moves to status; `aria-live` | Medium | **YES** |

---

## 5. Animation Inventory

### Confirmed timing ranges

| Competitor | Extracted durations | Interpretation | Evidence |
|---|---|---|---|
| Aman | 100, 200, 350, 500 ms | Tight interface transitions and moderate reveals | Code Confirmed |
| Rosewood | 100, 200, 300, 500 ms | Similar disciplined range; strong ease-out available | Code Confirmed |
| River Run | 1, 100, 170, 300, 450, 1000 ms | Mix of interface, reveal, and large-scene timing | Code Confirmed |
| Maimon | 150, 200, 300, 500, 880 ms | Expressive hero/reveal layer over standard UI timing | Code Confirmed |
| LucidWild | 100, 200, 300, 450 ms | Conventional interface/reveal range | Code Confirmed |
| Haute Retreats | 100, 200, 300, 700, 800 ms; 6 s loop | UI, editorial reveal, and looping media values | Code Confirmed |
| Boutique Homes | 150, 200, 300, 450, 800 ms; 12 s | UI, editorial reveal, and probable loop | Code Confirmed |
| Plum Guide | 100, 200, 300 ms | Utility-led motion | Code Confirmed |
| Onefinestay | Unknown | Bot-blocked extraction | Unknown |
| Peerspace | Unknown | Bot-blocked extraction | Unknown |

### White Oak motion specification

| Motion class | Duration | Easing | Usage |
|---|---:|---|---|
| Control feedback | 120–180 ms | `cubic-bezier(.2,.8,.2,1)` | Button, link, chip, field |
| Menu/panel | 220–320 ms | `cubic-bezier(.16,1,.3,1)` | Navigation and disclosure panels |
| Content reveal | 400–600 ms | `cubic-bezier(.16,1,.3,1)` | Image masks and section entrances |
| Major scene transition | 700–900 ms | `cubic-bezier(.33,0,.2,1)` | Cinematic direction only |
| Ambient loop | 8–15 s | linear | Subtle video or transform loop |

Rules:

- Use opacity + transform only when possible.
- Reveal distance should remain under 32 px.
- Do not stagger more than six items; cap cumulative delay at 360 ms.
- Do not animate body copy line by line.
- Never tie essential reading to scroll position.
- `prefers-reduced-motion: reduce` removes parallax, autoplay, smooth scrolling, and reveal transforms.
- Hover transforms do not exceed 1.02 scale for images or 2 px translation for controls.

---

## 6. Layout Inventory

| Layout pattern | Evidence in set | Benefit | Risk | White Oak |
|---|---|---|---|---|
| Full-bleed hero | Common across hospitality/event sites | Immediate emotional context | Can hide purpose/CTA | **YES with visible route** |
| Split editorial hero | Supported by Boutique-style editorial composition | Balances story and image | Can feel static if weak photography | **YES, Layout 1** |
| Search-first hero | Plum, Boutique, Peerspace, Haute | Fast task completion | Marketplace feel | **MODIFIED by audience** |
| Mega-menu | Aman, Rosewood | Handles large portfolios | Overkill and focus complexity | **NO** |
| Editorial card collection | Aman, Rosewood, Boutique | Builds story and authority | Repetitive CTA language | **YES with specific links** |
| Staggered collage | Editorial extraction/reference language | Shows range without carousel | Crop and responsive complexity | **YES** |
| Full-width scenic chapter | River Run and hospitality patterns | Strong pacing/reset | Expensive if repeated | **YES, max two/page** |
| Sticky image + copy | Architecture/editorial pattern | Spatial narrative | Accessibility/mobile complexity | **MODIFIED, Estate only** |
| Utility spec table | Maimon/Peerspace-like task structure | Fast qualification | Can feel commercial | **YES, Shoot/Gather** |
| Filterable gallery | Marketplace/event patterns | Makes large library usable | State and loading complexity | **YES** |
| Testimonial carousel | River Run, Plum, Boutique | Compact proof | Auto-rotation/accessibility issues | **MODIFIED; manual only** |
| Deep global footer | Aman/Rosewood/Haute | Supports huge sites | Unnecessary for six pages | **NO** |

### Recommended page rhythm

Each White Oak page should alternate information pressure:

1. Orientation
2. Emotional image
3. Useful facts
4. Narrative detail
5. Proof
6. Logistics or process
7. Secondary visual payoff
8. Focused next action

This is not a command to use exactly eight sections. It is a pacing model that prevents consecutive image-only or copy-heavy sections.

---

## 7. Technical Findings

### Platform and telemetry signals

| Site | CMS/framework evidence | Analytics evidence | Extraction caution |
|---|---|---|---|
| Aman | CMS unknown | Google Analytics | Large global DOM inflates counts |
| Rosewood | CMS unknown | None detected in captured state | Consent state distorted original extraction |
| River Run | Squarespace | Google Analytics | Platform markup creates repeated wrappers |
| Maimon | Unknown | Google Analytics, PostHog | 50 scripts; exact ownership unknown |
| LucidWild | WordPress | Google Analytics | Homepage is product-heavy |
| Haute Retreats | WordPress | Google Analytics | 50 scripts and account infrastructure |
| Boutique Homes | Unknown | Google Analytics, Hotjar | Five forms detected across page/UI |
| Onefinestay | Unknown | Unknown | Original extraction is block page |
| Plum Guide | Unknown | Google Analytics, Heap | Marketplace UI differs from White Oak |
| Peerspace | Unknown | Unknown | Original extraction is block page |

### Frontend implementation guidance

#### Layout

- Use CSS Grid for editorial hero, collage, property facts, and wide-screen inquiry layouts.
- Use Flexbox for navigation, filter chips, button groups, and small linear components.
- Use container queries only when component reuse genuinely requires them; normal media queries are sufficient for page composition.
- Maintain a 12-column desktop grid, 6-column tablet grid, and 4-column mobile grid.
- Use `clamp()` for headline sizing but cap line length and test at browser zoom.

#### Images

- Use semantic `<figure>` and `<figcaption>` where captions add context.
- Provide width/height or `aspect-ratio` to prevent layout shift.
- Use responsive `srcset`/`sizes`; do not send 1920 px assets into 360 px slots.
- Load only the primary hero eagerly; set `fetchpriority="high"` only on the LCP image.
- Lazy-load below-fold gallery media.
- Do not lazy-load content likely to enter the first viewport.
- Preserve focal points with art-directed crops rather than universal `object-position:center`.

#### Video

- Provide MP4/H.264 baseline and WebM/AV1 only when the delivery pipeline supports it.
- Hero loop target: 5–12 seconds, muted, no dialogue, no hard cuts.
- Poster must be a real, optimized property frame.
- Use `preload="metadata"` or `none` below the fold.
- Pause with IntersectionObserver when offscreen.
- Do not autoplay on reduced-motion.
- Include a persistent pause/play control.

#### Navigation

- Use real anchors for all page changes.
- Mark the current page with `aria-current="page"`.
- Mobile menu trigger must expose `aria-expanded` and `aria-controls`.
- On close, return focus to the trigger.
- Do not animate layout properties that cause reflow.

#### Galleries

- Filters should be buttons, not links, unless they produce canonical shareable URLs.
- Preserve filter in the query string when sharing matters.
- Lightbox must be a real dialog; avoid a custom `div` overlay without focus management.
- Restore scroll and focus to the originating thumbnail when closed.
- For 81 assets, use progressive batches or virtualize only if measurement proves it necessary. Simple lazy loading is likely enough.

#### Forms

- Do not use `mailto:`.
- Use server-side delivery with spam protection, rate limiting, and structured fields.
- Render labels persistently; placeholders are examples, not labels.
- Validate after blur/submission rather than on every keystroke.
- Preserve all values after an error.
- Use an error summary for multi-field failures.
- Set response expectations in the success state.

---

## 8. Frontend Implementation Notes by Pattern

| Pattern | Observed | Code-confirmed mechanism | Likely implementation | Unknown |
|---|---|---|---|---|
| Scroll-linked reveals | Present in extracted motion metadata across most successful extractions | `scrollLinked: true` in token metadata | IntersectionObserver and/or platform animation wrappers | Exact thresholds/root margins |
| Hero carousel controls | Rosewood shows Previous/Next/Pause/Play | Control labels present in live content | Custom carousel or library with media state | Library name |
| River Run hero/video | Video controls and time text present | Video-related DOM and spinner captured | Squarespace video block/custom overlay | Mobile preload policy |
| Maimon modal | Modal count = 1 | Form-state extraction | Custom dialog or framework component | Focus behavior |
| Gallery grids | Common across extracted previews | Grid/flex styles in generated artifacts | CSS Grid with responsive breakpoints | Exact production CSS ownership |
| Image lazy loading | Common expectation | Partial attributes in captured HTML vary | Native `loading="lazy"` plus CDN resizing | Complete policy per site |
| Search guest controls | Plum/Boutique/Peerspace live content | Inputs/buttons present | Popover with local state | Keyboard implementation |
| Reduced motion | Not reliably exposed in live text | Some extracted motion files include no proof of media-query use | May exist in site styles | Most competitors remain unverified |

No White Oak decision should claim GSAP, Framer Motion, Swiper, or another library is required based only on generated recipe files. Those files are export suggestions, not proof that the source site uses the library.

---

## 9. Accessibility Findings

### Positive evidence

- Aman exposes search inputs and a visible Reserve action. **Directly Observed**
- River Run includes “Skip to Content.” **Code Confirmed**
- Onefinestay and Plum Guide include skip-to-main-content links. **Directly Observed**
- Rosewood exposes Pause/Play and Previous/Next media controls. **Directly Observed**
- Peerspace's search fields have visible question labels. **Directly Observed**
- Plum Guide provides explicit age ranges for guest types. **Directly Observed**

### Risks observed or not disproven

- Repeated generic “Discover” links can create ambiguous link lists.
- Large uppercase tracked text can reduce readability.
- Auto-playing visual media may create vestibular or cognitive load.
- Horizontal carousels can fail keyboard, focus, announcement, and touch-target requirements.
- Mega-menus introduce focus order and escape/close complexity.
- Image-led cards can hide purpose when alt text or accessible names are generic.
- Consent/account forms add many controls before primary content.
- No competitor set provides enough evidence to assume reduced-motion compliance.

### White Oak accessibility acceptance criteria

1. Skip link is the first focusable control.
2. All pages have one meaningful `h1`.
3. Current navigation uses `aria-current`.
4. No essential content appears only on hover.
5. Video can be paused and is disabled for reduced motion.
6. Gallery dialog is keyboard complete.
7. Form fields have visible labels, instructions, and errors.
8. Focus indicators meet contrast requirements.
9. Text contrast meets WCAG 2.2 AA.
10. Touch targets are at least 44 × 44 CSS px.
11. At 200% zoom, navigation and forms remain usable without two-dimensional scrolling.
12. Screen-reader reading order follows the visible story even in overlapping layouts.

---

## 10. Performance Findings

### Competitor-level observations

- Haute Retreats and Maimon each showed 50 script signals in extraction. **Code Confirmed**
- River Run showed 45 scripts and a spinner. **Code Confirmed**
- Boutique Homes showed 35 scripts and Hotjar. **Code Confirmed**
- Plum Guide showed 41 scripts with Google Analytics and Heap. **Code Confirmed**
- Rich global brands commonly pay a substantial script and media cost; that cost is not a luxury feature.

### White Oak budgets

| Metric/resource | Target |
|---|---:|
| LCP mobile | ≤ 2.5 s at p75 |
| CLS | ≤ 0.1 |
| INP | ≤ 200 ms |
| Initial JS, compressed | ≤ 150 KB preferred; 200 KB maximum |
| Hero poster | ≤ 350 KB mobile, ≤ 650 KB desktop |
| Hero video | ≤ 4 MB desktop; poster-first mobile |
| Below-fold image | Usually ≤ 250 KB at delivered size |
| Third-party scripts at launch | Analytics only after privacy decision |

### Loading sequence

1. HTML, critical CSS, fonts, and hero poster.
2. Navigation and first-screen interaction.
3. Next-section imagery near viewport.
4. Below-fold gallery assets lazily.
5. Video after poster and only when connection/motion policy permits.
6. Analytics and optional services after consent decision.

Use font subsetting and no more than two families with required weights. Avoid loading full variable font ranges when only regular/italic are used.

---

## 11. White Oak Recommendations

## 11.1 Global shell

- **YES:** real six-page navigation.
- **YES:** first-screen Stay/Shoot/Gather routing.
- **YES:** contextual primary CTA by page.
- **YES:** concise property wordmark and location.
- **MODIFIED:** sticky header condenses after the hero.
- **NO:** client concept switch in the final public site.
- **NO:** mega-menu, login, favorites, destination search, or fake account utility.

## 11.2 Stay

- Lead with the lived experience, but show occupancy and booking path early.
- Present sleeping arrangements honestly, room by room.
- Explain what “attended” or concierge service actually includes.
- Show neighborhood/travel context and policies before booking handoff.
- Use verified guest excerpts linked to their source when permitted.
- External booking handoff must identify the provider.

## 11.3 Shoot

- Ask “What are you planning?” with a small verified activity set.
- Expose usable spaces, dimensions, power, natural-light orientation, parking, load-in, Wi-Fi, holding, sound, curfew, and insurance.
- Offer a downloadable location packet only after facts are approved.
- Use annotated images and time-of-day examples.
- Provide a request-a-scout CTA and response expectation.
- Do not use hourly marketplace language unless that is the actual commercial model.

## 11.4 Gather

- Segment private dinner, brand/corporate, retreat, and celebration only when all are allowed.
- Show configuration and capacity by space.
- Explain planning process and vendor/service scope.
- Use real event stories with brief, configuration, and outcome.
- Separate overnight-stay assumptions from event access.
- Put limitations before form submission, not after.

## 11.5 Gallery

- Curate a 10–12 image opening story.
- Provide complete filtered archive below.
- Filters: All, Architecture, Interiors, Bedrooms, Pool & Grounds, Views, Night, Events/Production when approved.
- Caption images with room/use/time information.
- Preserve keyboard and scroll position in lightbox.
- Do not repeat images merely to increase page length.

## 11.6 Concierge messaging

Replace vague claims with operational promises:

- Who responds
- Typical response window
- What information will be returned
- What the planning process includes
- Which services are included, optional, or third-party

Haute Retreats demonstrates that luxury service becomes believable when the process is concrete.

---

## 12. Developer-Ready Component Specification

| Component | Required states | Key implementation requirement |
|---|---|---|
| Header | top, condensed, menu open, current page | No layout shift; keyboard-complete menu |
| Audience gateway | default, hover/focus, selected | Real URLs and meaningful labels |
| Editorial image card | default, hover/focus, loading | Fixed ratio, responsive source, contextual CTA |
| Media hero | poster, loading, playing, paused, reduced motion, error | Native media semantics and persistent control |
| Property fact | default, qualification note | Definition available without hover |
| Gallery filter | default, hover, focus, selected, disabled | Pressed state and result count |
| Lightbox | opening, open, navigating, closing | Dialog focus lifecycle |
| Carousel | first, middle, last, dragging | Visible controls; no autoplay |
| Accordion | closed, open, focus | Native `details` preferred |
| Inquiry router | Stay, Shoot, Gather | URL/state preservation |
| Form field | empty, focused, valid, invalid, disabled | Visible label and inline help |
| Form submission | idle, submitting, error, success | Prevent duplicate submit; accessible status |
| External handoff | default | Provider and destination disclosed |

---

## 13. Evidence Matrix

| Finding | Evidence level | Source | Confidence |
|---|---|---|---|
| Aman uses explicit Reserve utility | Directly Observed | Current Aman homepage | High |
| Aman extracted motion uses 100–500 ms range | Code Confirmed | `aman-com-motion-tokens.json` | High |
| Rosewood provides carousel/video controls | Directly Observed | Current Rosewood homepage | High |
| Rosewood original extraction was consent-state distorted | Code Confirmed | Rosewood intent/section extraction | High |
| River Run separates Weddings, Events, Lodging, Gallery | Directly Observed | Current River Run navigation | High |
| River Run is Squarespace | Code Confirmed | Stack intelligence | High |
| Maimon has captured modal and three forms | Code Confirmed | Form-state extraction | Medium |
| Maimon uses PostHog and Google Analytics signals | Code Confirmed | Stack intelligence | Medium |
| LucidWild separates Visit and Events | Directly Observed | Current LucidWild navigation | High |
| Haute uses response promise and human channels | Directly Observed | Current Haute homepage | High |
| Haute is a 2,400-villa marketplace/service | Directly Observed | Current Haute copy | High |
| Boutique uses specific external press links | Directly Observed | Current Boutique homepage | High |
| Boutique uses Hotjar signal | Code Confirmed | Stack intelligence | Medium |
| Onefinestay local extraction is invalid for implementation | Code Confirmed | Captured block-page title/roles | High |
| Plum layers vetting, protection, awards, and reviews | Directly Observed | Current Plum homepage | High |
| Peerspace routes by activity/location/date | Directly Observed | Current Peerspace homepage | High |
| Peerspace implementation library | Unknown | Bot-blocked extraction | Low |
| Most extracted sites declare scroll-linked motion | Code Confirmed | Motion metadata | Medium |
| Exact visible trigger thresholds across sites | Unknown | Not present in evidence | Low |
| Video caused prior White Oak concepts to fail | Inferred and unsupported | Version 1 assertion | Low |

---

## 14. Questions Remaining

### White Oak business facts

1. Is “White Oak House” approved, and can “Hollywood Hills” be used as positioning while the physical address is Studio City?
2. Which Stay, Shoot, and Gather uses are contractually permitted?
3. What are verified occupancy, event capacity, crew capacity, parking, curfew, sound, and insurance requirements?
4. Is there direct booking, Airbnb-only booking, or inquiry-first availability?
5. Who responds to inquiries, through which channels, and within what time?
6. Are location scouts offered, and are they paid or complimentary?
7. Which concierge/event services are included versus referrals?
8. Which testimonials, press credits, production credits, and client logos are approved?
9. Does the client have approved video with usage rights?
10. Are floor plans and exact dimensions available?

### Technical verification

1. Test all ten competitors in an interactive browser at desktop and mobile widths.
2. Verify focus behavior for Rosewood's navigation and media controls.
3. Verify River Run's mobile video loading and reduced-motion behavior.
4. Verify Maimon's modal semantics and form errors.
5. Identify Onefinestay and Peerspace frontend stacks without bypassing access controls.
6. Measure actual competitor transfer sizes and Core Web Vitals using public field data where available.

---

## 15. Future Research

### Priority 1 — task testing

Run five-user moderated tests on low-fidelity White Oak prototypes:

- Find how many guests can stay.
- Determine whether a 25-person brand dinner is possible.
- Find production parking/load-in information.
- View bedrooms and outdoor spaces.
- Submit a production inquiry with a flexible date.

Measure first-click accuracy, task completion, confidence, and unanswered questions.

### Priority 2 — content audit

Catalogue all 81 property images by room, orientation, time of day, resolution, audience relevance, and crop suitability. The gallery and page stories should follow actual asset strength.

### Priority 3 — prototype comparison

Test:

- Split editorial versus full-bleed cinematic hero
- Immediate Stay/Shoot/Gather gateway versus gateway after one story section
- Sticky Estate narrative versus normal editorial sequence
- One-page event inquiry versus two-step qualification

### Priority 4 — performance prototype

Build a production-like hero with poster, optional video, real fonts, responsive images, and analytics disabled. Test on mid-range mobile hardware and throttled network before committing to motion architecture.

---

## 16. Final Decision Framework

Every proposed White Oak interaction must pass four questions:

1. Does it help Stay, Shoot, or Gather users make a decision?
2. Does it communicate something specific about this property?
3. Does it remain usable on mobile, keyboard, reduced motion, and slow networks?
4. Is its operational promise supported by real content and client capability?

If the answer to any question is no, the pattern should be removed or modified regardless of how frequently it appears on luxury competitor sites.

