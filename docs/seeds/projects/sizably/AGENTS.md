# Sizably — Project Agent Charter

## Overview
- **Purpose:** Remove guesswork from gifting by sharing accurate sizing profiles for loved ones and leaning on AI-curated product suggestions.
- **Vision:** Any friend, parent, or partner can confidently buy the right item the first time—no awkward size exchanges.
- **Deployment Target:** Next.js 15 app hosted on Vercel with Convex-backed data, delivered within the next 1–2 weeks for rapid market feedback.

## Core Objectives
1. Capture rich size profiles (self + dependents) with granular visibility controls.
2. Streamline secure sharing (invites, connections, public profiles) to keep trusted circles informed.
3. Generate AI-powered gift recommendations using affiliate feeds (Amazon Ads APIs) while honoring privacy settings.
4. Showcase curated wish lists and favorite brands/items so gifting inspiration stays fresh.

## Target Audience & Personas
- **Inner Circle Gifter:** Partners, close friends, and family members exchanging holiday/birthday gifts.
- **Parents & Caregivers:** Track clothing and gear sizes for children or pets; share with grandparents and extended family.
- **Self Curator:** Users maintaining a personal wish list and favorite brand catalog for upcoming events.

## Product Pillars
- **Precision Profiles:** Multiple variants per category (hat styles, shoe types, ring shapes) ensure recommendations fit.
- **Privacy First Sharing:** Private / public / all connections / selected connections visibility on every field, list, and dependent.
- **Smart Suggestions:** AI leverages Amazon Ads recommendation APIs without exposing unauthorized data.
- **Modern Experience:** A persuasive landing funnel, responsive layouts, and accessible UI components that feel upscale and trustworthy.

## Experience Principles
- Mobile-first, responsive, and fast—optimize perceived performance and real metrics.
- Visual identity: modern, clean, and confident. Primary color `#0cd6f5`, secondary black, crisp typography with generous breathing room.
- Accessibility is non-negotiable (WCAG 2.1 AA): keyboard support, color contrast, focus states, semantic structure.
- Social ready: every shareable page includes polished Open Graph tags and preview assets.
- Navigation: desktop header with full menu; on smaller breakpoints persist logo and surface a mobile menu button that opens a right-side overlay portal.

## Technical Guardrails
- **Stack:** Next.js 15 (App Router), Tailwind CSS (target v4), TypeScript (strict), Convex (data + realtime), Auth.js (Google Sign-In first), Resend, Stripe (with Connect-ready architecture), Amazon Ads APIs, Vercel hosting + analytics.
- Follow global Golden Rules from `~/.codex/AGENTS.md`: max 200 lines per file, reusable component library, no `@ts-nocheck`.
- Create one PRD per feature slice; keep documentation, telemetry, and testing commitments synchronous with delivery.
- Ensure Convex schemas model visibility scopes cleanly. Privacy logic must live server-side—never trust client toggles alone.
- Performance budget: aim for <100ms TTFB on cached pages, <2.5s LCP on mobile, and under 100ms interaction latency for key flows.

## Data & Integrations
- **Storage:** Convex for user profiles, dependents, visibility rules, lists, and activity logs.
- **External APIs:** Amazon Ads sponsored product/display recommendation endpoints (ASIN/theme inputs). Handle credential rotation securely via environment variables.
- **AI Pipeline:** Transform profile traits into ASIN/theme requests; filter outputs against visibility entitlements before display.
- **Analytics:** Vercel Analytics for baseline metrics; extend with custom events (profile created, invite sent/accepted, suggestion click, affiliate redirect).

## Process & Rituals
- Keep PRDs current—update status, requirements, and decisions as the project evolves—and ensure future modules follow the same discovery cadence documented here.
- Weekly roadmap check-ins review MRR/engagement via Convex dashboards. Record findings in `metrics/`.
- Every new feature ships with: unit + integration tests, Storybook snapshots where reusable UI emerges, and updated PRDs.
- Maintain CHANGELOG entries per meaningful release; follow Conventional Commits and feature branches.

## Risk & Compliance
- Treat all profile data as PII: encrypt at rest via Convex, restrict access to authorized viewers, respect child data sensitivity (COPPA-style caution).
- Affiliate policy compliance: honor Amazon Associates terms, refresh product data regularly, and track click attribution responsibly.
- Privacy leaks are unacceptable: any restricted field must be excluded from suggestion inputs and outputs for unauthorized users.
- Keep secrets in environment variables; never store credentials in the repo.

## Success Metrics & Observability
- Initial launch focuses on qualitative feedback; quantitative KPIs (profiles created, invite acceptance, affiliate CTR/GMV) are **TBD**—capture once live.
- Instrument logging for gift suggestion generation (with anonymized identifiers) and visibility rule evaluations.
- Set up alerting for API failure rates or performance regressions once usage data arrives.

## Change Log Expectations
- Document every scope addition or deviation in `CHANGELOG.md`.
- Update PRD statuses and the PRD index whenever requirements evolve or ship.
- Keep this AGENTS.md synchronized with brand/strategy updates; include dated revision notes when modified.
