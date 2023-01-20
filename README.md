# Socket ESLint Config

[![Socket Badge](https://socket.dev/api/badge/npm/package/@socketsecurity/eslint-config)](https://socket.dev/npm/package/@socketsecurity/eslint-config)

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
