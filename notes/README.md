## External Notes Storage

Personal and legacy notes now live outside the repository for portability and privacy.

- Set the environment variable `GREZOS_STORAGE_PATH` (default `~/Documents/grez-os`) to point at your data root.
- Place or symlink your notes directory at `${GREZOS_STORAGE_PATH}/notes`.
- The CLI slash commands will read and write to that external location. Keep this file in the repo to remind contributors of the expected structure.
