## Storage Configuration

Set the environment variable `GREZOS_STORAGE_PATH` to tell GrezOS where personal data (notes, goals, briefs, etc.) should live.  
By default it points to `~/Documents/grez-os`.

You can copy `storage.example.json` to `storage.json` (ignored by git) if you prefer to track the setting locally:

```bash
cp config/storage.example.json config/storage.json
```

Then export the variable (e.g., in your shell profile):

```bash
export GREZOS_STORAGE_PATH="$(jq -r '.storagePath' config/storage.json)"
```

Each collaborator can supply their own path, keeping the repository portable while personal data stays private.
