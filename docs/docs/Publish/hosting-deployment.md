---
title: 托管与部署指南
---

# 托管与部署指南

如果您选择不使用 MdPress 内置的一键发布功能，您可以将构建生成的 `dist` 目录手动部署到任何支持静态网站的服务器或云平台。

## 1. 常见托管平台

### GitHub Pages (手动)
1. 将 `dist` 目录的内容推送到仓库的 `gh-pages` 分支。
2. 确保仓库设置中 Pages 功能已开启，源选择 `gh-pages`。

### Vercel
1. 导入您的 Git 仓库。
2. **Framework Preset**: 选择 `Other`。
3. **Build Command**: `npm run build` (如果通过 CI 构建) 或留空 (如果直接上传)。
4. **Output Directory**: `dist`。

### Netlify
1. 将 `dist` 文件夹拖入 Netlify Drop 区域。
2. 或连接 Git 仓库，设置 **Publish directory** 为 `dist`。

## 2. Web 服务器配置

如果您部署到自己的 Nginx 或 Apache 服务器，需要配置路由重写以支持单页应用 (SPA) 模式（如果您的站点使用了 History 路由）。

### Nginx 配置

```nginx
server {
    listen 80;
    server_name docs.example.com;
    root /var/www/mdpress-site/dist;
    index index.html;

    # 开启 gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    location / {
        # 如果请求的文件不存在，返回 index.html (用于客户端路由)
        try_files $uri $uri/ /index.html;
    }

    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

### Apache (.htaccess)

在 `dist` 目录下创建 `.htaccess` 文件：

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 3. 子路径部署

如果您的站点不是部署在根域名（如 `example.com`），而是部署在子路径（如 `example.com/my-docs/`），需要修改 `config.json` 中的 `base` 字段：

```json
{
  "base": "/my-docs/"
}
```

**注意**: 修改 `base` 后，请务必重新构建项目。
