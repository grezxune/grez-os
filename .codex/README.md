# Custom Slash Commands

This directory configures custom slash commands for the Codex CLI so you can quickly launch GrezOS prompts.

- `/goal-alignment` loads `system-prompts/01_goal_alignment_prompt.md`, guiding a full goal alignment session.
- `/daily-brief` loads `system-prompts/02_daily_brief_prompt.md`, generating your orchestrated daily briefing.
- `/nightly-recap` loads `system-prompts/06_daily_notes_prompt.md`, transforming the latest daily note into a recap and refreshed action items.
- `/daily-tasks` loads `system-prompts/07_daily_task_intake_prompt.md`, capturing priorities, updating today’s note, and carrying over deferred work.
- `/brain-dump` loads `system-prompts/08_brain_dump_prompt.md`, recording timestamped thought dumps for later reflection.
- `/weekly-checkin` loads `system-prompts/09_weekly_checkin_prompt.md`, adapting metrics tracking and producing weekly reports.
- `/daily-checkin` loads `system-prompts/10_daily_checkin_prompt.md`, guiding nightly reflections and analytics.
- `/newsletter-research` loads `system-prompts/11_newsletter_research_prompt.md`, compiling competitive insights and drafting your next issue.
- `/brain-dump-analysis` loads `system-prompts/12_brain_dump_analysis_prompt.md`, surfacing patterns and action items across brain dumps.

Add additional commands by editing `commands.json` and linking to new prompt files.
