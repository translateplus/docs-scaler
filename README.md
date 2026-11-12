# TranslatePlus Docs (Scalar)

Static Scalar API Reference for `https://docs.translateplus.io`.

## Deep links

Scalar operation URLs use hash routes, for example:

- `/#tag/translation/POST/v2/translate`
- `/#tag/translation/POST/v2/translate/batch`
- `/#tag/language/GET/v2/supported-languages`
- `/#tag/internationalization-i18n/POST/v2/translate/i18n`

## Legacy Nextra path redirects

Old docs paths still resolve to the matching Scalar tag/operation:

1. **Static HTML** under each old path (e.g. `reference/v2/translation/translate/index.html`) immediately redirects to the Scalar hash
2. **`legacy-redirects.js`** (loaded in `<head>`) is a SPA fallback if a path is rewritten to `index.html`
3. **`_redirects`** keeps an SPA fallback for unmatched routes

Example:

`/reference/v2/translation/translate` → `/#tag/translation/POST/v2/translate`

## Deploy

Cloudflare Pages:

- Build command: none
- Output directory: project root (`.`)

```bash
npx wrangler pages deploy . --project-name=translateplus-docs
```

OpenAPI source: `https://api.translateplus.io/openapi.json`
