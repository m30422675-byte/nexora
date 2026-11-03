import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora",
  description: "A Next.js + Prisma starter project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
