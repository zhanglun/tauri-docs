---
title: Lockdown
---

import Rater from '@theme/Rater'
import useBaseUrl from '@docusaurus/useBaseUrl'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>易用性</td>
        <td><Rater value="2"/></td>
      </tr>
      <tr>
        <td>拓展性</td>
        <td><Rater value="4"/></td>
      </tr>
      <tr>
        <td>性能</td>
        <td><Rater value="5"/></td>
      </tr>
      <tr>
        <td>安全性</td>
        <td><Rater value="5" color="#fff04d"/></td>
      </tr>
    </table>
  </div>
  <div className="col col--4 pattern-logo">
    <img src={useBaseUrl('img/patterns/Lockdown.png')} alt="Lockdown" />
  </div>
  <div className="col col--4">
    优点
    <ul>
      <li>Highest 安全 rating</li>
      <li>Elegant and powerful</li>
    </ul>
    缺点
    <ul>
      <li>Rust skills required</li>
      <li>No remote resources</li>
    </ul>
  </div>
</div>


## 说明

The Lockdown recipe is a minimal usage of the [Bridge pattern](/docs/usage/patterns/bridge), which only allows interaction between Rust and the Window via expiring JS Promise Closures that are injected into the Window by Rust and nulled as part of the callback.

## 示意图

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD
      H==>F
      G-.->B
      B-->G
      subgraph WEBVIEW
      G-->F
      end
      subgraph RUST
      A-->B
      A==>H
      end
      A[Binary]
      B[API:Event]
      F[Window]
      G((Promise Closure))
      H{Bootstrap}
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`} />


## 配置

这是你需要在你的 tauri.conf.json 中添加的配置：
```json
"tauri": {
  "allowlist": {}                  // all API endpoints are default false
}
```
