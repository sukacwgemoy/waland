import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lexend } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import App from "@/components/app";
import { ThemeProvider } from "@/components/theme-provider";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: {
    template: "%s | CS AI - Customer Service AI 24/7",
    default:
      "CS AI - Customer Service WhatsApp AI 24/7 Cepat, Cerdas & Hemat Biaya",
  },
  description:
    "Tingkatkan pelayanan pelanggan Anda dengan CS AI yang mampu menjawab otomatis, akurat, dan langsung merespon tanpa menunggu admin online. Bekerja nonstop 24 jam.",
  keywords: [
    "CS AI",
    "Customer Service AI",
    "WhatsApp AI",
    "Chatbot WhatsApp",
    "AI Customer Service",
    "Automasi CS",
    "WhatsApp Bot Indonesia",
  ],
  authors: [{ name: "Ahmad Aziz" }],
  creator: "Ahmad Aziz",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://csai.my.id",
    title: "CS AI - Customer Service WhatsApp AI 24/7",
    description:
      "Tingkatkan pelayanan pelanggan dengan CS AI yang bekerja 24/7. Respon instan, handover otomatis, unlimited chat.",
    siteName: "CS AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "CS AI - Customer Service WhatsApp AI 24/7",
    description:
      "CS AI yang mampu menjawab otomatis, akurat, dan langsung merespon tanpa menunggu admin online.",
  },
};

const fontCode = localFont({
  src: "../assets/fonts/GeistMonoVF.woff2",
  variable: "--font-code",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/csai-icon.svg" />
        <link rel="alternate icon" href="/csai-icon.svg" />
        <link rel="shortcut icon" href="/csai-icon.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('ui-theme') || 'dark';
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen antialiased font-lexend bg-background",
          lexend.variable,
          fontCode.variable
        )}
      >
        <ThemeProvider defaultTheme="dark">
          <App>{children}</App>
        </ThemeProvider>
      </body>
    </html>
  );
}
