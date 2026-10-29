# portfolio-nuxt-canvas

- Start from `origin/main`; local `main` is often behind.
- `@nuxt/image` is pinned to exactly 2.0.0: 2.1.0 makes `nuxt build` exit 0 without
  writing `.output/server`. Before bumping it, run `bun run build` and confirm the log
  ends with "Build complete!" and `.output/nitro.json` has preset `node-server` or `vercel`.
- Vercel builds on Node 24 (`engines.node` plus the project setting); older Node
  segfaults the build. Green CI runs under bun, so it doesn't prove a deploy works. When a
  deploy fails, read `npx vercel inspect <dpl_id> --logs --scope vzellwegs-projects`.
