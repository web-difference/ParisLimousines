"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewsletterBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");

  if (dismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#FB25E2]/20 via-[#FB25E2]/15 to-[#FB25E2]/20 border-b border-[#FB25E2]/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.4)_100%)]" aria-hidden />
      <div className="relative container mx-auto px-4 sm:px-6 py-3 pr-12 sm:pr-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <p className="text-white font-semibold text-sm sm:text-base text-center">
          <span className="text-[#FB25E2] font-black">— 15%</span> de réduction
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
          <Link
            href="/contact"
            className="flex-shrink-0 px-5 py-2 rounded-full bg-[#FB25E2] text-white text-sm font-bold hover:bg-[#FB25E2]/90 transition-colors whitespace-nowrap"
          >
            Profiter
          </Link>
        </form>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10"
          aria-label="Fermer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
