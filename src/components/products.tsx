"use client";

import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsAppIcon, SmartphoneIcon, LaptopIcon, HeadphonesIcon, WrenchIcon } from "./icons";
import { useInView } from "@/hooks/use-in-view";
import { useSpotlight } from "@/hooks/use-spotlight";

const categories = [
  {
    title: "iPhones",
    description: "Modelos revisados e prontos para uso",
    items: ["iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15"],
    price: "A partir de R$ 1.499",
    icon: SmartphoneIcon,
    span: "sm:col-span-2",
    accent: "#4A9BD9",
  },
  {
    title: "iPad & MacBook",
    description: "Tablets e notebooks Apple com garantia.",
    items: [],
    price: "Consulte valores",
    icon: LaptopIcon,
    span: "",
    accent: "#34A853",
  },
  {
    title: "Acessórios",
    description: "Capinhas, carregadores, fones e mais.",
    items: [],
    price: "Consulte valores",
    icon: HeadphonesIcon,
    span: "",
    accent: "#FBBF24",
  },
  {
    title: "Assistência Técnica",
    description: "Manutenção especializada para dispositivos Apple.",
    items: [],
    price: "Orçamento gratuito",
    icon: WrenchIcon,
    span: "sm:col-span-2",
    accent: "#F87171",
  },
];

export function Products() {
  const { ref, inView } = useInView();
  const { containerRef, handleMouseMove } = useSpotlight();

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28"
      style={{
        background: "linear-gradient(180deg, #0c1e3a 0%, #0f2440 50%, #0c1e3a 100%)",
      }}
    >
      <div className="section-divider" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className={`text-center ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4A9BD9]">
            Nossos Produtos
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
            O que você encontra aqui
          </h2>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5"
        >
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`glow-card p-6 sm:p-8 ${cat.span} ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: inView ? `${(i + 1) * 100}ms` : undefined }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: `${cat.accent}12` }}
                  >
                    <div style={{ color: cat.accent }}>
                      <cat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-blue-200/55">{cat.description}</p>
                  </div>
                </div>

                {cat.items.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.06] px-4 py-1.5 text-sm font-medium text-blue-200/70 transition-all duration-300 hover:border-[#4A9BD9]/30 hover:text-white hover:bg-[#4A9BD9]/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                <p
                  className="mt-4 text-sm font-semibold"
                  style={{ color: cat.accent }}
                >
                  {cat.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center ${inView ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: inView ? "600ms" : undefined }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-2.5 rounded-full bg-[#075E54] px-7 py-3.5 font-bold text-white transition-all duration-300 hover:bg-[#128C7E] hover:scale-[1.02] active:scale-100"
            style={{ boxShadow: "0 0 30px rgba(7,94,84,0.25)" }}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Consultar disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
