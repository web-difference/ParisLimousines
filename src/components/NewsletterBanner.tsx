"use client";

import { useState } from "react";

export default function NewsletterBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!email.trim()) {
      setErrorMsg("Veuillez renseigner votre email.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");
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

  if (dismissed) return null;

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-black" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FB25E2]/25 via-[#FB25E2]/20 to-[#FB25E2]/25" aria-hidden />
      <div className="relative container mx-auto px-4 sm:px-6 py-3 pr-12 sm:pr-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <p className="text-white font-semibold text-center">
          <span className="sm:hidden block text-xs leading-tight">
            <span className="text-[#FB25E2] font-black">-10%</span> 1ère résa
            <br />
            <span className="font-medium">Inscrivez-vous à la newsletter</span>
          </span>
          <span className="hidden sm:inline text-sm sm:text-base">
            <span className="text-[#FB25E2] font-black">- 10%</span> de réduction sur votre première réservation en vous inscrivant à la newsletter
          </span>
        </p>
        <form
          noValidate
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-2 w-full sm:w-auto max-w-xs"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
            <input
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errorMsg) setErrorMsg("");
              }}
              disabled={status === "loading" || status === "success"}
              className="flex-1 min-w-0 w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FB25E2]/50 focus:border-[#FB25E2]/50 disabled:opacity-70"
              aria-label="Adresse email"
              aria-invalid={!!errorMsg}
            />
            {status === "success" ? (
              <p className="text-green-400 text-sm font-medium whitespace-nowrap w-full sm:w-auto text-center">Email envoyé !</p>
            ) : (
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 w-full sm:w-auto px-5 py-2 rounded-full bg-[#FB25E2] text-white text-sm font-bold hover:bg-[#FB25E2]/90 disabled:opacity-70 transition-colors whitespace-nowrap"
              >
                {status === "loading" ? "Envoi…" : "Profiter"}
              </button>
            )}
          </div>
          {errorMsg && (
            <p className="text-red-300 text-xs text-center w-full" role="alert">{errorMsg}</p>
          )}
        </form>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10"
        aria-label="Fermer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
