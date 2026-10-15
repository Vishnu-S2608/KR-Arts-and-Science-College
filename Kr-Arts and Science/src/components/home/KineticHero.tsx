"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function KineticHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const heroSection = sectionRef.current;
    if (!heroSection) return;

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;

    // Helper to split text into chars
    const splitChars = (el: HTMLElement | null) => {
      if (!el) return [];
      const text = el.textContent || "";
      el.innerHTML = "";
      const chars: HTMLElement[] = [];

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const box = document.createElement("span");
        box.className = "kinetic-char-box";

        const span = document.createElement("span");
        span.className = "kinetic-char";
        if (char === " ") {
          span.classList.add("is-space");
          span.innerHTML = "&nbsp;";
        } else {
          span.textContent = char;
        }

        box.appendChild(span);
        el.appendChild(box);
        chars.push(span);
      }
      return chars;
    };

    const line1Base = heroSection.querySelector<HTMLElement>(".kinetic-headline .line-1 .headline-line-inner");
    const line2Base = heroSection.querySelector<HTMLElement>(".kinetic-headline .line-2 .headline-line-inner");
    const line1Spot = heroSection.querySelector<HTMLElement>("#headlineSpotlight .line-1 .headline-line-inner");
    const line2Spot = heroSection.querySelector<HTMLElement>("#headlineSpotlight .line-2 .headline-line-inner");

    const chars1 = splitChars(line1Base);
    const chars2 = splitChars(line2Base);
    const charsSpot1 = splitChars(line1Spot);
    const charsSpot2 = splitChars(line2Spot);

    const allChars = [...chars1, ...chars2, ...charsSpot1, ...charsSpot2];

    const eyebrowLines = heroSection.querySelectorAll(".eyebrow-line");
    const eyebrowText = heroSection.querySelector(".eyebrow-text");
    const motto = heroSection.querySelector("#kineticMotto");
    const sentence = heroSection.querySelector(".kinetic-sentence");
    const applyBtn = heroSection.querySelector("#heroApplyBtn");
    const exploreBtn = heroSection.querySelector("#heroExploreBtn");
    const bandA = heroSection.querySelector<HTMLElement>("#marqueeBandA .marquee-track");
    const bandB = heroSection.querySelector<HTMLElement>("#marqueeBandB .marquee-track");
    const scrollCue = heroSection.querySelector(".kinetic-scroll-cue");

    // Marquee tickers
    let marqueeAX = 0;
    let marqueeBX = 0;

    const tickerCallback = () => {
      if (bandA) {
        marqueeAX -= 0.8;
        if (Math.abs(marqueeAX) >= bandA.scrollWidth / 2) marqueeAX = 0;
        bandA.style.transform = `translateX(${marqueeAX}px)`;
      }
      if (bandB) {
        marqueeBX += 0.8;
        if (marqueeBX >= 0) marqueeBX = -bandB.scrollWidth / 2;
        bandB.style.transform = `translateX(${marqueeBX}px)`;
      }
    };

    gsap.ticker.add(tickerCallback);

    // Headline cursor spotlight tracker
    const spotlightLayer = heroSection.querySelector<HTMLElement>("#headlineSpotlight");
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightLayer || isTouch) return;
      const rect = spotlightLayer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlightLayer.style.maskPosition = `${x}px ${y}px`;
      spotlightLayer.style.webkitMaskPosition = `${x}px ${y}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Entrance sequence
    const startEntrance = () => {
      if (isReducedMotion) {
        gsap.set(allChars, { opacity: 1, rotateX: 0, yPercent: 0 });
        gsap.set([eyebrowLines, eyebrowText, motto, sentence, applyBtn, exploreBtn, scrollCue], { opacity: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        eyebrowLines,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, transformOrigin: "center" }
      );

      tl.fromTo(
        eyebrowText,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );

      tl.fromTo(
        allChars,
        { opacity: 0, yPercent: 100, rotateX: -60 },
        {
          opacity: 1,
          yPercent: 0,
          rotateX: 0,
          stagger: 0.02,
          duration: 0.8,
          ease: "back.out(1.5)",
        },
        "-=0.3"
      );

      tl.fromTo(
        [motto, sentence],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 },
        "-=0.4"
      );

      tl.fromTo(
        [applyBtn, exploreBtn],
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, stagger: 0.1, duration: 0.5, ease: "back.out(2)" },
        "-=0.2"
      );

      tl.fromTo(
        scrollCue,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2"
      );
    };

    // Listen for preloader:done
    const isPreloaderDone = (window as unknown as { __preloaderDone?: boolean }).__preloaderDone;
    if (isPreloaderDone || !document.getElementById("preloader")) {
      startEntrance();
    } else {
      window.addEventListener("preloader:done", startEntrance, { once: true });
    }

    return () => {
      gsap.ticker.remove(tickerCallback);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="kinetic-hero-section" id="hero" ref={sectionRef} aria-label="KR Arts And Science College Hero">
      <div className="hero-bg-layer" aria-hidden="true">
        <img src="/images/hero/hero-bg.png" alt="" className="hero-bg-img" fetchPriority="high" />
      </div>

      <div className="kinetic-hero-stage">
        {/* 1. Eyebrow */}
        <div className="kinetic-eyebrow">
          <span className="eyebrow-line left-line" aria-hidden="true"></span>
          <span className="eyebrow-text">KR ARTS AND SCIENCE COLLEGE &bull; PERAIYUR, MADURAI</span>
          <span className="eyebrow-line right-line" aria-hidden="true"></span>
        </div>

        {/* 2. Headline with Spotlight Layer */}
        <h1 className="kinetic-headline" id="kineticHeadline">
          <div className="headline-line-wrap line-1" data-line="1">
            <span className="headline-line-inner">Where Ambition</span>
          </div>
          <div className="headline-line-wrap line-2" data-line="2">
            <span className="headline-line-inner">Meets Opportunity.</span>
          </div>

          <div className="headline-spotlight-layer" id="headlineSpotlight" aria-hidden="true">
            <div className="headline-line-wrap line-1">
              <span className="headline-line-inner">Where Ambition</span>
            </div>
            <div className="headline-line-wrap line-2">
              <span className="headline-line-inner">Meets Opportunity.</span>
            </div>
          </div>
        </h1>

        {/* 3. Tamil motto + Supporting sentence */}
        <div className="kinetic-motto" id="kineticMotto" lang="ta">
          <span className="motto-inner">உள்ளுவதெல்லாம் உயர்வுள்ளல்</span>
        </div>
        <p className="kinetic-sentence">
          Industry-ready degrees, global MoUs and a 100% placement focus.
        </p>

        {/* 4. Action Buttons */}
        <div className="kinetic-btn-row">
          <Link href="/apply" className="kinetic-btn-apply" id="heroApplyBtn">
            <span className="btn-fill-sweep" aria-hidden="true"></span>
            <span className="btn-text">Apply Now</span>
            <span className="btn-arrow-css" aria-hidden="true"></span>
          </Link>
          <a href="#programmes" className="kinetic-btn-explore" id="heroExploreBtn">
            <span className="btn-fill-sweep" aria-hidden="true"></span>
            <span className="btn-text">Explore Programmes</span>
          </a>
        </div>

        {/* 5. Dual Running Marquee Bands */}
        <div className="kinetic-marquees-wrapper" aria-hidden="true">
          <div className="marquee-band band-a" id="marqueeBandA">
            <div className="marquee-track">
              <span className="marquee-item">
                ARTS <span className="gold-sep"></span> SCIENCE <span className="gold-sep"></span> COMMERCE <span className="gold-sep"></span> TECHNOLOGY <span className="gold-sep"></span> AVIATION <span className="gold-sep"></span> LEADERSHIP <span className="gold-sep"></span>
              </span>
              <span className="marquee-item">
                ARTS <span className="gold-sep"></span> SCIENCE <span className="gold-sep"></span> COMMERCE <span className="gold-sep"></span> TECHNOLOGY <span className="gold-sep"></span> AVIATION <span className="gold-sep"></span> LEADERSHIP <span className="gold-sep"></span>
              </span>
              <span className="marquee-item">
                ARTS <span className="gold-sep"></span> SCIENCE <span className="gold-sep"></span> COMMERCE <span className="gold-sep"></span> TECHNOLOGY <span className="gold-sep"></span> AVIATION <span className="gold-sep"></span> LEADERSHIP <span className="gold-sep"></span>
              </span>
            </div>
          </div>

          <div className="marquee-band band-b" id="marqueeBandB">
            <div className="marquee-track">
              <span className="marquee-item">
                TAMIL <span className="gold-sep"></span> ENGLISH <span className="gold-sep"></span> COMPUTER SCIENCE <span className="gold-sep"></span> AI <span className="gold-sep"></span> CRIMINOLOGY <span className="gold-sep"></span> MATHEMATICS <span className="gold-sep"></span> CHEMISTRY <span className="gold-sep"></span> HOME SCIENCE <span className="gold-sep"></span> PHYSICAL EDUCATION <span className="gold-sep"></span>
              </span>
              <span className="marquee-item">
                TAMIL <span className="gold-sep"></span> ENGLISH <span className="gold-sep"></span> COMPUTER SCIENCE <span className="gold-sep"></span> AI <span className="gold-sep"></span> CRIMINOLOGY <span className="gold-sep"></span> MATHEMATICS <span className="gold-sep"></span> CHEMISTRY <span className="gold-sep"></span> HOME SCIENCE <span className="gold-sep"></span> PHYSICAL EDUCATION <span className="gold-sep"></span>
              </span>
            </div>
          </div>
        </div>

        {/* 6. Looping "SCROLL" cue line */}
        <div className="kinetic-scroll-cue" aria-hidden="true">
          <span className="cue-label">SCROLL</span>
          <div className="cue-track">
            <div className="cue-draw-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
