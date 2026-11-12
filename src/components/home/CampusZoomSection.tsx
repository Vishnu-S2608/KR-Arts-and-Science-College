"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";

export default function CampusZoomSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const borderOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const frame = frameRef.current;
    const image = imageRef.current;
    const caption = captionRef.current;
    const borderOverlay = borderOverlayRef.current;

    if (!container || !frame || !image) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 640;
      const initialWidth = isMobile ? "300px" : "440px";
      const initialHeight = isMobile ? "300px" : "360px";
      const initialRadius = isMobile ? "18px" : "24px";
      const initialBorderWidth = isMobile ? "2px" : "2.5px";

      // Master Auto Zoom Timeline (runs automatically without needing scroll scrub)
      const tl = gsap.timeline({
        repeat: -1,
        paused: true,
      });

      // 1. Initial hold on tight Arch & Name focus
      tl.to({}, { duration: 1.4 });

      // 2. Fast, cinematic auto-expansion out to full campus view (1.1s)
      // Expands to 100% width and 100% height, connecting seamlessly with the section below
      tl.to(
        frame,
        {
          width: "100%",
          height: "100%",
          borderTopLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          borderTopRightRadius: "0px",
          borderBottomLeftRadius: "0px",
          borderWidth: "0px",
          borderColor: "rgba(197, 155, 39, 0)",
          duration: 1.1,
          ease: "power2.inOut",
        },
        "+=0"
      );

      tl.to(
        image,
        {
          scale: 1.0,
          transformOrigin: "51.4% 58%",
          duration: 1.1,
          ease: "power2.inOut",
        },
        "<"
      );

      if (borderOverlay) {
        tl.to(
          borderOverlay,
          {
            opacity: 0,
            duration: 0.6,
            ease: "power1.out",
          },
          "<"
        );
      }

      if (caption) {
        tl.fromTo(
          caption,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power1.out" },
          "<0.4"
        );
      }

      // 3. Hold on full wide campus panorama so visitor can view the entire campus (4.2s)
      tl.to({}, { duration: 4.2 });

      // 4. Smoothly zoom back to the central arch focus (1.1s)
      if (caption) {
        tl.to(caption, {
          opacity: 0,
          y: 12,
          duration: 0.4,
          ease: "power1.in",
        });
      }

      tl.to(
        frame,
        {
          width: initialWidth,
          height: initialHeight,
          borderTopLeftRadius: initialRadius,
          borderBottomRightRadius: initialRadius,
          borderTopRightRadius: "0px",
          borderBottomLeftRadius: "0px",
          borderWidth: initialBorderWidth,
          borderColor: "#C59B27",
          duration: 1.1,
          ease: "power2.inOut",
        },
        caption ? "<0.2" : "+=0"
      );

      tl.to(
        image,
        {
          scale: 2.3,
          transformOrigin: "51.4% 58%",
          duration: 1.1,
          ease: "power2.inOut",
        },
        "<"
      );

      if (borderOverlay) {
        tl.to(
          borderOverlay,
          {
            opacity: 1,
            duration: 0.7,
            ease: "power1.in",
          },
          "<0.3"
        );
      }

      // ScrollTrigger triggers the auto-zoom whenever the section is in view
      ScrollTrigger.create({
        trigger: container,
        start: "top 75%",
        end: "bottom 25%",
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
      });

      // Pause auto-loop on hover so user can inspect without interruption
      const handleMouseEnter = () => tl.pause();
      const handleMouseLeave = () => tl.resume();

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="campus"
      ref={containerRef}
      className="relative w-full h-[70vh] sm:h-[80vh] md:h-[85vh] bg-white overflow-hidden flex items-center justify-center p-0 m-0"
      aria-label="KR Arts and Science College Campus Architecture"
    >
      {/* Animated Expanding Framing Card (Signature Diagonal Cut & Zero Shadow) */}
      <div
        ref={frameRef}
        className="relative overflow-hidden will-change-transform flex items-center justify-center bg-white border-2 border-[#C59B27] rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none w-[300px] h-[300px] sm:w-[440px] sm:h-[360px] shadow-none cursor-pointer"
      >
        {/* Animated Gold Shimmer Border & Viewfinder Focus Corners */}
        <div
          ref={borderOverlayRef}
          className="absolute inset-0 pointer-events-none z-20 rounded-[inherit]"
        >
          {/* Pulsing subtle gold border accent */}
          <div className="absolute inset-0 border border-[#F5B83D]/80 rounded-[inherit] animate-pulse" />

          {/* Viewfinder Lens Corner Accents */}
          <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#F5B83D]" />
          <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#F5B83D]" />
          <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#F5B83D]" />
          <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#F5B83D]" />
        </div>

        {/* Zooming / Scaling Campus Image */}
        <div
          ref={imageRef}
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{
            transform: "scale(2.3)",
            transformOrigin: "51.4% 58%",
          }}
        >
          <Image
            src="/images/campus/kr_campus.png"
            alt="KR Arts and Science College Main Campus Arch and Building"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Bottom gradient overlay for typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Reveal Caption when Zoom Out Completes */}
        <div
          ref={captionRef}
          className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 right-6 sm:right-12 z-20 flex flex-col items-start gap-2 pointer-events-none"
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
    </section>
  );
}
