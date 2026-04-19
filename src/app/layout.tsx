import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

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
  ],
  openGraph: {
    title: "iBlu Store — iPhones Originais com Garantia e Loja Física",
    description:
      "Atendimento rápido via WhatsApp. Aparelhos revisados. Compra segura. Loja física em Blumenau desde 2013.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
