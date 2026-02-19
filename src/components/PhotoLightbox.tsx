"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const springTransition = { type: "spring" as const, stiffness: 400, damping: 25 };

export default function PhotoLightbox({
  src,
  alt,
  onClose,
}: {
  src: string | null;
  alt: string;
  onClose: () => void;
}) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (src) setIsExiting(false);
  }, [src]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") startClose();
    };
    if (src) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [src]);

  function startClose() {
    setIsExiting(true);
  }

  function handlePhotoAnimationComplete() {
    if (isExiting) onClose();
  }

  if (!src) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4"
      onClick={startClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo en grand"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={
          isExiting
            ? { opacity: 0, scale: 0.85 }
            : { opacity: 1, scale: 1 }
        }
        transition={springTransition}
        onAnimationComplete={handlePhotoAnimationComplete}
        className="relative w-fit max-w-[90vw] max-h-[90vh] rounded-lg border-2 border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.12),0_0_100px_rgba(243,79,199,0.08)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={startClose}
          className="absolute right-2 top-2 z-10 rounded-full p-2 text-white/80 bg-black/50 hover:bg-black/70 hover:text-white transition-colors"
          aria-label="Fermer"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* img natif pour que le cadre s'adapte aux dimensions réelles de l'image */}
        <img
          src={src}
          alt={alt}
          className="block max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg"
          loading="eager"
          decoding="async"
        />
      </motion.div>
    </motion.div>
  );
}
