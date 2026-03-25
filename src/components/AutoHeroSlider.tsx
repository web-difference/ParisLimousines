"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type HeroSlide = {
  src: string;
  alt?: string;
  objectPositionClass?: string;
};

export default function AutoHeroSlider({
  slides,
  intervalMs = 8000,
  fadeMs = 1200,
}: {
  slides: HeroSlide[];
  intervalMs?: number;
  fadeMs?: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const slideCount = slides.length;

  useEffect(() => {
    const mql = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mql) return;

    const update = () => setReducedMotion(Boolean(mql.matches));
    update();

    const onChange = () => update();

    // Certains navigateurs n'exposent pas addListener/removeListener dans les types TS.
    // On cast pour gérer proprement les 2 cas sans bloquer la compilation.
    const mqlAny = mql as unknown as {
      addEventListener?: (type: "change", listener: () => void) => void;
      removeEventListener?: (type: "change", listener: () => void) => void;
      addListener?: (listener: () => void) => void;
      removeListener?: (listener: () => void) => void;
    };

    if (mqlAny.addEventListener) mqlAny.addEventListener("change", onChange);
    else if (mqlAny.addListener) mqlAny.addListener(onChange);

    return () => {
      if (mqlAny.removeEventListener) mqlAny.removeEventListener("change", onChange);
      else if (mqlAny.removeListener) mqlAny.removeListener(onChange);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || slideCount <= 1) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % slideCount);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [fadeMs, intervalMs, reducedMotion, slideCount]);

  const images = useMemo(
    () =>
      slides.map((s, i) => {
        const isActive = i === activeIndex;
        const objectPositionClass = s.objectPositionClass ?? "object-top";

        return (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`${s.src}-${i}`}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDuration: `${fadeMs}ms` }}
          >
            <Image
              src={s.src}
              alt={s.alt ?? ""}
              fill
              className={`w-full h-full object-cover ${objectPositionClass}`}
              sizes="100vw"
              unoptimized
              priority={i === 0}
            />
          </div>
        );
      }),
    [activeIndex, fadeMs, slides]
  );

  // En cas de motion réduite, on garde simplement le premier visuel.
  const shouldAnimate = !reducedMotion && slideCount > 1;
  return (
    <div className="absolute inset-0">
      {shouldAnimate ? images : images.slice(0, 1)}
    </div>
  );
}

