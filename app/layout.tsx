import type { Metadata } from "next";
import { Cormorant, Figtree } from "next/font/google";
import "./globals.css";
import { absoluteUrl, siteConfig } from "./seo";

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
      {
        url: "/avatar.webp",
        type: "image/webp",
      },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (function() {
      try {
        var savedTheme = localStorage.getItem("theme");
        var theme = savedTheme === "light" || savedTheme === "dark"
          ? savedTheme
          : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
        document.documentElement.dataset.theme = theme;
      } catch (_) {
        document.documentElement.dataset.theme = "dark";
      }
    })();
  `;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    jobTitle: "Full-Stack Software Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Full-stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "AI Engineering",
      "Retrieval-Augmented Generation",
      "Enterprise Systems",
    ],
    mainEntityOfPage: absoluteUrl("/"),
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${figtree.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
