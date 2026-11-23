# Design Direction & Visual Archetype: Petika

> **Template Name**: Petika  
> **Aesthetic Archetype**: Neo-Editorial Bento Elegance & Dual Horizon  
> **Target Marketplaces**: UI8, ThemeForest, Creative Market  
> **Date**: 2026-11-23  

---

## 1. Visual Archetype Rationale

Petika rejects both generic corporate minimalism and chaotic WebGL experiments. Instead, it pioneers **Neo-Editorial Bento Elegance**:
- **Bento Card Structure**: Inspired by Japanese bento boxes and modern Apple/Linear interfaces, content is organized into discrete, tactile cards with generous inner padding (24px–32px), subtle rounded corners (20px–24px), and razor-sharp 1px borders.
- **Editorial Typography**: Pairing the bold geometric elegance of `Syne` / `Plus Jakarta Sans` with the neutral Swiss utility of `Inter` and the technical precision of `JetBrains Mono`.
- **Dual Horizon Design**:
  - **Dark Horizon**: Built on deep obsidian (`#0A0D14`) and midnight slate (`#111726`), brought to life with warm radiant amber gold (`#F59E0B`) and cool cyber cyan (`#06B6D4`). It feels like a high-end luxury watchmaker or architectural atelier at night.
  - **Light Horizon**: Built on soft alabaster (`#F8FAFC`) and pure white cards (`#FFFFFF`), anchored by deep charcoal typography (`#0F172A`) and rich amber bronze (`#D97706`). It evokes the airy confidence of a modern art gallery or contemporary architectural publication.

---

## 2. Spatial Grid, Border Radii & Elevation

- **8pt Spatial Grid**:
  - Micro-spacing: `4px` (`--space-1`), `8px` (`--space-2`), `12px` (`--space-3`), `16px` (`--space-4`).
  - Macro-spacing: `24px` (`--space-6`), `32px` (`--space-8`), `48px` (`--space-12`), `64px` (`--space-16`), `96px` (`--space-24`).
- **Container Sizing**: Max container width 1320px (`container-xxl`), optimal for high-resolution displays while maintaining comfortable line lengths.
- **Card Geometry**:
  - Bento Container Radius: `24px` (`--radius-card`)
  - Buttons & Interactive Pills: `100px` (`--radius-pill`) for modern tactile touchpoints.
  - Image Containers: `16px` (`--radius-inner`) inside bento cards.
- **Elevation & Tactile Feedback**:
  - *Dark Mode*: Subtle ambient glow (`box-shadow: 0 12px 36px -8px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)`).
  - *Light Mode*: Soft organic depth (`box-shadow: 0 12px 32px -8px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(226, 232, 240, 0.8)`).
  - *Hover Elevation*: Cards lift `translateY(-3px)` with smooth 250ms cubic-bezier transition and border highlight.
