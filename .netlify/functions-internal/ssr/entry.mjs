import { renderers } from './renderers.mjs';
import { manifest } from './manifest_UNhe4wE-.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_C30admMu.mjs');
const _page1 = () => import('./chunks/index_DwGOedOI.mjs');
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
    "middlewareSecret": "166348d5-5c30-4e40-982d-27026e386640"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
