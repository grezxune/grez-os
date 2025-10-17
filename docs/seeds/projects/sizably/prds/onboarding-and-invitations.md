---
title: Onboarding & Invitations PRD
created: 2025-10-16
owner: Tommy Trzebiatowski
status: draft
relatedGoals:
  - goals/short-term/250k-arr-in-6-months
---

## Problem Statement
Users need a persuasive entry experience that captures profile data quickly and encourages them to invite trusted contacts so sizing information spreads efficiently.

## Business Context
- Landing page must convert visitors into signed-in users ready to create profiles.  
- Invitations drive network effects and future affiliate revenue.  
- Onboarding must highlight privacy controls to build confidence.

## Goals & KPIs
- MVP goal: frictionless profile creation and first invite sent.  
- Quantitative KPIs TBD (e.g., invite acceptance rate) once analytics baseline is established.

## User Personas & Journeys
- **First-time visitor:** Arrives via shared link or marketing, sees hero messaging, signs up, completes profile wizard.  
- **Existing user:** Returns to dashboard, updates profile, sends additional invites.  
- Journeys: landing → signup → profile wizard → invite modal → confirmation.

## Functional Requirements
- Landing page hero with primary CTA (“Create your Sizably profile”), social-proof sections, responsive imagery.  
- Sign-up flow using Auth.js (Google initially) with fallback email CTA placeholder.  
- Profile onboarding wizard capturing personal sizes, dependents, visibility defaults, wish list starter.  
- Invite system:  
  - Inputs: email, shareable link (copy), optional note.  
  - Option toggle: “Auto-connect when accepted” vs “Just share the app”.  
  - Both paths credit the inviter in analytics.  
- Invitation management view showing pending invites, status, and ability to resend/cancel.  
- Clear messaging around privacy and how connections work.

## Non-functional Requirements
- Landing and onboarding must load fast (<2s) and work flawlessly on mobile.  
- Accessibility: descriptive labels, keyboard-friendly wizard, screen reader hints.  
- Social meta tags for landing page.  
- Localization-ready copy (structure text so it can be translated in future).

## Data & Integrations
- Convex documents: Users, Profiles, Dependents, Invitations, Connections, ReferralCredits.  
- Store invitation tokens securely; expire after configurable period.  
- Record invite acceptance event for analytics.  
- Integration with email (Resend) for sending invite emails; ensure templates align with brand.

## System Architecture (Draft)
- Client-side wizard components backed by server actions for profile creation.  
- Convex functions for invites (create token, send email, mark accepted).  
- Feature flags via Convex or environment config to toggle auto-connect default.  
- Logging: capture invitation attempts, delivery status, and acceptance in analytics events.  
- *Diagram TBD—include flows for signup, invite creation, and acceptance in future iteration.*

## Open Questions
- Should we support non-Google auth at launch?  
- What referral incentives (if any) might we add later?  
- Do invites need rate limiting to deter abuse?  
- How will we handle invites to existing users (auto-connect, prevent duplicates)?

## Risks & Mitigations
- **Drop-off during onboarding:** Use progressive saving and ability to skip optional fields.  
- **Invite spam:** Add CAPTCHA or throttling if abuse appears.  
- **Email deliverability:** Warm up Resend domain, monitor bounce/complaint rates.  
- **User confusion about privacy:** Provide inline education and link to privacy settings after onboarding.

## Success Metrics
- Track completion of onboarding wizard, first invite sent, invite acceptance.  
- Monitor landing page conversion (views → signup).  
- Collect qualitative feedback in-app (post-onboarding micro-survey).

## Rollout Plan
1. Design landing page and onboarding wizard flows.  
2. Implement auth + profile creation.  
3. Build invitation system (UI + Resend integration + Convex schema).  
4. QA + accessibility checks; ensure analytics events fire.  
5. Soft launch; observe funnel metrics; iterate copy or CTA placement.

## Next Steps
- Flesh out UI designs and component hierarchy for hero + wizard.  
- Define invitation email template and branding.  
- Configure analytics events and dashboards for onboarding funnel.  
- Align with marketing on landing page copy and assets.

