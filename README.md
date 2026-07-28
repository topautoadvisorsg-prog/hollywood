# White Oak Luxury Property Showcase

White Oak is a three-concept customer presentation and the first case study for a reusable luxury-property showcase service.

The project demonstrates how the same property can be positioned through three distinct experiences:

1. **Editorial Residence** — architectural-magazine composition and restrained luxury.
2. **Luminous Cinema** — a four-act interactive property documentary.
3. **Location Dossier** — premium production, event and stay qualification.

Each concept is available across the same real page routes so customers can compare layout, pacing, motion, photography, information density and conversion behavior without confusing content differences with design differences.

## What this repository contains

- `SPEC.md` — binding White Oak customer experience and production requirements.
- `WHITE_OAK_PLATFORM_PLAYBOOK.md` — how White Oak becomes a repeatable sales and delivery system.
- `WHITE_OAK_FEATURE_REGISTRY.md` — living inventory of implemented, prototype and planned UX modules.
- `WHITE_OAK_PRESENTATION_GUIDE.md` — the customer-review and future case-study presentation sequence.
- `WHITE_OAK_CONCEPT_APPLICATION_PLAN.md` — detailed allocation of research patterns across concepts and pages.
- `WHITE_OAK_CLIENT_VISION_BRIEF.md` — customer discovery authority and factual boundaries.
- `COMPETITOR_UX_RESEARCH.md` and supporting review documents — source research and interpretation.

## Case-study lifecycle

White Oak is intentionally documented across four stages:

1. **Discovery** — what the customer said and what the property needed.
2. **Concept review** — three demonstrably different directions.
3. **Decision recipe** — the selected layout, motion, typography, gallery and conversion features.
4. **Final outcome** — the production website created from that recipe.

This lets a future prospect see both the range of options and the discipline used to arrive at a final result.

## Current presentation

- `/editorial` — Editorial Residence
- `/cinematic` — Luminous Cinema
- `/production` — Location Dossier

Switching concepts preserves the equivalent page wherever possible.

## Development

```bash
npm install
npm run dev
npm run build
```

The application uses the existing vinext/Sites deployment structure. Preserve `.openai/hosting.json`, the current package manager and the multi-route architecture.
