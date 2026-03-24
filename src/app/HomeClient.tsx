'use client';

import Image from 'next/image';
import homeStyles from './home.module.css';
import { studioContent } from '@/lib/studio-content';

const selectedCases = studioContent.zh.cases.slice(0, 4);

const caseCoverPositions = [
  'center 14%',
  '80% 20%',
  '16% 72%',
  '82% 74%',
];

export default function HomeClient() {
  return (
    <main className={homeStyles.page}>
      <header className={homeStyles.header}>
        <div className={`${homeStyles.container} ${homeStyles.headerInner}`}>
          <div className={homeStyles.logo}>chance design studio</div>
          <nav className={homeStyles.nav}>
            <a href="#about">关于我们</a>
            <a href="#services">服务核心</a>
            <a href="#cases">精选案例</a>
            <a href="#pricing">咨询定价</a>
            <a href="#contact">联系我们</a>
          </nav>
        </div>
      </header>

      <section className={`${homeStyles.container} ${homeStyles.hero}`}>
        <div>
          <p className={homeStyles.eyebrow}>chance design studio 产品设计工作室</p>
          <h1 className={homeStyles.title}>专注清晰、可用的产品设计工作室</h1>
          <p className={homeStyles.subtitle}>
            我们通过信息结构梳理、流程路径优化和关键决策表达，把复杂业务还原成可理解、可执行、可增长的产品体验。
          </p>
          <div className={homeStyles.heroActions}>
            <a href="#contact" className={homeStyles.buttonPrimary}>
              START A PROJECT
            </a>
            <a href="#cases" className={homeStyles.buttonGhost}>
              查看案例
            </a>
          </div>
        </div>
        <div className={homeStyles.heroVisual}>
          <Image
            src="/assets/profile-cases-reference.png"
            alt="Chance Design Studio selected cases"
            width={1280}
            height={1200}
            priority
          />
        </div>
      </section>

      <section id="about" className={`${homeStyles.container} ${homeStyles.section}`}>
        <div className={homeStyles.sectionHead}>
          <p className={homeStyles.sectionTag}>About The Archive</p>
          <h2 className={homeStyles.sectionTitle}>关于我们</h2>
        </div>
        <div className={homeStyles.aboutWrap}>
          <article className={homeStyles.aboutCard}>
            <p className={homeStyles.aboutLead}>
              我们的团队分布在北京、深圳与湾区，
              汇聚了具备全球视野的资深设计师与系统架构师。
            </p>
            <p className={homeStyles.aboutText}>
              Chance 的核心哲学源于对复杂性的深度解构。我们相信，卓越设计不在于装饰，而在于将复杂的信息架构转化为直觉般的交互流向。
            </p>
            <div className={homeStyles.miniGrid}>
              <div className={homeStyles.miniCard}>
                每一个决策都有据可依，每一处细节都服务于最终的可用性。
              </div>
              <div className={homeStyles.miniCard}>
                我们跨越地域协作，为全球客户提供稳定且有深度的设计交付。
              </div>
            </div>
          </article>
          <div className={homeStyles.aboutImage}>
            <Image
              src="/assets/profile-about-reference.png"
              alt="Chance team profile reference"
              width={1280}
              height={1200}
            />
          </div>
        </div>
      </section>

      <section id="services" className={`${homeStyles.container} ${homeStyles.section}`}>
        <div className={homeStyles.sectionHead}>
          <p className={homeStyles.sectionTag}>Core Expertise</p>
          <h2 className={homeStyles.sectionTitle}>服务核心</h2>
        </div>
        <div className={homeStyles.cards3}>
          <article className={homeStyles.coreCard}>
            <h3 className={homeStyles.coreTitle}>信息结构梳理</h3>
            <p className={homeStyles.coreBody}>
              对杂乱无章的业务逻辑进行深度还原，重塑清晰的底层信息层级。
            </p>
          </article>
          <article className={homeStyles.coreCard}>
            <h3 className={homeStyles.coreTitle}>流程路径优化</h3>
            <p className={homeStyles.coreBody}>
              通过对用户心智模型的调研，消除操作摩擦，让体验更顺滑。
            </p>
          </article>
          <article className={homeStyles.coreCard}>
            <h3 className={homeStyles.coreTitle}>关键决策表达</h3>
            <p className={homeStyles.coreBody}>
              让设计辅助决策，用精准可视化语言降低团队认知分歧。
            </p>
          </article>
        </div>
      </section>

      <section className={`${homeStyles.container} ${homeStyles.section}`}>
        <div className={homeStyles.sectionHead}>
          <h2 className={homeStyles.sectionTitle}>业务领域</h2>
        </div>
        <div className={homeStyles.cards3}>
          <article className={homeStyles.industryCard}>
            <p className={homeStyles.industryEn}>Education</p>
            <h3 className={homeStyles.industryZh}>教育</h3>
          </article>
          <article className={homeStyles.industryCard}>
            <p className={homeStyles.industryEn}>Healthcare</p>
            <h3 className={homeStyles.industryZh}>医疗</h3>
          </article>
          <article className={homeStyles.industryCard}>
            <p className={homeStyles.industryEn}>Complex Systems</p>
            <h3 className={homeStyles.industryZh}>复杂产品系统</h3>
          </article>
        </div>
      </section>

      <section id="cases" className={`${homeStyles.container} ${homeStyles.section}`}>
        <div className={homeStyles.sectionHead}>
          <p className={homeStyles.sectionTag}>Selected Case Studies From The Archive</p>
          <h2 className={homeStyles.sectionTitle}>精选案例</h2>
        </div>
        <div className={homeStyles.caseGrid}>
          {selectedCases.map((item, idx) => (
            <article className={homeStyles.caseCard} key={item.slug}>
              <div className={homeStyles.caseImage}>
                <Image
                  src="/assets/profile-cases-reference.png"
                  alt={item.title}
                  width={1280}
                  height={1200}
                  style={{ objectPosition: caseCoverPositions[idx] }}
                />
              </div>
              <div className={homeStyles.caseBody}>
                <p className={homeStyles.caseMeta}>{item.scope}</p>
                <h3 className={homeStyles.caseTitle}>{item.title}</h3>
                <p className={homeStyles.caseDetail}>{item.detail}</p>
                <span className={homeStyles.caseMetric}>{item.metric}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className={`${homeStyles.container} ${homeStyles.section}`}>
        <div className={homeStyles.pricing}>
          <h2 className={homeStyles.pricingTitle}>设计咨询定价</h2>
          <p className={homeStyles.pricingSub}>透明的定价体系，为不同阶段的产品提供精准设计赋能。</p>
          <div className={homeStyles.pricingGrid}>
            <article className={homeStyles.priceCardDark}>
              <h3 className={homeStyles.priceLabel}>Core Consulting</h3>
              <p className={homeStyles.priceValue}>¥6,000 起</p>
              <ul className={homeStyles.priceList}>
                <li>信息架构梳理</li>
                <li>核心交互路径优化</li>
                <li>关键页面低保真原型</li>
              </ul>
            </article>
            <article className={homeStyles.priceCardLight}>
              <h3 className={homeStyles.priceLabel}>Full Product Design</h3>
              <p className={homeStyles.priceValue}>¥12k - 20k</p>
              <ul className={homeStyles.priceList}>
                <li>完整可执行设计规范</li>
                <li>高保真交互原型交付</li>
                <li>交付支持与走查</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className={`${homeStyles.container} ${homeStyles.section}`}>
        <div className={homeStyles.contact}>
          <article className={homeStyles.contactMain}>
            <p className={homeStyles.sectionTag}>Email Inquiry</p>
            <p className={homeStyles.contactEmail}>wl459911@gmail.com</p>
            <p className={homeStyles.contactNote}>准备好让您的产品重塑逻辑了吗？欢迎直接发邮件或加微信。</p>
            <div className={homeStyles.qrWrap}>
              <Image
                src="/assets/chance-wechat-qr.png"
                alt="Chance Design Studio WeChat QR"
                width={264}
                height={264}
              />
              <p className={homeStyles.contactNote}>WeChat / 18522385534</p>
            </div>
          </article>
          <article className={homeStyles.contactAside}>
            <p className={homeStyles.sectionTag}>Office Locations</p>
            <p className={homeStyles.contactEmail}>Beijing<br />Shenzhen<br />Bay Area</p>
            <div className={homeStyles.heroVisual}>
              <Image
                src="/assets/profile-contact-reference.png"
                alt="Contact style reference from studio profile"
                width={1280}
                height={1200}
              />
            </div>
          </article>
        </div>
      </section>

      <footer className={homeStyles.footer}>
        <div className={homeStyles.container}>CHANCE DESIGN STUDIO © 2026 · Crafted with precision for global products.</div>
      </footer>
    </main>
  );
}
