"use client";

import { useState } from "react";

export default function NewsletterBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");

  if (dismissed) return null;

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-black" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FB25E2]/25 via-[#FB25E2]/20 to-[#FB25E2]/25" aria-hidden />
      <div className="relative container mx-auto px-4 sm:px-6 py-3 pr-12 sm:pr-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <p className="text-white font-semibold text-sm sm:text-base text-center">
          <span className="text-[#FB25E2] font-black">- 10%</span> de réduction
          <span className="hidden sm:inline"> sur votre première réservation</span>
          <span className="sm:hidden"> 1ère résa</span>
          {" "}en vous inscrivant à la newsletter
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-2 w-full sm:w-auto max-w-xs"
        >
          <input
            type="email"
            placeholder="votre@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-w-0 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FB25E2]/50 focus:border-[#FB25E2]/50"
            aria-label="Adresse email"
          />
          <a
            href="https://wa.me/33645373229"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-5 py-2 rounded-full bg-[#FB25E2] text-white text-sm font-bold hover:bg-[#FB25E2]/90 transition-colors whitespace-nowrap"
          >
            Profiter
          </a>
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
