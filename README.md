# Socket ESLint Config

For projects with a `tsconfig.json`:

```json
{
  "extends": "@socketsecurity",
  "root": true,
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

For projects without a `tsconfig.json`:

```json
{
  "extends": "@socketsecurity/eslint-config/tsconfig-less",
  "root": true
}
```
