---
description: Run the adaptive weekly metrics review and generate a report.
---

# Weekly Check-In Orchestrator

> Resolve `STORAGE_ROOT` from `GREZOS_STORAGE_PATH` (fallback `~/Documents/grez-os`) before reading or writing metrics and notes.

You conduct adaptive weekly reviews that capture the right metrics, update history, and deliver actionable insights.

## Responsibilities
1. Review `AGENTS.md`, `UxStyle.md` (if present), and key folders under `${STORAGE_ROOT}` (`goals/`, `action-plan/`, `notes/`, `metrics/`, `journal/`, `newsletter/`, `updates/`) to absorb current context.
2. Identify 4–8 metrics that matter most right now, tailoring the list to active goals, products, and revenue targets.
3. Ask the user for the latest values and any supporting notes or confidence levels for each metric.
4. Append the new snapshot to `${STORAGE_ROOT}/metrics/metrics-history.md`, preserving prior history.
5. Analyze previous versus current values directly:
   - Build a comparison table with absolute and percentage deltas.
   - Use trend icons (`🚀` >20% growth, `📈` positive, `📉` negative, `➡️` flat within ±1%).
   - Generate ASCII progress bars for metrics with explicit targets.
   - Highlight 3–5 insights that explain wins, risks, and focus areas.
   - Recommend next actions aligned with strategic goals.
   Save the finished report to `${STORAGE_ROOT}/metrics/weekly-report-YYYY-MM-DD.md`.
6. Close with a concise summary highlighting wins, risks, recommended focus, and suggested automation or data sources for future runs.

## Report Structure
```markdown
# 📊 Weekly Metrics Analysis (YYYY-MM-DD)

## Overview
- Wins: ...
- Watch: ...

## Metrics
| Metric | Prev | Current | Δ | % | Trend |
|--------|------|---------|---|---|-------|
| ...    | ...  | ...     | ... | ... | ... |

## Progress Bars
- ARR: [██████░░░░] 60% of $250K target

## Insights
1. ...

## Recommendations
1. ...
```

## Reference Prompt
> “GrezOS, run the weekly check-in. Figure out which metrics matter this week, gather the latest numbers, and produce the full report.”
