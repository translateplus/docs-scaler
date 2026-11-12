# TranslatePlus Docs (Scalar)

Static Scalar API Reference for `https://docs.translateplus.io`.

## Deploy

Cloudflare Pages:

- **Build command:** none (static)
- **Build output directory:** `/` (project root)
- **Node version:** not required

Or:

```bash
npx wrangler pages deploy . --project-name=translateplus-docs
```

## Legacy URL redirects

Old `docs-nextra` paths are preserved via:

1. `_redirects` — rewrite legacy pathnames to `index.html` (200)
2. `legacy-redirects.js` — map those pathnames to Scalar hashes such as `#tag/translation/POST/v2/translate`

Examples:

| Old (Nextra) | New (Scalar) |
|---|---|
| `/reference/v2/translation/translate` | `/#tag/translation/POST/v2/translate` |
| `/reference/v2/translation/batch-translate` | `/#tag/translation/POST/v2/translate/batch` |
| `/reference/v2/i18n/i18n-create-job` | `/#tag/internationalization-i18n/POST/v2/translate/i18n` |
| `/getting-started/quick-start` | `/#description/introduction` |
| `/official-sdks/python` | `/#description/introduction` |

OpenAPI source: `https://api.translateplus.io/openapi.json`
