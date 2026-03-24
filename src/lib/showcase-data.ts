export type ShowcaseItem = {
  slug: string;
  title: string;
  scope: string;
  desc: string;
  metric: string;
  image: string;
  challenge: string;
  approach: string;
  impact: string;
  sourceLabel: string;
  sourceUrl?: string;
  pdfUrl?: string;
};

export const showcaseItems: ShowcaseItem[] = [
  {
    slug: 'pengi-landing-experience',
    title: 'Pengi Landing Experience',
    scope: 'Product Marketing · Pengi',
    desc: '重构首页价值叙事和 CTA 路径，强化首屏理解和行动转化。',
    metric: '首屏信息识别效率提升',
    image: '/assets/pengi1.jpg',
    challenge: '原页面内容密度较高，用户对产品价值和下一步动作的理解路径不够直接。',
    approach: '重排信息层级，先讲价值再讲功能，并将 CTA 放在最短决策路径上。',
    impact: '首屏阅读效率与转化路径清晰度显著提升，页面表达更聚焦增长目标。',
    sourceLabel: '查看原站页面',
    sourceUrl: 'https://pengi.ai',
  },
  {
    slug: 'zebra-app-redesign',
    title: '斑马 AI 课 App 改版',
    scope: 'Mobile App · UIUX Job',
    desc: '优化课程信息层级与学习路径展示，增强任务查找和阅读效率。',
    metric: '内容聚焦度显著提升',
    image: '/assets/zebra-ai-course.jpg',
    challenge: '课程入口多且信息混杂，用户在快速定位内容时存在阅读负担。',
    approach: '重构首页模块和课程卡片层级，引入更明确的视觉分区与路径提示。',
    impact: '课程浏览与选择效率提升，学习路径更直观，界面信息可读性更好。',
    sourceLabel: '来自 UIUX 作品集',
    pdfUrl: '/assets/portfolio-uiux-liuwen-main.pdf',
  },
  {
    slug: 'pengi-dashboard-experience',
    title: 'Pengi Dashboard Experience',
    scope: 'Platform Experience · Pengi',
    desc: '优化 Quick Start 与学习内容分区，强化高频任务入口与内容浏览节奏。',
    metric: '核心功能触达效率提升',
    image: '/assets/pengi-new.jpg',
    challenge: '页面模块增多后，学习任务与内容区块的优先级不够清晰。',
    approach: '重排内容层级，突出 Quick Start、Bookshelf 与奖励体系等关键模块。',
    impact: '用户更快进入学习路径，首页信息结构更清晰，浏览与操作效率更高。',
    sourceLabel: '访问 Pengi 官网',
    sourceUrl: 'https://pengi.ai',
  },
  {
    slug: 'didi-trip-experience',
    title: '滴滴出行 App 体验优化',
    scope: 'Mobility Product · UIUX Job',
    desc: '围绕会员体系重构信息模块和操作路径，降低高频任务操作成本。',
    metric: '核心功能触达效率提升',
    image: '/assets/case-travel-analysis.png',
    challenge: '业务升级后功能模块增多，原有界面难以承载新的会员与任务系统。',
    approach: '采用卡片化信息组织，重排核心入口，明确高频任务路径与视觉锚点。',
    impact: '用户对会员权益和核心功能的理解与触达更快，页面结构更清晰。',
    sourceLabel: '来自 PDF 作品集',
    pdfUrl: '/assets/portfolio-uiux-liuwen-main.pdf',
  },
];

export function getShowcaseBySlug(slug: string) {
  return showcaseItems.find((item) => item.slug === slug);
}
