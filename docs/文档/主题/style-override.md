---
title: 样式覆盖
---

# 样式覆盖

如果您对 CSS 有一定了解，可以通过注入自定义样式来微调主题外观。

## 添加自定义 CSS

1. 在 `docs/.mdpress/` (或类似资源目录) 下创建一个 CSS 文件，例如 `custom.css`。
2. 在 `config.json` 中引入该文件：

```json
{
  "head": [
    ["link", { "rel": "stylesheet", "href": "/custom.css" }]
  ]
}
```

或者，部分主题支持直接在 `themeConfig` 中指定样式文件。

## 常见修改示例

### 修改主色调

```css
:root {
  --vp-c-brand: #3eaf7c;
  --vp-c-brand-light: #4abf8a;
}
```

### 调整字体

```css
body {
  font-family: 'Roboto', sans-serif;
}
```
