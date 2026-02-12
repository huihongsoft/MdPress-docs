---
title: 一键发布与部署
---

# 一键发布与部署

MdPress 提供了极简的发布流程，让您可以直接将本地文档发布到 GitHub Pages 或 Gitee Pages。

## 快速配置

在发布前，请确保您已在 `config.json` 中配置了目标平台信息。

### GitHub Pages 最佳实践

推荐开启 `enableRepo` 和 `enablePages`，这样 MdPress 会自动处理源码同步和静态页面部署。

```json
"publish": {
  "github": {
    "repo": "my-blog",
    "branch": "main",
    "token": "ghp_xxxxxxxxxxxx",
    "enableRepo": true,
    "enablePages": true
  }
}
```

**工作流程：**
1. MdPress 将您的 Markdown **源码**推送到 `main` 分支。
2. MdPress 在本地构建静态网站。
3. MdPress 将构建产物 (`dist` 目录) 强制推送到 `gh-pages` 分支。
4. GitHub Pages 自动检测到 `gh-pages` 分支更新，完成上线。

## 常见问题与故障排除

### 1. 错误提示：Source branch cannot be 'gh-pages'
**原因**：您尝试将源码分支 (`branch`) 设置为 `gh-pages`。
**解决**：`gh-pages` 是专门用于存放生成的静态 HTML 文件的分支，**绝对不要**将源码存放在此分支，否则会被构建产物覆盖导致源码丢失。请将 `branch` 设置为 `main` 或 `master`。

### 2. 发布失败：Token 权限不足
**原因**：使用的 Personal Access Token 没有包含 `repo` 权限。
**解决**：
- 前往 GitHub Developer Settings。
- 重新生成 Token。
- 确保勾选 **repo** (Full control of private repositories) 权限组。
- 如果是 Gitee，需勾选 **projects** 权限。

### 3. GitHub Pages 404
**原因**：GitHub Pages 设置未生效或部署尚未完成。
**解决**：
- 访问仓库的 `Settings -> Pages`。
- 确保 **Source** 选择的是 `Deploy from a branch`。
- 确保 **Branch** 选择的是 `gh-pages` / `/ (root)`。
- 等待几分钟，GitHub Actions 构建通常需要时间。

### 4. Gitee Pages 不自动更新
**注意**：Gitee Pages 的免费版不支持自动部署。
**解决**：每次推送后，您需要手动登录 Gitee 仓库页面，点击“服务 -> Gitee Pages -> 更新”按钮。

## 手动部署

如果您不使用一键发布，也可以手动构建并部署。

1. 点击工具栏的 **Build** 按钮（或运行构建命令）。
2. 构建产物位于项目根目录的 `dist` 文件夹。
3. 将 `dist` 文件夹的内容上传到任何静态托管服务：
   - **Nginx**: 配置 `root` 指向该目录。
   - **Vercel / Netlify**: 将项目连接到 Git，设置构建命令为空，输出目录为 `dist`。
