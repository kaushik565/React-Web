import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Automatic QR Scanning JIG | Batch Mix-up Prevention",
  description: "Interactive presentation showcasing the Automatic Cartridge Testing JIG (ACTJ) for eliminating batch mix-ups in pharmaceutical production",
  keywords: "QR scanning, batch testing, pharmaceutical, cartridge testing, ACTJ, quality assurance",
  authors: [{ name: "QA Dashboard" }],
  metadataBase: new URL("https://www.qadashboard.site"),
  openGraph: {
    title: "Automatic QR Scanning JIG | Batch Mix-up Prevention",
    description: "Interactive presentation showcasing ACTJ technology",
    type: "website",
    url: "https://www.qadashboard.site",
    siteName: "QA Dashboard",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatic QR Scanning JIG",
    description: "Interactive presentation showcasing ACTJ technology",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
