---
title: 应用发布
---

import Alert from '@theme/Alert'
import Command from '@theme/Command'

### 1. 构建你的 Web 应用

现在你已经准备好打包你的项目了，你需要运行你的框架或者打包工具的构建命令（当然，假设你是用了一个）。

<Alert title="Note">
每个框架都有它自己的发布工具。处理它们的问题或者保持它们的最新状态不在本文档的范围之内。
</Alert>

### 2. 使用 Tauir 打包你的应用

<Command name="build" />

这个命令将把你的 Web 资源和你的 Rust 代码嵌入到一个二进制文件中。二进制文件本身将位于 `src-tauri/target/release/[app name]`，而安装程序将位于`src-tauri/target/release/bundle/`。

和`tauri dev`命令一样，第一次运行时，它将需要一些时间来收集 Rust crates 和构建一切--但在随后的运行中，它只需要重建你的代码，这要快得多。
