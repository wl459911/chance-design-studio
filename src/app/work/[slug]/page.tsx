import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCaseBySlug, studioContent } from '@/lib/studio-content';
import styles from '@/app/studio.module.css';

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return studioContent.zh.cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const zhCase = getCaseBySlug('zh', slug);

  if (!zhCase) {
    return {
      title: 'Case Not Found | Chance Design Studio',
    };
  }

  return {
    title: `${zhCase.title} | Chance Design Studio`,
    description: zhCase.detail,
  };
}

export default async function CaseDetailPage({ params }: CasePageProps) {
  const { slug } = await params;
  const locale = 'zh';
  const t = studioContent[locale];
  const caseItem = getCaseBySlug(locale, slug);

  if (!caseItem) {
    notFound();
  }

  return (
    <main className={styles.casePage}>
      <section className={`${styles.container} ${styles.caseHero}`}>
        <Link href={`/?lang=${locale}#work`} className={styles.backLink}>
          ← {t.casePage.backLabel}
        </Link>
        <p className={styles.kicker}>{caseItem.scope}</p>
        <h1 className={styles.title}>{caseItem.title}</h1>
        <p className={styles.subtitle}>{caseItem.detail}</p>
        <span className={styles.caseMetricLarge}>{caseItem.metric}</span>
      </section>

      <section className={`${styles.container} ${styles.section}`}>
        <div className={styles.caseBodyGrid}>
          <article className={styles.card}>
            <h2>{t.casePage.challengeLabel}</h2>
            <p className={styles.body}>{caseItem.challenge}</p>
          </article>
          <article className={styles.card}>
            <h2>{t.casePage.approachLabel}</h2>
            <p className={styles.body}>{caseItem.approach}</p>
          </article>
          <article className={styles.card}>
            <h2>{t.casePage.impactLabel}</h2>
            <p className={styles.body}>{caseItem.impact}</p>
          </article>
        </div>
        <div className={styles.caseCta}>
          <Link href={`/?lang=${locale}#contact`} className={styles.buttonPrimary}>
            {t.casePage.ctaLabel}
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>{t.footer}</div>
      </footer>
    </main>
  );
}
