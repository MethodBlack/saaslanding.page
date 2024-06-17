import { renderers } from './renderers.mjs';
import { manifest } from './manifest_nvwdNE1x.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_C30admMu.mjs');
const _page1 = () => import('./chunks/index_BCfUz9Rn.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.10.2_lightningcss@1.25.1_terser@5.31.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a3257207-7c32-4cb0-afdf-ad07fdb35496"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
