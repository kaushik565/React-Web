import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Automatic QR Scanning JIG | Batch Mix-up Prevention",
  description: "Interactive presentation showcasing the Automatic Cartridge Testing JIG (ACTJ) for eliminating batch mix-ups in pharmaceutical production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
