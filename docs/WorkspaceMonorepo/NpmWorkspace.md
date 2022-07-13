# Npm Workspace Monorepo

## Add workspace mode

> add workspace to `package.json`

```bash
"workspaces": [
  "packages/*"
]
```

## Add Sub-Project(not required)

```bash
npm init -w packages/<pkg1> -y
```

## Add Dependencies for Sub-Project

```bash
npm install <package> --dev --workspaces=<pkg1>
```

## Import Sub-Project Component to Sub-Project

> assumption we want import `<component>` from `<pkg1>` to `<pkg2>`

```ts
// pkg1
import component from '@namespace/pkg2'
```
