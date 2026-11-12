/**
 * Map old docs-nextra paths → Scalar deep links.
 * Prefer static redirect HTML under each path; this is a SPA fallback.
 */
(function () {
  var LEGACY_REDIRECTS = {
    "/getting-started": "#description/introduction",
    "/getting-started/quick-start": "#tag/translation/POST/v2/translate",
    "/getting-started/authentication": "#description/introduction",
    "/guides": "#description/introduction",
    "/guides/changelog": "#description/introduction",
    "/guides/error-handling": "#description/introduction",
    "/guides/examples": "#tag/translation/POST/v2/translate",
    "/guides/rate-limits": "#tag/account-summary",
    "/official-sdks": "#tag/translation/POST/v2/translate",
    "/official-sdks/python": "#tag/translation/POST/v2/translate",
    "/official-sdks/javascript": "#tag/translation/POST/v2/translate",
    "/official-sdks/php": "#tag/translation/POST/v2/translate",
    "/official-sdks/java": "#tag/translation/POST/v2/translate",
    "/reference": "#tag/translation",
    "/reference/v2": "#tag/translation",
    "/reference/v2/translation": "#tag/translation",
    "/reference/v2/translation/translate": "#tag/translation/POST/v2/translate",
    "/reference/v2/translation/batch-translate": "#tag/translation/POST/v2/translate/batch",
    "/reference/v2/translation/translate-html": "#tag/translation/POST/v2/translate/html",
    "/reference/v2/translation/translate-email": "#tag/translation/POST/v2/translate/email",
    "/reference/v2/translation/translate-subtitles": "#tag/translation/POST/v2/translate/subtitles",
    "/reference/v2/language": "#tag/language",
    "/reference/v2/language/detect-language": "#tag/language/POST/v2/language_detect",
    "/reference/v2/language/supported-languages": "#tag/language/GET/v2/supported-languages",
    "/reference/v2/i18n": "#tag/internationalization-i18n",
    "/reference/v2/i18n/i18n-create-job": "#tag/internationalization-i18n/POST/v2/translate/i18n",
    "/reference/v2/i18n/translate-i18n": "#tag/internationalization-i18n/POST/v2/translate/i18n",
    "/reference/v2/i18n/i18n-job-status": "#tag/internationalization-i18n/GET/v2/translate/i18n/jobs/{job_id}/status",
    "/reference/v2/i18n/i18n-download": "#tag/internationalization-i18n/GET/v2/translate/i18n/jobs/{job_id}/download",
    "/reference/v2/i18n/i18n-delete-job": "#tag/internationalization-i18n/DELETE/v2/translate/i18n/jobs/{job_id}",
    "/reference/v2/i18n/i18n-list-jobs": "#tag/internationalization-i18n/GET/v2/translate/i18n/jobs",
    "/reference/v2/account": "#tag/account-summary",
    "/reference/v2/account/account-summary": "#tag/account-summary/GET/v2/account/summary",
    "/reference/v2/account/health": "#tag/account-summary/GET/health",
    "/reference/v1": "#tag/legacy-api-v1",
    "/reference/v1/translate": "#tag/legacy-api-v1/POST/v1/translate",
    "/reference/v1/detect": "#tag/legacy-api-v1/POST/v1/language_detect",
    "/reference/v1/supported-languages": "#tag/legacy-api-v1/GET/v1/supported-languages",
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
    "/api/v1/supported-languages": "#tag/legacy-api-v1/GET/v1/supported-languages"
  };

  function normalizePath(pathname) {
    var path = pathname.replace(/\/+$/, "") || "/";
    return path;
  }

  function resolveTarget() {
    var path = normalizePath(window.location.pathname);
    if (path === "/") return null;
    return LEGACY_REDIRECTS[path] || null;
  }

  var target = resolveTarget();
  if (!target) return;

  // Already on the correct Scalar deep link
  if (window.location.hash === target) return;

  // Force navigation to the Scalar tag/operation page
  window.location.replace("/" + target);
})();
