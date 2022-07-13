# Pnpm Workspace Monorepo

## Add workspace configuration

> add workspace config file `pnpm-workspace.yaml`

```bash
packages:
  - 'packages/*'
```

> set main entry in `packages.json`

```json
"main": "index.ts",
```

## Referencing workspace packages through aliases

> in sub-project `packages.json`

```json
"dependencies": {
  "@akashi/common": "workspace:0.0.1",
  "@akashi/hooks": "workspace:0.0.1"
},
```

it same as in terminal:

```bash
pnpm install @akashi/hooks
```

## Import Component

```ts
import { component } from '@akashi/hooks'
```
