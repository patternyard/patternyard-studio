/**
 * Central configuration for PenguinMod backend service roots.
 *
 * Every backend/service origin the editor talks to is defined here exactly
 * once, read from a build-time env var (inlined by webpack's DefinePlugin —
 * see webpack.config.js) with a safe default.
 *
 * IMPORTANT: each value MUST reference `process.env.PM_*` *directly*.
 * DefinePlugin performs a textual replacement of the literal
 * `process.env.PM_API_ROOT` etc. — aliasing it (e.g. `const env =
 * process.env; env.PM_API_ROOT`) defeats the replacement, leaving the value
 * undefined in the browser so it silently falls back to the default. This
 * mirrors how existing code reads `process.env.ROUTING_STYLE`.
 *
 * In the wycats fork, our deployment sets these env vars (see committed
 * `.env`, loaded by dotenv in webpack.config.js) to our own services. The
 * defaults intentionally still point at PenguinMod so that (a) upstream stays
 * mergeable and (b) an un-configured build keeps working.
 *
 * NOTE: `library` and `asset-cdn` are content/CDN services with no clean
 * upstream repo; they remain on PenguinMod until a future self-host stage,
 * but are already env-configurable here.
 */

const stripTrailingSlash = url => (typeof url === 'string' ? url.replace(/\/+$/, '') : url);

export const PM_API_ROOT = stripTrailingSlash(process.env.PM_API_ROOT || 'https://projects.penguinmod.com');
export const PM_EXTENSIONS_ROOT = stripTrailingSlash(process.env.PM_EXTENSIONS_ROOT || 'https://extensions.penguinmod.com');
export const PM_LIBRARY_ROOT = stripTrailingSlash(process.env.PM_LIBRARY_ROOT || 'https://library.penguinmod.com');
export const PM_ASSET_CDN_ROOT = stripTrailingSlash(process.env.PM_ASSET_CDN_ROOT || 'https://asset-cdn.penguinmod.com');
export const PM_DOCS_ROOT = stripTrailingSlash(process.env.PM_DOCS_ROOT || 'https://docs.penguinmod.com');

export default {
    PM_API_ROOT,
    PM_EXTENSIONS_ROOT,
    PM_LIBRARY_ROOT,
    PM_ASSET_CDN_ROOT,
    PM_DOCS_ROOT
};
