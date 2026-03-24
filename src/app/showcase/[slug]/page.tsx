import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getShowcaseBySlug, showcaseItems } from '@/lib/showcase-data';
import styles from './showcase.module.css';

type ShowcasePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return showcaseItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ShowcasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getShowcaseBySlug(slug);

  if (!item) {
    return { title: 'Showcase Not Found' };
  }

  return {
    title: `${item.title} | Chance Design Studio`,
    description: item.desc,
  };
}

export default async function ShowcaseDetailPage({ params }: ShowcasePageProps) {
  const { slug } = await params;
  const item = getShowcaseBySlug(slug);

  if (!item) notFound();

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/#cases" className={styles.back}>
            ← 返回案例列表
          </Link>
          <p className={styles.scope}>{item.scope}</p>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
          <p className={styles.metric}>{item.metric}</p>
          <div className={styles.actions}>
            {item.sourceUrl && (
              <a href={item.sourceUrl} target="_blank" rel="noreferrer" className={styles.primaryBtn}>
                访问项目链接
              </a>
            )}
            {item.pdfUrl && (
              <a href={item.pdfUrl} target="_blank" rel="noreferrer" className={styles.ghostBtn}>
                打开 PDF 全文
              </a>
            )}
          </div>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.coverWrap}>
          <Image src={item.image} alt={item.title} width={3072} height={1728} className={styles.cover} />
        </div>
      </section>

      <section className={`${styles.container} ${styles.content}`}>
        <article className={styles.card}>
          <h2>Challenge</h2>
          <p>{item.challenge}</p>
        </article>
        <article className={styles.card}>
          <h2>Approach</h2>
          <p>{item.approach}</p>
        </article>
        <article className={styles.card}>
          <h2>Impact</h2>
          <p>{item.impact}</p>
        </article>
      </section>

      {item.pdfUrl && (
        <section className={`${styles.container} ${styles.pdfSection}`}>
          <div className={styles.pdfHead}>
            <h2>PDF Showcase</h2>
            <a href={item.pdfUrl} target="_blank" rel="noreferrer" className={styles.ghostBtn}>
              新窗口查看
            </a>
          </div>
          <iframe src={item.pdfUrl} title={`${item.title} PDF`} className={styles.pdfFrame} />
        </section>
      )}
    </main>
  );
}
