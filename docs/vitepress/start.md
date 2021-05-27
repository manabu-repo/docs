# Start

## 初始化目录

```s
yarn init -y
yarn add --dev vitepress
mkdir docs
echo '# Hello VitePress' > docs/index.md
```

## 添加脚本

```s
open package.json
```

```json
{
  "name": "vitepress",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  "devDependencies": {
    "vitepress": "^0.14.0"
  }
}
```