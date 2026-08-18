import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Evolv.IA homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>evolv\.IA \| AI, marketing e automazioni per crescere<\/title>/i);
  assert.match(html, /Non insegui i lead\./);
  assert.match(html, /Li governi\./);
  assert.match(html, /AI · Growth · CRM operativo/);
  assert.match(html, /evolvia-logo-text\.png/);
  assert.match(html, /Prenota una call/);
  assert.match(html, /Esplora il sistema/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview/i);
});

test("keeps brand assets and research notes aligned", async () => {
  const [css, logo, study, packageJson, heroHills] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../public/evolvia-mark.svg", import.meta.url), "utf8"),
    readFile(new URL("../docs/studio-evoluzione-pagine.md", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/hero-hills.tsx", import.meta.url), "utf8"),
  ]);

  // Palette derived by measurement from the hero footage (public/hero.mp4):
  // the raw video is blue (hues 195-201); it is graded to teal/aqua at ~176
  // and the tokens below match that graded result.
  assert.match(css, /--bg:\s*#07110F/i);
  assert.match(css, /--ink:\s*#E8E9E6/i);
  assert.match(css, /--aqua:\s*#69D3CC/i);
  // The hero background is now the WebGL hills (hero-hills.tsx), colored
  // directly via the shader's uniform rather than a CSS filter on footage.
  assert.match(heroHills, /0x69d3cc/i);
  // Type roles.
  assert.match(css, /--font-display:\s*"Schibsted Grotesk"/);
  assert.match(css, /--font-mono:\s*"IBM Plex Mono"/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(logo, /#69D3CC/i);
  assert.match(study, /Awwwards/);
  assert.match(study, /CSS Design Awards/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("ships a lean hero video and its poster", async () => {
  const { stat } = await import("node:fs/promises");
  const video = await stat(new URL("../public/hero.mp4", import.meta.url));
  const poster = await stat(new URL("../public/hero-poster.webp", import.meta.url));
  // The hero autoplays, so its weight lands on first paint. The source was
  // 11MB; keep it transcoded and well under 1MB.
  assert.ok(video.size > 0 && video.size < 1_000_000, `hero.mp4 is ${video.size} bytes`);
  assert.ok(poster.size > 0 && poster.size < 300_000, `poster is ${poster.size} bytes`);
});
