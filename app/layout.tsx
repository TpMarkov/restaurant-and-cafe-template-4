import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harbor & Oak — Modern Dining Template",
  description:
    "Harbor & Oak — a premium, modern restaurant template focused on atmospheric storytelling and bold brand identity.",
  keywords: "restaurant, dining, modern, premium, template",
  openGraph: {
    title: "Harbor & Oak — Modern Dining Template",
    description: "A modern, atmospheric restaurant template.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Merriweather:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
