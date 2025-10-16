---
title: Wish Lists & Favorite Brands PRD
created: 2025-10-16
owner: Tommy Trzebiatowski
status: draft
relatedGoals:
  - goals/short-term/250k-arr-in-6-months
---

## Problem Statement
Gift-givers need curated lists to understand preferences quickly, while users want control over which items are visible to whom.

## Business Context
- Wish lists and brand favorites reinforce recurring engagement and drive affiliate clicks.  
- Lists must respect privacy configurations identical to profile items.  
- Users may create multiple lists for different events or recipients.

## Goals & KPIs
- Enable users to create and share unlimited lists with granular visibility.  
- Measure list creation/adoption post-launch (KPIs TBD).

## User Personas & Journeys
- **List Owner:** Creates lists for occasions (birthday, holidays), assigns visibility, adds notes.  
- **Recipient:** Views shared list, understands preferences, clicks affiliate links.  
- **Parent:** Maintains kids’ lists (toys, clothing) for extended family.

## Functional Requirements
- Create, edit, delete wish lists and favorite brand/item collections.  
- Support list metadata: title, description, occasion/date, visibility, tags.  
- Items include: product name, brand, size notes, link (affiliate aware), image, priority, notes.  
- Allow multiple lists per user; show preview cards on profile.  
- Provide shared view with CTA to copy link, add to cart, or mark purchased (future enhancement).  
- Respect privacy: only authorized viewers see lists/items; private items never influence suggestions for others.  
- Integrate with AI suggestions (e.g., prefer wish list items first).

## Non-functional Requirements
- Optimistic UI for adding/removing items.  
- Responsive list layouts (grid on desktop, stacked on mobile).  
- Accessibility: proper list semantics, labels, ability to navigate via keyboard.  
- Ensure social meta tags when sharing list URLs.

## Data & Integrations
- Convex collections: Lists, ListItems, ListVisibilityRules, PurchaseMarkers (future).  
- Store affiliate metadata per item (ASIN, retailer, referral params).  
- Potential integration with Amazon wish list API (future research).

## System Architecture (Draft)
- Server actions for CRUD with validation; visibility enforced server-side.  
- Reusable components for list management shared between desktop & mobile.  
- Hooks/services to sync with AI recommendation engine (boost priority items).  
- *Diagram TBD—show relationship between lists, profile data, and recommendations.*

## Open Questions
- Should viewers be able to mark items as purchased anonymously?  
- Do we allow collaborative lists (multiple editors)?  
- How do we handle out-of-stock or expired affiliate links automatically?  
- Should lists support attachments (images, sizing notes)?

## Risks & Mitigations
- **Privacy confusion:** Provide visibility badges and preview-as viewer mode.  
- **Outdated links:** Schedule periodic link checks; allow owners to mark invalid.  
- **List overload:** Offer sorting/filtering and highlight top/N items.  
- **Future multi-retailer complexity:** Abstract item source model for extensibility.

## Success Metrics
- Track number of lists per user, items per list.  
- Monitor affiliate clicks originating from lists.  
- Qualitative feedback on usability, clarity, and sharing experience.

## Rollout Plan
1. Design list UX (creation flow, cards, detail view).  
2. Implement Convex schema + server actions with visibility enforcement.  
3. Build UI components (list dashboard, detail pages, sharing modals).  
4. Integrate with AI suggestion weighting.  
5. Add analytics events for list creation, item addition, and share actions.  
6. Conduct accessibility and performance pass; launch to pilot.

## Next Steps
- Draft component inventory for list management UI.  
- Align with marketing on shareable list visuals.  
- Define analytics taxonomy for list interactions.  
- Explore roadmap for purchase status tracking.

