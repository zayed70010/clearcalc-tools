# ClearCalc Tools

An original, fast, English-language calculator website built with Astro.

The live site is [https://clearcalctools.com/](https://clearcalctools.com/).

## Commands

- `npm install`
- `npm run dev`
- `npm test`
- `npm run build`

Calculator inputs are processed locally in the visitor's browser. Cloudflare Pages serves the public site at https://clearcalctools.com. Requests whose Host header is exactly clearcalc-tools.pages.dev 301 to the same path on that domain. Preview hosts on pages.dev are left alone. GitHub Pages serves each built path as an immediate redirect to the same URL on clearcalctools.com, and its robots.txt allows crawling.

Uploading only the built `dist` folder from the Cloudflare dashboard does not compile `functions/`. That folder has to be deployed with Wrangler from the repository root (`npx wrangler pages deploy dist`). The dashboard does run `dist/_worker.js`, which this build copies from `public/_worker.js`, and that worker performs the same host redirect. When `_worker.js` is present, Cloudflare ignores `functions/`.
