'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './home.module.css';
import { showcaseItems } from '@/lib/showcase-data';

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

const caseItems = showcaseItems;

export default function HomeClient() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <div className={styles.logo}>Chance Design Studio</div>
          <nav className={styles.nav}>
            <a href="#about">关于</a>
            <a href="#services">服务</a>
            <a href="#cases">案例</a>
            <a href="#contact">联系</a>
          </nav>
        </div>
      </header>

      <section className={`${styles.container} ${styles.hero}`}>
        <div className={styles.heroLayout}>
          <div className={styles.heroMain}>
            <p className={styles.heroStudioName}>Chance Design Studio</p>
            <p className={styles.eyebrow}>product design · uiux design · branding · web</p>
            <h1 className={styles.title}>
              我们善于把
              <span className={styles.titleGap} />
              复杂业务变成
              <br />
              <span className={styles.titleNoWrap}>清晰，可转化，可增长的体验。</span>
            </h1>
          </div>
          <div className={styles.heroAside}>
            <p className={styles.heroAsideText}>
              “我们不是只做视觉稿，而是从策略、结构到上线交付完整负责。
              让产品表达更一致，让用户路径更顺畅，让设计结果能转化为真实业务价值。
              ”
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
        </div>
      </section>

      <section id="about" className={`${styles.container} ${styles.section}`}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionTag}>About</p>
          <h2 className={styles.sectionTitle}>一个专注产品体验与品牌表达的设计团队</h2>
        </div>
        <div className={styles.aboutGrid}>
          <article className={styles.aboutCard}>
            <p className={styles.aboutLead}>
              Chance Design Studio 成立于 2019 年，base 北京 / 湾区，
              由一批长期服务全球产品团队的设计师共同创立。
            </p>
            <p className={styles.aboutText}>
              核心成员拥有加州艺术学院（California College of the Arts）、
              卡内基梅隆大学（Carnegie Mellon University）、
              皇家艺术学院（Royal College of Art）等设计与研究背景，长期参与复杂数字产品与品牌升级项目，
              擅长在高要求业务场景下把体验、视觉与商业目标整合成一套可执行方案。
            </p>
            <p className={styles.aboutText}>
              我们服务中国与海外客户，覆盖医疗健康、教育、金融、AI 与消费互联网等领域。
              交付范围从产品策略、UI/UX 到品牌系统与商业官网，强调设计质量、落地效率和长期一致性。
              目前已累计服务 120+ 客户与团队。
            </p>
            <div className={styles.aboutManifesto}>
              <div className={styles.manifestoItem}>
                <h3>Design with Business Context</h3>
                <p>以业务目标和真实用户行为为前提，避免脱离场景的视觉表达。</p>
              </div>
              <div className={styles.manifestoItem}>
                <h3>System over Screens</h3>
                <p>重视组件规则和一致性，让产品在迭代中依然保持稳定体验。</p>
              </div>
              <div className={styles.manifestoItem}>
                <h3>From Concept to Launch</h3>
                <p>从概念到上线保持连续协作，减少反复沟通和返工成本。</p>
              </div>
            </div>
          </article>
          <div className={styles.aboutSide}>
            <article className={styles.aboutNote}>
              <p className={styles.aboutNoteTitle}>合作流程 Collaboration Flow</p>
              <ol className={styles.aboutFlowList}>
                <li className={styles.aboutFlowItem}>
                  <span className={styles.aboutFlowIndex}>01</span>
                  <p className={styles.aboutFlowText}>明确业务目标与范围，先把优先级和方向定准。</p>
                </li>
                <li className={styles.aboutFlowItem}>
                  <span className={styles.aboutFlowIndex}>02</span>
                  <p className={styles.aboutFlowText}>按周推进关键页面与核心流程，保持可视化同步。</p>
                </li>
                <li className={styles.aboutFlowItem}>
                  <span className={styles.aboutFlowIndex}>03</span>
                  <p className={styles.aboutFlowText}>交付可落地设计稿、组件规范与开发对接说明。</p>
                </li>
              </ol>
            </article>
            <article className={styles.aboutFocus}>
              <p className={styles.aboutFocusTitle}>重点行业 Focus Industries</p>
              <div className={styles.focusTags}>
                <span>医疗健康 Healthcare</span>
                <span>教育 Education</span>
                <span>金融 Finance</span>
                <span>AI 产品 AI Product</span>
                <span>企业服务 SaaS</span>
                <span>消费互联网 Consumer Tech</span>
                <span>出海品牌 Global Growth</span>
                <span>跨境电商 E-commerce</span>
              </div>
            </article>
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
          <p className={styles.caseHint}>
            我们以真实业务目标为起点，聚焦教育科技、平台工具与消费产品的体验升级。
            以下案例展示从策略梳理到界面落地的完整设计能力。
          </p>
        </div>
        <div className={styles.caseGrid}>
          {caseItems.map((item) => (
            <article key={item.slug} className={styles.caseCard}>
              <div className={styles.caseImageWrap}>
                <Image src={item.image} alt={item.title} width={1280} height={720} className={styles.caseImage} />
              </div>
              <div className={styles.caseBody}>
                <p className={styles.caseScope}>{item.scope}</p>
                <h3 className={styles.caseTitle}>{item.title}</h3>
                <p className={styles.caseDesc}>{item.desc}</p>
                <p className={styles.caseMetric}>{item.metric}</p>
                <div className={styles.caseActions}>
                  <Link href={`/showcase/${item.slug}`} className={styles.caseViewBtn}>
                    查看
                  </Link>
                </div>
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
