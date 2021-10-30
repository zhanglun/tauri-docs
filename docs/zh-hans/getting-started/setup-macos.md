---
title: 为 macOS 设置
---

import Alert from '@theme/Alert'
import { Intro } from '@theme/SetupDocs'
import Icon from '@theme/Icon'

<Intro />

## 1. 系统依赖&nbsp;<Icon title="alert" color="danger"/>


你需要安装<a href="https://brew.sh/" target="_blank">Homebrew</a>来执行下面的命令。

```sh
$ brew install gcc
```

你还需要确保安装了`xcode`


```sh
$ xcode-select --install
```

## 2. Node.js 和包管理&nbsp;<Icon title="control-skip-forward" color="warning"/>

### Node.js

我们建议使用`nvm`来管理你的 Node.js，它允许您轻松切换版本和更新 Node.js。

```sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | zsh
```

<Alert title="Note">
我们已经检查过这个 bash 脚本了，它做了他该做的事情。然而，在盲目地通过curl执行一个bash脚本之前，先检查脚本总是明智的。这是该文件的<a href="https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh" target="_blank">下载地址</a>。
</Alert>

安装 nvm 后，关闭并重新打开终端，然后安装最新版本的 Node.js 和 npm：

```sh
$ nvm install node --latest-npm
$ nvm use node
```

如果你对nvm有任何问题，请查阅他们的<a href="https://github.com/nvm-sh/nvm">项目说明</a>.

### 可选的 Node.js 包管理

您可能想使用 npm 的替代方法：

- <a href="https://yarnpkg.com/getting-started" target="_blank">Yarn</a>, 是Tauri 团队的首选
- <a href="https://pnpm.js.org/en/installation" target="_blank">pnpm</a>

## 3. Rustc and Cargo 包管理 &nbsp;<Icon title="control-skip-forward" color="warning"/>


以下这个命令将会安装 <a href="https://rustup.rs/" target="_blank">rustup</a>，<a href="https://www.rust-lang.org/" target="_blank">Rust</a>的官方安装程序。

```
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

<Alert title="Note">
我们已经检查过这个 bash 脚本了，它做了他该做的事情。然而，在盲目地通过curl执行一个bash脚本之前，先检查脚本总是明智的。这是该文件的<a href="https://sh.rustup.rs" target="_blank">下载地址</a>。
</Alert>


为了确保 Rust 已经安装成功，运行以下命令： 

```sh
$ rustc --version
latest update on 2019-12-19, rust version 1.40.0
```

如果命令不起作用，你可能需要重启你的终端

## 继续

现在你已经为 Tauri 设置好了 macOS 的依赖项，学习如何[将 Tauri 添加到你的项目](/docs/usage/development/integration)。
