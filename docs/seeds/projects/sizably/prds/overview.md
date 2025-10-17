---
title: Sizably Platform Overview
created: 2025-10-16
owner: Tommy Trzebiatowski
status: draft
relatedGoals:
  - goals/long-term/financial-freedom-saas-portfolio
  - goals/short-term/250k-arr-in-6-months
---

## Problem Statement
Gift-givers routinely guess sizes for loved ones, leading to poor fit, returns, and wasted effort. No trusted system exists for sharing accurate sizing across close relationships while respecting privacy.

## Business Context
- Sizably targets friends, families, and parents coordinating gifts.  
- Monetization focuses on affiliate revenue (Amazon to start).  
- MVP launch is targeted within 1–2 weeks for rapid validation.  
- Platform must feel premium, fast, and secure to earn user trust.

## Goals & KPIs
- Short-term: Launch MVP, onboard first cohort, observe qualitative feedback.  
- Quantitative KPIs (profiles created, invite acceptance, affiliate CTR) are **TBD** and will be established once initial usage data is available.

## User Personas & Journeys
- **Partner Gifter:** Wants to buy clothes/jewelry that fit without asking.  
- **Parent Coordinator:** Shares child sizes with grandparents and tracks growth.  
- **Self Curator:** Maintains wish lists and brand preferences for upcoming events.  
- Primary journeys: onboarding, creating profiles/dependents, inviting contacts, browsing gift suggestions, managing lists.

## Functional Requirements
- Granular visibility per field/list/dependent (private, public, connections, custom subset).  
- Multiple size variants per category (hat styles, ring types, shoe types, etc.).  
- Dependent profiles (human or pet) inherit privacy controls.  
- Wish lists & favorite brand/item lists with share controls.  
- Invite flow: email/share link, option to auto-connect on acceptance, referral tracking.  
- Profile and list views show AI-generated gift suggestions that always respect visibility entitlements.  
- Mobile + desktop navigation with adaptive header/mobile menu behavior.

## Non-functional Requirements
- High performance: <2.5s mobile LCP, <100ms interaction latency, responsive across breakpoints.  
- Fully accessible (WCAG 2.1 AA): keyboard navigation, focus states, contrast, ARIA support.  
- Rich social sharing with OG/Twitter meta tags for profile and wish list pages.  
- Privacy-first: restricted data never displayed or used for ineligible recommendations.  
- Hosting on Vercel with global edge capabilities; leverage Vercel Analytics.

## Data & Integrations
- Convex stores profiles, dependents, visibility rules, wish lists, favorites, invites.  
- Amazon Ads recommendation APIs supply gift suggestions via ASIN/theme inputs (requires developer credentials, rate-limit awareness).  
- Future support for additional retailers is anticipated; design abstractions accordingly.

## System Architecture (Draft)
- **Frontend:** Next.js 15 + Tailwind v4, App Router, file-based segmentation.  
- **Backend:** Convex functions for profile CRUD, visibility enforcement, invite handling, suggestion orchestration.  
- **Integrations:** Server-side workers fetch Amazon recommendations, filter against privacy constraints, and cache results.  
- **Auth:** Auth.js (Google Sign-In first) with roadmap for additional providers.  
- **Observability:** Vercel Analytics + custom logging (Convex + external log sink TBD).  
- *Diagram TBD – include component + data-flow diagram once design is finalized.*

## Open Questions
- Which additional authentication providers should follow Google Sign-In?  
- Do we need rate-limiting or abuse prevention for invite spam?  
- Should we capture KPIs in-app before public launch, or rely on analytics dashboards only?  
- How will we handle child data consent (parental confirmation flows)?

## Risks & Mitigations
- **Privacy leak:** Enforce server-side checks before returning suggestions or profile data.  
- **Amazon API limitations:** Cache requests, handle throttling, design fallbacks for empty recommendations.  
- **Performance regression:** Monitor core web vitals, set budgets in CI if possible.  
- **Rapid scope growth:** Use PRDs and roadmap cadence to prevent unplanned feature sprawl.

## Success Metrics
- MVP success measured qualitatively (positive feedback, repeat usage).  
- Post-launch, define conversion funnel metrics (profiles created → invites sent → accepted → suggestions clicked → affiliate conversions).

## Rollout Plan
1. Finalize designs + component library.  
2. Implement profile/dependent CRUD with privacy controls.  
3. Build lists + wish lists module.  
4. Integrate Amazon recommendation service and affiliate tracking.  
5. QA + accessibility audits + performance tuning.  
6. Soft launch to trusted circle, gather feedback, iterate.

## Next Steps
- Break down prioritized features into detailed PRDs (see directory index).  
- Stand up Convex schema & migration plan.  
- Prepare Amazon Ads developer credentials and environment configuration.  
- Schedule weekly roadmap review post-launch to capture KPI targets.

