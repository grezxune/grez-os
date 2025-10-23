# Custom Prompts

Codex CLI (Rust implementation) discovers prompts from `$CODEX_HOME/prompts/*.md`.  
This repo now acts as the source of truth for every GrezOS prompt so projects across your machine stay in sync.

## Where prompts live
- Author prompts under `prompts/commands/<name>.md`.  
- Each file includes frontmatter (`description`, optional `argument-hint`) so the slash popup shows friendly labels.  
- Prompts should resolve `GREZOS_STORAGE_PATH` (default `~/Documents/grez-os`) before touching user data.

## Syncing to Codex CLI
Run the sync script after editing prompts:

```bash
bun run scripts/sync-prompts.ts
```

The script:
1. Resolves `$CODEX_HOME` (defaults to `~/.codex`).
2. Ensures `$CODEX_HOME/prompts/` exists.
3. Copies all `prompts/commands/*.md` files into `$CODEX_HOME/prompts/`, overwriting any matching names.
4. Warns if legacy `commands.json` files are still present so you can delete them.

## Adding or updating a prompt
1. Create or edit the Markdown file in `prompts/commands/`.
2. Include a short description in the frontmatter.
3. Reference `GREZOS_STORAGE_PATH` anywhere filesystem access is required.
4. Run the sync script (`bun run scripts/sync-prompts.ts`).
5. Restart Codex CLI (or open a new session) to pick up the changes.

The CLI now exposes prompts via `/prompts:<name>` — for convenience the slash popup also surfaces them when you start typing the bare name.
