# White Oak Feature Registry

**Purpose:** Living inventory of demonstration modules, their current maturity and their role in future property engagements.

Status meanings:

- **Implemented** — functional in the current presentation.
- **Prototype** — functional concept requiring final assets, content or production hardening.
- **Planned** — documented but not yet built.
- **Conditional** — built only when truthful source material exists.

## Review and comparison system

| Module | Status | Current use | Reuse rule |
|---|---|---|---|
| Concept-preserving route switcher | Implemented | Editorial / Luminous / Dossier | Presentation-only; remove from final customer site |
| Equivalent page comparison | Implemented | Same route across concepts | Keep content facts stable during comparison |
| Preference capture | Planned | Customer review | Device-local unless a feedback backend is requested |
| Decision recipe | Documented | Post-review | Required before combining concepts |

## Hero systems

| Module | Status | Current use | Reuse rule |
|---|---|---|---|
| Full-screen media hero | Implemented | All three concepts | Real video may replace photographic sequence |
| Auto-advancing property sequence | Implemented | All home concepts | Visible pause and manual controls required |
| Swipe and arrow navigation | Implemented | Hero galleries | Retain keyboard/touch alternatives |
| Thumbnail hero navigation | Implemented | Hero galleries | Optional on minimal final concepts |
| Floating property summary | Implemented | Editorial and Luminous | Facts must be verified |
| Cinematic arrival curtain | Prototype | Luminous | Replace photographic reveal with real drone footage |
| Drone arrival | Planned | Luminous signature moment | Requires optimized real footage and poster |

## Narrative and motion

| Module | Status | Current use | Reuse rule |
|---|---|---|---|
| Four-act property documentary | Implemented | Luminous | Rewrite acts for each property |
| Ten-shot emotional journey | Implemented | Arrive → Breathe → Enter → Gather → Taste → Connect → Unwind → Reflect → Rest → Stay | Preserve narrative purpose; rewrite the verbs for each property |
| Sticky documentary chapter rail | Implemented | Luminous homepage | Provides optional direct navigation without replacing guided scrolling |
| Signature-moment pacing | Implemented | Arrival, threshold, pool/sunset and night | Limit major moments so quieter sections can breathe |
| Emotional chapter language | Implemented | Arrive / Breathe / Gather / Connect / Rest / Stay | Use verbs appropriate to the property |
| Scroll-controlled camera drift | Implemented | Luminous chapters | Reduce on mobile and disable for reduced motion |
| Opposing image/copy movement | Implemented | Luminous | Keep subtle; avoid readability loss |
| Soft chapter dissolves | Implemented | Luminous | Preferred luxury transition |
| Scroll progress | Implemented | Shared | Optional in final direction |
| Reveal-on-scroll | Implemented | Shared | Calm timing; content remains available without JS |
| Pinned scrubbed sequences | Planned | Signature moments | GSAP ScrollTrigger candidate |
| Full-page smooth-scroll layer | Research only | None | Add Lenis only after accessibility and touch testing |
| Lightweight WebGL moment | Conditional | None | One defensible moment, never the full site |

## Sound

| Module | Status | Current use | Reuse rule |
|---|---|---|---|
| Muted ambient-sound control | Prototype | Luminous | Always user initiated |
| Concept wind ambience | Prototype | Luminous | Clearly labeled; not represented as property recording |
| Property field recording | Planned | Final Luminous | Birds, leaves, pool, fire and city tone |
| Act-based sound fades | Planned | Final Luminous | Stop when page is hidden |

## Gallery systems

| Module | Status | Current use | Reuse rule |
|---|---|---|---|
| Editorial collage | Implemented | Editorial home | Art-direct crops per property |
| Masonry archive | Implemented | Gallery | Maintain stable layout during loading |
| Cinematic full-screen grid | Implemented | Luminous gallery | Preserve fast archive access |
| Dense contact sheet | Implemented | Dossier gallery | Best for production/location users |
| Full-screen lightbox | Implemented | All galleries | Restore scroll position on close |
| Keyboard navigation | Implemented | Lightbox | Arrow keys and Escape |
| Thumbnail filmstrip | Implemented | Lightbox | Touch-scrollable |
| Image zoom | Implemented | Lightbox | Constrain mobile scale |
| Category filters and URL state | Planned | Gallery | Required for larger final libraries |
| Day/night comparison | Conditional | Estate / gallery | Only with genuinely matched scenes |

## Property exploration

| Module | Status | Current use | Reuse rule |
|---|---|---|---|
| Sticky story navigation | Implemented | Home concepts | Labels adapt to final IA |
| Room-to-photo navigator | Implemented | Estate | Approved room names required |
| Interactive floor plan | Planned / conditional | Estate | Requires approved plan |
| Annotated property imagery | Conceptual | Dossier | Accessibility and mobile labels required |
| Property facts panel | Implemented | Dossier / floating card | Never publish provisional facts |
| Amenities summary | Implemented | Stay | Expand to categorized data when verified |

## Conversion systems

| Module | Status | Current use | Reuse rule |
|---|---|---|---|
| Persistent private-inquiry action | Implemented | Shared | Release before footer and avoid content collision |
| Contextual CTA language | Implemented | Concepts | Match Stay / Gather / Shoot intent |
| External availability handoff | Implemented | Stay | Identify booking provider |
| Qualified production scout flow | Conceptual | Dossier | Final form requires server delivery |
| Qualified event proposal flow | Conceptual | Dossier | Final form requires route-specific fields |
| Generic mail form | Prototype only | Contact | Must be replaced by server-backed delivery |

## Accessibility and performance

| Requirement | Status |
|---|---|
| Reduced-motion fallbacks | Implemented |
| Visible keyboard focus | Implemented |
| Media pause control | Implemented |
| Touch and keyboard gallery alternatives | Implemented |
| Responsive concept compositions | Implemented, ongoing QA |
| Real video adaptive delivery | Planned |
| Mobile LCP target below 2.5 seconds | Production acceptance gate |
| WCAG 2.2 AA review | Production acceptance gate |

## Module promotion rule

A prototype becomes a reusable production module only after:

1. Real assets and truthful content are connected.
2. Desktop, mobile, keyboard and reduced-motion behavior pass review.
3. Performance impact is measured.
4. Configuration inputs are separated from White Oak-specific copy.
5. The module has a documented fallback.
