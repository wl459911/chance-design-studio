'use client';

import Image from 'next/image';
import styles from './home.module.css';

const serviceItems = [
  {
    index: '01',
    title: '产品策略与信息架构',
    desc: '梳理业务目标、用户任务与内容层级，先把“做什么”讲清楚。',
  },
  {
    index: '02',
    title: 'UI/UX 体验设计',
    desc: '以可用性和转化为核心，交付高保真界面、交互原型与设计规范。',
  },
  {
    index: '03',
    title: '视觉系统设计',
    desc: '统一界面视觉规则与品牌语调，让产品形象稳定且可扩展。',
  },
  {
    index: '04',
    title: 'Branding 与官网设计',
    desc: '从品牌叙事到网站落地，兼顾展示价值、信息清晰与商业转化。',
  },
  {
    index: '05',
    title: '前端落地与上线支持',
    desc: '把方案转成可运行页面，支持开发走查、发布与上线后优化。',
  },
];

const caseItems = [
  {
    title: 'Pengi Landing Experience',
    scope: 'Product Marketing · Pengi',
    desc: '重构首页价值叙事和 CTA 路径，强化首屏理解和行动转化。',
    metric: '首屏信息识别效率提升',
    image: '/assets/pengi-home-full.png',
    link: 'https://pengi.ai',
    linkLabel: '查看原站页面',
    featured: true,
  },
  {
    title: '斑马 AI 课 App 改版',
    scope: 'Mobile App · UIUX Job',
    desc: '优化课程信息层级与学习路径展示，增强任务查找和阅读效率。',
    metric: '内容聚焦度显著提升',
    image: '/assets/case-zebra-mycourse.png',
    link: '',
    linkLabel: '来自 UIUX 作品集',
  },
  {
    title: '口语课老师端平台',
    scope: 'SaaS Dashboard · UIUX Job',
    desc: '搭建外教课程管理工作台，统一列表结构和课程状态表达。',
    metric: '排课与追踪效率提升',
    image: '/assets/case-oral-teacher.png',
    link: '',
    linkLabel: '来自 UIUX 作品集',
  },
  {
    title: '出行 App 体验优化',
    scope: 'Consumer App · UIUX Job',
    desc: '围绕会员体系重构信息模块和操作路径，降低高频任务操作成本。',
    metric: '关键功能触达率提升',
    image: '/assets/case-travel-analysis.png',
    link: '',
    linkLabel: '来自 UIUX 作品集',
  },
];

export default function HomeClient() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <div className={styles.logo}>chance design studio</div>
          <nav className={styles.nav}>
            <a href="#about">关于</a>
            <a href="#services">服务</a>
            <a href="#cases">案例</a>
            <a href="#contact">联系</a>
          </nav>
        </div>
      </header>

      <section className={`${styles.container} ${styles.hero}`}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>product design · branding · web</p>
          <h1 className={styles.title}>把复杂业务变成清晰、可转化的体验</h1>
          <p className={styles.subtitle}>
            我们不是只做视觉稿，而是从策略、结构到上线交付完整负责。
            让产品表达更一致，让用户路径更顺畅，让设计结果能转化为真实业务价值。
          </p>
          <div className={styles.heroActions}>
            <a href="#contact" className={styles.buttonPrimary}>
              START A PROJECT
            </a>
            <a href="#cases" className={styles.buttonGhost}>
              查看案例
            </a>
          </div>
          <div className={styles.badges}>
            <span>UI/UX</span>
            <span>Visual System</span>
            <span>Branding</span>
            <span>Web Delivery</span>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroImageMain}>
            <Image src="/assets/pengi-home-full.png" alt="Pengi hero" width={1280} height={720} />
          </div>
          <div className={styles.heroImageSmall}>
            <Image src="/assets/case-zebra-mycourse.png" alt="Zebra app case" width={1280} height={720} />
          </div>
          <div className={styles.heroImageTag}>Real Product Cases</div>
        </div>
      </section>

      <section id="about" className={`${styles.container} ${styles.section}`}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionTag}>About</p>
          <h2 className={styles.sectionTitle}>一个把策略和设计一起交付的团队</h2>
        </div>
        <div className={styles.aboutGrid}>
          <article className={styles.aboutCard}>
            <p className={styles.aboutLead}>
              团队分布在北京、深圳与湾区，覆盖产品、品牌、视觉与前端。
            </p>
            <p className={styles.aboutText}>
              我们坚持“结构优先，视觉增强”的工作方法：先解决信息和流程问题，再建立可扩展的视觉系统。
              对增长团队来说，这意味着更快落地、更少返工、更稳定的体验质量。
            </p>
          </article>
          <div className={styles.aboutStats}>
            <div>
              <p className={styles.statValue}>3-6 周</p>
              <p className={styles.statLabel}>常规 Sprint 周期</p>
            </div>
            <div>
              <p className={styles.statValue}>24h</p>
              <p className={styles.statLabel}>首次沟通响应</p>
            </div>
            <div>
              <p className={styles.statValue}>CN + EN</p>
              <p className={styles.statLabel}>双语项目交付</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.servicesBlock}>
        <div className={`${styles.container} ${styles.section}`}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionTagLight}>Core Services</p>
            <h2 className={styles.sectionTitleLight}>服务核心</h2>
          </div>
          <div className={styles.serviceGrid}>
            {serviceItems.map((item) => (
              <article key={item.title} className={styles.serviceCard}>
                <p className={styles.serviceIndex}>{item.index}</p>
                <h3 className={styles.serviceTitle}>{item.title}</h3>
                <p className={styles.serviceDesc}>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className={`${styles.container} ${styles.section}`}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionTag}>Case Studies</p>
          <h2 className={styles.sectionTitle}>精选案例</h2>
          <p className={styles.caseHint}>当前展示 1 个 Pengi 案例 + 3 个 UIUX Job 案例。</p>
        </div>
        <div className={styles.caseGrid}>
          {caseItems.map((item) => (
            <article key={item.title} className={`${styles.caseCard} ${item.featured ? styles.caseFeatured : ''}`}>
              <div className={styles.caseImageWrap}>
                <Image src={item.image} alt={item.title} width={1280} height={720} className={styles.caseImage} />
              </div>
              <div className={styles.caseBody}>
                <p className={styles.caseScope}>{item.scope}</p>
                <h3 className={styles.caseTitle}>{item.title}</h3>
                <p className={styles.caseDesc}>{item.desc}</p>
                <p className={styles.caseMetric}>{item.metric}</p>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer" className={styles.caseLink}>
                    {item.linkLabel}
                  </a>
                ) : (
                  <span className={styles.caseFrom}>{item.linkLabel}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className={`${styles.container} ${styles.section}`}>
        <div className={styles.contactWrap}>
          <article className={styles.contactMain}>
            <p className={styles.sectionTag}>Contact</p>
            <h2 className={styles.sectionTitle}>聊聊你的下一个项目</h2>
            <p className={styles.contactMail}>wl459911@gmail.com</p>
            <p className={styles.contactText}>
              可以直接发邮件说明项目背景、目标、时间线；也欢迎微信沟通，我们会尽快回复。
            </p>
          </article>
          <article className={styles.contactQr}>
            <Image src="/assets/chance-wechat-qr.png" alt="WeChat QR" width={240} height={240} className={styles.qr} />
            <p className={styles.qrText}>WeChat / 18522385534</p>
          </article>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>CHANCE DESIGN STUDIO © 2026 · Designed for clarity and intent.</div>
      </footer>
    </main>
  );
}
