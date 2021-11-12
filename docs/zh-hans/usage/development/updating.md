---
title: 更新软件包
---
import Alert from '@theme/Alert'

<Alert title="Please note" type="warning" icon="alert">
	特别是在alpha和beta阶段，你应该保持所有Tauri的依赖关系和工具链是最新的。除最新版本外，不支持任何其他版本。
</Alert>

## 自动更新


Tauri JS CLI 有一个安装和更新所有依赖的命令，只要运行 `tauri deps install` 或者 `tauri deps update`。

## 手动更新

### 更新 NPM 关键包

如果你正在使用 `tauri` 包：


```bash
$ yarn upgrade @tauri-apps/cli @tauri-apps/api --latest
$ npm install @tauri-apps/cli@latest @tauri-apps/api@latest
```

你也可以使用下面的命令检查Tauri的最新版本：

- `npm outdated @tauri-apps/cli`
- `yarn outdated @tauri-apps/cli`

或者，如果你使用`vue-cli-plugin-tauri`的方法：

```bash
$ yarn upgrade vue-cli-plugin-tauri --latest
$ npm install vue-cli-plugin-tauri@latest
```

### 更新 Cargo 软件包

前往 `src-tauri/Cargo.toml` 并且修改 `tauri` 为
`tauri = { version = "%version%" }`， `%version%` 是上面展示的数字（这里指的是上一步查看最新版本时返回的版本号）.你也可以只使用`MAJOR.MINOR`，比如 `0.9`。

然后做以下事情：

```bash
$ cd src-tauri
$ cargo update -p tauri
```

你也可以执行 `cargo outdated -r tauri` 直接获取关于核心库的最新版本的信息。
