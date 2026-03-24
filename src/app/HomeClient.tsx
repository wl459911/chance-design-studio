'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { studioContent, type Locale } from '@/lib/studio-content';
import styles from './studio.module.css';

export default function HomeClient({ initialLocale = 'zh' }: { initialLocale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const data = useMemo(() => studioContent[locale], [locale]);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <div className={styles.logo}>{data.nav.studio}</div>
          <nav className={styles.nav}>
            {data.nav.links.map((link) => (
              <a key={link.id} href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className={styles.langSwitch}>
            <button
              type="button"
              onClick={() => setLocale('zh')}
              className={`${styles.langButton} ${locale === 'zh' ? styles.langButtonActive : ''}`}
            >
              {data.nav.zh}
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`${styles.langButton} ${locale === 'en' ? styles.langButtonActive : ''}`}
            >
              {data.nav.en}
            </button>
          </div>
        </div>
      </header>

      <section className={`${styles.container} ${styles.hero}`}>
        <p className={styles.tagline}>{data.hero.tagline}</p>
        <h1 className={styles.title}>{data.hero.title}</h1>
        <p className={styles.subtitle}>{data.hero.subtitle}</p>
        <div className={styles.heroActions}>
          <a href="#contact" className={styles.buttonPrimary}>
            {data.hero.ctaWechat}
          </a>
          <a href="#work" className={styles.buttonSecondary}>
            {data.hero.ctaCases}
          </a>
        </div>
        <div className={styles.stats}>
          {data.stats.map((item) => (
            <div className={styles.stat} key={item.label}>
              <div className={styles.statValue}>{item.value}</div>
              <div className={styles.statLabel}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <h2 className={styles.sectionTitle}>{data.section.team}</h2>
        <div className={styles.grid}>
          {data.teamCards.map((member) => (
            <article className={styles.card} key={member.name}>
              <div className={styles.avatar}>{member.name.split(' ')[0]}</div>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.body}>{member.intro}</p>
              <p className={styles.dual}>{member.introZh}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className={`${styles.container} ${styles.section}`}>
        <h2 className={styles.sectionTitle}>{data.section.work}</h2>
        <p className={styles.sectionIntro}>{data.intros.work}</p>
        <div className={styles.grid}>
          {data.cases.map((item) => (
            <article className={styles.card} key={item.slug}>
              <p className={styles.kicker}>{item.scope}</p>
              <h3>{item.title}</h3>
              <p className={styles.body}>{item.detail}</p>
              <span className={styles.metric}>{item.metric}</span>
              <div className={styles.caseActionWrap}>
                <Link href={`/work/${item.slug}?lang=${locale}`} className={styles.caseAction}>
                  {locale === 'zh' ? '查看详情' : 'Read case'}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className={`${styles.container} ${styles.section}`}>
        <h2 className={styles.sectionTitle}>{data.section.services}</h2>
        <p className={styles.sectionIntro}>{data.intros.services}</p>
        <div className={styles.grid}>
          {data.services.map((service) => (
            <article className={styles.card} key={service.title}>
              <h3>{service.title}</h3>
              <p className={styles.body}>{service.desc}</p>
              <p className={styles.price}>{service.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className={`${styles.container} ${styles.section}`}>
        <h2 className={styles.sectionTitle}>{data.section.process}</h2>
        <p className={styles.sectionIntro}>{data.intros.process}</p>
        <div className={`${styles.grid} ${styles.process}`}>
          {data.process.map((item) => (
            <article className={`${styles.card} ${styles.processItem}`} key={item.title}>
              <h3>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <h2 className={styles.sectionTitle}>{data.section.testimonials}</h2>
        <div className={styles.grid}>
          {data.testimonials.map((item) => (
            <article className={styles.card} key={item.name}>
              <p className={styles.kicker}>{item.role}</p>
              <p className={styles.body}>“{item.text}”</p>
              <p className={styles.dual}>{item.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <h2 className={styles.sectionTitle}>{data.section.faq}</h2>
        <div className={styles.card}>
          {data.faq.map((item) => (
            <div className={styles.faqItem} key={item.q}>
              <div className={styles.faqQuestion}>{item.q}</div>
              <p className={styles.body}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className={`${styles.container} ${styles.section}`}>
        <h2 className={styles.sectionTitle}>{data.section.contact}</h2>
        <article className={`${styles.card} ${styles.contactBox}`}>
          <div>
            <h3>{data.contact.title}</h3>
            <p className={styles.body}>{data.contact.body}</p>
            <p className={styles.dual}>{data.contact.hint}</p>
          </div>
          <Image
            src="/assets/chance-wechat-qr.svg"
            alt="Chance Design Studio WeChat QR"
            width={190}
            height={190}
            className={styles.qr}
            priority
          />
        </article>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>{data.footer}</div>
      </footer>
    </main>
  );
}
