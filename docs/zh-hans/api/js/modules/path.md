---
title: "Module: path"
sidebar_label: "path"
custom_edit_url: null
hide_title: true
---

# Module: path

## References

### BaseDirectory

Re-exports: [BaseDirectory](../enums/fs.BaseDirectory.md)

## Variables

### delimiter

• `Const` **delimiter**: ``";"`` \| ``":"``

Provides the platform-specific path segment delimiter:
- `;` on Windows
- `:` on POSIX

#### Defined in

[path.ts:443](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L443)

___

### sep

• `Const` **sep**: ``"\\"`` \| ``"/"``

Provides the platform-specific path segment separator:
- `\` on Windows
- `/` on POSIX

#### Defined in

[path.ts:436](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L436)

## Functions

### appDir

▸ **appDir**(): `Promise`<`string`\>

Returns the path to the suggested directory for your app config files.
Resolves to `${configDir}/${bundleIdentifier}`, where `bundleIdentifier` is the value configured on `tauri.conf.json > tauri > bundle > identifier`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:36](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L36)

___

### audioDir

▸ **audioDir**(): `Promise`<`string`\>

Returns the path to the user's audio directory.

## Platform-specific

- **Linux:** Resolves to `$XDG_MUSIC_DIR`.
- **macOS:** Resolves to `$HOME/Music`.
- **Windows:** Resolves to `{FOLDERID_Music}`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:58](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L58)

___

### basename

▸ **basename**(`path`, `ext?`): `Promise`<`string`\>

 Returns the last portion of a `path`. Trailing directory separators are ignored.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | - |
| `ext?` | `string` | An optional file extension to be removed from the returned path. |

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:519](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L519)

___

### cacheDir

▸ **cacheDir**(): `Promise`<`string`\>

Returns the path to the user's cache directory.

## Platform-specific

- **Linux:** Resolves to `$XDG_CACHE_HOME` or `$HOME/.cache`.
- **macOS:** Resolves to `$HOME/Library/Caches`.
- **Windows:** Resolves to `{FOLDERID_LocalAppData}`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:80](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L80)

___

### configDir

▸ **configDir**(): `Promise`<`string`\>

Returns the path to the user's config directory.

## Platform-specific

- **Linux:** Resolves to `$XDG_CONFIG_HOME` or `$HOME/.config`.
- **macOS:** Resolves to `$HOME/Library/Application Support`.
- **Windows:** Resolves to `{FOLDERID_LocalAppData}`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:102](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L102)

___

### currentDir

▸ **currentDir**(): `Promise`<`string`\>

Returns the path to the current working directory.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:420](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L420)

___

### dataDir

▸ **dataDir**(): `Promise`<`string`\>

Returns the path to the user's data directory.

## Platform-specific

- **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
- **macOS:** Resolves to `$HOME/Library/Application Support`.
- **Windows:** Resolves to `{FOLDERID_RoamingAppData}`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:124](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L124)

___

### desktopDir

▸ **desktopDir**(): `Promise`<`string`\>

Returns the path to the user's desktop directory.

## Platform-specific

- **Linux:** Resolves to `$XDG_DESKTOP_DIR`.
- **macOS:** Resolves to `$HOME/Library/Desktop`.
- **Windows:** Resolves to `{FOLDERID_Desktop}`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:146](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L146)

___

### dirname

▸ **dirname**(`path`): `Promise`<`string`\>

Returns the directory name of a `path`. Trailing directory separators are ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:491](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L491)

___

### documentDir

▸ **documentDir**(): `Promise`<`string`\>

Returns the path to the user's document directory.

## Platform-specific

- **Linux:** Resolves to `$XDG_DOCUMENTS_DIR`.
- **macOS:** Resolves to `$HOME/Documents`.
- **Windows:** Resolves to `{FOLDERID_Documents}`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:168](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L168)

___

### downloadDir

▸ **downloadDir**(): `Promise`<`string`\>

Returns the path to the user's download directory.

## Platform-specific

- **Linux**: Resolves to `$XDG_DOWNLOAD_DIR`.
- **macOS**: Resolves to `$HOME/Downloads`.
- **Windows**: Resolves to `{FOLDERID_Downloads}`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:190](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L190)

___

### executableDir

▸ **executableDir**(): `Promise`<`string`\>

Returns the path to the user's executable directory.

## Platform-specific

- **Linux:** Resolves to `$XDG_BIN_HOME/../bin` or `$XDG_DATA_HOME/../bin` or `$HOME/.local/bin`.
- **macOS:** Not supported.
- **Windows:** Not supported.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:212](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L212)

___

### extname

▸ **extname**(`path`): `Promise`<`string`\>

Returns the extension of the `path`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:504](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L504)

___

### fontDir

▸ **fontDir**(): `Promise`<`string`\>

Returns the path to the user's font directory.

## Platform-specific

- **Linux:** Resolves to `$XDG_DATA_HOME/fonts` or `$HOME/.local/share/fonts`.
- **macOS:** Resolves to `$HOME/Library/Fonts`.
- **Windows:** Not supported.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:234](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L234)

___

### homeDir

▸ **homeDir**(): `Promise`<`string`\>

Returns the path to the user's home directory.

## Platform-specific

- **Linux:** Resolves to `$HOME`.
- **macOS:** Resolves to `$HOME`.
- **Windows:** Resolves to `{FOLDERID_Profile}`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:256](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L256)

___

### isAbsolute

▸ **isAbsolute**(`path`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[path.ts:530](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L530)

___

### join

▸ **join**(...`paths`): `Promise`<`string`\>

 Joins all given `path` segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...paths` | `string`[] | A sequence of path segments. |

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:478](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L478)

___

### localDataDir

▸ **localDataDir**(): `Promise`<`string`\>

Returns the path to the user's local data directory.

## Platform-specific

- **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
- **macOS:** Resolves to `$HOME/Library/Application Support`.
- **Windows:** Resolves to `{FOLDERID_LocalAppData}`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:278](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L278)

___

### normalize

▸ **normalize**(`path`): `Promise`<`string`\>

Normalizes the given `path`, resolving `'..'` and `'.'` segments and resolve symolic links.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:463](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L463)

___

### pictureDir

▸ **pictureDir**(): `Promise`<`string`\>

Returns the path to the user's picture directory.

## Platform-specific

- **Linux:** Resolves to `$XDG_PICTURES_DIR`.
- **macOS:** Resolves to `$HOME/Pictures`.
- **Windows:** Resolves to `{FOLDERID_Pictures}`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:300](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L300)

___

### publicDir

▸ **publicDir**(): `Promise`<`string`\>

Returns the path to the user's public directory.

## Platform-specific

- **Linux:** Resolves to `$XDG_PUBLICSHARE_DIR`.
- **macOS:** Resolves to `$HOME/Public`.
- **Windows:** Resolves to `{FOLDERID_Public}`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:322](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L322)

___

### resolve

▸ **resolve**(...`paths`): `Promise`<`string`\>

Resolves a sequence of `paths` or `path` segments into an absolute path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...paths` | `string`[] | A sequence of paths or path segments. |

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:450](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L450)

___

### resourceDir

▸ **resourceDir**(): `Promise`<`string`\>

Returns the path to the user's resource directory.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:338](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L338)

___

### runtimeDir

▸ **runtimeDir**(): `Promise`<`string`\>

Returns the path to the user's runtime directory.

## Platform-specific

- **Linux:** Resolves to `$XDG_RUNTIME_DIR`.
- **macOS:** Not supported.
- **Windows:** Not supported.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:360](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L360)

___

### templateDir

▸ **templateDir**(): `Promise`<`string`\>

Returns the path to the user's template directory.

## Platform-specific

- **Linux:** Resolves to `$XDG_TEMPLATES_DIR`.
- **macOS:** Not supported.
- **Windows:** Resolves to `{FOLDERID_Templates}`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:382](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L382)

___

### videoDir

▸ **videoDir**(): `Promise`<`string`\>

Returns the path to the user's video directory.

## Platform-specific

- **Linux:** Resolves to `$XDG_VIDEOS_DIR`.
- **macOS:** Resolves to `$HOME/Movies`.
- **Windows:** Resolves to `{FOLDERID_Videos}`.

#### Returns

`Promise`<`string`\>

#### Defined in

[path.ts:404](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/path.ts#L404)
