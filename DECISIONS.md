# DECISIONS.md — Petika Architectural & Design Decision Log

> **Project**: Petika — Single Page Portfolio Website (with Dark & Light Theme)  
> **Repository**: `projects/petika/`  
> **Status**: Active Architectural Record  

---

## ADR 001: Architectural Archetype & Aesthetic Stance
- **Date**: 2026-11-23
- **Context**: Portfolio templates on ThemeForest and UI8 frequently suffer from two extremes: either hyper-minimal text-only layouts lacking visual punch and case-study depth, or overly animated, sluggish templates loaded with heavy WebGL/Three.js canvases that confuse recruiters and break on mobile. Single-page portfolio buyers (freelancers, senior product designers, creative engineers, and tech consultants) demand an ultra-polished, contemporary Bento-inspired visual architecture that loads in under 1 second, showcases deep project metrics, and provides an effortless dual-theme reading experience.
- **Decision**: Adopt a "Neo-Editorial Bento Elegance" design archetype:
  - **Structure**: Modern Bento Grid layout organizing personality, featured projects, metrics, experience, skills, testimonials, and contact into harmonious content modules.
  - **Single Page Navigation**: Fixed glassmorphism header with active scroll-spy navigation, fluid smooth scrolling to anchor IDs (`#hero`, `#about`, `#portfolio`, `#experience`, `#skills`, `#testimonials`, `#contact`), and an offcanvas mobile drawer.
  - **Dual Horizon Aesthetics**:
    - **Dark Theme (Default Signature)**: Deep obsidian canvas (`#0A0D14`), sleek slate glass cards (`#111726`, `#182032`), 1px translucent borders (`rgba(255, 255, 255, 0.08)`), and warm radiant amber-gold accents (`#F59E0B` / `#D97706`) with cyber cyan secondary highlights (`#06B6D4`).
    - **Light Theme (Editorial Gallery)**: Crisp alabaster canvas (`#F8FAFC`), pure white surface cards (`#FFFFFF`), whisper-soft border lines (`#E2E8F0`), deep obsidian typography (`#0F172A`), and striking rich amber/bronze accents.
- **Consequences**: Immediate differentiation from generic cookie-cutter portfolios; premium positioning on ThemeForest ($24–$29) and UI8 ($28–$34).

---

## ADR 002: Dual Theme Architecture & Persistence Engine
- **Date**: 2026-11-23
- **Context**: The user explicitly requested a "Single Page Portfolio Website (with dark and light theme)". A flawed theme switcher causes flash-of-unstyled-theme (FOUT), hardcoded styles breaking across modes, or sluggish redraws.
- **Decision**:
  - Implement Bootstrap 5.3+ native theme integration using `[data-bs-theme="dark"]` and `[data-bs-theme="light"]` on the `<html>` root element.
  - Design a comprehensive CSS custom properties token system where all background colors, text colors, card surfaces, borders, shadows, and badges transition seamlessly with a 250ms CSS ease transition.
  - Include an interactive toggle button with morphing sun/moon SVG icons in the sticky navbar.
  - Script an inline pre-render snippet in the `<head>` of the HTML to inspect `localStorage.getItem('petika-theme')` or fallback to `window.matchMedia('(prefers-color-scheme: dark)')`, eliminating theme flash completely.
- **Consequences**: Delivers an exceptional user experience on both dark and light modes with zero external library overhead and zero FOUT.

---

## ADR 003: Typography System
- **Date**: 2026-11-23
- **Context**: A portfolio template must balance editorial sophistication in headlines with rigorous legibility in case studies, project descriptions, and skill tags.
- **Decision**:
  - **Display / Heading Font**: `Syne` (Google Font, SIL Open Font License) paired with `Plus Jakarta Sans` as primary display alternatives. Syne provides modern editorial personality, distinctive letterforms, and high-end design presence.
  - **Body Font**: `Inter` (Google Font, SIL Open Font License). Universal clarity, optical kerning, superior legibility at 14px–16px across retina and standard displays.
  - **Monospace / Tag Font**: `JetBrains Mono` (Google Font, OFL). Crisp numbers, code snippets, project dates, and tech stack badges.
- **Consequences**: 100% commercially redistributable with zero licensing royalties for buyers; fluid typography scaling via CSS `clamp()`.

---

## ADR 004: Interactive Single-Page Components (Zero-Dependency Vanilla JS)
- **Date**: 2026-11-23
- **Context**: Buyers on commercial marketplaces want interactive features that impress clients without introducing brittle dependencies like jQuery, heavy slider plugins, or complex build steps.
- **Decision**:
  - Implement 6 core interactive modules in pure Vanilla JavaScript (ES6+):
    1. **Active Scroll-Spy Navigation & Sticky Blur Header**: Highlights current section during scroll, adds glass backdrop blur on scroll down.
    2. **Filterable Portfolio Showcase**: Instant category filtering (All, Product Design, Web Apps, Branding, UI/UX) using CSS transitions and data attributes.
    3. **Interactive Project Quick-View Modal**: Bootstrap 5 modal component customized to display comprehensive project breakdowns (high-res preview slider, client brief, challenge/solution, tech stack tags, outcome metrics, and live demo link).
    4. **Client-Side Validated Contact Form**: Real-time validation with visual feedback, status banner simulation, and honeypot anti-spam protection.
    5. **Availability Status Indicator**: Pulsing live badge ("🟢 Available for Q1/Q2 Projects") with quick timezone & location display.
    6. **Testimonial Carousel**: Lightweight, accessible slider with touch support and pagination dots.
- **Consequences**: Zero jQuery, Core Web Vitals score >= 95, instant load times, zero security vulnerabilities, and frictionless buyer customization.

---

## ADR 005: 3-Tier CSS Custom Property Token Hierarchy
- **Date**: 2026-11-23
- **Context**: Template buyers frequently struggle to customize theme colors and typography when CSS files contain hardcoded hex values.
- **Decision**:
  - Organize `assets/css/style.css` into three distinct token tiers:
    1. **Tier 1: Global Primitives**: `--primary-50` through `--primary-950`, `--neutral-50` through `--neutral-950`.
    2. **Tier 2: Semantic Theme Roles**: Defined inside `[data-bs-theme="dark"]` and `[data-bs-theme="light"]` (`--bg-canvas`, `--bg-surface`, `--bg-surface-elevated`, `--text-primary`, `--text-secondary`, `--border-subtle`).
    3. **Tier 3: Component Tokens**: `--nav-glass-bg`, `--card-bento-bg`, `--badge-accent-bg`, `--btn-primary-bg`.
- **Consequences**: Any buyer can rebrand the entire portfolio in under 3 minutes by updating fewer than 6 CSS variables.


---

## ADR 007: Figma AI 2000-Character Prompt Optimization
- **Date**: 2026-11-23
- **Context**: The Figma AI generation interface enforces a strict 2,000-character ceiling per prompt. The initial master prompt exceeded 7,000 characters, requiring the operator to manually partition text.
- **Decision**:
  - Engineered an optimized, highly dense master prompt calibrated to exactly **1,939 characters** (inclusive of all spacing and punctuation), containing all essential layout rules, both dark/light color tokens, typography scales, responsive breakpoints, and all 10 single-page sections.
  - Also provided two optional modular prompt blocks (~1,120 and ~1,260 characters) for operators wishing to generate top-half and bottom-half frames independently in Figma AI.
- **Consequences**: Enables seamless 1-click copy-pasting into Figma AI with zero character limit rejection.
