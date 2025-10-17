---
title: Profiles, Dependents & Privacy PRD
created: 2025-10-16
owner: Tommy Trzebiatowski
status: draft
relatedGoals:
  - goals/short-term/250k-arr-in-6-months
---

## Problem Statement
Sizably must capture comprehensive sizing information for users and dependents while delivering granular privacy controls so sensitive data is only shared with intended recipients.

## Business Context
- Accurate profiles enable relevant gift suggestions and affiliate revenue.  
- Trust hinges on rock-solid privacy; any leak undermines adoption.  
- Profiles must support complex scenarios (multiple hat types, ring styles, pets, etc.).

## Goals & KPIs
- Enable users to complete profiles with high fidelity in under 5 minutes.  
- Track profile completeness (TBD threshold) post-launch to guide onboarding improvements.

## User Personas & Journeys
- **Profile Owner:** Adds personal sizes, toggles visibility per item.  
- **Parent/Caregiver:** Creates dependent profiles with custom controls.  
- **Viewer:** Sees only permitted information, can browse lists and suggestions.

## Functional Requirements
- Data model supports categories and subtypes (e.g., hats → flat brim / baseball / winter).  
- Allow multiple entries per subtype with notes (brand fit nuances).  
- Dependents (human/pet) with relationship labels, birthdays, growth markers.  
- Visibility options per data point:  
  - Private (owner only)  
  - Connections (all approved connections)  
  - Public (discoverable profile)  
  - Custom (selected connections list)  
- UI to manage custom share lists (multi-select from connections).  
- Audit trail (optional) for visibility changes and data edits.

## Non-functional Requirements
- Ensure server-side enforcement of visibility checks for every read.  
- Maintain fast load times with incremental data fetching and caching.  
- Provide intuitive UX for complex privacy options (progressive disclosure).  
- Support offline-friendly optimistic updates where safe (future enhancement).

## Data & Integrations
- Convex schema: Users, Profiles, ProfileItems, Dependents, VisibilityRules, ShareLists.  
- Consider using Convex indexes for quick lookup per viewer permission.  
- Store metadata for audit (modifiedBy, timestamps).  
- PII compliance: encrypt sensitive fields at rest; restrict logs from storing raw PII.

## System Architecture (Draft)
- Server components fetch only authorized data; client components receive pre-filtered payloads.  
- Convex functions centralize permission checks to avoid duplication.  
- Use caching layer (e.g., Convex cache or edge caching) with viewer-specific keys.  
- *Diagram TBD—need detailed permission matrix and data-flow chart.*

## Open Questions
- Do we need roles (e.g., guardians) for dependents beyond parent/owner?  
- Should users be able to export their profile data?  
- How do we handle deletion requests for dependents (soft delete vs purge)?  
- What minimum profile info should be required before suggestions run?

## Risks & Mitigations
- **Privacy misconfiguration:** Provide preview mode showing what others see; add tooltips and descriptive copy.  
- **Complex UI overwhelming users:** Use progressive disclosure, smart defaults (connections vs public).  
- **Data inconsistency:** Enforce schema validation and unit tests on Convex functions.  
- **Guardian consent:** Capture confirmation steps when adding minors.

## Success Metrics
- Monitor profile completion rate and frequency of visibility adjustments.  
- Track support tickets/feedback related to privacy confusion.  
- Post-launch: evaluate suggestion accuracy vs. privacy compliance incidents (should be zero).

## Rollout Plan
1. Design data model and permission matrix.  
2. Build Convex schema + server actions for CRUD with validations.  
3. Implement profile UI (desktop/mobile) with privacy controls.  
4. Add dependents module with same capabilities.  
5. QA privacy enforcement (unit + integration tests), run threat modeling.  
6. Launch with monitoring for anomalies.

## Next Steps
- Draft detailed schema diagrams and permission flows.  
- Create test plan covering visibility permutations.  
- Coordinate with AI recommendations team to guarantee privacy filters are respected.  
- Prepare documentation for guardianship/consent flows.

