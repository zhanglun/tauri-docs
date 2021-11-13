---
title: Cloudish
---

import Rater from '@theme/Rater'
import useBaseUrl from '@docusaurus/useBaseUrl'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>易用性</td>
        <td><Rater value="5"/></td>
      </tr>
      <tr>
        <td>拓展性</td>
        <td><Rater value="3"/></td>
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
    <img src={useBaseUrl('img/patterns/Cloudish.png')} alt="Cloudish" />
  </div>
    <div className="col col--4">
    优点
    <ul>
      <li>和一个单页应用一样</li>
      <li>不需要 Rust 技能</li>
    </ul>
    缺点
    <ul>
      <li>无法访问 Rust API</li>
      <li>使用本地服务器</li>
    </ul>
  </div>
</div>

## 说明

The Cloudish recipe is a pattern for maximum flexibility and app 性能. It uses a localhost server, which means that your app will technically be available to other processes, like browsers and potentially other devices on the network. All of your assets are baked into the binary, but served as if they were distinct files.

## 示意图

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD
      H==>F
      H==>D
      D-->F
      F-->D
      subgraph RUST
      A==>H
      end
      subgraph WEBVIEW
      F
      end
      subgraph SERVER
      D
      E-->D
      end
      A[Binary]
      D(( localhost ))
      E[bundled resources]
      F[Window]
      H{Bootstrap}
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px
      style SERVER fill:#49A24A,stroke:#2B6063,stroke-width:4px`} />


## 配置

这是你需要在你的 tauri.conf.json 中添加的配置：
```json
"tauri": {
  "allowlist": {
    "all": false                  // disable entire API
  }
}

```
