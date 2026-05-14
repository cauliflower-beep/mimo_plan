# GitHub & Vercel 部署指南

本指南将指导您如何将当前的 **SalesAgent AI** 项目推送到 GitHub 远程仓库，并使用 Vercel 进行自动化部署。

## 1. 前置准备
*   您已经安装并配置了 Git。
*   您已经拥有一个 GitHub 账号。
*   您已经拥有一个 Vercel 账号（建议使用 GitHub 账号直接登录）。
*   **假设**：您已经在 GitHub 上创建了一个名为 `sales-agent-ai` 的空仓库。

---

## 2. 推送项目到 GitHub

由于您已经初始化了本地 Git 仓库，请按照以下步骤操作：

### 第一步：确保所有更改已提交
在根目录（`mimo_plan`）下运行：
```bash
git add .
git commit -m "feat: complete multi-language AI sales agent website with immersive dashboard"
```

### 第二步：关联 GitHub 远程仓库
请将 `<YOUR_GITHUB_USERNAME>` 替换为您真实的用户名：
```bash
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/sales-agent-ai.git
```

### 第三步：推送到主分支
```bash
git branch -M main
git push -u origin main
```

---

## 3. 部署到 Vercel

Vercel 提供了对 Vite + React 项目的深度支持，但由于我们的项目代码位于子目录 `website` 中，需要进行以下特定配置：

### 第一步：导入项目
1.  登录 [Vercel 控制台](https://vercel.com/dashboard)。
2.  点击 **"Add New..."** -> **"Project"**。
3.  在 "Import Git Repository" 列表中找到您的 `sales-agent-ai` 仓库，点击 **"Import"**。

### 第二步：配置项目 (关键步骤)
在部署配置页面，请务必检查并修改以下设置：

1.  **Root Directory (根目录)**：
    *   点击 **"Edit"**。
    *   选择目录列表中的 **`website`** 文件夹。
    *   点击 **"Continue"**。
    *   *注：这样 Vercel 才知道 package.json 和构建命令在哪里运行。*

2.  **Framework Preset (框架预设 / Application Preset)**：
    *   **它是什么？**：这是 Vercel 提供的一套“构建模板”。选择对应的预设后，Vercel 会自动帮你配置好 **Build Command**（构建命令）和 **Output Directory**（输出目录），无需你手动填写。
    *   **常见选项解释**：
        *   **Vite (推荐)**：适用于使用 Vite 工具构建的现代前端项目。**我们的项目正是基于 Vite 的 React 项目，因此请务必确保选择了此项。**
        *   **Next.js**：适用于 Next.js 框架，支持服务器端渲染 (SSR)。
        *   **Angular**：适用于 Google 开发的 Angular 框架。
        *   **Django**：适用于 Python 的 Django 框架（通常涉及后端逻辑）。
        *   **Create React App**：适用于较旧的、使用官方脚手架创建的 React 项目。
    *   **如何选择？**：Vercel 通常会自动检测到 **Vite**。如果没有自动选中，请在下拉菜单中手动搜索并选择 **`Vite`**。

3.  **Build and Output Settings (构建与输出设置)**：
    *   默认通常为：
        *   Build Command: `npm run build`
        *   Output Directory: `dist`
        *   Install Command: `npm install`
    *   保持默认即可，无需修改。

### 第三步：点击部署
1.  点击底部的 **"Deploy"** 按钮。
    *   Vercel 将开始拉取代码、安装依赖并执行构建。
2.  等待约 1-2 分钟，直到看到 **"Congratulations!"** 烟花效果。

---

## 4. 后续维护与更新

一旦部署完成：
*   **自动部署**：每当您在本地修改代码并 `git push` 到 GitHub 时，Vercel 会自动检测到更新并重新构建部署新版本。
*   **自定义域名**：您可以在 Vercel 项目的 `Settings` -> `Domains` 中绑定您自己的顶级域名。
*   **多语言支持**：如果您修改了 `src/translations.js` 中的内容，只需提交推送，线上网站即可秒级更新。

---

## 5. 常见问题排查 (Troubleshooting)

*   **构建失败 (Build Failed)**：请确保在部署前，本地运行 `cd website && npm run build` 是通过的。
*   **样式丢失**：由于我们使用的是 Tailwind CSS v4，请确保 `website/vite.config.js` 中已正确配置 `@tailwindcss/vite` 插件（当前项目中已配置完成）。
*   **404 错误**：Vercel 默认支持单页应用路由。如果以后添加了 React Router 导致刷新 404，请在 `website` 根目录下添加一个 `vercel.json` 文件。

---
祝您的 AI 销售 Agent 产品成功上线！
