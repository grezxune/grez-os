# Projects Directory

Project launchboards now live in your external storage root so that personal strategy docs stay out of version control.

- Set `GREZOS_STORAGE_PATH` (default `~/Documents/grez-os`).
- Create `${GREZOS_STORAGE_PATH}/projects/` if it does not exist.
- Add each project under that directory (e.g., `${GREZOS_STORAGE_PATH}/projects/project-slug`).
- Use the `/new-project` command to generate starter launchboards on demand.
- The repository surfaces `${GREZOS_STORAGE_PATH}/projects` at `projects/storage` for quick access; adjust the symlink if you keep projects elsewhere.

See `docs/storage.md` and the Quick Start guide for automation scripts that bootstrap the structure.
