# Sizably

Modern gifting assistant that keeps size profiles, wish lists, and AI-powered gift suggestions in sync across your inner circle.

## Mission
- Capture accurate sizes (self + dependents) with granular privacy controls.
- Share curated wish lists and favorite brands to inspire thoughtful gifts.
- Surface affiliate gift recommendations tailored to each profile—without exposing data to unintended viewers.

## Tech Stack
- Next.js 15 (App Router) on Vercel with Tailwind CSS (v4 target) and strict TypeScript.
- Convex for data, real-time sync, and visibility enforcement.
- Auth.js (Google Sign-In first), Resend (email), Stripe-ready architecture, Vercel Analytics.
- Amazon Ads recommendation APIs for affiliate gift suggestions (ASIN/theme inputs).

## Project Structure
```
projects/sizably/
├── AGENTS.md        # Project-specific operating charter
├── UxStyle.md       # Design system + brand guidelines
└── prds/            # Product requirement documents (overview + feature slices)
```

## Getting Started
1. Review `AGENTS.md` for goals, guardrails, and observability expectations.
2. Study `UxStyle.md` to align UI/UX work with the brand.
3. Dive into `prds/` to understand scope and begin breaking work into issues/sprints.
4. Configure environment secrets (Convex, Amazon Ads, Resend, Stripe) before development.

## Development Notes
- Enforce performance budgets: <2.5s mobile LCP, <100ms interaction latency.
- Honor all privacy toggles—never show or derive suggestions from restricted data.
- Ensure responsive layouts, accessible interactions, and rich social meta tags.
- Track invites, gift suggestion clicks, and affiliate conversions via analytics.

## Roadmap
- Build MVP within 1–2 weeks, gather qualitative feedback, then instrument KPIs.
- Extend PRDs as the product evolves; keep `prds/README.md` status board up to date.

## Contribution
- Use feature branches and Conventional Commits.
- Update CHANGELOG entries with every meaningful change.
- Keep todos in `/todos` synchronized with progress logs.

