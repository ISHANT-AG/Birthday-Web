import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Birthday, Divya! 🎉",
  description: "Wishing a very Happy Birthday to Divya! A playful, cheerful birthday celebration website created with warm wishes.",
  openGraph: {
    title: "Happy Birthday, Divya! 🎉",
    description: "Wishing a very Happy Birthday to Divya! A playful, cheerful birthday celebration site.",
    type: "website",
    locale: "en_US",
    siteName: "Happy Birthday Divya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Birthday, Divya! 🎉",
    description: "Wishing a very Happy Birthday to Divya! A playful, cheerful birthday celebration site.",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎈</text></svg>",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-sky-200 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}
