---
layout: home
title: 使用两种 Step 的综合示例
slug: 
tag: []
description: 
keywords: 
category: 

# 可选：Hero 区域（如果你已经集成了 hero 渲染）
hero:
  name: 我的框架
  text: 一份同时演示 Tab Step 和 List Step 的文档
  tagline: 通过 Frontmatter 自动生成交互式步骤组件
  actions:
    - theme: brand
      text: 快速开始
      link: https://example.com/quickstart
    - theme: alt
      text: 查看文档
      link: https://example.com/docs

# 可选：Feature 区域
features:
  - title: Tab 步骤
    details: "使用 kind: tab 展示多平台、多语言等可切换内容。"
  - title: List 步骤
    details: "使用 kind: list 展示线性执行的任务列表。"

# 重点：两种 step 混合使用
steps:
  # Step 1：使用 Tab 形式
  - id: install
    kind: tab
    title: 安装依赖
    warning: 请选择你常用的包管理器（Node.js >= 16）
    tabs:
      - id: npm
        label: 使用 NPM
        description: |
          在项目根目录运行以下命令安装依赖：
          
          ```bash
          npm install
          ```
      - id: pnpm
        label: 使用 pnpm
        description: |
          如果你更喜欢 pnpm，可以使用：
          
          ```bash
          pnpm install
          ```
        linkLabel: pnpm 官方文档
        linkUrl: https://pnpm.io
      - id: yarn
        label: 使用 Yarn
        description: |
          或者选择 Yarn：
          
          ```bash
          yarn
          ```

  # Step 2：使用列表形式
  - id: run-and-build
    kind: list
    title: 启动与构建
    items:
      - title: 启动开发环境
        details: |
          运行开发服务，并在浏览器中预览：
          
          ```bash
          npm run dev
          ```
          
          打开终端中提示的本地地址（通常是 http://localhost:5173）。
      - title: 运行 TypeScript 检查
        details: |
          确保类型检查通过：
          
          ```bash
          npm run typecheck
          ```
      - title: 构建生产包
        details: |
          进行生产构建，验证构建是否成功：
          
          ```bash
          npm run build
          ```

---

# 文档正文示例

上面的 Frontmatter 会在预览中渲染出：

1. 顶部 Hero 区（如果你已经绑定了 hero 渲染逻辑）
2. 一组特性卡片（来自 `features`）
3. 一个 **“安装依赖”** 的 Tab Step，支持 NPM / pnpm / Yarn 三个切换选项
4. 一个 **“启动与构建”** 的 List Step，用于指导用户完整走完本地开发到生产构建的流程

正文部分依然是普通 Markdown，你可以在这里继续写使用说明、截图、注意事项等内容。

