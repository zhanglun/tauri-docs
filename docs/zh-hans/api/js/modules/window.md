---
title: "Module: window"
sidebar_label: "window"
custom_edit_url: null
hide_title: true
---

# Module: window

Provides APIs to create windows, communicate with other windows and manipulate the current window.

This package is also accessible with `window.__TAURI__.window` when `tauri.conf.json > build > withGlobalTauri` is set to true.

The APIs must be allowlisted on `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "window": {
        "all": true, // enable all window APIs
        "create": true // enable window creation
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

# Window events

Events can be listened using `appWindow.listen`:
```typescript
import { appWindow } from '@tauri-apps/api/window'
appWindow.listen('tauri://move', ({ event, payload }) => {
  const { x, y } = payload // payload here is a `PhysicalPosition`
})
```

Window-specific events emitted by the backend:

#### 'tauri://resize'
Emitted when the size of the window has changed.
*EventPayload*:
```typescript
type ResizePayload = PhysicalSize
```

#### 'tauri://move'
Emitted when the position of the window has changed.
*EventPayload*:
```typescript
type MovePayload = PhysicalPosition
```

#### 'tauri://close-requested'
Emitted when the user requests the window to be closed.

#### 'tauri://destroyed'
Emitted after the window is closed.

#### 'tauri://focus'
Emitted when the window gains focus.

#### 'tauri://blur'
Emitted when the window loses focus.

#### 'tauri://scale-change'
Emitted when the window's scale factor has changed.
The following user actions can cause DPI changes:
- Changing the display's resolution.
- Changing the display's scale factor (e.g. in Control Panel on Windows).
- Moving the window to a display with a different scale factor.
*Event payload*:
```typescript
interface ScaleFactorChanged {
  scaleFactor: number
  size: PhysicalSize
}
```

#### 'tauri://menu'
Emitted when a menu item is clicked.
*EventPayload*:
```typescript
type MenuClicked = string
```

## Enumerations

- [UserAttentionType](../enums/window.UserAttentionType.md)

## Classes

- [LogicalPosition](../classes/window.LogicalPosition.md)
- [LogicalSize](../classes/window.LogicalSize.md)
- [PhysicalPosition](../classes/window.PhysicalPosition.md)
- [PhysicalSize](../classes/window.PhysicalSize.md)
- [WebviewWindow](../classes/window.WebviewWindow.md)
- [WebviewWindowHandle](../classes/window.WebviewWindowHandle.md)
- [WindowManager](../classes/window.WindowManager.md)

## Interfaces

- [Monitor](../interfaces/window.Monitor.md)
- [WindowOptions](../interfaces/window.WindowOptions.md)

## Variables

### appWindow

• `Const` **appWindow**: [`WebviewWindow`](../classes/window.WebviewWindow.md)

The WebviewWindow for the current window.

#### Defined in

[window.ts:1132](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/window.ts#L1132)

## Functions

### availableMonitors

▸ **availableMonitors**(): `Promise`<[`Monitor`](../interfaces/window.Monitor.md)[]\>

Returns the list of all the monitors available on the system.

#### Returns

`Promise`<[`Monitor`](../interfaces/window.Monitor.md)[]\>

#### Defined in

[window.ts:1220](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/window.ts#L1220)

___

### currentMonitor

▸ **currentMonitor**(): `Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>

Returns the monitor on which the window currently resides.
Returns `null` if current monitor can't be detected.

#### Returns

`Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>

#### Defined in

[window.ts:1187](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/window.ts#L1187)

___

### getAll

▸ **getAll**(): [`WebviewWindow`](../classes/window.WebviewWindow.md)[]

Gets an instance of `WebviewWindow` for all available webview windows.

#### Returns

[`WebviewWindow`](../classes/window.WebviewWindow.md)[]

The list of WebviewWindow.

#### Defined in

[window.ts:209](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/window.ts#L209)

___

### getCurrent

▸ **getCurrent**(): [`WebviewWindow`](../classes/window.WebviewWindow.md)

Get an instance of `WebviewWindow` for the current webview window.

#### Returns

[`WebviewWindow`](../classes/window.WebviewWindow.md)

The current WebviewWindow.

#### Defined in

[window.ts:197](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/window.ts#L197)

___

### primaryMonitor

▸ **primaryMonitor**(): `Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>

Returns the primary monitor of the system.
Returns `null` if it can't identify any monitor as a primary one.

#### Returns

`Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>

#### Defined in

[window.ts:1205](https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/window.ts#L1205)
