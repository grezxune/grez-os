---
title: AI Gift Recommendations PRD
created: 2025-10-16
owner: Tommy Trzebiatowski
status: draft
relatedGoals:
  - goals/short-term/250k-arr-in-6-months
---

## Problem Statement
Sizably needs to deliver relevant gift ideas automatically while honoring strict privacy constraints and monetizing via affiliate links.

## Business Context
- Recommendations should improve gifting confidence and drive affiliate revenue.  
- Amazon Ads APIs provide ASIN suggestions based on provided themes/ASINs.  
- Privacy rules must gate both the inputs and outputs of the recommendation pipeline.

## Goals & KPIs
- Surface high-quality gift suggestions for every connected profile.  
- Track suggestion click-through and affiliate conversion (KPIs TBD post-launch).

## User Personas & Journeys
- **Gifter:** Opens connection’s profile, reviews tailored gift list, clicks through to merchant.  
- **Profile Owner:** Curates wish lists/favorite brands to influence suggestions.  
- **Parent:** Sees age-appropriate ideas for dependents.

## Functional Requirements
- Generate suggestion batches per profile based on size data, favorite brands, wish lists, and behavioral tags.  
- Ensure only data visible to the viewer influences recommendations.  
- Provide reasoning snippet (“Sized for Alex’s M hoodie preference and favorite brand Nike”).  
- Include affiliate tracking parameters in outbound links.  
- Allow users to refresh suggestions (with rate limiting).  
- Log suggestion sets for future analytics/feedback loops.  
- Provide fallback content when API results are empty (e.g., wish list highlights).

## Non-functional Requirements
- Response time <500ms for cached suggestions; <2s for cold fetch.  
- Implement caching strategy per viewer-profile combination with TTL.  
- Handle API failures gracefully with retries and user messaging.  
- Ensure recommender services scale without leaking PII (only share necessary context with Amazon).

## Data & Integrations
- Inputs: visible size data, wish lists, favorite brands, historical clicks (future).  
- Amazon Ads Sponsored Products/Sponsored Display recommendation APIs (ASIN/theme) for inventory.  
- Convex storage for cached suggestions, click logs, and affiliate metadata.  
- Potential ML enhancement later (re-ranking recommendations).

## System Architecture (Draft)
- Server-side suggestion service:  
  1. Authorize viewer vs profile data (privacy filter).  
  2. Build theme/ASIN payload based on permitted info.  
  3. Call Amazon API via secure server-side client.  
  4. Filter/augment results, attach affiliate tracking, cache in Convex.  
  5. Return to frontend for rendering.  
- Observability: Log API latency, cache hit rate, click events.  
- *Diagram TBD—include data flow + privacy filter pipeline.*

## Open Questions
- Do we need user feedback controls (thumbs up/down) to refine suggestions?  
- How aggressively should we refresh cached recommendations?  
- What fallbacks should display if Amazon returns limited options?  
- Should we support other retailers in MVP or treat as future milestone?

## Risks & Mitigations
- **Privacy breach via suggestions:** Double-check viewer permissions before building payloads; sanitize all logs.  
- **API quotas:** Cache responses, backoff on errors, monitor usage.  
- **Irrelevant suggestions:** Use favorite brands/wish lists as weighted signals; incorporate manual curation for early cohorts.  
- **Affiliate tracking failure:** Centralize link builder, test conversions regularly.

## Success Metrics
- Suggestion coverage rate (profiles with ≥5 suggestions).  
- Click-through rate on suggestions.  
- Conversion revenue (once tracking is active).  
- User satisfaction feedback (qualitative surveys).

## Rollout Plan
1. Implement visibility-aware data assembly service.  
2. Integrate Amazon recommendation APIs with credential management.  
3. Build caching and affiliate link generator.  
4. Ship UI components for suggestion cards with reasoning text.  
5. Instrument analytics and logging.  
6. QA privacy scenarios and error handling; release to pilot users.

## Next Steps
- Define ASIN/theme mapping strategy per product category.  
- Prepare Amazon developer credentials and sandbox access.  
- Create test harness for recommendation pipeline.  
- Coordinate with lists/wish list teams to expose relevant signals.

