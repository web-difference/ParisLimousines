"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoLightbox from "./PhotoLightbox";

/** Liste de numéros de photo (1-19). Les null sont des cellules vides. n15 utilise n15.jpg, les autres n{N}.png */
function photoSrc(num: number): string {
  return num === 15 ? "/n15.jpg" : `/n${num}.png`;
}

export default function PhotoGallery({ items }: { items: (number | null)[] }) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  const openLightbox = (num: number) => {
    setLightboxSrc(photoSrc(num));
    setLightboxAlt(`Moment Star Limousine Paris n${num}`);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((num, idx) => {
          if (num === null) {
            return (
              <div
                key={`empty-${idx}`}
                className="aspect-square rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center"
                aria-hidden
              >
                <span className="text-white/20 text-sm">n{idx + 1}</span>
              </div>
            );
          }
          return (
            <button
              key={num}
              type="button"
              onClick={() => openLightbox(num)}
              className="aspect-square rounded-xl bg-white/5 border border-white/10 overflow-hidden relative block w-full cursor-pointer hover:ring-2 hover:ring-[#F34FC7]/50 hover:ring-offset-2 hover:ring-offset-[#0a0a0a] transition-all focus:outline-none focus:ring-2 focus:ring-[#F34FC7]/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
            >
              <Image
                src={photoSrc(num)}
                alt={`Moment Star Limousine Paris ${num}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                unoptimized
              />
            </button>
          );
        })}
      </div>
      <PhotoLightbox
        src={lightboxSrc}
        alt={lightboxAlt}
        onClose={() => setLightboxSrc(null)}
      />
    </>
  );
}
