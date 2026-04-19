import { STORE } from "@/lib/constants";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Política de Privacidade — ${STORE.name}`,
  description: "Política de privacidade e proteção de dados da iBlu Store.",
};

export default function Privacidade() {
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
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-blue-200/45">
          Última atualização: 19/04/2025
        </p>

        <div className="mt-8 space-y-6 text-blue-100/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white">
              1. Informações que coletamos
            </h2>
            <p className="mt-2">
              Coletamos informações básicas fornecidas voluntariamente pelo
              usuário durante o contato via WhatsApp, como nome, número de
              telefone e preferências de produtos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. Uso das informações
            </h2>
            <p className="mt-2">
              Os dados coletados são utilizados exclusivamente para fins de
              atendimento, envio de informações sobre produtos e serviços, e
              finalização de vendas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              3. Cookies e tecnologias
            </h2>
            <p className="mt-2">
              Este site pode utilizar cookies para melhorar a experiência de
              navegação e coletar dados analíticos anônimos sobre o uso do site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. Compartilhamento de dados
            </h2>
            <p className="mt-2">
              Não compartilhamos seus dados pessoais com terceiros sem o seu
              consentimento prévio, exceto quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              5. Contato via WhatsApp
            </h2>
            <p className="mt-2">
              Ao iniciar uma conversa via WhatsApp através deste site, você
              concorda em fornecer seu número de telefone para fins de
              atendimento comercial. O atendimento e a finalização das vendas são
              realizados via WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              6. Seus direitos
            </h2>
            <p className="mt-2">
              Você tem o direito de solicitar a exclusão dos seus dados pessoais
              a qualquer momento, entrando em contato pelo WhatsApp{" "}
              {STORE.phone}.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              7. Consentimento
            </h2>
            <p className="mt-2">
              Ao utilizar este site, você concorda com a nossa política de
              privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              8. Contato
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
