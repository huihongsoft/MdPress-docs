---
title: 主题个性化
---

# 主题个性化

大多数主题都支持通过配置文件进行一定程度的定制，无需修改代码。

## 配置项

在 `config.json` 的 `themeConfig` 字段中进行配置。以 `official` 主题为例：

```json
{
  "themeConfig": {
    "logo": "/assets/logo.png",
    "lastUpdated": true,
    "footer": {
      "message": "Released under the MIT License.",
      "copyright": "Copyright © 2023-present MdPress"
    },
    "socialLinks": [
      { "icon": "github", "link": "https://github.com/your-repo" }
    ]
  }
}
```

### 常见配置说明

- **logo**: 站点 Logo 图片路径。
- **lastUpdated**: 是否在文章底部显示最后更新时间。
- **footer**: 页脚信息，支持自定义版权声明。
- **socialLinks**: 社交媒体链接图标。

## 首页配置

通常在 `docs/index.md` 的 Frontmatter 中配置首页特有的布局信息：

```yaml
---
layout: home
hero:
  name: MdPress
  text: 极速静态站点生成器
  tagline: 让写作回归纯粹
  actions:
    - theme: brand
      text: 快速开始
      link: /Guide/intro
features:
  - title: 简洁高效
    details: 专注于 Markdown 写作体验。
  - title: 一键部署
    details: 轻松发布到 GitHub Pages。
---
```
