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
todos/
updates/
```

Each folder holds the same files previously inside the repository (daily notes, metrics history, PRDs, etc.).

## Working Locally
- The repo now contains symbolic links (inside `storage/`) pointing to `${GREZOS_STORAGE_PATH}` so you can browse your real data directly from this project directory.  
- Feel free to replace the symlinks with your own path (e.g., another drive) as long as `GREZOS_STORAGE_PATH` matches.

## Configuration Helper
- Copy `config/storage.example.json` to `config/storage.json` to record a local path (git-ignored).  
- Optionally export the variable in your shell profile:

```bash
export GREZOS_STORAGE_PATH="$(jq -r '.storagePath' ~/path/to/grez-os/config/storage.json)"
```

## Sharing the Repo
- Because personal data is outside git, you can safely share this repository.  
- New contributors should create their own storage root and symlinks or adjust the environment variable before running slash commands.
