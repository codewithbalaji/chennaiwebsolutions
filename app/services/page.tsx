import { Metadata } from 'next';
import Services from '@/components/services/Services';
import { site } from '@/app/site';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Web development and design services offered by Chennai Web Solutions',
  keywords: ['website design', 'website development', 'app development', 'SEO', 'e-commerce', 'digital marketing'],
  openGraph: {
    title: `Our Services | ${site.name}`,
    description: 'Explore our comprehensive range of digital services including website design, development, app development, SEO, e-commerce, and digital marketing.',
    url: `${site.url}/services`,
    siteName: site.name,
    images: [
      {
        url: `${site.url}/images/og/services.jpg`,
        width: 1200,
        height: 630,
        alt: 'Our Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: '/services',
  }
};

export default function ServicesPage() {
  return <Services />;
}
