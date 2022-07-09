# Lerna

## Step

1. initialize

```bash
npx lerna init
```

2. first package

```base
lerna create <`package`> -y
```

3. first package install dependencies

```bash
yarn add `figlet`
```

4. remove all dependencies instead yarn workspace

```json
// package.json
"workspace": [
  "package/first",
  "package/*"
]
```

5. with yarn as npm client

```json
// lerna.json
{
  "package": {
    "package/*"
  },
  "npmClient": "yarn",
  "useWorkspace": true,
  "version": "0.0.0"
}
```

6. install dependencies in all packages

```bash
lerna add --dev `jest`
```

7. install dependencies in scoped

```bash
lerna add --dev <`pkg`> --scope <`package`>
```

8. run test in all packages

```bash
lerna exec -- npx jest
```

9. add scripts to use `lerna run`

```json
"scripts": {
  "test": "jest"
}
```

```bash
lerna run test
```

10. fix sometime the mono repo doesn't work

```bash
lerna bootstrap
```

## TO RECAP

```
lerna init  - make monorepo
lerna create  - make package in monorepo
lerna add --scope <package>   - install dependencies
lerna exec -- <command>     - run commands in packages
lerna run   - run script from package.json
lerna bootstrap   - link packages / panic button
```
