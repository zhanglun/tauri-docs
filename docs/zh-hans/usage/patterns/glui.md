---
title: GLUI
---

import Alert from '@theme/Alert'
import useBaseUrl from '@docusaurus/useBaseUrl'

<Alert type="warning" icon="info-alt" title="Please note">
This pattern is not available for now.
</Alert>

import Rater from '@theme/Rater'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>易用性</td>
        <td><Rater value="0"/></td>
      </tr>
      <tr>
        <td>拓展性</td>
        <td><Rater value="0"/></td>
      </tr>
      <tr>
        <td>性能</td>
        <td><Rater value="5"/></td>
      </tr>
      <tr>
        <td>安全性</td>
        <td><Rater value="0"/></td>
      </tr>
    </table>
  </div>
  <div className="col col--4 pattern-logo">
    <img src={useBaseUrl('img/patterns/GLUI.png')} alt="GLUI" />
  </div>
  <div className="col col--4">
    优点
    <ul>
      <li>Framebuffer FTW</li>
      <li>Window events rigged</li>
    </ul>
    缺点
    <ul>
      <li>Broken on your machine</li>
    </ul>
  </div>
</div>

## 说明

The GLUI is a research pattern that we will use internally to test approaches using a GLUTIN window. We’re not sure yet if it will make the final cut as a bona fide alternative to WebView, although early tests with transparent and multiwindow are exciting.

## 示意图

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD
      A==>H
      H==>G
      A-->D
      D-->G
      subgraph GLUTIN
      G
      end
      subgraph RUST
      A
      end
      A[Binary]
      D(Framebuffer)
      G[GL Window]
      H{Bootstrap}
      style GLUTIN stroke:${colors.blue.dark},stroke-width:4px
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px`} />


## 配置

这是你需要在你的 tauri.conf.json 中添加的配置：
```json
"tauri": {
  "allowlist": {                  // all API endpoints are default false
    "all": false,                 // disable the api
  },
  "window": {                     // not yet normative
    "glutin": true,
    "webview": false
  }
}
```
