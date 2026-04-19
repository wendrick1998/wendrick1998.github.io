import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://wendrick1998.github.io";

export const metadata: Metadata = {
  title: "iBlu Store — iPhones Originais com Garantia e Loja Física | Blumenau",
  description:
    "Compre iPhones originais com garantia, atendimento via WhatsApp e loja física em Blumenau. Aparelhos revisados e testados. Desde 2013.",
  keywords: [
    "iPhone Blumenau",
    "iPhone original",
    "loja iPhone",
    "comprar iPhone",
    "iPhone garantia",
    "iBlu Store",
    "assistência técnica iPhone",
    "iPhone seminovo Blumenau",
    "assistência Apple Blumenau",
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "iBlu Store — iPhones Originais com Garantia | Blumenau",
    description:
      "Atendimento rápido via WhatsApp. Aparelhos revisados. Compra segura. Loja física em Blumenau desde 2013.",
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "iBlu Store",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "iBlu Store — iPhones Originais em Blumenau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iBlu Store — iPhones Originais | Blumenau",
    description: "Aparelhos revisados, com garantia e atendimento via WhatsApp.",
    images: [`${siteUrl}/og-image.png`],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-sans)] bg-[#060B18] text-white">
        {children}
      </body>
    </html>
  );
}
