export const translations = {
  en: {
    nav: {
      features: "Features",
      impact: "Impact",
      technology: "Technology",
      bookDemo: "Book a Demo"
    },
    hero: {
      badge: "REVOLUTIONIZING SALES WITH REACT AGENTS",
      title: "Lead Follow-up that",
      titleAccent: "Never Sleeps",
      desc: "Stop losing leads to slow response times. Our AI Agent integrates with your CRM to provide 24/7 intelligent, personalized follow-ups that convert 2.5x better.",
      ctaStart: "Start for Free",
      ctaCase: "View Case Studies",
      dashboard: "Interactive AI Sales Dashboard"
    },
    dashboard: {
      tabs: {
        monitoring: "Live Monitoring",
        strategy: "Agent Strategy",
        stats: "ROI Analytics"
      },
      activeAgents: "12 Agents Active",
      leads: {
        title: "Incoming Lead Flow",
        subtitle: "Real-time processing across all channels",
        statusLive: "LIVE SYSTEM OK",
        scoreLabel: "Score:",
        items: [
          { name: "TechCorp Solutions", status: "Perception", action: "Analyzing Intent...", color: "text-blue-500" },
          { name: "Global Retail Inc", status: "Strategy", action: "Planning Follow-up", color: "text-indigo-500" },
          { name: "Future Systems", status: "Execution", score: 96, action: "Email Sent", color: "text-emerald-500" }
        ]
      },
      neural: {
        title: "Agent Neural Reasoning",
        log1: "[Perception] Detecting high-intent keywords: \"implementation\", \"pricing\".",
        log2: "[Strategy] Running CoT: 1. Evaluate stage -> 2. Compare similar wins -> 3. Select CTA.",
        probLabel: "Current Probability",
        success: "Success",
        thinking: "Agent is identifying the optimal moment to trigger the personalized follow-up sequence..."
      },
      strategy: {
        title: "Strategy Visualizer",
        desc: "Mapping the path from perception to closed-won. Watch how the Agent navigates complex sales cycles.",
        steps: ['Perception', 'Reasoning', 'Action']
      },
      stats: [
        { label: 'Conversion Lift', val: '+158%' },
        { label: 'Avg. Response', val: '12m' },
        { label: 'Active Leads', val: '842' },
        { label: 'Total Revenue', val: '$4.7M' }
      ],
      statusBar: {
        stable: "System Stable",
        memory: "Memory Usage:",
        tokens: "Token Usage: 4.5M / Day"
      }
    },
    impact: {
      title: "Real Results. No Hype.",
      desc: "Implemented in a team of 18, our Agent delivered consistent performance across 800+ daily interactions.",
      stats: [
        { label: "Response Time", before: "8.7 Hours", after: "12 Minutes", sub: "85% reduction" },
        { label: "Conversion Rate", before: "12%", after: "31%", sub: "158% increase" },
        { label: "Team Productivity", before: "Standard", after: "2.1x Volume", sub: "More deals per rep" },
        { label: "Added Revenue", before: "Goal", after: "$4.7M+", sub: "Direct contract value" }
      ]
    },
    features: {
      title: "A Multi-Agent System",
      titleAccent: "Built for Conversion",
      desc: "Our ReAct-based framework coordinates four specialized agents to handle the entire lead lifecycle, ensuring no lead is ever neglected.",
      agents: [
        {
          title: "Perception Agent",
          desc: "Multimodal data fusion. Real-time extraction from CRM, email, WeChat, and website behavior to build 360° customer profiles."
        },
        {
          title: "Strategy Agent",
          desc: "Core reasoning layer. Uses CoT + ToT to analyze the sales funnel, predict timing, and iterate on follow-up strategies."
        },
        {
          title: "Execution Agent",
          desc: "Omni-channel outreach. Automatically generates and sends personalized scripts for email, phone, and messaging apps."
        },
        {
          title: "Reflection Agent",
          desc: "Self-optimizing loop. Analyzes every interaction, storing wins and failures in vector memory to get smarter every day."
        }
      ],
      crmStatus: "CRM Integration Active",
      crmSync: "Real-time Syncing...",
      crmLeads: [
        { name: "John Doe", company: "CloudScale", time: "Just now", action: "Profile Enriched" },
        { name: "Sarah Chen", company: "DataFlow", time: "2m ago", action: "Intent Captured" },
        { name: "Mike Ross", company: "LegalTech", time: "5m ago", action: "ReAct Triggered" }
      ],
      analysis: "Agent Analysis:",
      intent: "High Intent",
      action: "Action Taken"
    },
    modals: {
      earlyAccess: {
        title: "Join the Early Access",
        subtitle: "We are currently in private beta. Leave your details to get a personalized demo of how SalesAgent AI can grow your revenue.",
        name: "Full Name",
        email: "Work Email",
        company: "Company Name",
        submit: "Apply for Access",
        success: "Application Sent! We'll reach out within 24 hours."
      },
      caseStudy: {
        title: "Success Story: 18-Person Sales Team",
        metrics: "Core Performance Lift",
        challenge: "The Challenge",
        challengeText: "Massive lead loss due to slow response times (avg. 8.7h) and lack of personalization in follow-up strategies.",
        solution: "The Solution",
        solutionText: "Full deployment of the 4-Agent closed-loop system integrated with existing CRM and communication channels.",
        results: "The Results",
        resultsList: [
          "Response time dropped from 8.7h to 12 minutes",
          "Lead conversion rate jumped from 12% to 31%",
          "Monthly sales volume per rep increased by 2.1x",
          "Generated $4.7M+ in incremental contract value"
        ],
        footer: "Ready to achieve these results?"
      }
    },
    cta: {
      title: "Ready to scale your sales with AI?",
      desc: "Join the team of high-performing sales organizations using SalesAgent AI to capture every opportunity.",
      button: "Get Started Today"
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      docs: "Documentation",
      rights: "© 2024 SalesAgent AI. All rights reserved."
    }
  },
  zh: {
    nav: {
      features: "产品特性",
      impact: "实际成效",
      technology: "技术架构",
      bookDemo: "预约演示"
    },
    hero: {
      badge: "使用 ReAct 框架驱动销售变革",
      title: "永不下线的",
      titleAccent: "销售线索跟进专家",
      desc: "告别响应迟缓导致的线索流失。智能 Agent 深度接入 CRM，提供 24/7 全天候、个性化跟进，将转化率提升 2.5 倍。",
      ctaStart: "免费开始使用",
      ctaCase: "查看成功案例",
      dashboard: "AI 销售线索智能看板"
    },
    dashboard: {
      tabs: {
        monitoring: "实时监控",
        strategy: "决策链路",
        stats: "ROI 分析"
      },
      activeAgents: "12 个 Agent 正在运行",
      leads: {
        title: "实时线索流",
        subtitle: "多渠道全天候自动处理中",
        statusLive: "● 系统运行正常",
        scoreLabel: "评分:",
        items: [
          { name: "泰克科技解决方案", status: "感知层", action: "正在分析客户意图...", color: "text-blue-500" },
          { name: "环球零售集团", status: "策略层", action: "正在规划跟进策略", color: "text-indigo-500" },
          { name: "未来系统有限公司", status: "执行层", action: "已发送个性化邮件", color: "text-emerald-500" }
        ]
      },
      neural: {
        title: "Agent 神经推理引擎",
        log1: "[感知] 检测到高意向关键词：\"实施方案\"、\"价格咨询\"。",
        log2: "[策略] 运行 CoT：1. 评估阶段 -> 2. 匹配成功案例 -> 3. 选择最佳触达点。",
        probLabel: "当前转化概率",
        success: "预测成功率",
        thinking: "Agent 正在识别触发个性化跟进序列的最佳时机..."
      },
      strategy: {
        title: "策略可视化",
        desc: "映射从感知到成交的路径。观察 Agent 如何处理复杂的销售周期。",
        steps: ['环境感知', '逻辑推理', '执行闭环']
      },
      stats: [
        { label: '转化率提升', val: '+158%' },
        { label: '平均响应时间', val: '12分钟' },
        { label: '活跃线索', val: '842' },
        { label: '累计增收', val: '￥470万' }
      ],
      statusBar: {
        stable: "系统稳定",
        memory: "内存占用:",
        tokens: "日均 Token 消耗: 450万"
      }
    },
    impact: {
      title: "真实数据，拒绝吹嘘",
      desc: "在 18 人销售团队全面落地，日均处理 800+ 条线索交互，性能稳定卓越。",
      stats: [
        { label: "响应时间", before: "8.7 小时", after: "12 分钟", sub: "缩短 85%" },
        { label: "线索转化率", before: "12%", after: "31%", sub: "提升 158%" },
        { label: "人均产能", before: "基准", after: "2.1倍", sub: "成交效率翻倍" },
        { label: "额外营收", before: "目标", after: "￥470万+", sub: "直接合同额增量" }
      ]
    },
    features: {
      title: "多 Agent 协作系统",
      titleAccent: "专为转化而生",
      desc: "基于 ReAct 框架，由四个专业 Agent 协同工作，覆盖线索全生命周期，不漏掉任何一个机会。",
      agents: [
        {
          title: "感知 Agent",
          desc: "多源信息提取与融合。实时整合 CRM、邮件、微信及官网行为，构建 360° 结构化客户画像。"
        },
        {
          title: "策略 Agent",
          desc: "核心推理层。运用 CoT + ToT 机制，分析销售漏斗阶段，预测最佳时机，制定个性化策略。"
        },
        {
          title: "执行 Agent",
          desc: "全渠道自动触达。根据策略自动生成高度个性化的邮件、微信、电话话术，并实现自动发送。"
        },
        {
          title: "反思与记忆 Agent",
          desc: "持续进化闭环。分析每次交互效果，将成败经验写入向量记忆库，实现越用越智能。"
        }
      ],
      crmStatus: "CRM 系统已连接",
      crmSync: "实时数据同步中...",
      crmLeads: [
        { name: "张明", company: "云拓科技", time: "刚刚", action: "画像已增强" },
        { name: "陈思思", company: "数流工业", time: "2分钟前", action: "捕获高意向" },
        { name: "王伟", company: "法务之窗", time: "5分钟前", action: "触发 ReAct 链路" }
      ],
      analysis: "Agent 实时分析：",
      intent: "高意向客户",
      action: "已执行跟进"
    },
    modals: {
      earlyAccess: {
        title: "申请早期访问",
        subtitle: "我们目前处于私测阶段。留下您的联系方式，我们将为您演示 SalesAgent AI 如何助力您的业绩增长。",
        name: "姓名",
        email: "企业邮箱",
        company: "公司名称",
        submit: "提交申请",
        success: "申请已提交！我们将在 24 小时内与您联系。"
      },
      caseStudy: {
        title: "成功案例：18人销售团队实测",
        metrics: "核心核心业绩提升",
        challenge: "面临挑战",
        challengeText: "由于响应速度慢（平均 8.7 小时）且缺乏个性化跟进策略，导致大量线索流失。",
        solution: "解决方案",
        solutionText: "全面部署 4-Agent 闭环系统，深度集成现有 CRM 和通讯渠道。",
        results: "实测结果",
        resultsList: [
          "响应时间从 8.7 小时缩短至 12 分钟",
          "线索转化率从 12% 提升至 31%",
          "人均月成交量提升 2.1 倍",
          "累计为公司带来 470 万+ 额外合同额"
        ],
        footer: "准备好获得同样的增长了吗？"
      }
    },
    cta: {
      title: "准备好用 AI 规模化提升业绩了吗？",
      desc: "加入顶尖销售团队，使用 SalesAgent AI 捕捉每一个商业机会。",
      button: "立即开启"
    },
    footer: {
      privacy: "隐私政策",
      terms: "服务条款",
      docs: "技术文档",
      rights: "© 2024 SalesAgent AI. 保留所有权利。"
    }
  }
};
