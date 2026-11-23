# Feature Requirements & Competitive Matrix: Petika

> **Template Name**: Petika  
> **Date**: 2026-11-23  

---

## 1. Feature Classification Matrix

| Feature Tier | Feature Name | Description & Commercial Impact | Technical Stack |
|---|---|---|---|
| **P0: Mandatory Baseline** | Single-Page Smooth Scroll | Fluid anchor-based navigation between all sections with browser history support | Native CSS `scroll-behavior: smooth` + JS fallback |
| **P0: Mandatory Baseline** | Dual Theme Engine | Instant switch between Dark Mode and Light Mode with zero FOUT on reload | `data-bs-theme` + CSS Tokens + `localStorage` |
| **P0: Mandatory Baseline** | Sticky Glass Header | Blurred translucent navbar with active scroll-spy highlighting current section | CSS `backdrop-filter` + `IntersectionObserver` |
| **P0: Mandatory Baseline** | 6-Viewport Responsive | Pixel-perfect layout from 375px mobile up to 1920px 4K with zero horizontal scroll | Bootstrap 5.3.3 Grid + CSS Media Queries |
| **P0: Mandatory Baseline** | Semantic HTML5 & W3C | Clean landmarks (`header`, `main`, `section`, `footer`), sequential headings, alt text | W3C Validated HTML5 |
| **P1: Commercial Standard** | Bento Hero Layout | Asymmetric grid housing profile card, availability pulse, punchy headline, and metric counters | CSS Grid / Flexbox + Bootstrap 5 |
| **P1: Commercial Standard** | Filterable Portfolio Grid | Instant category filtering (All, UI/UX, Web, Mobile, Brand) with smooth transitions | Vanilla ES6+ data attribute filtering |
| **P1: Commercial Standard** | Interactive Case Study Modal | Rich modal view showcasing full project breakdown (Challenge, Solution, Tech Stack, Metrics, Demo Link) | Bootstrap 5.3 Modal + Vanilla JS dynamic injection |
| **P1: Commercial Standard** | Career Journey Timeline | Chronological experience cards with company logos, roles, tenures, and bullet achievements | Semantic HTML timeline + CSS pseudoelements |
| **P1: Commercial Standard** | Skills & Tools Bento | Categorized proficiency chips (Design Systems, Frontend Engineering, Strategy & Tools) | Badges & flex wrappers with hover micro-glow |
| **P1: Commercial Standard** | Testimonial Slider | Verified client feedback cards with star ratings, quotes, headshots, and credentials | Lightweight Vanilla JS carousel or Bootstrap Carousel |
| **P1: Commercial Standard** | Interactive Contact Hub | Working client-side validated form with honeypot spam protection and status banner | Vanilla JS constraint validation API |
| **P2: Elite Differentiator** | 1-Click Copy Contact Pills | Interactive pills for email, phone, location that copy text to clipboard with instant confirmation tooltip | `navigator.clipboard.writeText` |
| **P2: Elite Differentiator** | Live Availability Pulse | Pulsing animated indicator ("Available for Q1/Q2 Projects") with timezone and response time | CSS keyframe radar pulse |
| **P2: Elite Differentiator** | 60-Second Rebranding | 3-tier CSS custom property hierarchy in `:root` for effortless buyer color overrides | CSS Custom Properties |
| **P2: Elite Differentiator** | Standalone Documentation | Comprehensive, stylish in-browser HTML manual guiding buyers on setup and customization | Standalone HTML + CSS |
