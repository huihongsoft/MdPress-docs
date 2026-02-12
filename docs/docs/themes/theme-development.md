---
title: 主题开发指南
---

# 主题开发指南

MdPress 的默认主题基于 CSS 变量构建，支持深色模式自适应。您可以轻松覆盖样式或开发全新主题。

## CSS 变量系统

默认主题定义了一套语义化的 CSS 变量，您可以在 `docs/.mdpress/theme/style.css` (如果不存在则需创建) 中覆盖它们。

### 基础颜色
```css
:root {
  /* 品牌色 - 默认为蓝色系 */
  --vp-c-brand: #3451b2;
  --vp-c-brand-light: #3a5ccc;
  --vp-c-brand-dark: #2b419a;

  /* 背景色 */
  --vp-c-bg: #ffffff;
  --vp-c-bg-alt: #f6f6f7;
  --vp-c-bg-soft: #f9f9fa;

  /* 文本颜色 */
  --vp-c-text-1: #213547;       /* 主要文本 */
  --vp-c-text-2: #3c3c43c7;     /* 次要文本 */
  --vp-c-text-3: #3c3c438c;     /* 提示文本 */

  /* 边框与分隔线 */
  --vp-c-border: #e2e2e3;
  --vp-c-divider: #e2e2e3;
}
```

### 布局尺寸
```css
:root {
  --vp-nav-height: 64px;
  --vp-sidebar-width: 224px;
  --vp-content-padding-mobile: 32px;
  --vp-content-padding-desktop: 96px;
}
```

## 深色模式 (Dark Mode)

MdPress 会根据系统设置或用户切换自动添加 `dark` 类。要适配深色模式，请使用媒体查询：

```css
@media (prefers-color-scheme: dark) {
  :root {
    --vp-c-bg: #1b1b1f;
    --vp-c-brand: #a8b1ff;
    --vp-c-text-1: rgba(255, 255, 255, 0.87);
    /* ...其他变量覆盖 */
  }
}
```

## 模板开发

如果您选择从头开发主题，需要了解 MdPress 的模板机制。

### 目录结构
```
my-theme/
├── assets/
│   ├── style.css
│   └── client.js
├── layout.ejs      # EJS 模板入口 (推荐)
└── template.hbs    # Handlebars 模板入口 (备选)
```

### EJS 模板变量
在 `layout.ejs` 中，您可以访问以下对象：

- **page**: 当前页面数据
  - `page.title`: 标题
  - `page.frontmatter`: Frontmatter 对象
  - `page.relativePath`: 文件相对路径
- **site**: 站点配置 (`config.json` 内容)
- **content**: 渲染后的 HTML 内容
- **head**: 自动生成的 `<head>` 标签内容 (SEO meta, 样式链接)
- **nav**: 处理后的导航菜单数据

```html
<!-- layout.ejs 示例 -->
<!DOCTYPE html>
<html lang="<%= site.lang || 'en' %>">
<head>
  <%- head %>
</head>
<body class="<%= page.frontmatter.pageClass %>">
  <div class="theme-container">
    <%- content %>
  </div>
</body>
</html>
```
