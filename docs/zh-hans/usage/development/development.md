---
title: 开发周期
---

import Alert from '@theme/Alert'
import Command from '@theme/Command'

### 启动你的开发服务器{#Start-Your-Devserver}

现在你已经完成了所有的设置，你可以启动 UI 框架或者打包工具（如果你正在使用）提供的应用程序开发服务器

<Alert title="Note">
Every framework has its own development tooling. It is outside of the scope of this document to treat them all or keep them up to date.
每个框架有它自己的开发工具。
</Alert>

### 启动 Tauri 开发窗口{#Start-Tauri-Development-Window}

<Command name="dev" />

在你第一次运行这个命令时，Rust 软件包管理器将需要几分钟时间来下载和构建所有需要的软件包。由于它们被缓存了，后续的构建会快很多，因为只有你的代码需要重建。

Once Rust has finished building, the webview will open and it should display your web app. You can make changes to your web app, and if your tooling enables it, the webview should update automatically just like a browser. When you make changes to your Rust files, they will be rebuilt automatically and your app will restart.

一旦 Rust 完成了构建，webview 就会打开，它应该显示你的 web 应用程序。你可以对你的应用进行修改，如果你的工具启用了它，webview 应该像浏览器一样自动更新。当你对你的 Rust 文件进行修改时，它们将被自动重建，你的应用程序将重新启动。

<Alert title="A note about Cargo.toml and Source Control" icon="info-alt">
  在你的项目仓库中，你<b>应该</b>把<code>"src-tauri/Cargo.toml"</code>提交到 git，因为你希望它是确定的。你<b>不应该</b>提交 <code>"src-tauri/target"</code> 文件夹或者任何它的内容。
</Alert>
