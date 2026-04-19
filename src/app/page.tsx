import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TrustBlock } from "@/components/trust-block";
import { Products } from "@/components/products";
import { SocialProof } from "@/components/social-proof";
import { FAQ } from "@/components/faq";
import { Location } from "@/components/location";
import { CtaFinal } from "@/components/cta-final";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { StickyCta } from "@/components/sticky-cta";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <TrustBlock />
        <Products />
        <SocialProof />
        <FAQ />
        <Location />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFab />
      <StickyCta />
    </>
  );
}
