/**
 * Map old docs-nextra paths → Scalar deep links.
 * Cloudflare Pages cannot redirect to URL hashes, so legacy pathnames are
 * rewritten to index.html (see _redirects) and remapped here on load.
 */
(function () {
  var LEGACY_REDIRECTS = {
    // Introduction / getting started / guides / SDKs (no dedicated Scalar pages)
    "/getting-started": "#description/introduction",
    "/getting-started/quick-start": "#description/introduction",
    "/getting-started/authentication": "#description/introduction",
    "/guides": "#description/introduction",
    "/guides/changelog": "#description/introduction",
    "/guides/error-handling": "#description/introduction",
    "/guides/examples": "#description/introduction",
    "/guides/rate-limits": "#description/introduction",
    "/official-sdks": "#description/introduction",
    "/official-sdks/python": "#description/introduction",
    "/official-sdks/javascript": "#description/introduction",
    "/official-sdks/php": "#description/introduction",
    "/official-sdks/java": "#description/introduction",
    "/reference": "#description/introduction",

    // Reference v2 — Translation
    "/reference/v2/translation/translate": "#tag/translation/POST/v2/translate",
    "/reference/v2/translation/batch-translate": "#tag/translation/POST/v2/translate/batch",
    "/reference/v2/translation/translate-html": "#tag/translation/POST/v2/translate/html",
    "/reference/v2/translation/translate-email": "#tag/translation/POST/v2/translate/email",
    "/reference/v2/translation/translate-subtitles": "#tag/translation/POST/v2/translate/subtitles",

    // Reference v2 — Language
    "/reference/v2/language/detect-language": "#tag/language/POST/v2/language_detect",
    "/reference/v2/language/supported-languages": "#tag/language/GET/v2/supported-languages",

    // Reference v2 — i18n
    "/reference/v2/i18n/i18n-create-job": "#tag/internationalization-i18n/POST/v2/translate/i18n",
    "/reference/v2/i18n/translate-i18n": "#tag/internationalization-i18n/POST/v2/translate/i18n",
    "/reference/v2/i18n/i18n-job-status": "#tag/internationalization-i18n/GET/v2/translate/i18n/jobs/{job_id}/status",
    "/reference/v2/i18n/i18n-download": "#tag/internationalization-i18n/GET/v2/translate/i18n/jobs/{job_id}/download",
    "/reference/v2/i18n/i18n-delete-job": "#tag/internationalization-i18n/DELETE/v2/translate/i18n/jobs/{job_id}",
    "/reference/v2/i18n/i18n-list-jobs": "#tag/internationalization-i18n/GET/v2/translate/i18n/jobs",

    // Reference v2 — Account
    "/reference/v2/account/account-summary": "#tag/account-summary/GET/v2/account/summary",
    "/reference/v2/account/health": "#tag/account-summary/GET/health",

    // Reference v1 — Legacy
    "/reference/v1/translate": "#tag/legacy-api-v1/POST/v1/translate",
    "/reference/v1/detect": "#tag/legacy-api-v1/POST/v1/language_detect",
    "/reference/v1/supported-languages": "#tag/legacy-api-v1/GET/v1/supported-languages",

    // Legacy /api/* aliases used by older docs
    "/api/v2/translate-html": "#tag/translation/POST/v2/translate/html",
    "/api/v2/translate-subtitles": "#tag/translation/POST/v2/translate/subtitles",
    "/api/v2/translate-i18n": "#tag/internationalization-i18n/POST/v2/translate/i18n",
    "/api/v2/i18n-create-job": "#tag/internationalization-i18n/POST/v2/translate/i18n",
    "/api/v2/i18n-job-status": "#tag/internationalization-i18n/GET/v2/translate/i18n/jobs/{job_id}/status",
    "/api/v2/i18n-download": "#tag/internationalization-i18n/GET/v2/translate/i18n/jobs/{job_id}/download",
    "/api/v2/i18n-delete-job": "#tag/internationalization-i18n/DELETE/v2/translate/i18n/jobs/{job_id}",
    "/api/v2/i18n-list-jobs": "#tag/internationalization-i18n/GET/v2/translate/i18n/jobs",
    "/api/v2/supported-languages": "#tag/language/GET/v2/supported-languages",
    "/api/v2/account-summary": "#tag/account-summary/GET/v2/account/summary",
    "/api/v2/health": "#tag/account-summary/GET/health",
    "/api/v1/translate": "#tag/legacy-api-v1/POST/v1/translate",
    "/api/v1/detect": "#tag/legacy-api-v1/POST/v1/language_detect",
    "/api/v1/supported-languages": "#tag/legacy-api-v1/GET/v1/supported-languages",
  }

  var path = window.location.pathname.replace(/\/+$/, "") || "/"
  if (path === "/") return

  var target = LEGACY_REDIRECTS[path]
  if (!target) return

  // Only remap when there is no explicit Scalar hash yet
  if (window.location.hash && window.location.hash !== "#") return

  window.location.replace("/" + target)
})()
