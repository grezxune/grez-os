# Sizably UxStyle Guide

## Brand DNA
- **Adjectives:** Modern, confident, trustworthy, delightful.
- **Experience Goals:** Make gifting effortless, keep sensitive data private, celebrate personal style.
- **Audience:** Close friends, partners, parents, and extended family coordinating gifts.

## Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#0cd6f5` | CTAs, interactive accents, active states, links. |
| `--color-primary-dark` | `#0790a8` | Hover/pressed, gradients, focus outlines. |
| `--color-secondary` | `#000000` | Headlines, nav, icons, button text. |
| `--color-surface` | `#f6f9fb` | Page backgrounds, cards. |
| `--color-neutral-700` | `#2f3b48` | Body copy, secondary labels. |
| `--color-neutral-400` | `#8a97a4` | Meta info, helper text, dividers. |
| `--color-success` | `#3ecf8e` | Confirmation badges, status indicators. |
| `--color-warning` | `#f5a623` | Visibility warnings, dependency alerts. |
| `--color-error` | `#f5515f` | Validation errors, critical notices. |

## Typography
- **Primary Typeface:** “Inter” (or “Work Sans” fallback) — geometric, legible, modern.
- **Pairing:** Use “Source Serif Pro” for optional editorial callouts if needed; otherwise stick to a single sans-serif family for clarity.
- **Scale:**  
  - Display: 42 / 48 / 56px (clamp for responsive).  
  - Headings H1–H4: 32 / 28 / 24 / 20px.  
  - Body: 16px (line-height 1.6).  
  - Small text & captions: 14px (line-height 1.5).  
- **Weights:** 700 for titles, 600 for section leads, 400 for body, 500 for button labels.

## Layout & Spacing
- **Grid:** 12-column fluid grid with 16px gutter mobile, 24px tablet, 32px desktop.
- **Spacing Scale:** 4, 8, 12, 16, 24, 32, 40, 56, 80px. Use 16px baseline rhythm.
- **Elevation:** Soft shadows (`0 20px 40px rgba(0, 0, 0, 0.08)`) for cards/modals; keep surfaces lightweight.
- **Section Pattern:** Hero → Feature blocks → Profiles/wish list preview → CTA. Maintain generous white space for a premium feel.

## Navigation & Header
- Desktop: fixed header with logo left, nav links center/right, primary CTA (“Create profile”). Transparent over hero with gradient fade.
- Mobile (<768px): shrink header height, keep logo pinned left, show menu icon on right that triggers a portal-based overlay sliding in from the right with focus trap and close controls.
- Provide quick access to “My Profiles”, “Connections”, “Wish Lists”, “Gift Ideas”, “Invite”.

## Components & Patterns
- **Profile Cards:** Avatar/initials, relationship tag, quick actions (view sizes, wish lists), privacy badge indicator.
- **Visibility Controls:** Toggle or dropdown with options (Private, Connections, Public, Custom). When Custom, expose multi-select list modal.
- **Wish Lists:** Card layout with thumbnail, brand, price, visibility indicator, add-to-cart via affiliate link.
- **Gift Suggestions:** Carousel or masonry feed with ASIN-sourced imagery, reason snippet (“Matches shoe size 10 / favorite brand Nike”), CTA button.
- **Dependent Profiles:** Tabbed interface (Self, Kids, Pets) with quick-add buttons.
- **Invite Flow:** Modal wizard (Step 1: email/phone, Step 2: auto-connect toggle, Step 3: success & shareable link).

## Interaction & Motion
- Use 200ms ease-out transitions for hover/focus states; 250–300ms slide-in for mobile menu overlay.
- Animate list additions (wish list items, dependents) with fade+scale from 0.95 to 1 for delight without overkill.
- Provide skeleton loaders for profile data and gift suggestions to preserve perceived performance.

## Accessibility
- Minimum contrast ratio 4.5:1 for body text; 3:1 for large type and UI icons.
- Ensure all forms and toggles have descriptive labels and assistive text.
- Keyboard: support tab order, ESC to close modals/menus, Enter/Space to activate toggles.
- Provide visible focus states (2px outline using `#0cd6f5` with darker offset).
- Support screen readers with ARIA labels for privacy settings, dependent relationships, and dynamic suggestion sections.

## Content & Voice
- Tone: friendly, knowledgeable, reassuring. Avoid jargon.
- Microcopy examples:  
  - “Invite your circle” → “Share Sizably so friends always get it right.”  
  - Empty states: “No wish lists yet. Start one for upcoming celebrations.”  
  - Privacy alerts: “Only you can see this size. Share it when you’re ready.”
- Gift suggestion blurbs should explain relevance: “Sized for Sam’s ‘M’ hoodie preference and favorite brand Nike.”

## Responsive Breakpoints
- `sm` (0–639px): stacked layouts, full-width CTAs, carousels convert to horizontal scroll.
- `md` (640–1023px): two-column forms/cards, condensed nav, sticky bottom CTA allowed.
- `lg` (1024–1439px): standard desktop grid, expanded nav.
- `xl` (1440px+): increase max-width to 1280px, add decorative gradients or illustrations.

## Assets & Illustrations
- Use subtle gradients with primary accent (e.g., `linear-gradient(135deg, #0cd6f5 0%, #79f2ff 100%)`).
- Illustrations: soft line art or minimalistic 3D shapes representing gifting and measurement.
- Keep imagery inclusive—highlight diverse families and relationships.

