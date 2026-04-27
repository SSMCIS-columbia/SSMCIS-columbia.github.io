# Agent instructions

## Project

This is a simple static website built with Eleventy and hosted on GitHub.

## Stack

- Language: HTML, CSS, JavaScript where needed
- Framework / static site generator: Eleventy
- Package manager: npm
- Hosting: GitHub Pages or GitHub-hosted static site

## Commands

- Install dependencies: `npm install`
- Run local dev server: `npm run dev`
- Build site: `npm run build`
- Test: no real test suite is configured. Do not run `npm test` unless explicitly asked; it currently exits with an error.
- Typecheck: not applicable
- Lint: not configured unless a lint script is added later.

## Eleventy notes

- This is an Eleventy static site.
- Source files may live in folders such as `src/`, `_includes/`, `_layouts/`, or data folders.
- Generated output is likely in `_site/` or `dist/`; do not edit generated output directly.
- Prefer changing source templates, includes, layouts, CSS, or data files.
- After changes, run `npm run build` to check that Eleventy builds cleanly.

## Rules

- Do not commit or push.
- Do not install packages without approval.
- Do not delete files without approval.
- Never delete files from ./assets without asking TWICE.
- Do not modify generated files.
- Keep changes small and scoped.
- Prefer existing patterns over new abstractions.
- Do not change public APIs unless explicitly asked.
- Do not treat the failing `npm test` script as a code failure; this project has no test suite configured.

## Done criteria

- Summarize changed files.
- Explain behavior changes.
- Run relevant tests where possible.
- Say clearly if tests were not run.
