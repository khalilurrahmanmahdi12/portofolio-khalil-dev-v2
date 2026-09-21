import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KHALIL DEV | Software Engineer - Full Stack Developer",
  description:
    "Portfolio KHALIL DEV, Software Engineer - Full Stack Developer dengan fokus Next.js, backend architecture, database performance, dan cloud deployment.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
