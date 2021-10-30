---
title: 介绍 
---

import OSList from '@theme/OSList'

欢迎来到 Tauri!

Tauri 是一个多语言的通用系统，可组合性很强，允许工程师进行各种应用。它使用 [Rust](https://www.rust-lang.org/) 工具和在 Webview 中呈现的HTML的组合来为桌面计算机构建应用程序。使用 Tauri 构建的应用可以附带任意数量的可选JS API / Rust API，这样webview就可以通过消息传递来控制系统。

任何可以在网站上展示的内容都可以 Tauri webview 应用中展示。

开发人员可以自由地使用他们选择的任何 Web 框架通过 Tauri 构建出在 Webview 中显示的 Web 前端！

**开发者甚至可以使用自己开发的功能拓展默认的API**，并轻松连接 Webview 和基于 Rust 的后端。

[架构](https://github.com/tauri-apps/tauri/blob/dev/ARCHITECTURE.md) 中对该架构进行了更全面的描述。

这个指南将会帮助你创建你的第一个 Tauri 应用。这应该只会花费大约十分钟，但如果你的互联网连接速度较慢，则可能需要更长时间。

如果您发现错误或不清楚的地方，或者想提出改进建议，您有几种选择：

1. 在我们的 [Github Repo](https://github.com/tauri-apps/tauri-docs) 中创建 issues
2. 访问我们的 [Discord server](https://discord.gg/tauri)，并反馈问题
3. 请求加入 Discord 教育工作组以访问其讨论频道

## 步骤

1. 安装和配置系统的先决条件
2. 使用你选择的前端框架创建一个 web 应用
3. 使用 Tauri CLI 在你的应用中设置 Tauri
4. 编写原生 Rust 代码来添加功能或者提高性能（都是可选的）
5. 使用 `tauri dev` 启用热模块重新加载和 webview devtools 等功能开发您的应用程序
6. 使用 `tauri build` 将你的应用打包成一个小小的安装程序

### 设置你的环境{#setting-up-your-environment}

在创建一个应用之前，你需要安装和配置一些开发者工具。这个指南假设你已经知道什么是命令行，如何在操作系统上安装软件包，并且通常了解计算的开发方面的方法。

按照特定于平台的指南开始：

<OSList content={{
    linux: { title: 'Linux Setup', link: '/docs/getting-started/setup-linux'},
    macos: { title: 'macOS Setup', link: '/docs/getting-started/setup-macos'},
    windows: { title: 'Windows Setup', link: '/docs/getting-started/setup-windows'}
}} />

之后，你就可以准备[将 Tauri 添加到你的项目中](/docs/usage/development/integration)