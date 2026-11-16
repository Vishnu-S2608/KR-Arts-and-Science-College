"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { COURSES_DATA } from "@/data/coursesData";

const SHORT_TAGS: Record<string, string> = {
  ai: "AI & DS",
  commerce: "B.COM CA",
  aviation: "BBA AVIATION",
  cs: "B.SC CS",
  tamil: "TAMIL",
  criminology: "CRIMINOLOGY",
  english: "ENGLISH",
  "physical-education": "PHYSICAL ED",
  chemistry: "CHEMISTRY",
  "home-science": "HOME SCI",
  mathematics: "MATHS",
};

export default function ProgrammesSection() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartXRef = useRef<number | null>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const total = COURSES_DATA.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Auto-play cycling every 5.5s (pauses on user hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Scroll active tab into view when activeIndex changes (using container.scrollTo to prevent window horizontal shift)
  useEffect(() => {
    if (!tabsContainerRef.current) return;
    const container = tabsContainerRef.current;
    const activeTab = container.querySelector<HTMLButtonElement>(
      `[data-tab-idx="${activeIndex}"]`
    );
    if (activeTab) {
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;
      const containerWidth = container.clientWidth;
      container.scrollTo({
        left: tabLeft - containerWidth / 2 + tabWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  // Safeguard: Ensure document window horizontal scroll stays locked at 0
  useEffect(() => {
    if (typeof window !== "undefined" && window.scrollX !== 0) {
      window.scrollTo({ left: 0, top: window.scrollY });
    }
  }, [activeIndex]);

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handlePrev();
      else handleNext();
    }
    touchStartXRef.current = null;
    setIsPaused(false);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  // Handle card click: If active, navigate to course page. If side card, center it.
  const handleCardClick = (idx: number, slug: string) => {
    if (idx !== activeIndex) {
      setActiveIndex(idx);
    } else {
      router.push(`/academics/${slug}`);
    }
  };

  // Calculate 3D Transform and depth styles for each card (centered with translate(-50%, -50%))
  const getCardStyle = (idx: number) => {
    let diff = idx - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const abs = Math.abs(diff);

    if (abs === 0) {
      return {
        display: "block",
        transform: "translate(-50%, -50%) translateX(0%) translateZ(0px) rotateY(0deg) scale(1)",
        zIndex: 30,
        opacity: 1,
        filter: "brightness(100%)",
        pointerEvents: "auto" as const,
      };
    }

    if (abs === 1) {
      const isLeft = diff < 0;
      return {
        display: "block",
        transform: `translate(-50%, -50%) translateX(${isLeft ? "-48%" : "48%"}) translateZ(-120px) rotateY(${
          isLeft ? "24deg" : "-24deg"
        }) scale(0.86)`,
        zIndex: 20,
        opacity: 0.85,
        filter: "brightness(75%)",
        pointerEvents: "auto" as const,
      };
    }

    if (abs === 2) {
      const isLeft = diff < 0;
      return {
        display: "block",
        transform: `translate(-50%, -50%) translateX(${isLeft ? "-86%" : "86%"}) translateZ(-240px) rotateY(${
          isLeft ? "36deg" : "-36deg"
        }) scale(0.72)`,
        zIndex: 10,
        opacity: 0.45,
        filter: "brightness(45%)",
        pointerEvents: "auto" as const,
      };
    }

    // Distant cards hidden cleanly without affecting layout dimensions
    return {
      display: "none",
      transform: "translate(-50%, -50%) scale(0.4)",
      zIndex: 0,
      opacity: 0,
      filter: "brightness(25%)",
      pointerEvents: "none" as const,
    };
  };

  return (
    <section
      className="py-14 sm:py-20 bg-white relative overflow-hidden"
      id="programmes"
      aria-label="Undergraduate Degree Programmes"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======================================================================= */}
        {/* 1. SECTION HEADER                                                       */}
        {/* ======================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <span className="w-8 sm:w-12 h-[2px] bg-[#FFD700] rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-black uppercase">
                Academic Degrees &bull; Affiliated to MKU
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight">
              11 Career-Driven Undergraduate Programmes
            </h2>
          </div>

          <Link
            href="/academics"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold shrink-0 self-start md:self-auto text-black hover:text-white bg-[#FAFBFD] hover:bg-[#021B4E] border border-slate-300 hover:border-[#FFD700] transition-all duration-300 shadow-none"
          >
            <span>View Full Directory</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* ======================================================================= */}
        {/* 2. 3D COVERFLOW CAROUSEL (Signature Diagonal Box Styling)               */}
        {/* ======================================================================= */}
        <div
          className="relative w-full py-4 sm:py-8 flex items-center justify-center select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Navigation Button (Signature Diagonal Boxing) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Department"
            className="absolute left-1 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-14 sm:w-12 sm:h-18 rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none bg-[#021B4E] hover:bg-[#F5B83D] text-[#F5B83D] hover:text-[#011236] border border-[#C59B27] flex items-center justify-center shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Right Arrow Navigation Button (Signature Diagonal Boxing) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Department"
            className="absolute right-1 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-14 sm:w-12 sm:h-18 rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none bg-[#021B4E] hover:bg-[#F5B83D] text-[#F5B83D] hover:text-[#011236] border border-[#C59B27] flex items-center justify-center shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* 3D Perspective Stage */}
          <div
            className="relative w-full h-[270px] sm:h-[340px] md:h-[400px] lg:h-[440px] flex items-center justify-center overflow-hidden"
            style={{ perspective: "1200px" }}
          >
            {COURSES_DATA.map((prog, idx) => {
              let diff = idx - activeIndex;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              const isCenter = diff === 0;

              return (
                <div
                  key={prog.id}
                  onClick={() => handleCardClick(idx, prog.slug)}
                  style={getCardStyle(idx)}
                  className={`group absolute top-1/2 left-1/2 w-[280px] sm:w-[380px] md:w-[480px] lg:w-[540px] h-[210px] sm:h-[280px] md:h-[330px] lg:h-[370px] rounded-tl-[28px] rounded-br-[28px] rounded-tr-none rounded-bl-none overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer will-change-transform ${
                    isCenter
                      ? "border-2 border-[#C59B27] shadow-[0_20px_60px_rgba(1,18,54,0.45)] hover:border-[#F5B83D] hover:shadow-[0_25px_70px_rgba(245,184,61,0.25)]"
                      : "border-2 border-white/20 shadow-md hover:border-[#C59B27]/70"
                  }`}
                  title={isCenter ? `View ${prog.title} Curriculum & Syllabus` : `Select ${prog.title}`}
                >
                  {/* Photo Background with Rich Hover Zoom */}
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    sizes="(max-width: 768px) 300px, (max-width: 1200px) 520px, 600px"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    priority={isCenter}
                  />

                  {/* Gradient Vignette for strong text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011236]/95 via-[#011236]/40 to-transparent group-hover:via-[#011236]/50 transition-colors duration-300 pointer-events-none" />

                  {/* Top Shimmer Line across the card on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#F5B83D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />

                  {/* Shimmer Light Sweep on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none z-20" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3.5 sm:top-5 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-[10px] sm:text-[11px] font-bold bg-[#021B4E]/95 text-[#F5B83D] border border-[#C59B27]/60 uppercase tracking-wider backdrop-blur-sm shadow-sm">
                      {prog.categoryLabel}
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-white/80 drop-shadow">
                      {prog.number} / 11
                    </span>
                  </div>

                  {/* Bottom Department Title Overlay */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10">
                    <div className="flex items-end justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="font-heading font-extrabold text-lg sm:text-2xl md:text-3xl text-white tracking-tight leading-snug drop-shadow-md group-hover:text-[#FBF2D4] transition-colors">
                          {prog.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#FFD700] font-semibold tracking-wide line-clamp-1 drop-shadow">
                          {prog.department}
                        </p>
                      </div>

                      {/* Floating View Department Pill Indicator on Hover */}
                      {isCenter && (
                        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-white/10 group-hover:bg-[#FFD700] text-white/90 group-hover:text-black border border-white/20 group-hover:border-[#FFD700] text-xs font-bold transition-all duration-300 shrink-0 drop-shadow-sm">
                          <span>View Course</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Expanding Gold Accent Line on Hover */}
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-gradient-to-r from-[#0334A0] via-[#FFD700] to-[#FFE066] transition-all duration-500 pointer-events-none z-20" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================================= */}
        {/* 3. HORIZONTAL DEPARTMENT TABS STRIP (Exact Match to Velammal Reference) */}
        {/* ======================================================================= */}
        <div className="mt-6 sm:mt-8 max-w-full overflow-hidden border-t border-b border-slate-100 py-2 sm:py-3 bg-slate-50/50">
          <div
            ref={tabsContainerRef}
            className="flex items-center justify-start md:justify-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto px-4 py-1.5 scrollbar-none"
          >
            {COURSES_DATA.map((prog, idx) => {
              const isActive = idx === activeIndex;
              const shortTag = SHORT_TAGS[prog.id] || prog.id.toUpperCase();

              return (
                <button
                  key={prog.id}
                  type="button"
                  data-tab-idx={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative py-1.5 px-1 text-xs sm:text-[13px] font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-black font-extrabold scale-105"
                      : "text-slate-500 hover:text-black"
                  }`}
                >
                  <span>{shortTag}</span>

                  {/* Active Underline Indicator (Golden Underline as in Reference) */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FFD700] rounded-full animate-fadeIn" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
