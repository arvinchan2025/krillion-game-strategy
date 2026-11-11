import type {Metadata, Viewport} from "next";
import "./globals.css";
import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {AdSenseScript} from "@/components/ads/AdSenseScript";
import {GoogleAnalytics} from "@/components/analytics/GoogleAnalytics";
import {siteConfig} from "@/lib/site";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {default: "Krillion Guide – Tips, Rules & Strategies", template: "%s | Krillion Guide"},
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {canonical: "/"},
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description
  },
  robots: {index: true, follow: true}
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061824"
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
    <body className="min-h-screen antialiased">
    <AdSenseScript/>
    <GoogleAnalytics/>
    <Header/>
    <main>{children}</main>
    <Footer/>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-R23Y0Z9XSP"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_title: document.title,
              page_location: window.location.href,
              anonymize_ip: true,
              allow_google_signals: true,
              allow_ad_personalization_signals: false
            });
          `}
    </Script>
    </body>
    </html>
  );
}
