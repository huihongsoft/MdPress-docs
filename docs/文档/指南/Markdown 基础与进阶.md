---
layout: 
title: Markdown 基础与进阶
slug: markdown-basics-and-advanced
tag: [指南, Markdown]
description: 全面的 Markdown 语法指南，涵盖基础语法、GFM 表格与任务列表、KaTeX 数学公式及自定义容器。
keywords: markdown, 语法, gfm, katex, 数学公式, 表格
---

# Markdown 基础与进阶

MdPress 使用 **CommonMark** 标准，并集成了 **GitHub Flavored Markdown (GFM)** 和 **KaTeX** 数学公式支持。

## 基础语法

### 标题
```markdown
# H1 一级标题
## H2 二级标题
### H3 三级标题
```

### 文本样式
```markdown
**粗体**
*斜体*
~~删除线~~
`行内代码`
```

### 列表
无序列表：
```markdown
- 项目 1
- 项目 2
  - 子项目 A
```

有序列表：
```markdown
1. 第一步
2. 第二步
```

### 链接与图片
```markdown
[MdPress 官网](https://www.imarkdown.net)
![图片描述](../assets/image.png)
```

## 进阶语法 (GFM)

### 表格
使用 `|` 分隔列，使用 `-` 分隔表头：

```markdown
| 姓名 | 年龄 | 职业 |
| :--- | :--: | ---: |
| Alice | 24 | 工程师 |
| Bob | 30 | 设计师 |
```

### 任务列表
```markdown
- [x] 已完成任务
- [ ] 待办任务
```

### 自动链接
直接输入 URL 会自动转换为链接：https://www.imarkdown.net

## 数学公式
MdPress 内置 KaTeX 引擎，支持 LaTeX 数学公式渲染。

### 行内公式
使用单个 `$` 包裹：
质能方程 $E = mc^2$ 是物理学的重要公式。

### 块级公式
使用两个 `$$` 包裹：

```math
$$
\sum_{i=1}^n i = \frac{n(n+1)}{2}
$$
```

## 自定义容器
MdPress 支持类似 VuePress 的自定义提示块，用于醒目的信息展示。

::: tip 提示
这是一个提示信息，通常用于展示额外的技巧或说明。
:::

::: warning 注意
这是一个警告信息，提醒用户注意潜在的风险。
:::

::: danger 警告
这是一个危险信息，表示如果不当操作可能会导致严重后果。
:::

## HTML 支持
您可以在 Markdown 中直接编写原生 HTML 代码，这在需要复杂布局时非常有用。
