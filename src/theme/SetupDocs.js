import React from 'react'

import Icon from '@theme/Icon'

export const Intro = () => (
  <>
    <p>此设置仅用于开发。 Tauri 应用程序的使用者将不必执行任何这些操作。</p>

    <p>此页面提供了安装 Tauri 及其依赖项的完整指南。 因为 Tauri 是一个多语言工具链并且涉及复杂的安装说明，我们希望确保<i>任何人</i>都能够通过阅读本指南来设置它，而无需打开其他文档。</p>

    <p>初次之外，这里也有很好的技巧和工具。如果你从 Node.js 或 Rust 和安全性开始，它们将对您有所帮助。</p>

    <Icon title="alert" color="danger"/>: 这个步骤是必须的
    <br/>

    <Icon title="control-skip-forward" color="warning"/>: 如果已经满足可以跳过这一步（例如你已经安装好了Node.js/Rust）
    <br/>

    <Icon title="info-alt" color="info"/>: 此步骤仅供参考
    <br/>
  </>
)
