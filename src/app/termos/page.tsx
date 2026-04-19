import { STORE } from "@/lib/constants";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Termos de Uso — ${STORE.name}`,
  description: "Termos de uso e condições gerais da iBlu Store.",
};

export default function Termos() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Link
          href="/"
          className="text-sm text-blue-300/60 hover:text-white transition-colors"
        >
          &larr; Voltar ao site
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-white">
          Termos de Uso
        </h1>
        <p className="mt-2 text-sm text-blue-200/45">
          Última atualização: 19/04/2025
        </p>

        <div className="mt-8 space-y-6 text-blue-100/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white">
              1. Sobre este site
            </h2>
            <p className="mt-2">
              Este site tem caráter informativo e tem como objetivo apresentar os
              produtos e serviços disponíveis na {STORE.name}.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. Atendimento e vendas
            </h2>
            <p className="mt-2">
              O atendimento e a finalização das vendas são realizados
              exclusivamente via WhatsApp. Este site não realiza vendas online
              diretas nem processa pagamentos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              3. Produtos e disponibilidade
            </h2>
            <p className="mt-2">
              Os preços, condições e disponibilidade dos produtos podem variar
              sem aviso prévio. Para informações atualizadas, entre em contato
              pelo WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. Propriedade intelectual
            </h2>
            <p className="mt-2">
              Todo o conteúdo deste site, incluindo textos, imagens e design, é
              de propriedade da {STORE.name} e está protegido por leis de
              propriedade intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              5. Limitação de responsabilidade
            </h2>
            <p className="mt-2">
              As informações apresentadas neste site são fornecidas &ldquo;como
              estão&rdquo;. A {STORE.name} se esforça para manter as informações
              atualizadas, mas não garante a precisão completa em todos os
              momentos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              6. Contato
            </h2>
            <p className="mt-2">
              {STORE.name}
              <br />
              {STORE.address}, {STORE.city}, {STORE.cep}
              <br />
              WhatsApp: {STORE.phone}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
