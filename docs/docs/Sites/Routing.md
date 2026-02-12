# 路由方案 (Routing Scheme)

MdPress 提供了灵活的路由管理方案，支持 **Native (原生)** 和 **Slug (别名)** 两种模式，以适应不同的 URL 需求。

## 路由模式

### 1. Native 模式 (原生)
保留文件系统原本的路径结构，支持中文路径。
- **特点**: URL 直观，所见即所得，所访问的路径即为文件在系统中的实际路径。
- **适用场景**: 内部文档、中文知识库，不需要 SEO 优化的场景。
- **示例**: 
  - 文件: `docs/指南/快速开始.md`
  - 路由: `/指南/快速开始.html`

### 2. Slug 模式 (别名/Hash) - 默认
自动将路径转换为 URL 友好的格式，适合互联网发布。
- **特点**: 
  - 英文路径自动转为小写并用连字符连接（kebab-case）。
  - 中文路径若未定义 `slug`，则自动生成 8 位 Hash 值，避免 URL 编码乱码问题。
  - 支持 Frontmatter 自定义 `slug`。
- **适用场景**: 公开站点、SEO 优化、需要固定短链接的场景。
- **示例**:
  - 文件: `docs/Guide/Getting Started.md` -> `/guide/getting-started.html`
  - 文件: `docs/中文文档.md` -> `/page-e789de6e.html` (自动 Hash)
  - 文件 (自定义 slug): `docs/中文文档.md` (frontmatter: `slug: /intro`) -> `/intro.html`

## 配置方式

在站点配置文件 `config.json` 中设置 `routing.mode`：

```json
{
  "routing": {
    "mode": "native" // 或 "slug"
  }
}
```

## 文件夹别名 (Directory Aliases)

如果你希望在本地使用中文文件夹管理文档，但发布的 URL 使用英文路径（不仅限于 SEO 优化，也为了更短、更易读的链接），可以使用 `directoryAliases` 配置。

**config.json 配置示例：**

```json
{
  "routing": {
    "mode": "slug",
    "directoryAliases": {
      "指南": "guide",
      "开发文档": "development",
      "常见问题": "faq"
    }
  }
}
```

**效果：**
- 本地文件: `docs/指南/安装.md`
- 生成路由: `/guide/installation.html` (文件名处理视 mode 而定，若 mode 为 native 则为 `/guide/安装.html`)

这是一种非常推荐的混合管理方式，兼顾了本地管理的便利性和线上链接的规范性。

## Frontmatter 覆盖

无论在哪种模式下，都可以通过 Markdown 文件的 Frontmatter 指定 `slug` 字段来强制定义路由地址：

```markdown
---
slug: /my-custom-url
---
```

## 注意事项

- **Native 模式**: 能够最大程度保留中文语义，但可能在部分不支持 UTF-8 路径的旧版服务器上遇到问题（MdPress 内置服务器已完美支持）。
- **Slug 模式**: 推荐为关键的中文文档手动指定 `slug`，以获得更有意义的 URL（如 `/about` 代替 `/page-a1b2c3d4.html`）。
