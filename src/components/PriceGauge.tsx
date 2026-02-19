"use client";

import { useState, useEffect, useRef } from "react";

const PRICES: Record<number, number> = {
  1: 220,
  2: 320,
  3: 450,
  4: 550,
  5: 650,
  6: 750,
};

function AnimatedPrice({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) {
  const [displayValue, setDisplayValue] = useState(value);
  const ref = useRef(value);

  useEffect(() => {
    const start = ref.current;
    const end = value;
    ref.current = value;
    if (start === end) {
      setDisplayValue(value);
      return;
    }

    const duration = 400;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;
      setDisplayValue(decimals ? Math.round(current * 100) / 100 : Math.round(current));
      if (progress < 1) requestAnimationFrame(animate);
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [value, decimals]);

  return (
    <span>
      {decimals ? displayValue.toFixed(2).replace(".", ",") : displayValue}
    </span>
  );
}

export default function PriceGauge({ fixedPrice, subtitle }: { fixedPrice?: number; subtitle?: string }) {
  const [persons, setPersons] = useState<number | null>(null);
  const [hours, setHours] = useState(2);
  const [step2Visible, setStep2Visible] = useState(false);

  const price = fixedPrice ?? PRICES[hours];
  const pricePerPerson = persons ? price / persons : 0;
  const showHours = fixedPrice === undefined;

  const handleSelectPersons = (p: number) => {
    setPersons(p);
    setStep2Visible(true);
  };

  const handleBack = () => {
    setStep2Visible(false);
    setTimeout(() => setPersons(null), 400);
  };

  const showStep2 = persons !== null && step2Visible;

  return (
    <div className="mt-8 rounded-2xl border-2 border-[#F34FC7]/30 bg-white/[0.03] overflow-hidden relative w-full max-w-md min-h-[300px]">
      {/* Étape 1 : Nombre de personnes */}
      <div
        className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-500 ease-in-out ${
          !showStep2
            ? "opacity-100 z-10"
            : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        <div className="px-8 py-10 md:px-12 md:py-12">
          <p className="text-white/90 text-xl md:text-2xl font-medium mb-6">Combien de personnes ?</p>
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => handleSelectPersons(p)}
                className="w-full aspect-[2/1] min-h-12 rounded-xl text-lg font-medium transition-all duration-200 text-white/90 hover:text-white hover:bg-[#F34FC7]/20 bg-white/[0.06] hover:scale-[1.02]"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Étape 2 : Durée + Prix */}
      <div
        className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-500 ease-in-out ${
          showStep2
            ? "opacity-100 z-10"
            : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        <div className="px-8 py-10 md:px-12 md:py-12">
        <button
          type="button"
          onClick={handleBack}
          className="text-white/40 hover:text-[#F34FC7] text-sm mb-6 transition-colors inline-flex items-center gap-1 w-fit"
        >
          ← {persons} {persons === 1 ? "personne" : "personnes"}
        </button>

        {showHours && (
          <>
            <p className="text-white/80 text-base mb-3">Choisissez la durée</p>
            <div className="relative mb-5">
              <input
                type="range"
                min={1}
                max={6}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-gradient-to-r from-white/10 to-white/20 cursor-pointer accent-[#F34FC7] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#F34FC7] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white/30 [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#F34FC7] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white/30 [&::-moz-range-thumb]:cursor-pointer"
              />
              <div className="flex justify-between mt-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => setHours(h)}
                    className={`flex-1 py-3 rounded-xl text-base md:text-lg font-medium transition-all duration-200 ${
                      hours === h
                        ? "text-white bg-[#F34FC7]/25"
                        : "text-white/70 hover:text-white bg-white/[0.05] hover:bg-white/[0.1]"
                    }`}
                  >
                    {h}h
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-display text-3xl md:text-4xl font-semibold text-white tabular-nums">
            <AnimatedPrice value={price} />
          </span>
          <span className="text-white/70 text-xl">€</span>
          {persons !== null && (
            <span className="text-white/50 text-sm">
              (<AnimatedPrice value={pricePerPerson} decimals={2} /> €/pers.)
            </span>
          )}
        </div>
        {subtitle && (
          <p className="text-white/60 text-sm mt-3">{subtitle}</p>
        )}
        <a
          href="https://wa.me/33699717759"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-gradient text-white font-bold text-base hover:opacity-90 transition-all"
        >
          Réserver
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        </div>
      </div>
    </div>
  );
}
