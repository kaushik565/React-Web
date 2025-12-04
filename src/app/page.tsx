import InteractivePresentation from '@/components/InteractivePresentation';
import type { Metadata } from 'next';
import { reportWebVitals } from '@/lib/web-vitals';

export const metadata: Metadata = {
  title: "Automatic QR Scanning JIG | Batch Mix-up Prevention",
};

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Automatic QR Scanning JIG",
            description: "Interactive presentation showcasing the Automatic Cartridge Testing JIG (ACTJ) for eliminating batch mix-ups in pharmaceutical production",
            url: "https://www.qadashboard.site",
            applicationCategory: "BusinessApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            }
          }),
        }}
      />
      <InteractivePresentation />
    </>
  );
}
