---
title: 调试 
---

import Alert from '@theme/Alert'
import Command from '@theme/Command'

所有的工作做到位之后，你可能会遇到需要调试的问题。有几个地方会打印出错误的细节，Tauri包括一些工具来使调试过程更容易。

## Rust 控制台

当你以开发模式运行 Tauri 时，你将会有一个可访问的 Rust 控制台。这个 Rust 控制台会在你运行`tauri dev` 的终端中。你可以使用下面代码从 Rust 文件中将一些内容打印到控制台中。


```rust
println!("Message from Rust: {}", msg);
```

有时你的Rust代码中可能会出现错误，Rust编译器可以给你很多信息。例如，如果 `tauri dev` 崩溃了，你可以在Linux和macOS上像这样重新运行它。

```sh
RUST_DEBUG=1 tauri dev
```

或者在 Window 中：

```sh
set RUST_DEBUG=1
tauri dev
```

这将给你一个细化的堆栈跟踪。一般来说，Rust编译器会通过给你关于这个问题的详细信息来帮助你，比如。

```
error[E0425]: cannot find value `sun` in this scope
  --> src/main.rs:11:5
   |
11 |     sun += i.to_string().parse::<u64>().unwrap();
   |     ^^^ help: a local variable with a similar name exists: `sum`

error: aborting due to previous error

For more information about this error, try `rustc --explain E0425`.
```

## WebView JS 控制台

在WebView中点击右键，并选择 "检查元素"。这将打开一个类似于你所使用的Chrome或Firefox开发工具的网络检查器。

## 创建调试构建

有些情况下，你可能需要在最终的 bundle 中检查 JavaScript 控制台，所以 Tauri 提供了一个简单的命令来创建一个调试 bundle。

<Command name="build --debug" />

就像正常的构建和开发过程一样，第一次运行会比后续运行花费更多时间。最终打包的应用程序将被放在 `src-tauri/target/debug/bundle`中。这个应用程序将启用开发控制台。

## 从 Terminal 中运行你的应用

你也可以从终端运行一个已建的应用程序，这也会给你Rust编译器的注释（在有错误的情况下）或你的`println`信息。只要找到`src-tauri/target/(release|debug)/[app name]`这个文件，然后双击它（但要注意，终端会在出错时关闭）或者直接在控制台中运行它。