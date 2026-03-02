"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function NewsletterSection() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "fr";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const t = locale === "en" ? {
    title: "- 10% off",
    subtitle: "on your first booking when you subscribe to the newsletter",
    placeholder: "your@email.com",
    emailLabel: "Email address",
    success: "Check your inbox!",
    cta: "Get 10% off",
    loading: "Sending…",
    errorSend: "Error sending.",
    errorNetwork: "Network error.",
  } : {
    title: "- 10% de réduction",
    subtitle: "sur votre première réservation en vous inscrivant à la newsletter",
    placeholder: "votre@email.com",
    emailLabel: "Adresse email",
    success: "Vérifiez votre boîte mail !",
    cta: "Profiter des 10%",
    loading: "Envoi…",
    errorSend: "Erreur lors de l'envoi.",
    errorNetwork: "Erreur réseau.",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || t.errorSend);
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg(t.errorNetwork);
    }
  };

  return (
    <section className="relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02]" aria-hidden />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F34FC7] font-black text-2xl md:text-3xl mb-2">
            {t.title}
          </p>
          <p className="text-white font-semibold text-lg md:text-xl mb-6">
            {t.subtitle}
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <input
              type="email"
              placeholder={t.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading" || status === "success"}
              className="w-full sm:max-w-xs px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F34FC7]/50 focus:border-[#F34FC7]/50 disabled:opacity-70"
              aria-label={t.emailLabel}
              required
            />
            {status === "success" ? (
              <p className="text-green-400 font-medium">{t.success}</p>
            ) : (
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand-gradient text-white font-bold hover:opacity-90 disabled:opacity-70 transition-colors text-center whitespace-nowrap"
              >
                {status === "loading" ? t.loading : t.cta}
              </button>
            )}
          </form>
          {status === "error" && (
            <p className="text-red-400 text-sm mt-3">{errorMsg}</p>
          )}
        </div>
      </div>
    </section>
  );
}
