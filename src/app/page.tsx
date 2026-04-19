import { Hero } from "@/components/hero";
import { TrustBlock } from "@/components/trust-block";
import { Products } from "@/components/products";
import { Differentials } from "@/components/differentials";
import { SocialProof } from "@/components/social-proof";
import { HowItWorks } from "@/components/how-it-works";
import { CtaFinal } from "@/components/cta-final";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustBlock />
        <Products />
        <Differentials />
        <SocialProof />
        <HowItWorks />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
