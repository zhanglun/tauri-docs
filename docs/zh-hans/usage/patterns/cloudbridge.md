---
title: 云桥 
---

import Rater from '@theme/Rater'
import useBaseUrl from '@docusaurus/useBaseUrl'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>易用性</td>
        <td><Rater value="1"/></td>
      </tr>
      <tr>
        <td>拓展性</td>
        <td><Rater value="5"/></td>
      </tr>
      <tr>
        <td>性能</td>
        <td><Rater value="3"/></td>
      </tr>
      <tr>
        <td>安全性</td>
        <td><Rater value="2"/></td>
      </tr>
    </table>
  </div>
  <div className="col col--4 pattern-logo">
    <img src={useBaseUrl('img/patterns/Cloudbridge.png')} alt="Cloudbridge" />
  </div>
    <div className="col col--4">
    优点
    <ul>
      <li>所有特性都可用</li>
      <li>不需要 Rust 技能</li>
    </ul>
    缺点
    <ul>
      <li>打包体积最大</li>
      <li>难以分离关注点</li>
    </ul>
  </div>
</div>

## 说明

云桥接方法结合了本地主机的灵活性和桥接的安全性。有这么多的功能，很容易让人迷失。

## 示意图

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD
      H==>F2
      H==>D2
      D2-->F2
      F2-->D2
      B-->D
      D-->B
      E2-->D
      D-->E2
      subgraph WEBVIEW
      F2
      E2
      end
      subgraph SERVER
      D2
      E-->D2
      end
      subgraph RUST
      A==>H
      A-->B
      B-.-C
      end
      A[Binary]
      B{Rust Broker}
      C[Subprocess]
      D(( API BRIDGE ))
      E{JS Broker}
      D2(( localhost ))
      E[bundled resources]
      E2{JS Broker}
      F2[Window]
      H{Bootstrap}
      style D fill:#ccc,stroke:#333,stroke-width:4px,color:white
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px
      style SERVER fill:#49A24A,stroke:#2B6063,stroke-width:4px
      `} />


## 配置

这是你需要在你的 tauri.conf.json 中添加的配置：
```json
"tauri": {
  "allowlist": {
    "all": true                   // enable entire API
  }
}
```
