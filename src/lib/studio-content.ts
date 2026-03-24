export type Locale = 'zh' | 'en';

export type CaseItem = {
  slug: string;
  scope: string;
  title: string;
  detail: string;
  metric: string;
  challenge: string;
  approach: string;
  impact: string;
};

export type StudioContent = {
  nav: {
    studio: string;
    links: { id: string; label: string }[];
    zh: string;
    en: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    ctaWechat: string;
    ctaCases: string;
  };
  stats: { value: string; label: string }[];
  section: {
    team: string;
    work: string;
    services: string;
    process: string;
    testimonials: string;
    faq: string;
    contact: string;
  };
  intros: {
    work: string;
    services: string;
    process: string;
  };
  teamCards: { name: string; role: string; intro: string; introZh: string }[];
  cases: CaseItem[];
  services: { title: string; desc: string; price: string }[];
  process: { title: string; body: string }[];
  testimonials: { name: string; role: string; text: string }[];
  faq: { q: string; a: string }[];
  contact: { title: string; body: string; hint: string };
  footer: string;
  casePage: {
    backLabel: string;
    challengeLabel: string;
    approachLabel: string;
    impactLabel: string;
    ctaLabel: string;
  };
};

export const studioContent: Record<Locale, StudioContent> = {
  zh: {
    nav: {
      studio: 'Chance Design Studio',
      links: [
        { id: 'work', label: '案例' },
        { id: 'services', label: '服务' },
        { id: 'process', label: '流程' },
        { id: 'contact', label: '联系' },
      ],
      zh: '中文',
      en: 'EN',
    },
    hero: {
      tagline: '以清晰与目的感构建产品设计',
      title: '面向增长型团队的 UI/UX、品牌与 Web 设计',
      subtitle:
        '我们把模糊问题变成可执行方案，从策略到界面再到开发交付，帮助你的产品更快上线、让官网更会转化。',
      ctaWechat: '加微信咨询',
      ctaCases: '查看案例',
    },
    stats: [
      { value: '30,000 RMB 起', label: '项目合作门槛' },
      { value: '3-6 周', label: 'UI/UX Sprint 周期' },
      { value: '24h', label: '微信初次响应' },
    ],
    section: {
      team: '团队介绍',
      work: '精选案例',
      services: '服务内容',
      process: '合作流程',
      testimonials: '客户反馈',
      faq: '常见问题',
      contact: '联系合作',
    },
    intros: {
      work: '每个案例都围绕真实业务目标，强调可衡量结果与可复用方法。',
      services: '主推 UI/UX，品牌与 Web 为协同能力，适合 3-10 万预算段项目。',
      process: '清晰的 4 步合作节奏，减少反复沟通，提升交付确定性。',
    },
    teamCards: [
      {
        name: 'Alex Chen',
        role: 'Product Designer',
        intro: '美国设计体系背景，参与过大型用户产品设计。',
        introZh: '擅长把复杂需求拆成清晰的信息结构与界面策略。',
      },
      {
        name: 'Yuki Lin',
        role: 'UX Designer',
        intro: '专注信息结构与用户路径，参与平台型产品设计。',
        introZh: '关注可用性细节，帮助团队缩短设计到开发的沟通成本。',
      },
      {
        name: 'David Wang',
        role: 'Design & Research',
        intro: '基于研究驱动的设计方法，融合学术与实际产品经验。',
        introZh: '用数据和用户反馈验证方案，保证设计决策有依据。',
      },
    ],
    cases: [
      {
        slug: 'edtech-onboarding-redesign',
        scope: 'UI/UX · 教育',
        title: '教育产品体验改版',
        detail: '重做新用户引导与课程学习路径，降低理解门槛。',
        metric: '试用转付费 +31%',
        challenge: '旧版引导过长且路径不清晰，新用户首日留存偏低。',
        approach: '重构信息层级、合并关键步骤、统一视觉反馈，并让任务驱动学习路径。',
        impact: '新用户完成首课比例提升 37%，试用转付费提升 31%。',
      },
      {
        slug: 'healthcare-saas-dashboard',
        scope: 'Design System · 医疗 SaaS',
        title: '医疗 SaaS 工作台',
        detail: '搭建模块化设计系统与运营看板，提高协作效率。',
        metric: '关键任务时长 -28%',
        challenge: '多个角色在同一后台协作，信息密度高且交互标准不一致。',
        approach: '先拆角色任务流，再建立组件规范和页面模板，最终形成统一操作框架。',
        impact: '关键流程平均操作时长下降 28%，设计与研发协作成本显著下降。',
      },
      {
        slug: 'dtc-brand-website',
        scope: 'Brand + Web · 消费品牌',
        title: '消费品牌官网升级',
        detail: '完成中英双语官网和高性能前端落地。',
        metric: '有效咨询 +42%',
        challenge: '原官网视觉统一性弱，移动端体验不稳定，线索质量一般。',
        approach: '重做品牌叙事结构，优化首屏价值表达，并强化移动端 CTA 路径。',
        impact: '官网有效咨询量提升 42%，移动端停留时长和表单完成率均有提升。',
      },
      {
        slug: 'fintech-investment-platform',
        scope: 'UI/UX · 金融科技',
        title: '财富管理平台升级',
        detail: '优化开户流程和资产看板，降低新用户理解成本。',
        metric: '开户完成率 +26%',
        challenge: '金融信息专业性强，新用户对流程和术语理解困难，流失明显。',
        approach: '将复杂术语分层展示，优化步骤提示和风险提示样式，增加关键引导。',
        impact: '开户完成率提升 26%，用户对核心功能的首周使用率提升 33%。',
      },
      {
        slug: 'b2b-manufacturing-portal',
        scope: 'Web · B2B 制造业',
        title: '制造业客户门户改版',
        detail: '重构 B2B 门户导航与询盘流程，提升商机质量。',
        metric: '高意向询盘 +35%',
        challenge: '旧站信息层级混乱，产品规格复杂，采购方难以快速筛选方案。',
        approach: '按场景重组内容结构，增加参数筛选和下载路径，强化询盘入口。',
        impact: '高意向询盘量提升 35%，平均页面浏览深度提升 41%。',
      },
      {
        slug: 'consumer-app-design-system',
        scope: 'Design System · 消费应用',
        title: '消费级 App 设计系统搭建',
        detail: '建立跨端组件库与交互规范，提升迭代效率。',
        metric: '设计交付周期 -30%',
        challenge: '多业务线并行导致 UI 不一致，研发复用率低，版本成本持续上升。',
        approach: '梳理共性组件并建立 Tokens、组件文档和评审机制，先覆盖高频模块。',
        impact: '设计交付周期下降 30%，研发复用率显著提升，跨团队协作更稳定。',
      },
    ],
    services: [
      {
        title: 'UI/UX Sprint（主推）',
        desc: '3-6 周交付，适合新功能上线、体验升级与转化优化。',
        price: '30,000 RMB 起',
      },
      {
        title: 'Design System Lite',
        desc: '快速搭建组件和交互规范，提升设计与开发一致性。',
        price: '40,000 RMB 起',
      },
      {
        title: 'Web Experience Package',
        desc: '商业导向官网，兼顾品牌叙事与咨询转化。',
        price: '50,000 RMB 起',
      },
    ],
    process: [
      { title: '需求诊断', body: '30 分钟沟通目标、用户、预算和时间线。' },
      { title: '策略与框架', body: '确定信息架构、关键页面和视觉方向。' },
      { title: '设计与开发', body: '高保真 UI + 前端实现，双语内容同步。' },
      { title: '上线与迭代', body: '根据数据优化 CTA、文案和页面结构。' },
    ],
    testimonials: [
      {
        name: 'Luna · 教育科技创业者',
        role: 'Founder',
        text: '他们不是只做图，而是把业务目标翻译成产品体验，沟通效率非常高。',
      },
      {
        name: 'Kane · 医疗 SaaS 负责人',
        role: 'Product Lead',
        text: '设计系统上线后，跨团队协作明显更顺，版本推进速度更快。',
      },
    ],
    faq: [
      {
        q: '预算 3-10 万可以做什么？',
        a: '通常可以覆盖一个完整官网或一轮 UI/UX Sprint，范围会在启动阶段明确。',
      },
      {
        q: '支持中英双语吗？',
        a: '支持。可以先上线中文，再补英文，或一次性同步交付。',
      },
      {
        q: '为什么先微信沟通？',
        a: '对国内团队效率最高，需求确认更快，适合高频协作。',
      },
    ],
    contact: {
      title: '微信沟通更高效',
      body: '欢迎发送项目类型、时间计划和预算区间，我们通常在 24 小时内回复。',
      hint: '当前二维码为示意图，请替换为工作室微信二维码。',
    },
    footer: 'Chance Design Studio · UI/UX · 品牌设计 · Web 开发',
    casePage: {
      backLabel: '返回首页',
      challengeLabel: '挑战',
      approachLabel: '方案',
      impactLabel: '结果',
      ctaLabel: '加微信聊项目',
    },
  },
  en: {
    nav: {
      studio: 'Chance Design Studio',
      links: [
        { id: 'work', label: 'Work' },
        { id: 'services', label: 'Services' },
        { id: 'process', label: 'Process' },
        { id: 'contact', label: 'Contact' },
      ],
      zh: '中文',
      en: 'EN',
    },
    hero: {
      tagline: 'Designing products with clarity and intent',
      title: 'UI/UX, Brand and Web design for teams ready to grow',
      subtitle:
        'We turn vague problems into shippable solutions, from strategy to interface and frontend delivery, so your product launches faster and converts better.',
      ctaWechat: 'Add WeChat',
      ctaCases: 'View Work',
    },
    stats: [
      { value: 'From CNY 30,000', label: 'Project entry point' },
      { value: '3-6 weeks', label: 'Typical UI/UX sprint' },
      { value: 'Within 24h', label: 'First WeChat reply' },
    ],
    section: {
      team: 'Team',
      work: 'Selected Work',
      services: 'Services',
      process: 'Process',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      contact: 'Contact',
    },
    intros: {
      work: 'Each case focuses on measurable business outcomes and reusable design decisions.',
      services: 'UI/UX is our core offer. Brand and web are complementary capabilities for growth teams.',
      process: 'A clear 4-step collaboration flow that reduces back-and-forth and shipping risk.',
    },
    teamCards: [
      {
        name: 'Alex Chen',
        role: 'Product Designer',
        intro: 'Background in U.S. design programs. Experience in large-scale consumer products.',
        introZh: 'Builds clear structures for complex features and cross-team execution.',
      },
      {
        name: 'Yuki Lin',
        role: 'UX Designer',
        intro: 'Focus on information architecture and user flows. Worked on platform-level products.',
        introZh: 'Improves usability details and shortens design-to-dev communication cycles.',
      },
      {
        name: 'David Wang',
        role: 'Design & Research',
        intro: 'Research-driven approach to product design with practical delivery mindset.',
        introZh: 'Combines evidence, user feedback and product judgment for stronger decisions.',
      },
    ],
    cases: [
      {
        slug: 'edtech-onboarding-redesign',
        scope: 'UI/UX · Edtech',
        title: 'Edtech Product Redesign',
        detail: 'Rebuilt onboarding and lesson flow for a K12 product.',
        metric: 'Trial-to-paid +31%',
        challenge: 'The old onboarding was long, fragmented and caused low first-day retention.',
        approach: 'We rebuilt IA, reduced cognitive load, and redesigned progress cues around user tasks.',
        impact: 'First-lesson completion increased by 37% and trial-to-paid improved by 31%.',
      },
      {
        slug: 'healthcare-saas-dashboard',
        scope: 'Design System · Healthcare SaaS',
        title: 'Healthcare SaaS Dashboard',
        detail: 'Created modular design system and operational dashboard.',
        metric: 'Task time -28%',
        challenge: 'Multiple roles used one backend with dense information and inconsistent interactions.',
        approach: 'We mapped role-based flows, built reusable components, and aligned key templates.',
        impact: 'Key workflow completion time dropped by 28% with faster design-dev collaboration.',
      },
      {
        slug: 'dtc-brand-website',
        scope: 'Brand + Web · DTC',
        title: 'DTC Brand Website',
        detail: 'Delivered bilingual brand site and high-speed frontend.',
        metric: 'Qualified leads +42%',
        challenge: 'The previous site lacked hierarchy, had weak mobile UX, and low-quality leads.',
        approach: 'We restructured storytelling, clarified value proposition, and optimized mobile CTA paths.',
        impact: 'Qualified leads increased by 42% with better dwell time and form completion.',
      },
      {
        slug: 'fintech-investment-platform',
        scope: 'UI/UX · Fintech',
        title: 'Investment Platform Upgrade',
        detail: 'Optimized account opening and portfolio dashboard for clarity.',
        metric: 'Account completion +26%',
        challenge: 'Financial flows were complex for first-time users and caused early drop-off.',
        approach: 'We simplified terminology layers, improved step guidance, and redesigned risk messaging.',
        impact: 'Account completion improved by 26% and week-one feature adoption increased by 33%.',
      },
      {
        slug: 'b2b-manufacturing-portal',
        scope: 'Web · B2B Manufacturing',
        title: 'Manufacturing Client Portal Revamp',
        detail: 'Rebuilt navigation and inquiry flow to improve lead quality.',
        metric: 'High-intent leads +35%',
        challenge: 'Legacy IA was fragmented, making product comparison and inquiry difficult.',
        approach: 'We restructured content by use case, added spec filters, and strengthened inquiry entry points.',
        impact: 'High-intent inquiries increased by 35% with deeper session engagement across product pages.',
      },
      {
        slug: 'consumer-app-design-system',
        scope: 'Design System · Consumer App',
        title: 'Consumer App Design System',
        detail: 'Built cross-platform components and interaction rules for faster releases.',
        metric: 'Design cycle -30%',
        challenge: 'Multiple squads shipped inconsistent UI, leading to rework and slower delivery.',
        approach: 'We defined tokens, component docs, and a shared review mechanism for high-frequency modules.',
        impact: 'Design cycle time dropped by 30% with better component reuse and team alignment.',
      },
    ],
    services: [
      {
        title: 'UI/UX Sprint',
        desc: '3-6 week delivery for feature redesign and conversion improvements.',
        price: 'From CNY 30,000',
      },
      {
        title: 'Design System Lite',
        desc: 'Fast component and interaction rules for consistency at scale.',
        price: 'From CNY 40,000',
      },
      {
        title: 'Web Experience Package',
        desc: 'Bilingual marketing site focused on storytelling and business conversion.',
        price: 'From CNY 50,000',
      },
    ],
    process: [
      { title: 'Discovery', body: '30-minute session on goals, audience, budget and timeline.' },
      { title: 'Strategy', body: 'Define IA, key pages and visual direction with clear priorities.' },
      { title: 'Design & Build', body: 'High-fidelity UI and frontend implementation in parallel.' },
      { title: 'Launch & Iterate', body: 'Optimize copy, CTA and structure based on real traffic data.' },
    ],
    testimonials: [
      {
        name: 'Luna · Edtech Founder',
        role: 'Founder',
        text: 'They translated business goals into product experience, not just pretty screens.',
      },
      {
        name: 'Kane · Healthcare SaaS',
        role: 'Product Lead',
        text: 'After the new design system, collaboration became smoother and release speed improved.',
      },
    ],
    faq: [
      {
        q: 'What can be done with a CNY 30k-100k budget?',
        a: 'Usually one complete website or one focused UI/UX sprint, scoped in kickoff.',
      },
      {
        q: 'Do you support bilingual delivery?',
        a: 'Yes. We can ship Chinese first and add English later, or launch both at once.',
      },
      {
        q: 'Why start from WeChat?',
        a: 'It is the fastest channel for local teams and high-frequency collaboration.',
      },
    ],
    contact: {
      title: 'Start with WeChat',
      body: 'Share your project type, timeline and budget. We usually reply within 24 hours.',
      hint: 'The current QR is a placeholder. Replace with your studio WeChat QR before launch.',
    },
    footer: 'Chance Design Studio · UI/UX · Brand · Web',
    casePage: {
      backLabel: 'Back to Home',
      challengeLabel: 'Challenge',
      approachLabel: 'Approach',
      impactLabel: 'Impact',
      ctaLabel: 'Talk on WeChat',
    },
  },
};

export function getCaseBySlug(locale: Locale, slug: string) {
  return studioContent[locale].cases.find((item) => item.slug === slug);
}
