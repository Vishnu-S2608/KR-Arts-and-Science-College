"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preloader = containerRef.current;
    if (!preloader) {
      window.dispatchEvent(new CustomEvent("preloader:done"));
      (window as unknown as { __preloaderDone: boolean }).__preloaderDone = true;
      return;
    }

    // Lock page scroll during preloader
    document.documentElement.classList.add("kr-preloader-locked");
    document.body.classList.add("kr-preloader-locked");

    const rotatingOuterRing = preloader.querySelector<HTMLDivElement>("#krRotatingOuterRing");
    const starLeft = preloader.querySelector<HTMLDivElement>("#krStarLeft");
    const starRight = preloader.querySelector<HTMLDivElement>("#krStarRight");
    const shockLeft = preloader.querySelector<HTMLDivElement>("#krShockLeft");
    const shockRight = preloader.querySelector<HTMLDivElement>("#krShockRight");
    const sealStage = preloader.querySelector<HTMLDivElement>("#krSealStage");
    const backdrop = preloader.querySelector<HTMLDivElement>("#krPreloaderBg");
    const skipBtn = preloader.querySelector<HTMLButtonElement>("#krSkipBtn");

    // 1. CONTINUOUS ROTATION OF THE OUTER RING ONLY
    // Center Goddess Saraswati portrait stays 100% upright & static.
    // Standard HTML div with 50% 50% origin guarantees perfect concentric rotation.
    const ringRotateTween = gsap.to(rotatingOuterRing, {
      rotation: 360,
      duration: 8,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });

    const masterTl = gsap.timeline({
      onComplete: finishPreloader,
    });

    // Initial state: Seal fades in cleanly. Stars are 100% absent (image is starless + opacity: 0)
    masterTl.fromTo(
      sealStage,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.45, ease: "power2.out" }
    );

    // Outer ring rotates smoothly with NO stars visible for 0.4s
    masterTl.to({}, { duration: 0.4 });

    // 2. FORCEFUL STAMP EFFECT: The two golden stars slam down from above onto the rotating ring!
    masterTl.to(
      [starLeft, starRight],
      {
        opacity: 1,
        scale: 1,
        duration: 0.28,
        ease: "power4.in",
      }
    );

    // Golden shockwaves burst outward upon stamp impact
    masterTl.fromTo(
      [shockLeft, shockRight],
      { scale: 0.6, opacity: 1 },
      { scale: 3.2, opacity: 0, duration: 0.45, ease: "power2.out" },
      "<+0.05"
    );

    // Micro impact jolt on the seal
    masterTl.to(
      sealStage,
      {
        x: 3,
        y: -3,
        duration: 0.04,
        yoyo: true,
        repeat: 3,
        ease: "power1.inOut",
      },
      "<"
    );

    // 3. Seal continues rotating with the stars now stamped in (~0.4s)
    masterTl.to({}, { duration: 0.4 });

    // 4. EXPAND & OPEN WEBSITE: While continuing to rotate, the outer circle expands outward!
    masterTl.to(
      sealStage,
      {
        scale: 14,
        opacity: 0,
        duration: 0.8,
        ease: "power3.in",
      }
    );

    masterTl.to(
      backdrop,
      {
        opacity: 0,
        duration: 0.65,
        ease: "power2.inOut",
      },
      "<+0.15"
    );

    let finished = false;
    const safetyTimer = setTimeout(() => {
      if (!finished) finishPreloader();
    }, 2800);

    function finishPreloader() {
      if (finished) return;
      finished = true;
      clearTimeout(safetyTimer);
      ringRotateTween.kill();

      document.documentElement.classList.remove("kr-preloader-locked");
      document.body.classList.remove("kr-preloader-locked");
      setVisible(false);
      (window as unknown as { __preloaderDone: boolean }).__preloaderDone = true;
      window.dispatchEvent(new CustomEvent("preloader:done"));
    }

    const handleSkip = () => {
      finishPreloader();
    };

    skipBtn?.addEventListener("click", handleSkip);

    return () => {
      clearTimeout(safetyTimer);
      ringRotateTween.kill();
      masterTl.kill();
      skipBtn?.removeEventListener("click", handleSkip);
      document.documentElement.classList.remove("kr-preloader-locked");
      document.body.classList.remove("kr-preloader-locked");
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="preloader"
      ref={containerRef}
      className="fixed inset-0 z-[9999] select-none flex items-center justify-center overflow-hidden"
      role="status"
      aria-label="Loading KR Arts And Science College"
    >
      {/* Dark Royal Navy Backdrop */}
      <div
        id="krPreloaderBg"
        className="absolute inset-0 bg-[#011236] transition-opacity"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#0334A0]/35 via-[#C59B27]/25 to-transparent blur-[100px] pointer-events-none" />
      </div>

      {/* Center Stage Composition */}
      <div
        id="krSealStage"
        className="relative z-20 flex items-center justify-center will-change-transform origin-center pointer-events-none"
      >
        {/* Dimension wrapper: 300px on mobile, 380px on tablet, 440px on desktop */}
        <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] flex items-center justify-center">

          {/* 1. ROTATING OUTER RING: ONLY this outer circle with college title, Tamil motto and stars rotates */}
          <div
            id="krRotatingOuterRing"
            className="absolute inset-0 w-full h-full rounded-full will-change-transform origin-center"
          >
            {/* The Outer Ring Image — 100% STARLESS on load! Transparent center & transparent corners */}
            <img
              src="/kr-logo-outer-starless.png"
              alt=""
              className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_0_35px_rgba(3,52,160,0.4)]"
              loading="eager"
              decoding="sync"
            />

            {/* LEFT STAMP STAR: Centered in the white band at x = 163.5/1024 (15.97%) */}
            <div
              id="krStarLeft"
              className="absolute top-1/2 -translate-y-1/2 left-[15.97%] -translate-x-1/2 flex items-center justify-center pointer-events-none"
              style={{ opacity: 0, transform: "scale(3.5)", transformOrigin: "center center" }}
            >
              {/* Shockwave circle */}
              <div
                id="krShockLeft"
                className="absolute w-12 h-12 rounded-full border-2 border-[#F5B83D] opacity-0 pointer-events-none"
              />
              {/* Crisp 5-point Gold Star */}
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 fill-[#F5B83D] stroke-[#C59B27] stroke-[0.8] drop-shadow-[0_0_8px_rgba(245,184,61,0.8)]"
              >
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            </div>

            {/* RIGHT STAMP STAR: Centered in the white band at x = 861/1024 (84.08%) */}
            <div
              id="krStarRight"
              className="absolute top-1/2 -translate-y-1/2 left-[84.08%] -translate-x-1/2 flex items-center justify-center pointer-events-none"
              style={{ opacity: 0, transform: "scale(3.5)", transformOrigin: "center center" }}
            >
              {/* Shockwave circle */}
              <div
                id="krShockRight"
                className="absolute w-12 h-12 rounded-full border-2 border-[#F5B83D] opacity-0 pointer-events-none"
              />
              {/* Crisp 5-point Gold Star */}
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 fill-[#F5B83D] stroke-[#C59B27] stroke-[0.8] drop-shadow-[0_0_8px_rgba(245,184,61,0.8)]"
              >
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            </div>
          </div>

          {/* 2. STEADY CENTER EMBLEM: Goddess Saraswati stays 100% upright & static, NEVER rotates! */}
          <div
            id="krStaticCenter"
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-20 flex items-center justify-center"
          >
            <img
              src="/kr-logo-center-emblem.png"
              alt="KR Arts and Science College Emblem"
              className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_0_20px_rgba(197,155,39,0.3)]"
              loading="eager"
              decoding="sync"
            />
          </div>

        </div>
      </div>

      {/* Skip Button */}
      <button
        id="krSkipBtn"
        type="button"
        className="absolute bottom-6 right-6 px-3.5 py-1 rounded-tl-[6px] rounded-br-[6px] bg-white/10 hover:bg-[#FBF2D4] text-white hover:text-[#021B4E] border border-white/20 hover:border-[#C59B27] text-[11px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-none z-40 pointer-events-auto"
        aria-label="Skip opening animation"
      >
        Skip &rarr;
      </button>
    </div>
  );
}
