"use client";

import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "./icons";
import { useEffect, useState } from "react";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroEnd = window.innerHeight * 0.8;
      const footerStart = document.body.scrollHeight - window.innerHeight * 2;
      const y = window.scrollY;
      setVisible(y > heroEnd && y < footerStart);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden transition-all duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div
        className="px-4 py-3"
        style={{
          background: "rgba(6,11,24,0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer flex w-full items-center justify-center gap-2.5 rounded-full bg-[#075E54] py-3.5 font-bold text-white transition-all hover:bg-[#128C7E] active:scale-[0.98]"
          style={{ boxShadow: "0 0 24px rgba(7,94,84,0.3)" }}
        >
          <WhatsAppIcon className="h-5 w-5" />
          Ver modelos disponíveis
        </a>
      </div>
    </div>
  );
}
