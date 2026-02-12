---
# 页面布局配置
layout: home
title: MdPress Official
description: The official MdPress website

# 顶部导航栏配置 (可选，默认读取 config.json)
header:
  logo: MdPress IDE
  nav:
    - label: 产品亮点
      href: "#features"
      targetId: features
    - label: 工作流
      href: "#workflow"
      targetId: workflow
    - label: 适用场景
      href: "#usecases"
      targetId: usecases
  actions:
    primary:
      label: 下载桌面版
      href: javascript:void(0)
    secondary:
      label: 查看文档
      href: javascript:void(0)

# 首屏 Hero 区域
hero:
  badge: 专为文档工程打造的本地 IDE
  title: 从 Markdown 到文档站点，一切尽在一个窗口
  subtitle: MdPress 将编辑器、预览、站点生成与工作区管理整合在一起，帮助团队以工程化方式构建文档。
  actions:
    primary:
      label: 开始使用 MdPress
      href: https://github.com
    secondary:
      label: 了解核心特性
      targetId: features
  meta: 跨平台 · 本地优先 · 与 Git 流程深度兼容
  preview:
    header: 实时预览你的 Markdown 文档
    editor:
      filename: docs/guide/index.md
      content: |
        # Hello MdPress

        - 实时预览
        - 多语言站点
        - 插件扩展
        - 多站点管理
        - 一键编译
        - 站点 SEO 支持
    render:
      title: Hello MdPress
      items:
        - 实时预览
        - 多语言站点
        - 插件扩展
        - 多站点管理
        - 一键编译
        - 站点 SEO 支持

# 特性网格区域
features:
  sectionTitle: 核心特性与优势
  sectionSubtitle: 围绕 Markdown、静态站点与团队协作，MdPress 在编辑体验与工程能力上做了深度优化。
  items:
    - title: 专业级编辑体验
      description: 内置 Monaco 编辑器，提供智能补全、快捷键与命令面板，带来流畅的专业级编写体验。
      category: edit
    - title: 实时 Markdown 预览
      description: 所见即所得的 Markdown 渲染，支持数学公式、表格、代码高亮等，让内容和排版同步可见。
      category: edit
    - title: 站点一键构建
      description: 从本地 Markdown 仓库到静态文档站点，一键生成和预览，适合文档、博客与知识库场景。
      category: workflow
    - title: 多语言与多项目工作区
      description: 支持多语言界面与多站点工作区管理，在同一窗口中切换不同文档项目与站点。
      category: workflow
    - title: 插件与扩展体系
      description: 围绕 Markdown 与文档工程设计的插件机制，支持功能扩展与自定义工作流。
      category: extend
    - title: 可集成到现有流程
      description: 基于静态文件与 Git 工作流设计，易于接入现有 CI/CD 与部署体系。
      category: extend

# 工作流演示区域
workflow:
  sectionTitle: 贴合团队的文档工程工作流
  sectionSubtitle: 从本地编辑到站点发布，每一步都围绕开发者习惯与 CI/CD 能力设计，帮助你把文档当作代码管理。
  steps:
    - 在本地通过 Monaco 编辑器编辑 Markdown 文档，使用熟悉的快捷键与命令面板。
    - 通过实时预览确认渲染效果，包含数学公式、图表与代码高亮。
    - 使用工作区管理不同站点，按项目组织文档目录结构。
    - 将内容提交到 Git 仓库，由 CI/CD 自动构建并部署静态站点。
  panel:
    title: 典型使用场景
    items:
      - 技术文档与 API 参考站点
      - 多语言产品文档与帮助中心
      - 团队知识库与内部 Wiki
      - 个人博客与长文写作

# 使用场景/卡片区域
usecases:
  sectionTitle: 为什么选择 MdPress
  sectionSubtitle: 如果你正在为团队寻找一款既像编辑器又像站点构建器的工具，MdPress 将是合适的选择。
  cards:
    - title: 面向工程团队
      description: 遵循开发者习惯的界面与交互方式，让写文档像写代码一样自然，降低团队采纳成本。
    - title: 专注文档而非通用 IDE
      description: 不是通用代码编辑器，而是围绕文档结构化、链接关系与导航体验做了深度优化。
    - title: 可视化站点结果
      description: 在本地即可感知最终站点的布局与导航结构，减少上线后返工调整的成本。

# 下载弹窗配置
download:
  modalTitle: 下载 MdPress
  platforms:
    - id: macos
      name: macOS
      icon: <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.74-3.03 1.58-.67.78-1.25 2.05-1.09 3.12 1.17.09 2.36-.73 3.05-1.59"/></svg>
      variants:
        - key: macos-intel
          label: Intel Chip (.dmg)
          url: "#"
        - key: macos-arm64
          label: Apple Silicon (.dmg)
          url: "#"
    - id: windows
      name: Windows
      icon: <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
      variants:
        - key: windows-x64
          label: x64 Installer (.exe)
          url: "#"
        - key: windows-arm64
          label: ARM64 Installer (.exe)
          url: "#"
    - id: linux
      name: Linux
      icon: <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 5.5c.828 0 1.5.672 1.5 1.5 0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5zm-9 0c.828 0 1.5.672 1.5 1.5 0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5zm6.303 15.023c-1.378-.669-2.325-2.028-2.303-3.523.023-1.488 1.076-2.855 2.455-3.484.288-.132.618-.086.853.118.236.204.331.528.246.832-.086.305-.333.541-.634.612-.663.156-1.127.753-1.139 1.436-.011.683.435 1.298 1.092 1.487.315.091.543.354.595.678.053.324-.078.647-.336.832-.258.185-.597.202-.871.077-.196-.089-.379-.208-.552-.365zm-6.606-1.666c-.663-.156-1.127-.753-1.139-1.436-.011-.683.435-1.298 1.092-1.487.315-.091.543-.354.595-.678.053-.324-.078-.647-.336-.832-.258-.185-.597-.202-.871-.077-1.379.629-2.432 1.996-2.455 3.484-.022 1.495.925 2.854 2.303 3.523.173.157.356.276.552.365.274.125.613.108.871-.077.258-.185.389-.508.336-.832-.052-.324-.28-.587-.595-.678-.299-.086-.547-.323-.633-.613-.085-.304.01-.628.246-.832.235-.204.565-.25.853-.118zm10.303-7.857c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm-13.5 0c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
      variants:
        - key: linux-deb-amd64
          label: amd64 (.deb)
          url: "#"
        - key: linux-deb-arm64
          label: ARM64 (.deb)
          url: "#"

# 底部配置
footer:
  brand: MdPress IDE
  meta: Copyright © 2024 MdPress Team. All rights reserved.
---