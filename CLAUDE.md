Use **bun** for everything (install, scripts, runtime).

## File & Code Limits

- Max **250 lines** per file
- Max **120 lines** per component
- Max **50 lines** per function
- If a file exceeds limits — split it

## Naming Conventions

- **Files**: `kebab-case.ts` / `kebab-case.tsx`
- **Components**: `PascalCase` (`export function UserCard`)
- **Functions**: `camelCase` (`formatDate`)
- **Constants**: `UPPER_SNAKE_CASE` (`MAX_RETRY_COUNT`)
- **Types/Interfaces**: `PascalCase` (`interface UserProps`)
- **Folders**: `kebab-case`

## Components

- Always `export function` — no default exports
- Props defined as `interface XProps` in same file
- One component per file
- Extract to `components/shared/` if used 2+ times

## TypeScript

- No `any` — use `unknown` + type guards
- No `as` type casting — use proper types
- Prefer `interface` over `type` for object shapes

## Imports

- Absolute paths only: `@/components/...`, `@/lib/...`
- No relative imports outside the same folder

## Git

- No `Co-Authored-By` line in commits
- No `Co-Authored-By` or AI attribution in PRs

## Code Quality

- No `console.log` in committed code (use Biome `noConsoleLog` rule)
- No commented-out code
- No unused variables or imports (Biome enforces this)

## Brainstorming Preferences

- **No visual companion** — do not offer the browser-based visual companion during brainstorming sessions. The user has declined this feature.