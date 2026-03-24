import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import type { Locale } from '@/lib/studio-content';

export const metadata: Metadata = {
  title: 'chance design studio | UI/UX, Brand & Web',
  description:
    'chance design studio builds bilingual, conversion-focused UI/UX, brand systems and web experiences for growth-stage teams.',
  keywords: [
    'chance design studio',
    'UIUX',
    '品牌设计',
    'web design',
    'bilingual website',
    '设计工作室',
  ],
  openGraph: {
    title: 'chance design studio | UI/UX, Brand & Web',
    description:
      'Bilingual UI/UX, brand and web design studio focused on business conversion and practical delivery.',
    images: ['/assets/og-chance-studio.svg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'chance design studio | UI/UX, Brand & Web',
    description:
      'Bilingual UI/UX, brand and web design studio focused on business conversion and practical delivery.',
    images: ['/assets/og-chance-studio.svg'],
  },
};

type HomePageProps = {
  searchParams: Promise<{ lang?: string }>;
};

function normalizeLocale(raw?: string): Locale {
  return raw === 'en' ? 'en' : 'zh';
}

export default async function Home({ searchParams }: HomePageProps) {
  const query = await searchParams;
  const initialLocale = normalizeLocale(query.lang);

  return <HomeClient initialLocale={initialLocale} />;
}
