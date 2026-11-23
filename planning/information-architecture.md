# Information Architecture & Single-Page User Flow: Petika

> **Template Name**: Petika  
> **Date**: 2026-11-23  

---

## 1. High-Level Single-Page Layout Philosophy

Petika adopts a single-page smooth-scroll architecture augmented by interactive modal viewports. This structure completely removes routing latency while maintaining comprehensive depth for case studies and contact workflows.

```text
[ Sticky Glassmorphism Header (Brand, Navigation, Dark/Light Switcher, Hire Me CTA) ]
                                    │
                                    ▼
[ Bento Hero Showcase (#hero) — Avatar, Headline, Availability Pulse, Quick Metrics ]
                                    │
                                    ▼
[ About & Philosophy Bento (#about) — Bio Narrative, Principles, CV/vCard Download ]
                                    │
                                    ▼
[ Filterable Works & Case Studies (#portfolio) — Category Chips (All, UI/UX, Web, Mobile, Brand) ]
                                    │ (Clicking card opens)
                                    ├───► [ In-Page Case Study Modal (#projectModal) ]
                                    │
                                    ▼
[ Career Journey & Experience (#experience) — Interactive Timeline, Logos & Impact Metrics ]
                                    │
                                    ▼
[ Skills, Tools & Tech Stack (#skills) — Categorized Badges, Frameworks & Tooling ]
                                    │
                                    ▼
[ Client Testimonials & Social Proof (#testimonials) — Review Cards, Ratings, Verified Badges ]
                                    │
                                    ▼
[ Interactive Contact & Booking Hub (#contact) — Validated Form, Copy Pills, Timezone Indicator ]
                                    │
                                    ▼
[ Minimalist Single-Page Footer — Social Icons, Copyright, Smooth Scroll-to-Top ]
```

---

## 2. Navigation Architecture & Active State Governance

### Fixed Sticky Header
- **Scroll Behavior**:
  - `scrollY == 0`: Fully transparent or ultra-light glass backdrop with 1px border.
  - `scrollY > 50px`: Elevated glass backdrop with `backdrop-filter: blur(16px)`, subtle bottom border shadow, and active link indicator.
- **Scroll-Spy**: Pure Vanilla JS `IntersectionObserver` observing section elements (`#hero`, `#about`, `#portfolio`, `#experience`, `#skills`, `#testimonials`, `#contact`) and applying `.active` to corresponding header anchor links.
- **Mobile Drawer**: Offcanvas overlay sliding smoothly from the right, providing identical navigation links, theme toggle, and contact trigger.

### Theme Toggle Mechanism
- Positioned in the header navigation bar on both desktop and mobile views.
- Sun / Moon SVG icons with dynamic rotation on switch.
- Saves preference to `localStorage.setItem('petika-theme', theme)`.
- Updates `document.documentElement.setAttribute('data-bs-theme', theme)` in real time without page reload.

---

## 3. Modal Architecture for Case Studies
- Built upon Bootstrap 5.3 modal system (`#projectModal`), customized with bespoke dark/light glassmorphic styling.
- Dynamically populated via data attributes (`data-project-title`, `data-project-category`, `data-project-client`, `data-project-year`, `data-project-desc`, `data-project-challenge`, `data-project-solution`, `data-project-metrics`, `data-project-tags`, `data-project-image`, `data-project-link`).
- Allows the single page to showcase limitless project details without requiring separate HTML files.
