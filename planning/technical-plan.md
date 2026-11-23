# Technical Plan & Engineering Architecture: Petika

> **Template Name**: Petika  
> **Tech Stack**: HTML5, Bootstrap 5.3.3, Modular CSS3, Vanilla ES6+ JavaScript  
> **Quality Benchmarks**: 100% W3C Valid, Core Web Vitals Desktop >= 95 / Mobile >= 90, Zero jQuery  
> **Date**: 2026-11-23  

---

## 1. Architecture Overview & Core Principles

Petika is engineered as a zero-dependency, ultra-lightweight single-page portfolio template that operates straight out of the box in any browser without needing Node.js, Webpack, Vite, or npm build steps.

### Technology Stack
1. **Semantic HTML5**: Semantic document landmarks (`<header id="header">`, `<main>`, `<section id="...">`, `<footer>`), sequential heading progression (H1 -> H2 -> H3), and explicit image aspect ratios.
2. **Bootstrap 5.3.3 (Local Minified)**: Used exclusively for its robust 12-column flexbox grid system, accessible Modal component (`#projectModal`), and offcanvas mobile menu. Zero modifications to `bootstrap.min.css`.
3. **Modular CSS3 (`assets/css/style.css`)**: 3-tier custom property token architecture, BEM component conventions, hardware-accelerated transitions, and dual theme mapping.
4. **Vanilla ES6+ JavaScript (`assets/js/main.js`)**: Encapsulated within `DOMContentLoaded`, handling smooth scroll-spy, theme switching, project category filtering, case study modal population, client-side contact validation, and 1-click clipboard copy pills.

---

## 2. Interactive Feature Logic Architecture

### Feature 1: Zero-FOUT Dual Theme Switcher
- **Pre-Render Script in `<head>`**:
  ```javascript
  (function() {
    const savedTheme = localStorage.getItem('petika-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-bs-theme', initialTheme);
  })();
  ```
- **Runtime Toggle (`#themeToggleBtn`)**: Listens for click events, toggles between `dark` and `light`, animates sun/moon SVG icons, and saves preference to `localStorage`.

### Feature 2: Pure Vanilla JS Category Filtering
- Portfolio filter buttons have `data-filter="all|product|web|mobile|brand"`.
- Project cards have `data-category="product web"`.
- When a filter is clicked, active class switches immediately; cards that do not match receive `opacity: 0; transform: scale(0.96);` before being hidden (`display: none;`), while matching cards animate in smoothly.

### Feature 3: Dynamic Case Study Modal (`#projectModal`)
- Clicking "Quick View" on any project card reads metadata from `data-project-*` attributes on the card.
- Injects project title, client, year, narrative brief, challenge, solution, impact metrics, tech tags, and demo link into the modal template.
- Triggers `new bootstrap.Modal('#projectModal').show()`.

### Feature 4: Interactive Validated Contact Form
- Uses native HTML5 constraint validation API enhanced with custom error feedback.
- Disables button and displays loading spinner on submit.
- Simulates realistic 800ms server request, clears form, and reveals animated success banner with auto-dismiss.
- Honeypot hidden input prevents automated spam submissions.

### Feature 5: 1-Click Copy Contact Pills
- Clicking email, phone, or handle pills triggers `navigator.clipboard.writeText()`.
- Dynamically swaps pill text to `"Copied to Clipboard! ✓"` for 2 seconds before reverting.

---

## 3. Performance & Quality Targets

- **Page Weight**: < 1.2MB total initial load (including all compressed WebP images and SVG icons).
- **Lighthouse Performance**: >= 95 Desktop / >= 90 Mobile.
- **Core Web Vitals**:
  - `LCP` (Largest Contentful Paint) < 1.5s
  - `CLS` (Cumulative Layout Shift) < 0.05
  - `INP` (Interaction to Next Paint) < 50ms
- **Browser Compatibility**: Chrome, Firefox, Safari (including iOS Safari 16+), Edge.
- **Zero Console Errors**: Strict hygiene verified in developer tools.
