---
title: Fn tauri::api::path::resolve_path
sidebar_label: fn.resolve_path
custom_edit_url: null
---

  # Function tauri::api::path::resolve_path,

```rs
pub fn resolve_path<P: AsRef<Path>>(
    config: &Config, 
    package_info: &PackageInfo, 
    path: P, 
    dir: Option<BaseDirectory>
) -> Result<PathBuf>
```

Expand description

Resolves the path with the optional base directory.

## Example

```rs
use tauri::{api::path::{resolve_path, BaseDirectory}, PackageInfo};
// we use the default config and a mock PackageInfo, but in an actual app you should get the
// Config created from `tauri.conf.json` and the app's PackageInfo instance.
let path = resolve_path(
  &Default::default(),
  &PackageInfo {
    name: "app".into(),
    version: "1.0.0".into(),
  },
  "path/to/something",
  Some(BaseDirectory::Config)
 ).expect("failed to resolve path");
// path is equal to "/home/${whoami}/.config/path/to/something" on Linux
```
  