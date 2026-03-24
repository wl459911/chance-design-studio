'use client';

import Image from 'next/image';
import styles from './home.module.css';

const coreServices = [
  {
    title: '产品策略与信息架构',
    desc: '从业务目标和用户心智出发，梳理产品结构、关键路径和优先级。',
  },
  {
    title: 'UI/UX 体验设计',
    desc: '以可用性和转化为中心，交付高保真界面、交互原型与设计规范。',
  },
  {
    title: '视觉系统与品牌表达',
    desc: '统一品牌识别、视觉语言和内容表达，建立可延展的品牌资产。',
  },
  {
    title: 'Branding 与官网设计',
    desc: '构建品牌官网叙事，兼顾视觉气质、信息清晰与商业转化。',
  },
  {
    title: '前端落地与交付支持',
    desc: '把设计变成可上线页面，支持开发走查、发布和上线后迭代。',
  },
];

const caseStudies = [
  {
    title: 'Pengi Landing Experience',
    scope: 'Product Marketing · UX Writing',
    detail:
      '重构首页价值叙事与转化路径，用清晰的信息层级承接产品能力与用户预期。',
    metric: '首屏信息识别效率提升',
    image: '/assets/pengi-home-full.png',
    link: 'https://pengi.ai',
    linkLabel: '查看原站页面',
  },
  {
    title: '斑马 AI 课 App 改版',
    scope: 'Mobile App · UI/UX Redesign',
    detail:
      '重构课程首页与学习路径表达，优化信息层级和内容卡片，提高用户浏览与选择效率。',
    metric: '学习路径可读性与内容聚焦度提升',
    image: '/assets/case-zebra-mycourse.png',
    link: '',
    linkLabel: '来自 UIUX 作品集',
  },
  {
    title: '口语课老师端平台',
    scope: 'SaaS Platform · Dashboard UX',
    detail:
      '为外教课堂管理场景搭建课程展示与评价工作台，统一列表结构，降低管理成本。',
    metric: '教师排课与课程追踪效率提升',
    image: '/assets/case-oral-teacher.png',
    link: '',
    linkLabel: '来自 UIUX 作品集',
  },
  {
    title: '出行 App 体验优化',
    scope: 'Consumer App · Interaction Upgrade',
    detail:
      '围绕会员体系与核心操作路径进行页面重构，强化功能分层与高频操作效率。',
    metric: '关键功能触达效率与页面理解度提升',
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
        <p className={styles.eyebrow}>product design · branding · web</p>
        <h1 className={styles.title}>用清晰设计解决复杂业务问题</h1>
        <p className={styles.subtitle}>
          Chance Design Studio 专注于产品体验设计、视觉系统与商业官网落地。
          我们把策略、设计与交付串成同一条线，让每次设计决策都有业务价值。
        </p>
        <div className={styles.heroActions}>
          <a href="#contact" className={styles.buttonPrimary}>
            START A PROJECT
          </a>
          <a href="#cases" className={styles.buttonSecondary}>
            查看案例
          </a>
        </div>
      </section>

      <section id="about" className={`${styles.container} ${styles.section}`}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionTag}>About</p>
          <h2 className={styles.sectionTitle}>关于我们</h2>
        </div>
        <div className={styles.aboutGrid}>
          <article className={styles.aboutCard}>
            <p className={styles.aboutLead}>
              团队分布在北京、深圳与湾区，
              由产品设计师、品牌设计师与前端开发协作交付。
            </p>
            <p className={styles.aboutText}>
              我们坚持“结构先于装饰”的方法论：先把信息和流程讲清，再做视觉表达与品牌放大。
              适合正在增长阶段、需要“设计 + 落地”一体化支持的团队。
            </p>
          </article>
          <article className={styles.statsCard}>
            <div>
              <p className={styles.statValue}>3-6 周</p>
              <p className={styles.statLabel}>常规 UI/UX Sprint 周期</p>
            </div>
            <div>
              <p className={styles.statValue}>24h</p>
              <p className={styles.statLabel}>首次需求回复时间</p>
            </div>
            <div>
              <p className={styles.statValue}>CN + EN</p>
              <p className={styles.statLabel}>双语设计与官网交付</p>
            </div>
          </article>
        </div>
      </section>

      <section id="services" className={`${styles.container} ${styles.section}`}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionTag}>Core Services</p>
          <h2 className={styles.sectionTitle}>服务核心</h2>
        </div>
        <div className={styles.serviceGrid}>
          {coreServices.map((item) => (
            <article key={item.title} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{item.title}</h3>
              <p className={styles.serviceDesc}>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="cases" className={`${styles.container} ${styles.section}`}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionTag}>Case Studies</p>
          <h2 className={styles.sectionTitle}>精选案例</h2>
          <p className={styles.sectionHint}>案例包含 1 个 Pengi 项目与 3 个 UIUX 作品集项目。</p>
        </div>
        <div className={styles.caseGrid}>
          {caseStudies.map((item) => (
            <article key={item.title} className={styles.caseCard}>
              <div className={styles.caseImageWrap}>
                <Image src={item.image} alt={item.title} width={1280} height={720} className={styles.caseImage} />
              </div>
              <div className={styles.caseBody}>
                <p className={styles.caseScope}>{item.scope}</p>
                <h3 className={styles.caseTitle}>{item.title}</h3>
                <p className={styles.caseDetail}>{item.detail}</p>
                <p className={styles.caseMetric}>{item.metric}</p>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer" className={styles.caseLink}>
                    {item.linkLabel}
                  </a>
                ) : (
                  <span className={styles.caseFootnote}>{item.linkLabel}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className={`${styles.container} ${styles.section}`}>
        <div className={styles.contactWrap}>
          <article className={styles.contactCard}>
            <p className={styles.sectionTag}>Contact</p>
            <h2 className={styles.sectionTitle}>联系我们</h2>
            <p className={styles.contactMail}>wl459911@gmail.com</p>
            <p className={styles.contactText}>合作咨询可直接微信，或发邮件描述项目目标、时间线与预期范围。</p>
          </article>
          <article className={styles.qrCard}>
            <Image src="/assets/chance-wechat-qr.png" alt="WeChat QR" width={240} height={240} className={styles.qr} />
            <p className={styles.qrText}>WeChat / 18522385534</p>
          </article>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>CHANCE DESIGN STUDIO © 2026</div>
      </footer>
    </main>
  );
}
