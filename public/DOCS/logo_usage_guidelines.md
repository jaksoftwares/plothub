# PlotHub Logo & Brand Asset Guidelines

This document outlines the official usage guidelines for the mathematically constructed, code-based PlotHub brand identity system.

## The Logo System

Our logo system is entirely vector-based and programmatically generated to ensure infinite scalability, mathematical precision, and exact brand color alignment across all platforms. The master component is located at `components/ui/logo.tsx`.

### 1. The Abstract Symbol
The PlotHub symbol is a clean, geometric node representing coordinates and digital foundation.
- **Construction**: A 4x4 coordinate abstraction.
- **Meaning**: Represents Trust, Connection, Foundation, and Digital Infrastructure without literally illustrating real estate (no houses, roofs, or generic pins).
- **Core Elements**: Deep Forest (`#1F4D3D`) foundational pillars with a single, precise Amber (`#C48A2C`) top-left connection node signifying the origin or verification point.

### 2. The Wordmark
- **Typography**: Custom geometric sans-serif construction.
- **Weight**: Bold (`700`).
- **Tracking**: Tight kerning (`-0.03em`) to create a cohesive, single structural unit, evoking a premium enterprise SaaS feel similar to Stripe and Linear.

### 3. Primary Lockups
The symbol and wordmark combine into two primary lockups:
- **Horizontal Lockup**: Used for navigation bars, standard headers, and digital interfaces. The symbol and wordmark are vertically centered with a precise gap.
- **Stacked Lockup**: Used for square or vertical spaces, document headers, and central focal points.

---

## Logo Variations & Usage Rules

The identity system supports 6 core mathematical themes to ensure high contrast and accessibility across all backgrounds.

### Primary (Full Color)
- **Colors**: Deep Forest (`#1F4D3D`), Amber (`#C48A2C`). The wordmark matches the Deep Forest.
- **Usage**: Use on clean, neutral backgrounds (`#FFFFFF` or `#FAFAFA`). This is the default and preferred presentation.

### White (Reversed)
- **Colors**: Pure White (`#FFFFFF`).
- **Usage**: Strictly for use over dark imagery or the Dark Forest (`#173A2E`) brand background.

### Monochrome Dark
- **Colors**: Dark Forest (`#173A2E`).
- **Usage**: Used when a subtle, single-color watermark or highly integrated UI element is required on a light background.

### Grayscale
- **Colors**: Slate (`#334155`), Gray (`#6B7280`).
- **Usage**: Used for wireframes, disabled states, or low-priority footer implementations.

### Black
- **Colors**: Pure Black (`#000000`).
- **Usage**: Strict requirement for legal documents, faxes, laser engraving, and black-and-white print media.

---

## Unacceptable Usage (Do Not's)

To maintain the integrity of the PlotHub brand infrastructure, **never** alter the logo.
1. **Do not** add drop shadows, glows, or any fake 3D effects.
2. **Do not** change the color palette. Use the predefined themes in the `<Logo />` component.
3. **Do not** alter the spacing between the symbol and the wordmark in the lockups.
4. **Do not** stretch or distort the aspect ratio.
5. **Do not** use gradients. The brand relies on flat, solid, confident geometry.

---

## Implementation Guide (React/Next.js)

The logo is available natively in the React ecosystem. Do not use static `.png` files for web development unless strictly necessary.

### Standard Injection
```tsx
import { Logo } from "@/components/ui/logo";

// Horizontal Primary (Navbars)
<Logo variant="horizontal" theme="primary" size={24} />

// White Symbol Only (Dark Mode / Footers)
<Logo variant="symbol" theme="white" size={48} />
```

### Dynamic Asset Generation
The Next.js 15 routing system has been configured to automatically generate metadata assets using this core logo component:
- **Favicon**: Generated dynamically via `app/icon.tsx`.
- **Apple Touch Icon**: Generated dynamically via `app/apple-icon.tsx`.

## Brand Portal
For marketing materials, print usage, or partner distributions, all variations (SVG & high-res PNG) can be previewed and downloaded directly from the internal company portal:
👉 **`/brand`**
