"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export default function CampusZoomSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);
  const borderOverlayRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const sideLeftRef = useRef<HTMLDivElement>(null);
  const sideRightRef = useRef<HTMLDivElement>(null);
  const bgTextLeftRef = useRef<HTMLHeadingElement>(null);
  const bgTextRightRef = useRef<HTMLHeadingElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const pillBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const centerCard = centerCardRef.current;
    const centerImage = centerImageRef.current;
    const borderOverlay = borderOverlayRef.current;
    const caption = captionRef.current;
    const sideLeft = sideLeftRef.current;
    const sideRight = sideRightRef.current;
    const bgTextLeft = bgTextLeftRef.current;
    const bgTextRight = bgTextRightRef.current;
    const bgLayer = bgLayerRef.current;
    const pillBtn = pillBtnRef.current;

    if (!container || !centerCard || !centerImage) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      // Master Timeline (0 to 0.7: expansion, 0.7 to 1.0: steady hold at full campus view)
      const tl = gsap.timeline({ paused: true });

      // 1. Center card expands from framed portrait card to full-screen view
      tl.fromTo(
        centerCard,
        {
          width: isMobile ? "290px" : "400px",
          height: isMobile ? "380px" : "510px",
          borderRadius: "26px",
          borderColor: "#C59B27",
        },
        {
          width: "96vw",
          height: isMobile ? "82vh" : "86vh",
          borderRadius: "16px",
          borderColor: "rgba(197, 155, 39, 0.2)",
          ease: "none",
          duration: 0.65,
        },
        0
      );

      // 2. Center campus photo zooms out from arch/dome focus to full wide panorama
      tl.fromTo(
        centerImage,
        {
          scale: 1.85,
          transformOrigin: "50% 45%",
        },
        {
          scale: 1.0,
          transformOrigin: "50% 45%",
          ease: "none",
          duration: 0.65,
        },
        0
      );

      // 3. Side flanking images slide outward and fade away
      if (sideLeft) {
        tl.fromTo(
          sideLeft,
          { x: 0, opacity: 1, scale: 1 },
          { x: isMobile ? -80 : -140, opacity: 0, scale: 0.88, ease: "none", duration: 0.5 },
          0
        );
      }

      if (sideRight) {
        tl.fromTo(
          sideRight,
          { x: 0, opacity: 1, scale: 1 },
          { x: isMobile ? 80 : 140, opacity: 0, scale: 0.88, ease: "none", duration: 0.5 },
          0
        );
      }

      // 4. Background bold title text splits outward
      if (bgTextLeft) {
        tl.fromTo(
          bgTextLeft,
          { x: "0vw" },
          { x: isMobile ? "-100vw" : "-70vw", ease: "none", duration: 0.6 },
          0
        );
      }

      if (bgTextRight) {
        tl.fromTo(
          bgTextRight,
          { x: "0vw" },
          { x: isMobile ? "100vw" : "70vw", ease: "none", duration: 0.6 },
          0
        );
      }

      // 5. Background ambient layer fades out as the card becomes full screen
      if (bgLayer) {
        tl.fromTo(
          bgLayer,
          { opacity: 1 },
          { opacity: 0.15, ease: "none", duration: 0.6 },
          0
        );
      }

      // 6. Viewfinder overlay and Pill button fade out gracefully on expansion
      if (borderOverlay) {
        tl.fromTo(
          borderOverlay,
          { opacity: 1 },
          { opacity: 0, ease: "none", duration: 0.4 },
          0
        );
      }

      if (pillBtn) {
        tl.fromTo(
          pillBtn,
          { opacity: 1, y: 0 },
          { opacity: 0, y: 30, ease: "none", duration: 0.4 },
          0
        );
      }

      // 7. Reveal caption text on the expanded full-screen campus
      if (caption) {
        tl.fromTo(
          caption,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, ease: "power1.out", duration: 0.3 },
          0.4
        );
      }

      // Hold time from 0.65 to 1.0 (empty duration so full view stays steady and stable)
      tl.to({}, { duration: 0.35 }, 0.65);

      // UNIDIRECTIONAL SCROLL CONTROLLER
      // Expands as you scroll forward; once expanded, it NEVER gets shorter or shrinks back
      let maxProgress = 0;

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=75%",
        pin: stickyRef.current,
        pinSpacing: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Unidirectional expansion: only increase, never decrease when scrolling back
          if (self.progress > maxProgress) {
            maxProgress = self.progress;
            gsap.to(tl, {
              progress: maxProgress,
              duration: 0.2,
              ease: "power1.out",
              overwrite: true,
            });
          }
        },
        onLeaveBack: () => {
          // Only re-arm if the user scrolls all the way back up to previous sections (About/Hero)
          maxProgress = 0;
          gsap.to(tl, {
            progress: 0,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });
        },
      });

      // Tapping or clicking the card also expands directly to full campus view
      const handleCardClick = () => {
        if (maxProgress < 1) {
          maxProgress = 1;
          gsap.to(tl, {
            progress: 1,
            duration: 0.6,
            ease: "power2.out",
            overwrite: true,
          });
        }
      };

      centerCard.addEventListener("click", handleCardClick);

      return () => {
        centerCard.removeEventListener("click", handleCardClick);
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="campus"
      ref={containerRef}
      className="relative w-full bg-[#011236] text-white p-0 m-0"
      aria-label="KR Arts and Science College Campus Architecture & Interactive Showcase"
    >
      {/* Pinned Viewport (Smoothly pinned via GSAP with zero trailing gap) */}
      <div
        ref={stickyRef}
        className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center"
      >
        {/* ========================================================================= */}
        {/* 1. BACKGROUND PANORAMA LAYER (Fades smoothly as user scrolls down)       */}
        {/* ========================================================================= */}
        <div
          ref={bgLayerRef}
          className="absolute inset-0 z-0 w-full h-full pointer-events-none will-change-transform"
        >
          {/* Panoramic Campus Background Image */}
          <Image
            src="/images/campus/campus-hero.png"
            alt="Scenic Campus Panorama Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.45] saturate-[1.1]"
          />
          {/* Subtle Ambient Vignette & Lighting */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#011236] via-[#011236]/40 to-[#011236]/70" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0334A0]/25 blur-[140px] rounded-full" />
        </div>

        {/* ========================================================================= */}
        {/* 2. BIG CINEMATIC BACKGROUND TYPOGRAPHY (Splits left and right on scroll)  */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 z-[2] flex items-center justify-between px-6 sm:px-12 md:px-20 pointer-events-none select-none overflow-hidden">
          <h2
            ref={bgTextLeftRef}
            className="font-heading font-black text-6xl sm:text-7xl md:text-8xl lg:text-[130px] tracking-tight text-white/10 uppercase leading-none will-change-transform drop-shadow-sm"
          >
            KR ARTS
          </h2>
          <h2
            ref={bgTextRightRef}
            className="font-heading font-black text-6xl sm:text-7xl md:text-8xl lg:text-[130px] tracking-tight text-white/10 uppercase leading-none will-change-transform drop-shadow-sm text-right"
          >
            COLLEGE
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* 3. TRIPTYCH STAGE: Left Image + Center Expanding Card + Right Image       */}
        {/* ========================================================================= */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex items-center justify-center px-4">
          {/* Left Flanking Image: Grand Campus Entrance */}
          <div
            ref={sideLeftRef}
            className="hidden md:flex flex-col justify-end absolute left-2 lg:left-12 xl:left-24 top-1/2 -translate-y-1/2 w-[220px] lg:w-[280px] xl:w-[320px] h-[360px] lg:h-[430px] rounded-[24px] overflow-hidden border-2 border-[#C59B27]/50 bg-[#021B4E]/80 shadow-[0_15px_45px_rgba(0,0,0,0.5)] z-10 will-change-transform group transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/images/campus/college-entrance.jpg"
              alt="KR Arts and Science College Grand Campus Entrance"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1200px) 280px, 320px"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#011236]/95 via-[#011236]/35 to-transparent pointer-events-none" />
            <div className="relative p-4 sm:p-5 z-10 pointer-events-none">
              <span className="text-[10px] font-bold text-[#F5B83D] tracking-widest uppercase block mb-1">
                Main Access
              </span>
              <h4 className="text-white font-bold text-sm lg:text-base tracking-tight leading-snug">
                Grand Campus Entrance
              </h4>
            </div>
          </div>

          {/* Right Flanking Image: Advanced Tech & Labs */}
          <div
            ref={sideRightRef}
            className="hidden md:flex flex-col justify-end absolute right-2 lg:right-12 xl:right-24 top-1/2 -translate-y-1/2 w-[220px] lg:w-[280px] xl:w-[320px] h-[360px] lg:h-[430px] rounded-[24px] overflow-hidden border-2 border-[#C59B27]/50 bg-[#021B4E]/80 shadow-[0_15px_45px_rgba(0,0,0,0.5)] z-10 will-change-transform group transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/images/campus/computer-lab.png"
              alt="Advanced Computing and Science Laboratories"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1200px) 280px, 320px"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#011236]/95 via-[#011236]/35 to-transparent pointer-events-none" />
            <div className="relative p-4 sm:p-5 z-10 pointer-events-none">
              <span className="text-[10px] font-bold text-[#F5B83D] tracking-widest uppercase block mb-1">
                Technology Hub
              </span>
              <h4 className="text-white font-bold text-sm lg:text-base tracking-tight leading-snug">
                Advanced Tech &amp; Labs
              </h4>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* CENTER FEATURED EXPANDING CARD (Signature Zoom & Fit)                   */}
          {/* ======================================================================= */}
          <div
            ref={centerCardRef}
            className="relative overflow-hidden will-change-transform flex items-center justify-center bg-[#011236] border-2 border-[#C59B27] rounded-[26px] w-[290px] sm:w-[400px] h-[380px] sm:h-[510px] shadow-[0_20px_70px_rgba(0,0,0,0.65)] z-20 cursor-pointer"
          >
            {/* Viewfinder Lens Corner Accents & Gold Shimmer */}
            <div
              ref={borderOverlayRef}
              className="absolute inset-0 pointer-events-none z-20 rounded-[inherit] will-change-transform"
            >
              {/* Pulsing subtle gold border accent */}
              <div className="absolute inset-0 border border-[#F5B83D]/60 rounded-[inherit] animate-pulse" />

              {/* Viewfinder Lens Corner Accents */}
              <span className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#F5B83D]" />
              <span className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#F5B83D]" />
              <span className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#F5B83D]" />
              <span className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#F5B83D]" />
            </div>

            {/* Zooming / Scaling Campus Image (Starts tight on dome/arch, expands to full panorama) */}
            <div
              ref={centerImageRef}
              className="absolute inset-0 w-full h-full will-change-transform"
              style={{
                transform: "scale(1.85)",
                transformOrigin: "50% 45%",
              }}
            >
              <Image
                src="/images/campus/kr_campus_2.png"
                alt="KR Arts and Science College Main Campus Arch and Building"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              {/* Bottom gradient overlay for typography contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
            </div>

            {/* Reveal Caption when Card Expands Full-Screen */}
            <div
              ref={captionRef}
              className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 right-6 sm:right-12 z-20 flex flex-col items-start gap-2 pointer-events-none opacity-0 will-change-transform"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-8 h-[2px] bg-[#C59B27] rounded-full" />
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#F5B83D] uppercase drop-shadow">
                  10+ Acres Modern Infrastructure
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
                KR Arts And Science College
              </h3>
              <p className="mt-0.5 text-xs sm:text-sm text-slate-200 max-w-xl flex items-center gap-1.5 drop-shadow">
                <MapPin className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                <span>
                  P. Thambipatti, Peraiyur Tk, Madurai District &bull; NH/SH Junction
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. FLOATING GLASSMORPHISM PILL BUTTON (Matching "Book Test Ride" effect)   */}
        {/* ========================================================================= */}
        <div
          ref={pillBtnRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[40] pointer-events-auto will-change-transform"
        >
          <Link
            href="/apply"
            className="group inline-flex items-center gap-2.5 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-widest font-extrabold text-white transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "rgba(2, 27, 78, 0.65)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(245, 184, 61, 0.50)",
              boxShadow: "0 10px 35px rgba(0, 0, 0, 0.40)",
            }}
          >
            <Calendar className="w-4 h-4 text-[#F5B83D]" />
            <span className="drop-shadow-md">Schedule Campus Visit</span>
            <ArrowRight className="w-4 h-4 text-[#F5B83D] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
