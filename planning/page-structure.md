# Page Structure & Granular Section Breakdown: Petika

> **Template Name**: Petika  
> **Type**: Single Page Portfolio Website (with Dark & Light Theme)  
> **Date**: 2026-11-23  

---

## Comprehensive Single-Page Layout Structure

### Section 1: Global Sticky Glass Header (`<header id="header" class="header-nav">`)
- **Brand Identity**: Monogram mark `PETIKA` with geometric accent dot and sleek typography.
- **Availability Pill**: Subtle compact badge (`avail-pill-nav`) with pulsating dot: `Available for Projects`.
- **Navigation Menu (`<nav>`)**:
  - `Home` (`#hero`)
  - `About` (`#about`)
  - `Work` (`#portfolio`)
  - `Experience` (`#experience`)
  - `Skills` (`#skills`)
  - `Testimonials` (`#testimonials`)
  - `Contact` (`#contact`)
- **Header Actions**:
  - **Theme Toggle Button (`#themeToggleBtn`)**: Dual icon button (Sun/Moon SVG) with tooltip and rotation transition.
  - **Download CV / Hire Me CTA (`.btn-primary`)**: Direct anchor trigger jumping to `#contact` or downloading resume file.
  - **Mobile Hamburger Toggle**: Triggers offcanvas navigation overlay for viewports < 992px.

---

### Section 2: Bento Hero Section (`<section id="hero" class="section-hero">`)
- **Architecture**: Asymmetrical 12-column Bento Grid composed of 4 key interlocking cards:
  1. **Primary Intro Card (Col 8)**:
     - Availability Tag: `🟢 AVAILABLE FOR SELECTED Q1/Q2 ENGAGEMENTS`
     - Main Headline (H1): `Crafting High-Conversion Products, Design Systems & Digital Experiences.`
     - Subheadline: `Senior Product Designer & Creative Technologist based in San Francisco. Blending rigorous design strategy with scalable frontend engineering.`
     - CTA Cluster:
       - Primary: `View Selected Works` (`.btn-primary` with down arrow icon, smooth scrolls to `#portfolio`).
       - Secondary: `Get in Touch` (`.btn-outline` with chat icon, smooth scrolls to `#contact`).
       - Quick Action: `Download Resume (PDF)` (`.btn-ghost` with download icon).
  2. **Profile & Portrait Card (Col 4)**:
     - Stylized professional portrait image with subtle rounded corners and ambient gradient border.
     - Floating badge: `8+ Years Experience in SaaS & FinTech`.
     - Social Icons Quick Row: GitHub, LinkedIn, Dribbble, X (Twitter), Figma.
  3. **Impact Metric Card 1 (Col 4)**:
     - Value: `$42M+`
     - Label: `Client Revenue Generated & Venture Capital Raised`.
  4. **Impact Metric Card 2 (Col 4)**:
     - Value: `120+`
     - Label: `Engineers Onboarded to Custom Design Systems`.
  5. **Impact Metric Card 3 (Col 4)**:
     - Value: `99.4%`
     - Label: `On-Time Delivery & 5-Star Client Satisfaction Score`.

---

### Section 3: About & Philosophy Bento (`<section id="about" class="section-about">`)
- **Section Heading**: `The Mindset Behind the Work`
- **Subheading**: `Design is not just what it looks like — it is how it performs, scales, and converts.`
- **Bento Modules**:
  1. **Narrative Biography Card (Col 7)**:
     - Comprehensive story: From designing early iOS applications to leading design systems for tier-1 fintech startups.
     - Focus areas: Design Systems Architecture, Enterprise UX/UI, Rapid Prototyping, Conversion Rate Optimization.
  2. **Core Principles Bento (Col 5)**:
     - *01. Systems Over Silos*: Components built for longevity, accessibility, and developer velocity.
     - *02. Metrics-Driven Elegance*: Beautiful visual design married with user retention and business KPIs.
     - *03. Extreme Performance*: Lightweight markup, zero bloat, sub-second load speeds.
  3. **Current Status & Location Card (Col 12)**:
     - Interactive badge showing local timezone (`UTC-8 • PST`), current status (`Reviewing advisory requests`), and average response time (`Within 4 hours`).

---

### Section 4: Filterable Portfolio Showcase (`<section id="portfolio" class="section-portfolio">`)
- **Section Heading**: `Selected Commercial Works`
- **Subheading**: `A curated index of product designs, scalable web applications, and brand identities.`
- **Category Filter Tabs (`.portfolio-filter-nav`)**:
  - `All Projects (6)`
  - `Product Design (3)`
  - `Web Engineering (2)`
  - `Mobile Apps (2)`
  - `Brand Systems (1)`
- **Project Bento Grid (6 Projects)**:
  1. **Fintech Scale-Up Design System (NovaPay)**:
     - Category: Product Design & Systems
     - Metrics: `+34% Team Velocity • 450+ Components`
     - Visual: Multi-screen design system preview
     - Action: `Quick View Case Study` (Triggers `#projectModal`)
  2. **AI Inference & Cloud Dashboard (AetherCloud)**:
     - Category: Web Engineering & UI/UX
     - Metrics: `Sub-15ms Latency • Real-Time Telemetry`
     - Visual: Dark-themed analytics dashboard interface
     - Action: `Quick View Case Study` (Triggers `#projectModal`)
  3. **Spatial Audio iOS Application (SoundFlow)**:
     - Category: Mobile Apps
     - Metrics: `4.9 ★ App Store Rating • 150K DAU`
     - Visual: Clean mobile device mockup
     - Action: `Quick View Case Study` (Triggers `#projectModal`)
  4. **Sustainable E-Commerce Flagship (Verde Botanicals)**:
     - Category: Web Engineering & Branding
     - Metrics: `+48% Checkout Conversion Rate`
     - Visual: Editorial lifestyle e-commerce layout
     - Action: `Quick View Case Study` (Triggers `#projectModal`)
  5. **Enterprise Healthcare Portal (CarePulse)**:
     - Category: Product Design
     - Metrics: `HIPAA Compliant • 99.8% Usability Score`
     - Visual: Accessible clinical data workspace
     - Action: `Quick View Case Study` (Triggers `#projectModal`)
  6. **Venture Capital Brand Identity & Digital Presence (Vanguard Studio)**:
     - Category: Brand Systems
     - Metrics: `Featured in Awwwards & SiteInspire`
     - Visual: Minimalist typographic visual identity
     - Action: `Quick View Case Study` (Triggers `#projectModal`)

---

### Section 5: Interactive Project Case Study Modal (`<div id="projectModal" class="modal fade">`)
- **Modal Header**:
  - Project Title & Category Badge
  - Client Name & Delivery Year
  - Close button with hover pulse
- **Modal Body**:
  - **Hero Showcase**: High-resolution project image with interactive tabs for multiple views.
  - **Overview**: 2-paragraph project brief explaining the core user problem.
  - **The Challenge**: Key technical, user experience, or architectural bottlenecks.
  - **The Solution**: Strategic design decisions, component architecture, and engineering choices.
  - **Tech Stack & Tooling**: Badge row (`Figma`, `Bootstrap 5`, `TypeScript`, `Design Tokens`, `WCAG AA`).
  - **Impact Metrics**: 3 prominent metric callouts (e.g., `+34% Conversion`, `450+ Components`, `100% WCAG AA`).
- **Modal Footer**:
  - `Live Demo / Prototype URL` (External link with icon)
  - `Next Case Study` trigger button
  - `Close Modal` button

---

### Section 6: Career Journey & Experience (`<section id="experience" class="section-experience">`)
- **Section Heading**: `Career Journey & Proven Track Record`
- **Subheading**: `Over 8 years scaling products from seed-stage concept to enterprise acquisition.`
- **Interactive Timeline**:
  1. **Lead Product Designer & Design Engineer** — *Stripe Partner Scale-Up* (2024 – Present)
     - Spearheaded unified design system serving 8 cross-functional squads and 2.4M monthly active users.
  2. **Senior UI/UX Designer** — *Aura Labs AI* (2022 – 2024)
     - Designed generative AI workflows, prompt engineering interfaces, and LLM benchmarking consoles.
  3. **Product Design Technologist** — *Hyperion Digital* (2020 – 2022)
     - Built design system components in HTML5, CSS custom properties, and Vanilla JS for 14 enterprise clients.
  4. **UI Designer & Frontend Developer** — *Vanguard Creative Agency* (2018 – 2020)
     - Delivered 28 client web projects winning 4 Awwwards Honors and 2 CSS Design Awards.
- **Education & Credentials Bento**:
  - `B.S. in Human-Computer Interaction` — University of Washington
  - `Certified Usability Analyst (CUA)` — Human Factors International

---

### Section 7: Skills, Tools & Stack Bento (`<section id="skills" class="section-skills">`)
- **Section Heading**: `Core Competencies & Tooling`
- **Subheading**: `A battle-tested repertoire across user research, product design, and modern frontend code.`
- **3-Pillar Bento Grid**:
  1. **Product Design & Strategy (Col 4)**:
     - Design Systems Architecture, User Research & Interviews, Interaction Design, Rapid Prototyping, Usability Audits, WCAG 2.1 AA Accessibility, Information Architecture.
  2. **Frontend Engineering (Col 4)**:
     - HTML5 Semantic Markup, Modern CSS3 & CSS Grid, Bootstrap 5.3+, Vanilla JavaScript (ES6+), Responsive Layouts, Performance Optimization, Git & Version Control.
  3. **Tools & Workflows (Col 4)**:
     - Figma & FigJam, Tokens Studio, Adobe Creative Cloud, VS Code, Chrome DevTools, GitHub, Vercel, Linear, Notion.

---

### Section 8: Testimonials & Social Proof (`<section id="testimonials" class="section-testimonials">`)
- **Section Heading**: `Endorsements from Founders & Leaders`
- **Subheading**: `What design directors, VP engineers, and startup founders say about working together.`
- **Testimonial Slider / Grid**:
  1. **David Kowalski** — *VP of Product, FinScale*:  
     `"Petika completely transformed our core dashboard. The speed of execution and attention to micro-interactions was world-class. Our user retention jumped 28% within 60 days of launch."` (5 Stars ★★★★★)
  2. **Sarah Lin** — *Founder & CEO, Aether Labs*:  
     `"Rarely do you find someone who understands both the nuance of high-end typography and the reality of frontend performance. Petika is a 10x design engineer."` (5 Stars ★★★★★)
  3. **Marcus Thorne** — *Head of Design, Hyperion Studio*:  
     `"The design system Petika architected for our team saved us hundreds of engineering hours. The code was so clean our frontend developers applauded."` (5 Stars ★★★★★)

---

### Section 9: Interactive Contact & Booking Hub (`<section id="contact" class="section-contact">`)
- **Section Heading**: `Let's Build Something Exceptional`
- **Subheading**: `Have an upcoming project, design system initiative, or consulting advisory in mind?`
- **2-Column Layout**:
  - **Left Column: Direct Contact & Availability Bento**:
    - Availability Status: `🟢 Currently open for Q1/Q2 engagements`
    - Response Commitment: `Typically replies within 4 business hours`
    - 1-Click Copy Pills:
      - `hello@petika.design` (`Copy Email` trigger with instant tooltip)
      - `+1 (415) 890-4321` (`Copy Phone` trigger)
      - `San Francisco, California (PST / UTC-8)`
    - Social Media Channels: LinkedIn, GitHub, Dribbble, X (Twitter), Substack.
  - **Right Column: Interactive Validated Contact Form**:
    - Fields:
      - `Your Name` (`input[type="text"]`, required)
      - `Email Address` (`input[type="email"]`, required)
      - `Project Scope / Budget Tier` (`select`, options: "$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+")
      - `Your Message` (`textarea`, required, minimum 15 characters)
    - Anti-Spam Honeypot field (hidden from view)
    - Submit Button: `Send Inquiry` (`.btn-primary` with paper plane icon and loading state simulation)
    - Simulated Success / Error Alert Banner (`#contactAlert`)

---

### Section 10: Single-Page Minimalist Footer (`<footer class="footer-nav">`)
- **Layout**: Clean horizontal bar with 3 elements:
  - Left: `© 2026 Petika. Crafted with Precision & Bootstrap 5.3. All rights reserved.`
  - Center: Minimalist text links (`Privacy Policy`, `Licensing Terms`, `Documentation`)
  - Right: `Back to Top ↑` smooth-scroll trigger button.
