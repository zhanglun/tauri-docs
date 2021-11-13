---
title: 桥接
---

import Rater from '@theme/Rater'
import useBaseUrl from '@docusaurus/useBaseUrl'

<div className="row">
  <div className="col col--4">
    <table>
      <tr>
        <td>易用性</td>
        <td><Rater value="3"/></td>
      </tr>
      <tr>
        <td>拓展性</td>
        <td><Rater value="5"/></td>
      </tr>
      <tr>
        <td>性能</td>
        <td><Rater value="4"/></td>
      </tr>
      <tr>
        <td>安全性</td>
        <td><Rater value="4"/></td>
      </tr>
    </table>
  </div>
  <div className="col col--4 pattern-logo">
    <img src={useBaseUrl('img/patterns/Bridge.png')} alt="Bridge" />
  </div>
    <div className="col col--4">
    优点:
    <ul>
      <li>高度可配置</li>
      <li>不需要 Rust 技能</li>
    </ul>
    缺点:
    <ul>
      <li>一些 WebAPI 不可用</li>
      <li>实现有挑战</li>
    </ul>
  </div>
</div>

## 说明

桥接方法是一种安全模式，消息通过使用 API 的隐式桥接，在 brokers 之间传递。它将功能隔离在作用域之外，并传递消息而不是功能。

## 示意图

import Mermaid, { colors } from '@theme/Mermaid'

<Mermaid chart={`graph TD
      H==>F
      subgraph WEBVIEW
      F-.-E
      end
      D-->E
      E-->D
      B-->D
      D-->B
      subgraph RUST
      A==>H
      A-->B
      B-.-C
      B-.-G
      end
      A[Binary]
      B{Rust Broker}
      C[Subprocess 2]
      G[Subprocess 1]
      D(( API BRIDGE ))
      E{JS Broker}
      F[Window]
      H{Bootstrap}
      style D fill:#ccc,stroke:#333,stroke-width:4px,color:white
      style RUST fill:${colors.orange.light},stroke:${colors.orange.dark},stroke-width:4px
      style WEBVIEW fill:${colors.blue.light},stroke:${colors.blue.dark},stroke-width:4px`} />

## 配置

这是你需要在你的 tauri.conf.json 中添加的配置：

```json
"tauri": {
  "allowlist": {                  // all API values are default false
    "all": false,                 // use this flag to enable all API features
    "shell": {
      "execute": false,             // enable application execution
      "open": false,                // open link/path in the default app
    },
    "fs": {
      "listFiles": false,           // list files in a directory
      "readBinaryFile": false,      // read binary file from local filesystem
      "readTextFile": false,        // read text file from local filesystem
      "setTitle": false,            // set the window title
      "writeFile": false            // write file to local filesystem
    }
  }
}

```
