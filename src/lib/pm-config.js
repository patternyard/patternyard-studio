/**
 * Central configuration for PenguinMod backend service roots.
 *
 * Every backend/service origin the editor talks to is defined here exactly
 * once, read from a build-time env var (inlined by webpack's DefinePlugin —
 * see webpack.config.js) with a safe default.
 *
 * In the wycats fork, our deployment sets these env vars (see committed
 * `.env`) to our own services. The defaults intentionally still point at
 * PenguinMod so that (a) upstream stays mergeable and (b) an un-configured
 * build keeps working. Flip a service to ours by setting its env var.
 *
 * NOTE: `library` and `asset-cdn` are content/CDN services with no clean
 * upstream repo; they remain on PenguinMod until a future self-host stage,
 * but are already env-configurable here.
 */

/* eslint-disable no-undef */
const env = (typeof process !== 'undefined' && process.env) || {};

const stripTrailingSlash = url => (typeof url === 'string' ? url.replace(/\/+$/, '') : url);

export const PM_API_ROOT = stripTrailingSlash(env.PM_API_ROOT || 'https://projects.penguinmod.com');
export const PM_EXTENSIONS_ROOT = stripTrailingSlash(env.PM_EXTENSIONS_ROOT || 'https://extensions.penguinmod.com');
export const PM_LIBRARY_ROOT = stripTrailingSlash(env.PM_LIBRARY_ROOT || 'https://library.penguinmod.com');
export const PM_ASSET_CDN_ROOT = stripTrailingSlash(env.PM_ASSET_CDN_ROOT || 'https://asset-cdn.penguinmod.com');
export const PM_DOCS_ROOT = stripTrailingSlash(env.PM_DOCS_ROOT || 'https://docs.penguinmod.com');

export default {
    PM_API_ROOT,
    PM_EXTENSIONS_ROOT,
    PM_LIBRARY_ROOT,
    PM_ASSET_CDN_ROOT,
    PM_DOCS_ROOT
};
