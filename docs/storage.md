# Personal Data Storage Guide

GrezOS keeps personal artifacts (notes, journals, goals, briefs, metrics, etc.) outside the repository so the codebase can be shared without exposing private information.

## Default Location
- Set the environment variable `GREZOS_STORAGE_PATH` to your data root.  
- If unset, the CLI and slash commands default to `~/Documents/grez-os`.

## Required Subdirectories
Create (or point existing folders to) the following structure inside `${GREZOS_STORAGE_PATH}`:

```
action-plan/
daily-brief/
data/
goals/
journal/
metrics/
newsletter/
notes/
projects/
todos/
updates/
```

Each folder holds the same files previously inside the repository (daily notes, metrics history, project launchboards, PRDs, etc.).

## Working Locally
- Each top-level feature directory (such as `notes/`, `journal/`, `projects/`) now contains a `storage/` symlink pointing to its counterpart beneath `${GREZOS_STORAGE_PATH}` so you can browse real data without committing it.  
- Feel free to replace the symlinks with your own path (e.g., another drive) as long as `GREZOS_STORAGE_PATH` matches.

## Seeding Example Projects
- Use the `/new-project` command to scaffold launchboards directly into `${GREZOS_STORAGE_PATH}/projects/`.

## Configuration Helper
- Copy `config/storage.example.json` to `config/storage.json` to record a local path (git-ignored).  
- Optionally export the variable in your shell profile:

```bash
export GREZOS_STORAGE_PATH="$(jq -r '.storagePath' ~/path/to/grez-os/config/storage.json)"
```

## Sharing the Repo
- Because personal data is outside git, you can safely share this repository.  
- New contributors should create their own storage root and symlinks or adjust the environment variable before running slash commands.
