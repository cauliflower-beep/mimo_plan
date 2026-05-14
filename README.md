# SalesAgent AI - 销售线索全生命周期智能转化与跟进 Agent

SalesAgent AI 是一款针对传统销售痛点设计的智能化闭环管理系统。通过多 Agent 协作系统，实现了线索响应、意图识别、个性化跟进及自我进化，大幅提升了线索转化率。

![SalesAgent AI Dashboard](https://img.shields.io/badge/Status-Live-emerald) ![Version](https://img.shields.io/badge/Version-1.0.0-blue) ![License](https://img.shields.io/badge/License-MIT-gray)

## 🚀 核心价值 (Impact)

该系统已在 18 人销售团队全面落地，取得了卓越的实测表现：
*   **极速响应**：线索平均响应时间从 **8.7 小时** 缩短至 **12 分钟**。
*   **转化飙升**：线索转化率从 **12%** 提升至 **31%**。
*   **业绩倍增**：人均月成交量提升 **2.1 倍**，累计带来 **470 万+** 额外合同额。

## 🧠 技术架构 (Multi-Agent System)

基于 **ReAct 框架** + **长期记忆模块**，由四个专业 Agent 协同完成闭环：

1.  **感知 Agent (Perception)**：多源信息提取与融合，生成结构化线索画像。
2.  **策略 Agent (Strategy)**：运用 CoT + ToT 机制，分析销售阶段，制定个性化策略。
3.  **执行 Agent (Execution)**：全渠道自动触达，生成并发送高度个性化的营销话术。
4.  **反思与记忆 Agent (Reflection)**：分析交互效果，沉淀成败经验至向量记忆库，持续进化。

## 💻 技术栈

*   **Frontend**: React (Vite)
*   **Styling**: Tailwind CSS v4 (Glassmorphism design)
*   **Icons**: Lucide React
*   **i18n**: 自研轻量级中英双语切换方案
*   **Deployment**: Vercel

## 🛠️ 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/<your-username>/sales-agent-ai.git
cd sales-agent-ai
```

### 2. 安装与运行
```bash
cd website
npm install
npm run dev
```

### 3. 构建发布
```bash
npm run build
```

## ✨ 页面特性

*   **沉浸式看板**：实时模拟 Agent 神经推理过程与线索处理流。
*   **双语支持**：一键切换中英文环境，适配全球化业务需求。
*   **响应式设计**：完美适配 PC、平板及移动端设备。
*   **交互式演示**：内置早期访问申请流程与深度成功案例展示。

## 📄 部署指南

详见项目根目录下的 [GITHUB_VERCEL_DEPLOY.md](./GITHUB_VERCEL_DEPLOY.md)。

## 📜 许可证

本项目采用 MIT 许可证。
