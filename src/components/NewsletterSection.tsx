"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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
        setErrorMsg(data.error || "Erreur lors de l'envoi.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Erreur réseau.");
    }
  };

  return (
    <section className="relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FB25E2]/10 via-[#FB25E2]/5 to-[#FB25E2]/10" aria-hidden />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#FB25E2] font-black text-2xl md:text-3xl mb-2">
            - 10% de réduction
          </p>
          <p className="text-white font-semibold text-lg md:text-xl mb-6">
            sur votre première réservation en vous inscrivant à la newsletter
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <input
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading" || status === "success"}
              className="w-full sm:max-w-xs px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FB25E2]/50 focus:border-[#FB25E2]/50 disabled:opacity-70"
              aria-label="Adresse email"
              required
            />
            {status === "success" ? (
              <p className="text-green-400 font-medium">Vérifiez votre boîte mail !</p>
            ) : (
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#FB25E2] text-white font-bold hover:bg-[#FB25E2]/90 disabled:opacity-70 transition-colors text-center whitespace-nowrap"
              >
                {status === "loading" ? "Envoi…" : "Profiter des 10%"}
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
