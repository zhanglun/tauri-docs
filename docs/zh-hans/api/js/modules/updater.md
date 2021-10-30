---
title: "Module: updater"
sidebar_label: "updater"
custom_edit_url: null
hide_title: true
---

# Module: updater

Customize the auto updater flow.

This package is also accessible with `window.__TAURI__.updater` when `tauri.conf.json > build > withGlobalTauri` is set to true.

## Interfaces

- [UpdateManifest](../interfaces/updater.UpdateManifest.md)
- [UpdateResult](../interfaces/updater.UpdateResult.md)
- [UpdateStatusResult](../interfaces/updater.UpdateStatusResult.md)

## Type aliases

### UpdateStatus

Ƭ **UpdateStatus**: ``"PENDING"`` \| ``"ERROR"`` \| ``"DONE"`` \| ``"UPTODATE"``

#### Defined in

[updater.ts:14](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/updater.ts#L14)

## Functions

### checkUpdate

▸ **checkUpdate**(): `Promise`<[`UpdateResult`](../interfaces/updater.UpdateResult.md)\>

Checks if an update is available.

#### Returns

`Promise`<[`UpdateResult`](../interfaces/updater.UpdateResult.md)\>

Promise resolving to the update status.

#### Defined in

[updater.ts:89](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/updater.ts#L89)

___

### installUpdate

▸ **installUpdate**(): `Promise`<`void`\>

Install the update if there's one available.

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

#### Defined in

[updater.ts:37](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/updater.ts#L37)
