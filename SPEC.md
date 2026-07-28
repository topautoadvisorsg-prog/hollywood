# WHITE OAK — WEBSITE EXPERIENCE SPECIFICATION

**Property:** 7845 Torrison Drive, Studio City, California
**Document status:** Experience definition for client review
**Version:** 3.0 — full multi-page specification
**Build status:** No visual direction is approved by this document. The next implementation must follow the selected direction and the page contracts below.

**Customer transcript update — 28 July 2026:** The owner's direct statements supersede earlier inferred priorities. The binding interpretation is documented in `WHITE_OAK_CLIENT_VISION_BRIEF.md`.

---

## 1. What We Are Building

The Torrison Drive property is not a landing page and it is not a generic vacation-rental template. It is a seven-page luxury property website with three complete visual directions for client comparison. “White Oak” remains a provisional agency naming concept until customer approval.

Every direction must contain these real pages:

1. Home
2. The Estate
3. Shoot
4. Gather
5. Stay
6. Gallery
7. Contact

Every page must contain **between seven and ten deliberate content sections**, excluding the global navigation and footer. A section only counts when it advances the story, answers a user question, proves a claim, or moves the visitor toward an action. Decorative spacers, empty quotations, repeated photographs, and generic statistic rows do not count.

The three directions must not be palette swaps. Each must change:

- Information hierarchy
- Image scale and cropping
- Typographic hierarchy
- Page rhythm
- Navigation behavior
- Interaction model
- CTA placement
- Content density
- Mobile composition
- The emotional story told about the property

### Primary audiences

| Audience | Primary need | Primary action |
|---|---|---|
| Producer or location scout | Assess visual range, logistics, access, and production suitability | Request a location packet |
| Event host or planner | Understand fit, capacity, atmosphere, and restrictions | Request an event proposal |
| Luxury traveler | Understand the experience, amenities, privacy, and availability | View availability / book a stay |
| Broker, press, or collaborator | Obtain a concise property story and approved imagery | Make an inquiry |

Commercial priority is **Shoot → Gather → Stay**. Airbnb occupancy is consistent and supports the property; the website's growth job is to create higher-value production and respectful event opportunities.

### Core UX principle

The site uses **progressive commitment**:

1. Create desire.
2. Establish place and credibility.
3. Reveal the property in useful detail.
4. Answer audience-specific questions.
5. Provide proof.
6. Present the appropriate next action.

No page should open with a form, bury essential facts, or force a user through atmosphere when they need logistics. Narrative and utility must coexist.

---

## 2. Three Complete Design Directions

### Direction A — Editorial Residence

**Story:** A privately held architectural residence presented like a collectible design object.

**Binding reference for Layout 1:** `ChatGPT Image Jul 27, 2026, 10_34_32 PM.png`. This reference controls the homepage's visual hierarchy, negative space, image-to-type ratio, collage logic, warm editorial photography, fine rules, restrained accent use, and section pacing. The implementation must use real White Oak property photography in place of any synthetic house imagery. It may adapt crops and responsive composition, but it must not flatten the reference into generic cards or reduce its section count.

- Bright, tactile, restrained, magazine-like
- Asymmetric grids, generous negative space, unexpected image crops
- Large editorial serif paired with a quiet grotesque
- Warm white, ink, mineral gray; no dominant green, beige, or gold fields
- Navigation is slim and persistent
- Motion is slow: masked image reveals, subtle text movement, restrained parallax
- CTAs read like private invitations rather than booking widgets
- Best suited to luxury stays, design-conscious guests, and brand prestige

### Direction B — Luminous Cinema

**Story:** One day and one night above Los Angeles, told as an immersive film.

- Image-led daylight-to-evening pacing, full-bleed transitions
- Oversized scene titles and time-of-day chapter markers
- Warm white, cloud, concrete gray; color comes from the photography
- Navigation begins transparent and becomes solid after the first scene
- Motion is atmospheric: controlled crossfades, video loops, ambient sound optional and off by default
- CTAs appear after emotionally complete sequences
- Best suited to emotional impact, hospitality, launches, and entertainment clients

**Binding customer correction:** no dark theme. Rename this direction **Luminous Cinema** in customer-facing review. Dusk and night imagery may create contrast, but the interface remains bright.

### Direction C — Production House

**Story:** A beautiful, capable private estate with the clarity of a premium location dossier.

- Structured, information-forward, confident
- Modular grid, numbered chapters, annotated imagery, useful data
- White, graphite, cool gray; one restrained signal color for actions
- Navigation includes fast audience routes: Stay / Shoot / Gather
- Motion is functional: pinned indexes, filter transitions, comparison states
- CTAs are explicit and task-oriented
- Best suited to producers, planners, representatives, and high-intent leads

### Comparison-mode behavior

- A persistent concept control appears above the website during client review only.
- Switching direction preserves the current page.
- Example: Editorial Gallery → Cinematic Gallery → Production Gallery.
- The control disappears in the final client-selected build.
- Content facts remain consistent across directions; hierarchy and presentation change.

---

## 3. Global Experience System

### Navigation

Desktop navigation includes Home, The Estate, Stay, Host an Event, Gallery, and Contact. The property wordmark returns home. One primary CTA changes by context:

- Home / Estate / Gallery: **Inquire**
- Stay: **Check Availability**
- Host: **Request a Proposal**
- Contact: no duplicate CTA

Mobile navigation opens as a full-screen, accessible menu with the three audience paths visible before the secondary links.

### Footer

The footer contains:

- White Oak wordmark and full address
- Six-page navigation
- Stay and event inquiry actions
- Airbnb or approved booking destination
- Email and phone when supplied
- Instagram only if an active account is supplied
- Legal links: Privacy and Accessibility
- A restrained closing image or typographic sign-off

No fake awards, fake press marks, fake testimonials, or nonfunctional social icons.

### Shared interaction rules

- All controls have visible hover, focus, active, disabled, and loading states.
- Every animated experience has a reduced-motion equivalent.
- No scroll-jacking.
- Gallery gestures always have visible buttons and keyboard alternatives.
- Sticky elements release before colliding with the footer.
- Forms preserve user input when validation fails.
- Filters update counts and can be cleared in one action.
- Page transitions never delay navigation.

### Responsive rules

- Mobile is recomposed, not merely stacked.
- Essential facts and first CTA appear within the first two mobile screens.
- Editorial overlaps simplify into clean edge-to-edge sequences.
- Cinematic video becomes a compressed poster or short optimized loop.
- Production tables become labeled cards rather than horizontal overflow.
- Tap targets are at least 44 × 44 px.
- Body copy never falls below 16 px.

### Image rules

- Use the supplied property library; do not generate replacement photographs of the house.
- Every page has a shot plan. The same hero image cannot lead more than one page.
- Images need art-directed desktop and mobile crops.
- Avoid using more than two consecutive full-bleed photographs.
- Captions explain rooms, views, use, or time of day; they are not poetic filler.
- Approved photography must be downloadable only where the client authorizes it.

### Performance and accessibility

- Target LCP below 2.5 seconds on a typical mobile connection.
- Only the first visible hero asset loads eagerly.
- Below-fold media lazy-loads.
- Video uses posters, muted autoplay, plays inline, and pauses when not visible.
- WCAG 2.2 AA contrast and keyboard behavior are required.
- Semantic headings follow the content hierarchy.
- All meaningful images receive descriptive alt text; decorative images use empty alt text.

---

## 4. HOME — 10 Sections

**Page objective:** Introduce the property, distinguish its three revenue uses, and direct each audience into the right journey without making the homepage do every page's job.

| # | Section | Content and visual composition | UX behavior | Conversion purpose |
|---|---|---|---|---|
| 1 | Opening statement | Property name, location, one defining sentence, one signature exterior image or film, primary and secondary CTA | Hero media loads after headline; mobile uses an art-directed poster | Establish identity and offer Stay / Host paths immediately |
| 2 | Audience gateway | Three choices: Stay Here, Host an Event, Scout the Location; each has one sentence and a relevant image detail | Hover or focus previews the corresponding environment; mobile uses large stacked links | Let visitors self-select without searching the navigation |
| 3 | The address in context | Map relationship to Studio City, major studios, Sunset, airport, and neighborhood; privacy language without exposing security details | Interactive distance list highlights map points; map has static accessible fallback | Explain why this location is unusually useful |
| 4 | Signature panorama | The property's strongest wide view with a short statement about elevation, light, and privacy | Optional slow pan; reduced motion uses a still | Deliver the principal emotional payoff |
| 5 | Estate preview | Curated sequence of architecture, living spaces, bedrooms, pool, and grounds with six verified facts | Images reveal in a controlled sequence; “Explore the Estate” remains visible | Turn atmosphere into concrete value |
| 6 | A day at White Oak | Morning, afternoon, golden hour, and night told with four scenes and concise captions | Desktop may pin the time marker; mobile becomes a chronological story | Help guests and hosts imagine actual use |
| 7 | Stay / Gather / Create | Three use cases with tailored proof, not generic cards: overnight retreat, private gathering, production location | Selecting one changes the supporting facts and CTA without hiding the other paths | Connect the property to intent |
| 8 | Proof and provenance | Verified credits, approved press, past clients, or—in their absence—specific property facts and guest-review excerpts | Logo/review carousel only when enough real material exists; otherwise static editorial proof | Reduce perceived risk without fabricated prestige |
| 9 | Gallery preview | Curated 8–12 image edit organized as Arrival, Interior, Water, View, Night | Accessible lightbox; “View all photographs” carries current category if selected | Reward exploration and lead to the full visual record |
| 10 | Closing invitation | Dusk or night image, tailored prompt, Stay and Event CTAs, concise contact alternative | CTA copy changes based on last selected audience path; no intrusive popup | Convert the emotional narrative into action |

### Home layout variants

**A — Editorial Residence**

- Hero uses an offset 40/60 composition with the title intruding into the photograph.
- Audience gateway is a typographic index, not three equal cards.
- Context is a small printed-map composition beside an oversized location statement.
- Estate preview uses overlapping editorial plates and room captions.
- Day sequence reads like four magazine spreads.
- Closing invitation is mostly typography with one narrow cinematic image.

**B — Luminous Cinema**

- Hero is a full-viewport establishing shot with minimal text.
- Audience gateway appears after the first emotional scene.
- The page progresses morning → afternoon → sunset → night.
- Estate and use cases appear as film chapters with short crossfades.
- Proof interrupts the cinematic flow as a quiet title card.
- Closing scene echoes the opening composition at night.

**C — Production House**

- Hero combines a powerful image with an immediate facts panel.
- Audience gateway is the primary organizing system: Stay / Shoot / Gather.
- Location context includes travel-time chips and a downloadable summary.
- Estate preview is an annotated contact sheet.
- Day sequence proves lighting conditions by time.
- Closing invitation offers Book, Request Deck, and Schedule Scout actions.

---

## 5. THE ESTATE — 9 Sections

**Page objective:** Provide an architectural and spatial understanding of the house while preserving a sense of discovery.

| # | Section | Content and visual composition | UX behavior | Conversion purpose |
|---|---|---|---|---|
| 1 | Estate introduction | Distinct page hero, architectural thesis, verified headline facts | Room index becomes sticky after the hero | Establish scale and orientation |
| 2 | At-a-glance facts | Bedrooms, bathrooms, guest capacity, major indoor/outdoor spaces, parking when verified | Facts expose definitions or caveats on focus/tap | Answer immediate qualification questions |
| 3 | Arrival | Gate, approach, entrance, first interior sightline | Short image sequence follows physical movement through the property | Make the plan understandable |
| 4 | Living and gathering | Living room, dining, kitchen, indoor-outdoor connection | Hotspots identify features without covering imagery; keyboard accessible | Show social capacity and design quality |
| 5 | Private rooms | Primary suite and guest rooms with honest distinctions and amenity details | Room selector changes content; URL can preserve selected room | Help guests assess sleeping arrangements |
| 6 | Pool and terraces | Pool, deck, dining terrace, view orientation, day/night usage | Before/after daylight toggle only if matched images exist | Sell the defining outdoor experience |
| 7 | Grounds and oak | Tree, swing, garden, paths, quiet zones, usable exterior areas | Slow vertical reveal or annotated site diagram | Give the name and landscape genuine meaning |
| 8 | Plans and specifications | Floor-plan placeholder pending approved plan; accessibility, parking, Wi-Fi, climate, rules, and key dimensions | Expandable specification groups; print-friendly mode | Serve planners and detail-oriented guests |
| 9 | Next-step gateway | Choose Stay, Host an Event, Gallery, or Ask a Question | Recommendations change based on sections viewed, without tracking personal data | Move users to the relevant conversion page |

### Estate layout variants

**A — Editorial Residence:** Sticky room photography with scrolling essays; floor plan treated like a foldout; asymmetry and captions create a collected-home feeling.

**B — Luminous Cinema:** The visit unfolds as arrival → interior → private rooms → water → grounds → night, using scene transitions and minimal interface.

**C — Production House:** Persistent room index, annotated images, spec drawers, orientation diagrams, and a print/download-ready location-dossier structure.

---

## 6. STAY — 9 Sections

**Page objective:** Move a qualified guest from aspiration to a confident booking action while setting accurate expectations.

| # | Section | Content and visual composition | UX behavior | Conversion purpose |
|---|---|---|---|---|
| 1 | Stay introduction | Guest-oriented hero, promise, verified occupancy, bedroom count, booking CTA | CTA remains available in a compact sticky bar after hero | Make purpose and availability path obvious |
| 2 | The guest experience | Concise narrative covering privacy, hosting style, arrival, and pace of stay | Three story beats reveal on scroll without hiding text | Define the experience beyond amenities |
| 3 | Sleeping arrangements | Each bedroom, bed type, bathroom relationship, privacy, and occupancy | Accessible room tabs or accordion; mobile defaults expanded one at a time | Prevent booking uncertainty |
| 4 | Shared living | Kitchen, dining, lounge, work areas, indoor-outdoor use | Photo-and-fact pairs; no ornamental slideshow | Demonstrate practical comfort |
| 5 | Pool, view, and outdoor life | Pool conditions, terraces, oak, dining, quiet hours, safety notes | Day/night comparison where photography supports it | Sell the key experience and disclose constraints |
| 6 | Amenities and services | Grouped essentials, comfort, entertainment, work, family, parking, optional services | Searchable/filterable list only if more than 24 items | Answer final qualification questions quickly |
| 7 | Neighborhood and itinerary | Curated morning, afternoon, dinner, and studio-access recommendations with travel times | Map/list toggle; external destinations clearly identified | Position the stay within Los Angeles |
| 8 | Guest proof and policies | Verified review excerpts, check-in/out, cancellation destination, house rules, accessibility notes | Policies expand inline; no surprise modal at booking | Build trust and set expectations |
| 9 | Availability and booking | Current booking destination, pricing disclaimer, inquiry alternative, direct-booking future slot | External booking opens with clear handoff; event inquiries are separated | Complete the booking journey |

### Stay layout variants

**A — Editorial Residence:** Reads like a travel-journal feature; rooms are individual editorial portraits; booking appears as a restrained reservation ribbon.

**B — Luminous Cinema:** Follows one guest day from waking to night swimming; amenities enter at natural moments; booking closes the film.

**C — Production House:** Leads with occupancy and availability; rooms use a comparison matrix; amenities, policies, and neighborhood logistics are faster to scan.

---

## 7. HOST AN EVENT — 10 Sections

**Page objective:** Qualify event and production leads, demonstrate creative range, answer logistics early, and collect enough information for a useful response.

| # | Section | Content and visual composition | UX behavior | Conversion purpose |
|---|---|---|---|---|
| 1 | Host introduction | Page-specific hero, approved event imagery, three audience routes: Film & Photo, Private Events, Brand & Corporate | Selecting a route personalizes examples, facts, and form subject | Confirm audience fit immediately |
| 2 | Use-case selector | Each route explains best-fit formats, atmosphere, and primary limitations | Persistent segmented control; selection is reflected in the URL | Prevent irrelevant information overload |
| 3 | Spaces available | Terrace, pool, interiors, kitchen, grounds, arrival zone, holding areas when verified | Interactive location map links spaces to images and dimensions | Show how the property can be used |
| 4 | Capacity and configurations | Seated, standing, crew, staging, parking, load-in, power, sound, and curfew—all pending verification where needed | Toggle between use cases; unknown values visibly marked “Confirm with host” | Qualify serious inquiries honestly |
| 5 | Visual possibilities | Curated case-study-style scenes: editorial shoot, dinner, launch, interview, retreat | Filtered image story; no fabricated past-event claims | Help visitors translate the house into their concept |
| 6 | Production logistics | Access, Wi-Fi, power, hair/makeup possibilities, holding, restrooms, neighborhood sensitivity, insurance | Downloadable preliminary location sheet after facts are approved | Reduce scout friction |
| 7 | Event services | Coordination, rentals, catering policy, security, cleaning, preferred partners, optional add-ons | Service inclusions and third-party items are clearly separated | Clarify scope and increase lead quality |
| 8 | Proof / selected occasions | Approved past events, credits, testimonials, or anonymized factual examples | Each case reveals brief, configuration, and outcome; no logo without approval | Demonstrate competence |
| 9 | Planning process | Inquiry → fit call → scout → proposal → agreement → event; typical response expectations | Progress diagram becomes a simple vertical sequence on mobile | Explain what happens after submission |
| 10 | Event inquiry | Purpose-built form: event type, date flexibility, guest/crew count, hours, budget range, spaces, notes, attachments/link | Multi-step only if completion testing supports it; autosave locally; clear success state | Capture an actionable brief |

### Host layout variants

**A — Editorial Residence:** Event types appear as art-directed stories; logistics arrive in elegant foldout panels; form feels like a private commission request.

**B — Luminous Cinema:** Opens with a finished-event scene, rewinds through transformation and setup, then reveals spaces, logistics, process, and inquiry.

**C — Production House:** Audience selector and spec summary appear immediately; annotated plans, capacity tables, location packet, and structured lead form dominate.

---

## 8. GALLERY — 8 Sections

**Page objective:** Present a complete, fast, and art-directed visual record without turning the page into an undifferentiated image dump.

| # | Section | Content and visual composition | UX behavior | Conversion purpose |
|---|---|---|---|---|
| 1 | Gallery introduction | Page title, short curatorial statement, category count, strongest unused image | Category navigation becomes sticky after hero | Set expectations and establish authorship |
| 2 | Featured visual story | 8–12-image edit with intentional sequence and captions | Controlled carousel or scroll sequence with buttons, keyboard, and progress | Deliver a high-impact first viewing |
| 3 | Category index | All, Architecture, Interiors, Bedrooms, Pool & Grounds, Views, Events/Production when approved, Night | Filters update URL, count, and grid without page reset | Make a large library manageable |
| 4 | Complete image collection | Varied but disciplined grid preserving important crops | Progressive loading, stable layout, no duplicate images | Provide depth and completeness |
| 5 | Image detail view | Large image, room/category, caption, sequence position, related images | Accessible lightbox, swipe plus visible controls, close restores scroll position | Support close inspection |
| 6 | Day to night | Matched locations across morning, golden hour, blue hour, and night | Time slider only for true matched scenes; otherwise paired images | Prove the property's range |
| 7 | Press and approved use | Credits, publications, production stills, usage notes, approved downloadable assets | Separate press kit action; download requires only necessary contact details | Serve media and production inquiries |
| 8 | Gallery exit paths | Context-aware links to Estate, Stay, Host, and Contact | CTA reflects active image category | Convert visual interest into the right next step |

### Gallery layout variants

**A — Editorial Residence:** Curated magazine plates first, masonry archive second, captions always visible, lightbox resembles a print-viewer.

**B — Luminous Cinema:** Full-screen chapters with deliberate pacing, followed by a conventional filterable archive for visitors who want speed.

**C — Production House:** Contact-sheet opening, fast filters, metadata, orientation tags, shortlist function, and a clear location-packet request.

---

## 9. CONTACT — 8 Sections

**Page objective:** Route each inquiry correctly, set response expectations, and collect the minimum useful information without creating friction.

| # | Section | Content and visual composition | UX behavior | Conversion purpose |
|---|---|---|---|---|
| 1 | Contact introduction | Human, direct invitation with real response expectation and one quiet property image | No generic “Get in touch” headline; page purpose is explicit | Reduce uncertainty |
| 2 | Inquiry routing | Stay, Event, Production, Press/Partnership, General | Selecting a route changes only relevant fields and supporting copy | Send leads into the right workflow |
| 3 | Quick-contact options | Email, phone if approved, booking link, location-scout request | Copy email control; clear external-link labels | Serve visitors who do not need a form |
| 4 | Context panel | Address area, privacy note, travel context, business hours or response window | Exact arrival instructions are never publicly exposed | Establish location and expectations safely |
| 5 | Tailored inquiry form | Shared identity/contact fields plus route-specific details | Inline validation, keyboard support, saved draft, clear required/optional labels | Capture enough information to respond well |
| 6 | What happens next | Confirmation, response, qualification call, scout or booking handoff | Steps update based on inquiry route | Make submission feel consequential |
| 7 | Frequently asked questions | Availability, rates, events, shoots, parking, pets, privacy, neighborhood constraints | Search-free accordion; answers link to deeper pages | Remove common blockers before submission |
| 8 | Final reassurance | Privacy statement, no-spam promise, alternate contact, closing image or line | Success state replaces—not merely clears—the form | End with trust and clarity |

### Contact layout variants

**A — Editorial Residence:** Large typographic invitation, route choices as a refined index, form revealed only after intent selection.

**B — Luminous Cinema:** Quiet full-screen opening image transitions into a focused daylight/dusk form sequence with minimal surrounding content.

**C — Production House:** Route selector, response details, and structured form visible immediately; FAQs and process sit beside it on wide screens.

---

## 10. Cross-Page Story and Internal Linking

The pages must feel related without repeating the same sections.

| From | Natural next page | Reason |
|---|---|---|
| Home audience gateway | Stay / Host | User declares intent |
| Home estate preview | The Estate | User wants spatial detail |
| Estate private rooms | Stay | Bedrooms create booking confidence |
| Estate spaces/specifications | Host | Spaces create event or production interest |
| Stay outdoor life | Gallery filtered to Pool & Grounds | User wants visual proof |
| Host visual possibilities | Gallery filtered to Events/Production | Planner wants examples |
| Gallery image detail | Estate or Host based on category | Image interest becomes contextual action |
| Any page | Contact with inquiry type preselected | Reduce repeated user work |

Back buttons, browser history, shared URLs, and scroll restoration must behave normally. Filters and audience selections should be represented in the URL where practical.

---

## 11. Content and Asset Requirements

### Required before final production

- Approved property name and wordmark
- Verified bedroom, bathroom, occupancy, parking, and capacity facts
- Current booking URL and booking rules
- Correct inquiry email and phone
- Event rules, insurance requirements, curfew, access, and neighborhood constraints
- Approved press names, logos, credits, testimonials, and event imagery
- Floor plans or permission to omit them
- Photography usage rights
- Privacy policy and legal business name

### Content integrity

- Unknown information is labeled **To be confirmed**, never invented.
- Placeholder testimonials and logos must never enter production.
- Copy avoids empty luxury language such as “unparalleled,” “breathtaking,” and “exclusive” unless supported by a specific fact.
- The address is Studio City. “Hollywood Hills” may be used only as approved positioning, not as a false physical address.

### Photography shot map

Before design begins, the 81 supplied photographs must be catalogued by:

- Orientation and resolution
- Room or exterior area
- Time of day
- Audience relevance: Stay / Event / Production
- Desktop and mobile crop viability
- Hero eligibility
- Duplicate or near-duplicate status
- Retouching requirement

The design should be built around the strongest available material, not force photographs into a predetermined template.

---

## 12. Conversion and Form Requirements

### Stay path

Home → Stay → external availability/booking destination. The handoff must say that the user is leaving White Oak and identify the booking provider.

### Event / production path

Home or Host → tailored inquiry → confirmation → response expectation. Event inquiries must not be sent through a generic contact form.

### Form behavior

- Server-backed delivery; no `mailto:` forms
- Spam protection that does not punish legitimate users
- Field-level validation
- Explicit consent language
- Useful confirmation screen and confirmation email
- Analytics events for form start, error, completion, and booking handoff
- No sensitive information requested

---

## 13. SEO, Analytics, and Sharing

Each page receives a unique title, description, canonical URL, social image, and structured data where appropriate.

- Home: property identity and location positioning
- Estate: architecture, rooms, amenities, and grounds
- Stay: luxury stay intent
- Host: event venue and filming-location intent
- Gallery: property image archive
- Contact: inquiry intent

Measure:

- Audience gateway selection
- Navigation path
- Gallery filters and image opens
- Availability handoff
- Event form start and completion
- Contact route selection
- Scroll depth only as supporting evidence, not success by itself

No analytics or advertising scripts launch without a consent and privacy decision.

---

## 14. Acceptance Criteria

The design is not ready for client review unless all of the following are true:

1. All six primary pages are real URLs.
2. Every page contains 7–10 substantive sections as specified.
3. All three concepts exist for every page.
4. Switching concepts preserves the current page.
5. Every concept changes composition and UX, not merely color and type.
6. The same hero photograph is not reused across pages.
7. Every CTA works or is visibly labeled as a prototype.
8. Forms have complete validation, error, loading, and success states.
9. Desktop, tablet, and mobile compositions have been reviewed.
10. Keyboard navigation and reduced motion have been tested.
11. No invented facts, testimonials, clients, press, or capacity claims appear.
12. The full property image library has been catalogued before final art direction.
13. Performance budgets are met on mobile.
14. Every page has a clear beginning, progression, proof point, and next action.
15. Client comparison controls are clearly separated from the final-site navigation.

---

## 15. Approval Gates

The next implementation proceeds in this order:

1. Approve this information architecture and the six page contracts.
2. Catalogue the real property assets and verify facts.
3. Produce low-fidelity wireframes for all six pages in all three directions.
4. Review the three homepages and one representative inner page from each direction.
5. Choose or combine a direction.
6. Produce high-fidelity desktop and mobile designs.
7. Build the approved system.
8. Complete content, accessibility, performance, and conversion QA.
9. Publish only after client sign-off.

No high-fidelity rebuild should begin by improvising sections that are already defined here.
