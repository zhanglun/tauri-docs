---
title: Setup for Windows
---

import Alert from '@theme/Alert'
import Icon from '@theme/Icon'
import { Intro } from '@theme/SetupDocs'

<Alert title="Note">

对于那些使用WSL的开发者，请参考我们的 [Linux specific instruction](/docs/getting-started/setup-linux)。
</Alert>

<Intro />

## 1. 系统依赖&nbsp;<Icon title="alert" color="danger"/>


你需要安装 Microsoft Visula Studio C++ build tools。<a href="https://visualstudio.microsoft.com/visual-cpp-build-tools/" target="_blank">下载安装包</a>, 然后运行它。当它问你想要安装什么包时，选择 C++ Build Tools。

<Alert title="Note">
这是一个很大的下载量（超过1GB），需要花费最多的时间，所以去喝杯咖啡吧。This is a big download (over 1GB) and takes the most time, so go grab a coffee.
</Alert>

<Alert type="warning">
如果你安装了 2017版本的 build tool，你可能需要卸载它。有很多关于在 2017 和 2019 版本上无法运行Tauri的报告
</Alert>

## 2. Node.js 运行时和包管理&nbsp;<Icon title="control-skip-forward" color="warning"/>

### Node.js (npm included)

我们建议使用<a href="https://github.com/coreybutler/nvm-windows#installation--upgrades" target="_blank">nvm-windows</a> 来管理你的 Node.js 运行时。它可以让你很轻松地切换和更新 Node.js 的版本

Then run the following from an Administrative PowerShell and press Y when prompted:
以管理员身份运行 PowerShell，运行下面的命令，在提示的时候按 Y： 

```powershell
# BE SURE YOU ARE IN AN ADMINISTRATIVE PowerShell!
nvm install latest
nvm use {{latest}} # Replace with your latest downloaded version
```

This will install the most recent version of Node.js with npm.

它会安装最新的 Node.js 和 npm。

### 可选的 Node.js 包管理

你可能想要使用 npm 的替代品：

- <a href="https://yarnpkg.com/getting-started" target="_blank">Yarn</a>, Tauri 团队倾向于它
- <a href="https://pnpm.js.org/en/installation" target="_blank">pnpm</a>

## 3. Rustc 和 Cargo 包管理&nbsp;<Icon title="control-skip-forward" color="warning"/>

现在你需要安装 <a href="https://www.rust-lang.org/" target="_blank">Rust</a>。最简单地方式是使用官方地安装器<a href="https://rustup.rs/" target="_blank">rustup</a>。

- <a href="https://win.rustup.rs/x86_64" target="_blank">64-bit 下载链接</a>
- <a href="https://win.rustup.rs/i686" target="_blank">32-bit 下载链接</a>

下载并安装适合你的计算机架构地版本。

## 4. 安装 WebView2

<Alert title="Note">
WebView2 is pre-installed in Windows 11. 
WebView2 已经预装在Windows 11 中。
</Alert>

最后，你需要安装 WebView2。最好地安装方式是从[这里](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section)下载和运行 Evergreen Bootstrapper

## 继续

现在你已经为Tauri设置了Windows特有的依赖，学习如何[将Tauri加入你的项目](/docs/usage/development/integration)Now that you have set up the Windows-specific dependencies for Tauri, learn how to [add Tauri to your project](/docs/usage/development/integration).
