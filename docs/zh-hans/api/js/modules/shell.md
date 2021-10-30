---
title: "Module: shell"
sidebar_label: "shell"
custom_edit_url: null
hide_title: true
---

# Module: shell

## Classes

- [Child](../classes/shell.Child.md)
- [Command](../classes/shell.Command.md)

## Interfaces

- [ChildProcess](../interfaces/shell.ChildProcess.md)
- [SpawnOptions](../interfaces/shell.SpawnOptions.md)

## Functions

### open

▸ **open**(`path`, `openWith?`): `Promise`<`void`\>

Opens a path or URL with the system's default app,
or the one specified with `openWith`.

**`example`**
```typescript
// opens the given URL on the default browser:
await open('https://github.com/tauri-apps/tauri')
// opens the given URL using `firefox`:
await open('https://github.com/tauri-apps/tauri', 'firefox')
// opens a file using the default program:
await open('/path/to/file')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path or URL to open. |
| `openWith?` | `string` | The app to open the file or URL with. Defaults to the system default application for the specified path type. |

#### Returns

`Promise`<`void`\>

#### Defined in

[shell.ts:358](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/shell.ts#L358)
