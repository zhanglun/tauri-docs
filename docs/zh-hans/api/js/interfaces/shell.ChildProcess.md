---
title: "Interface: ChildProcess"
sidebar_label: "ChildProcess"
custom_edit_url: null
hide_title: true
---

# Interface: ChildProcess

[shell](../modules/shell.md).ChildProcess

## Properties

### code

• **code**: ``null`` \| `number`

Exit code of the process. `null` if the process was terminated by a signal on Unix.

#### Defined in

[shell.ts:46](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/shell.ts#L46)

___

### signal

• **signal**: ``null`` \| `number`

If the process was terminated by a signal, represents that signal.

#### Defined in

[shell.ts:48](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/shell.ts#L48)

___

### stderr

• **stderr**: `string`

The data that the process wrote to `stderr`.

#### Defined in

[shell.ts:52](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/shell.ts#L52)

___

### stdout

• **stdout**: `string`

The data that the process wrote to `stdout`.

#### Defined in

[shell.ts:50](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/shell.ts#L50)
