---
title: Multiwin
---

import Alert from '@theme/Alert'
import useBaseUrl from '@docusaurus/useBaseUrl'

import Rater from '@theme/Rater'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>易用性</td>
        <td><Rater value="4"/></td>
      </tr>
      <tr>
        <td>拓展性</td>
        <td><Rater value="4"/></td>
      </tr>
      <tr>
        <td>性能</td>
        <td><Rater value="3"/></td>
      </tr>
      <tr>
        <td>安全性</td>
        <td><Rater value="5"/></td>
      </tr>
    </table>
  </div>
  <div className="col col--4 pattern-logo">
    <img src={useBaseUrl('img/patterns/Multiwin.png')} alt="Multiwin" />
  </div>
  <div className="col col--4">
    优点
    <ul>
      <li>Windows can be spawned or destroyed at runtime</li>
      <li>Separation of concerns</li>
    </ul>
    缺点
    <ul>
      <li>Somewhat complex</li>
    </ul>
  </div>
</div>

## 说明

The Multiwin recipe will allow you to have multiple windows.

## 示意图

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph LR
      A==>H
      H==>F
      H==>G
      subgraph WEBVIEW
      F
      end
      subgraph WINIT
      G
      end
      subgraph RUST
      A
      end
      A[Binary]
      F[Window]
      G[Window]
      H{Bootstrap}
      style WINIT stroke:${colors.blue.dark},stroke-width:4px
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`} />


## 配置

这是你需要在你的 tauri.conf.json 中添加的配置：
```json
"tauri": {
  "allowlist": {},                  // all API endpoints are default false
  "windows": [{
    "title": "Window1",
    "label": "main",
  }, {
    "title": "Splash",
    "label": "splashscreen"
  }]
}

```
