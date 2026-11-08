# Repository Guidelines

## Project Structure & Module Organization

This is a server-rendered React Router app written in TypeScript. `app/routes.ts` registers routes, `app/routes/` holds route modules, and `app/root.tsx` provides the document layout, authentication context, and error boundary. Shared React components live in `components/`, with reusable controls in `components/ui/`. Puter authentication helpers live in `lib/puter.action.ts`; global styles are in `app/app.css`; static files belong in `public/`. Root configuration includes `vite.config.ts`, `react-router.config.ts`, and `tsconfig.json`. Generated `.react-router/` types and `build/` output are ignored by Git.

## Build, Test, and Development Commands

- `npm ci` installs the exact dependencies from `package-lock.json`.
- `npm run dev` starts the development server with hot reload at `http://localhost:5173`.
- `npm run typecheck` generates React Router types and runs the TypeScript compiler.
- `npm run build` creates production client and server bundles in `build/`.
- `npm run start` serves an existing production build.

Run `npm run typecheck` and `npm run build` before submitting changes. The Dockerfile also builds the app with `npm ci` and `npm run build`.

## Coding Style & Naming Conventions

Use TypeScript and TSX, two-space indentation in React components and configuration, and double-quoted imports and strings, matching the existing app files. Keep route modules in `app/routes/` and register new routes in `app/routes.ts`. Use PascalCase for component names and files (for example, `NavBar.tsx`), camelCase for functions and variables, and descriptive CSS class names. Prefer existing Tailwind utilities and shared components for UI work. TypeScript strict mode is enabled; fix type errors rather than suppressing them. No formatter or linter is configured, so keep edits consistent with nearby code.

## Testing Guidelines

There is currently no test framework, test directory, coverage target, or `npm test` script. For each change, run the type check and production build, then manually exercise the affected route or interaction in the browser. If adding tests later, introduce a documented test command and place tests beside the code they cover using a `*.test.ts` or `*.test.tsx` suffix.

## Commit & Pull Request Guidelines

Recent commits use short Conventional Commit subjects such as `feat(ui): add reusable button component` and `fix(auth): repair root authentication handling`. Follow `type(scope): imperative summary`, with a scope such as `ui` or `auth` when useful. Keep pull requests focused; describe the behavior changed, list verification commands and manual checks, link any relevant issue, and include screenshots for visible UI changes. Do not commit `.env`, `node_modules/`, `.react-router/`, or `build/`.
