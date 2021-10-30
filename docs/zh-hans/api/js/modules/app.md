---
title: "Module: app"
sidebar_label: "app"
custom_edit_url: null
hide_title: true
---

# Module: app

Get application metadata.

This package is also accessible with `window.__TAURI__.app` when `tauri.conf.json > build > withGlobalTauri` is set to true.

## Functions

### getName

▸ **getName**(): `Promise`<`string`\>

Gets the application name.

#### Returns

`Promise`<`string`\>

A promise resolving to application name.

#### Defined in

[app.ts:33](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/app.ts#L33)

___

### getTauriVersion

▸ **getTauriVersion**(): `Promise`<`string`\>

Gets the tauri version.

#### Returns

`Promise`<`string`\>

A promise resolving to tauri version.

#### Defined in

[app.ts:47](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/app.ts#L47)

___

### getVersion

▸ **getVersion**(): `Promise`<`string`\>

Gets the application version.

#### Returns

`Promise`<`string`\>

A promise resolving to the application version.

#### Defined in

[app.ts:19](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/app.ts#L19)
