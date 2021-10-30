---
title: 与 Tauri 集成
---

import Alert from '@theme/Alert'
import Command from '@theme/Command'
import Link from '@docusaurus/Link'

<Alert title="Please note" type="warning" icon="alert">
  你必须在你的机器上完成所有开发环境设置的步骤。如果你还没有完成，请查看  <a href="/docs/getting-started/intro#setting-up-your-environment"> 适用于你的操作系统的设置页面</a>
</Alert>

根据你的需要，有两种与 Tauri 集成的方法：

- [开始一个新的 Tauri 项目](#1-start-a-new-tauri-project)
- 或者 [添加 Tauri 到已有的项目](#1-add-tauri-to-existing-project)

### 1、开始一个新的 Tauri 项目 {#1-start-a-new-tauri-project}

```bash
yarn create tauri-app
# 或者
npm x create-tauri-app
```

只需按照说明，并选择你喜欢的 Web 前端框架即可。 `create-tauri-app` 将会根据你的输入创建一个模板项目。完成之后你可以直接[检查 tauri 的信息](#3-check-tauri-info-to-make-sure-everything-is-set-up-properly)

### 1、添加 Tauri 到已有的项目:{#1-add-tauri-to-existing-project}

The Tauri CLI tool helps you build your project, so install it at first.

Tauri CLI 工具帮你构建你的项目，所以先安装它。

你可以[使用 `Node.js`](#Install-Tauri-CLI-package-as-a-dev-dependency) 或者 [使用 `Rust`](#Alternatively-install-Tauri-CLI-as-a-cargo-subcommand) 安装 Tauri CLI。

#### 将 Tauri CLI 安装为开发依赖项 {#Install-Tauri-CLI-package-as-a-dev-dependency}

```bash
cd project-folder

# 如果已经有 package.json，不需要
# yarn init
# 或者
# npm init

yarn add -D @tauri-apps/cli
# 或者
npm install -D @tauri-apps/cli
```

<Alert title="Note">
  你可以将 Tauri 安装为本地依赖或者全局依赖, 但是我们推荐安装到本地。
</Alert>

如果你决定用将 Tauri作为npm的本地包来使用，你需要在 `package.json` 中定义自定义的脚本：

```js title=package.json
{
  // 这只是一个例子
  "scripts": {
    "tauri": "tauri"
  }
}
```

#### 或者，将 Tauri CLI 作为一个 cargo 子命令安装{#Alternatively-install-Tauri-CLI-as-a-cargo-subcommand}

这会将 `tauri-cli` 作为 cargo 的一个子命令，安装在 cargo 的二进制文件夹中（默认在 `$HOME/.cargo/bin`)：

```bash
cargo install tauri-cli --version ^1.0.0-beta
```

更多的安装选项，查看 [`cargo install`](https://doc.rust-lang.org/cargo/commands/cargo-install.html#description)

#### 将 Tauri API 安装为依赖项 (可选){#Install-Tauri-API-Package-as-a-Dependency-optional}

推荐在使用了 ES Modules 或者现代构建工具(比如 Webpack 或者 Vite) 的项目中使用 `Tauri-apps/api`。这是访问 Tauri API 最安全的方式 

```bash
yarn add @tauri-apps/api
# OR
npm install @tauri-apps/api
```

### 2、在你的应用中初始化 Tauri{#Initialize-Tauri-in-Your-App}

<Command name="init" />

这个命令会在当前操作的目录路径中创建一个新的文件夹`src-tauri`。

```sh
└── src-tauri
    ├── .gitignore
    ├── Cargo.toml
    ├── rustfmt.toml
    ├── tauri.conf.json
    ├── icons
    │   ├── 128x128.png
    │   ├── 128x128@2x.png
    │   ├── 32x32.png
    │   ├── Square107x107Logo.png
    │   ├── Square142x142Logo.png
    │   ├── Square150x150Logo.png
    │   ├── Square284x284Logo.png
    │   ├── Square30x30Logo.png
    │   ├── Square310x310Logo.png
    │   ├── Square44x44Logo.png
    │   ├── Square71x71Logo.png
    │   ├── Square89x89Logo.png
    │   ├── StoreLogo.png
    │   ├── icon.icns
    │   ├── icon.ico
    │   └── icon.png
    └── src
        ├── build.rs
        ├── cmd.rs
        └── main.rs
```

### 3. 检查 tauri 信息，确保一切设置正确

<Command name="info" />

它应该返回类似的信息：

```
Operating System - Darwin(16.7.0) - darwin/x64

Node.js environment
  Node.js - 12.16.3
  @tauri-apps/cli - 1.0.0-beta.2
  @tauri-apps/api - 1.0.0-beta.1

Global packages
  npm - 6.14.4
  yarn - 1.22.4

Rust environment
  rustc - 1.52.1
  cargo - 1.52.0

App directory structure
/node_modules
/src-tauri
/src
/public

App
  tauri.rs - 1.0.0-beta.1
  build-type - bundle
  CSP - default-src blob: data: filesystem: ws: wss: http: https: tauri: 'unsafe-eval' 'unsafe-inline' 'self' img-src: 'self'
  distDir - ../public
  devPath - ../public
  framework - Svelte
  bundler - Rollup
```

在对问题进行分类时，这些信息将会非常有帮助。

### 模式

我们已经定义了称之为“模式”的预构建配置。它们可能可以帮助你自定义 Tauri，以满足你的需求。[查看更多关于模式的内容](/docs/usage/patterns/about-patterns)。

## Vue CLI 插件

如果你正在使用 Vue CLI，推荐使用官方的 [CLI 插件](https://github.com/tauri-apps/vue-cli-plugin-tauri)。
