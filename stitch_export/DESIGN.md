---
name: Ebenezer Design System
colors:
  surface: '#fdf7ff'
  surface-dim: '#ded8e0'
  surface-bright: '#fdf7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f2fa'
  surface-container: '#f2ecf4'
  surface-container-high: '#ece6ee'
  surface-container-highest: '#e6e0e9'
  on-surface: '#1d1b20'
  on-surface-variant: '#494551'
  inverse-surface: '#322f35'
  inverse-on-surface: '#f5eff7'
  outline: '#7a7582'
  outline-variant: '#cbc4d2'
  surface-tint: '#6750a4'
  primary: '#4f378a'
  on-primary: '#ffffff'
  primary-container: '#6750a4'
  on-primary-container: '#e0d2ff'
  inverse-primary: '#cfbcff'
  secondary: '#63597c'
  on-secondary: '#ffffff'
  secondary-container: '#e1d4fd'
  on-secondary-container: '#645a7d'
  tertiary: '#765b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c9a74d'
  on-tertiary-container: '#503d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#22005d'
  on-primary-fixed-variant: '#4f378a'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cdc0e9'
  on-secondary-fixed: '#1f1635'
  on-secondary-fixed-variant: '#4b4263'
  tertiary-fixed: '#ffdf93'
  tertiary-fixed-dim: '#e7c365'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#fdf7ff'
  on-background: '#1d1b20'
  surface-variant: '#e6e0e9'
typography:
  display-lg:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
  label-sm:
    fontFamily: Nunito Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 64px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 80px
---

## Brand & Style

The brand personality is rooted in the **Caregiver** archetype—a warm, dependable, and "kind father" figure that serves the local community with heart. The design system prioritizes approachability, accessibility, and a sense of neighborhood belonging.

The visual style is **Soft-Modern & Tactile**. It avoids the clinical coldness of corporate supermarkets, instead opting for friendly rounded corners, warm color transitions, and illustrative pattern work. The goal is to evoke the feeling of a trusted local corner store that has grown to meet modern digital standards without losing its soul.

- **Warmth:** Extensive use of rounded typography and soft-edged containers.
- **Reliability:** Clear, legible layouts that guide users through shopping tasks with patience.
- **Freshness:** Integrating organic patterns and "market-fresh" color hits to emphasize quality.

## Colors

The palette is derived from natural, sun-ripened produce and earthy tones to reinforce the "supermarket" context while maintaining a traditional, nostalgic warmth.

- **Primary 1 (Palm Leaf):** Used for trust-building elements, navigation headers, and fresh produce categories.
- **Primary 2 (Racing Red):** Used for dynamism and energy, specifically in high-visibility areas like seasonal offers or price tags.
- **Secondary 1 (Bronze):** A nostalgic, warm tone for accents that require a sense of heritage and tradition.
- **Secondary 2 (Lime Moss):** Adds a vibrant, contemporary spark to UI feedback and secondary highlights.
- **Neutral:** A warm off-white (`#F9F8F4`) is used for the background to reduce eye strain and feel more "paper-like" and welcoming than pure white.

## Typography

This design system utilizes highly legible, rounded sans-serifs to maintain the "kind father" archetype. 

- **Quicksand** is reserved for headlines and large display text. Its open counters and geometric roundedness provide a friendly, optimistic voice.
- **Nunito Sans** serves as the workhorse for body copy and UI labels. It maintains the rounded aesthetic of Quicksand but offers better legibility at smaller scales for product descriptions and pricing.

For mobile devices, `display-lg` should scale down to `32px` to ensure the supermarket's core messaging remains within the viewport without excessive wrapping.

## Layout & Spacing

The system follows a **Fluid Grid** model with a soft 8px baseline rhythm. 

- **Desktop:** A 12-column grid with generous 80px side margins to create a focused, premium shopping experience.
- **Mobile:** A 4-column grid with 16px margins.
- **Pattern Integration:** The illustrative pattern element should be used as a subtle background watermark in high-dwell areas like the "My Account" section or as a full-bleed footer background at 10% opacity.

Vertical spacing should be generous to maintain the calm, caregiver personality—avoiding "information density overload" that often plagues retail apps.

## Elevation & Depth

To match the neighborhood-friendly vibe, the design system uses **Tonal Layers** and **Soft Ambient Shadows**. 

1.  **Surfaces:** Cards and containers use a soft white fill against the slightly darker off-white background to create depth without harsh lines.
2.  **Shadows:** Shadows are highly diffused and tinted with a hint of the secondary Bronze or Palm Leaf color (e.g., `rgba(139, 149, 65, 0.08)`) rather than pure black. This keeps the interface feeling "warm" and "natural."
3.  **Interaction:** When a user hovers or interacts with a product card, the elevation should increase slightly, mimicking the physical act of picking a product off a shelf.

## Shapes

The shape language is consistently **Rounded**. There are no sharp corners in this design system. 

- **Standard Buttons & Inputs:** 0.5rem (8px) corner radius.
- **Product Cards & Promo Banners:** 1rem (16px) corner radius.
- **Action Chips & Tags:** Fully pill-shaped (circular ends) to contrast against the more structural card shapes.

The logo's circular and arched structure (seen in the main brand asset) serves as the blueprint for all container shapes.

## Components

### Buttons
Primary actions use a "Racing Red" fill with white text for maximum visibility. Secondary actions use "Palm Leaf" outlines. All buttons feature high-rounded corners (8px) and a subtle bottom-heavy shadow to appear "squishy" and tactile.

### Cards
Product cards should have a white background, 16px corner radius, and a very light Palm Leaf-tinted shadow. The price should be prominently displayed in Racing Red using `headline-md`.

### Input Fields
Fields use a 1px border in a muted Palm Leaf shade. On focus, the border thickens to 2px and takes on the Racing Red color, providing clear, friendly feedback.

### Chips & Badges
Used for categories (e.g., "Organic," "Local"). These should use the "Lime Moss" background with dark text for a fresh, healthy appearance.

### Pattern Dividers
Instead of simple lines, use a thin horizontal strip of the provided icon pattern at 15% opacity to separate major page sections, reinforcing the brand's visual identity.