import type { Metadata } from "next";
import "./globals.css";

// next/font/google relies on Next's build-time font-optimization pipeline,
// which vinext (this project's Cloudflare-oriented dev/build tool) doesn't
// fully replicate: it either emits an absolute filesystem path for the
// woff2 (dev) or drops the @font-face block entirely (build). A plain
// Google Fonts stylesheet link works identically in both environments.
const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap";

export const metadata: Metadata = {
  title: "Evolv.IA | AI, marketing e automazioni per crescere",
  description:
    "Evolv.IA costruisce sistemi AI per acquisire clienti, qualificarli e gestirli con CRM, automazioni e dashboard operative.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Evolv.IA",
    description:
      "AI, marketing e automazioni per aziende che vogliono crescere con metodo.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Evolv.IA - AI, marketing e automazioni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evolv.IA",
    description:
      "AI, marketing e automazioni per aziende che vogliono crescere con metodo.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONT_HREF} />
      </head>
      <body>{children}</body>
    </html>
  );
}
