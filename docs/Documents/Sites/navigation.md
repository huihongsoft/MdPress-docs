---
title: 导航与菜单配置
---

# 导航与菜单配置

导航系统是用户在站点中穿梭的地图。MdPress 提供了顶部导航栏 (Navbar) 和侧边栏 (Sidebar) 两种主要的导航机制。

## 顶部导航栏 (Navbar)

Navbar 通常用于展示站点的一级入口，如“指南”、“API”、“博客”、“关于”等。

在 `config.json` 的 `themeConfig.nav` 中配置：

```json
{
  "themeConfig": {
    "nav": [
      { "text": "首页", "link": "/" },
      { "text": "指南", "link": "/Guide/introduction" },
      {
        "text": "相关链接",
        "items": [
          { "text": "GitHub", "link": "https://github.com/mdpress/mdpress" },
          { "text": "更新日志", "link": "https://github.com/mdpress/mdpress/releases" }
        ]
      }
    ]
  }
}
```

- **text**: 链接显示的文字。
- **link**: 跳转目标。内部链接以 `/` 开头，外部链接以 `http` 开头。
- **items**: 配置下拉菜单。

## 侧边栏 (Sidebar)

Sidebar 用于展示当前栏目下的详细文章目录。

### 模式 1：自动侧边栏 (Auto Sidebar)

对于简单的项目，您可以让 MdPress 根据文件结构自动生成侧边栏。
在 `config.json` 中设置：

```json
{
  "themeConfig": {
    "sidebar": "auto"
  }
}
```

### 模式 2：精确控制 (Custom Sidebar)

对于复杂的文档，我们推荐手动配置，以获得最佳的排序和分组体验。
Sidebar 是一个对象，键是**路径前缀**，值是**侧边栏数组**。

```json
{
  "themeConfig": {
    "sidebar": {
      "/Guide/": [
        {
          "text": "基础入门",
          "collapsed": false,
          "items": [
            { "text": "简介", "link": "/Guide/introduction" },
            { "text": "安装", "link": "/Guide/installation" },
            { "text": "快速开始", "link": "/Guide/quick-start" }
          ]
        },
        {
          "text": "进阶话题",
          "collapsed": true,
          "items": [
            { "text": "Markdown 语法", "link": "/Guide/markdown-basics" },
            { "text": "核心概念", "link": "/Guide/concepts" }
          ]
        }
      ],
      "/Config/": [
        {
          "text": "配置详解",
          "items": [
            { "text": "基础配置", "link": "/Config/basic" },
            { "text": "主题配置", "link": "/Config/theme" }
          ]
        }
      ]
    }
  }
}
```

### 关键特性
- **多侧边栏**: 当用户访问 `/Guide/` 下的页面时，只显示 Guide 相关的侧边栏；访问 `/Config/` 时显示配置相关的侧边栏。
- **分组折叠**: `collapsed: true` 可以默认折叠该分组，保持侧边栏整洁。
- **嵌套分组**: `items` 数组中可以继续包含带有 `items` 的对象，实现多级目录（视主题支持情况而定）。
