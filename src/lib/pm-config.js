/**
 * Central configuration for PatternYard backend service roots.
 *
 * Every backend/service origin the editor talks to is defined here exactly
 * once, read from a build-time env var (inlined by webpack's DefinePlugin —
 * see webpack.config.js) with a default that points at our own infrastructure.
 *
 * IMPORTANT: each value MUST reference `process.env.PM_*` *directly*.
 * DefinePlugin performs a textual replacement of the literal
 * `process.env.PM_API_ROOT` etc. — aliasing it (e.g. `const env =
 * process.env; env.PM_API_ROOT`) defeats the replacement, leaving the value
 * undefined in the browser so it silently falls back to the default. This
 * mirrors how existing code reads `process.env.ROUTING_STYLE`.
 *
 * SUCCESS CRITERION — FULL runtime independence from penguinmod.com:
 * the defaults below MUST point at patternyard.dev infrastructure, never at
 * upstream. The whole point of this fork is that nothing the editor needs at
 * runtime depends on penguinmod.com. Do NOT "fall back" to upstream hosts if
 * an env var is unset — an unconfigured build must still be fully independent.
 * Deployment env vars (Vercel dashboard / committed .env) may override these
 * to point at staging/preview infra, but they must also be patternyard hosts.
 *
 * Host map (upstream -> patternyard):
 *   projects.penguinmod.com  -> api.patternyard.dev      (PM_API_ROOT)
 *   asset-cdn.penguinmod.com -> api.patternyard.dev      (PM_ASSET_CDN_ROOT; warm-tier served by backend)
 *   extensions.penguinmod.com-> extensions.patternyard.dev
 *   library.penguinmod.com   -> library.patternyard.dev
 *   docs.penguinmod.com      -> docs.patternyard.dev
 *   penguinmod.com           -> patternyard.dev          (PM_HOME_ROOT)
 *   studio.penguinmod.com    -> studio.patternyard.dev   (PM_STUDIO_ROOT)
 */

const stripTrailingSlash = url => (typeof url === 'string' ? url.replace(/\/+$/, '') : url);

export const PM_API_ROOT = stripTrailingSlash(process.env.PM_API_ROOT || 'https://api.patternyard.dev');
export const PM_EXTENSIONS_ROOT = stripTrailingSlash(process.env.PM_EXTENSIONS_ROOT || 'https://extensions.patternyard.dev');
export const PM_LIBRARY_ROOT = stripTrailingSlash(process.env.PM_LIBRARY_ROOT || 'https://library.patternyard.dev');
export const PM_ASSET_CDN_ROOT = stripTrailingSlash(process.env.PM_ASSET_CDN_ROOT || 'https://api.patternyard.dev');
export const PM_DOCS_ROOT = stripTrailingSlash(process.env.PM_DOCS_ROOT || 'https://docs.patternyard.dev');
export const PM_HOME_ROOT = stripTrailingSlash(process.env.PM_HOME_ROOT || 'https://patternyard.dev');
export const PM_STUDIO_ROOT = stripTrailingSlash(process.env.PM_STUDIO_ROOT || 'https://studio.patternyard.dev');

export default {
    PM_API_ROOT,
    PM_EXTENSIONS_ROOT,
    PM_LIBRARY_ROOT,
    PM_ASSET_CDN_ROOT,
    PM_DOCS_ROOT,
    PM_HOME_ROOT,
    PM_STUDIO_ROOT
};
