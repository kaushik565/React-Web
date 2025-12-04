import InteractivePresentation from '@/components/InteractivePresentation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Automatic QR Scanning JIG | Batch Mix-up Prevention",
};

export const dynamic = 'force-dynamic';

export default function Home() {
  return <InteractivePresentation />;
}
