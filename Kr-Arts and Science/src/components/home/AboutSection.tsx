"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStrip, setActiveStrip] = useState<number>(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Rotating Seal SVG on seam
    const sealText = section.querySelector<SVGElement>(".seal-text-ring-svg");
    let sealRot = 0;
    const sealTicker = () => {
      sealRot += 0.35;
      if (sealText) sealText.style.transform = `rotate(${sealRot}deg)`;
    };
    gsap.ticker.add(sealTicker);

    // 2. Bottom Ribbon Marquee
    const ribbonTrack = section.querySelector<HTMLElement>("#splitRibbonTrack");
    let ribbonX = 0;
    const ribbonTicker = () => {
      if (ribbonTrack) {
        ribbonX -= 0.75;
        if (Math.abs(ribbonX) >= ribbonTrack.scrollWidth / 2) ribbonX = 0;
        ribbonTrack.style.transform = `translateX(${ribbonX}px)`;
      }
    };
    gsap.ticker.add(ribbonTicker);

    // Scene 1 Full Entrance Timeline
    const scene1 = section.querySelector<HTMLElement>("#windowsScene1");
    const leftPanel = scene1?.querySelector<HTMLElement>("#splitLeftPanel");
    const eyebrowLine = scene1?.querySelector<HTMLElement>("#splitEyebrowLine");
    const eyebrowText = scene1?.querySelector<HTMLElement>("#splitEyebrowText");
    const headlineWords = scene1?.querySelectorAll<HTMLElement>("#splitHeadline .word");
    const subline = scene1?.querySelector<HTMLElement>("#splitSubline");
    const factsRow = scene1?.querySelector<HTMLElement>("#splitFactsRow");
    const link = scene1?.querySelector<HTMLElement>("#splitLink");
    const stripsEls = scene1?.querySelectorAll<HTMLElement>(".photo-strip");
    const stripPhotos = scene1?.querySelectorAll<HTMLElement>(".strip-photo");
    const seamSeal = scene1?.querySelector<HTMLElement>("#splitSeamSeal");
    const bottomRibbon = scene1?.querySelector<HTMLElement>("#splitBottomRibbon");
    const wavyPath = section.querySelector<SVGPathElement>("#splitWavyUnderlinePath");

    if (scene1) {
      const enterTl = gsap.timeline({
        scrollTrigger: {
          trigger: scene1,
          start: "top 70%",
          once: true,
        },
      });

      if (leftPanel) {
        enterTl.fromTo(
          leftPanel,
          { clipPath: "inset(0% 100% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.0, ease: "expo.inOut" },
          0
        );
      }

      if (eyebrowLine) {
        enterTl.fromTo(eyebrowLine, { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power3.out" }, 0.3);
      }
      if (eyebrowText) {
        enterTl.fromTo(eyebrowText, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.32);
      }
      if (headlineWords && headlineWords.length > 0) {
        enterTl.fromTo(
          headlineWords,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.75, stagger: 0.06, ease: "power3.out" },
          0.3
        );
      }

      if (stripsEls && stripsEls.length > 0) {
        stripsEls.forEach((strip, idx) => {
          const photo = strip.querySelector(".strip-photo");
          const startTime = 0.5 + idx * 0.15;
          enterTl.fromTo(
            strip,
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "expo.inOut" },
            startTime
          );
          if (photo) {
            enterTl.fromTo(
              photo,
              { scale: 1.3 },
              { scale: 1.0, duration: 1.1, ease: "expo.inOut" },
              startTime
            );
          }
        });
      }

      if (wavyPath) {
        const len = wavyPath.getTotalLength() || 180;
        enterTl.fromTo(
          wavyPath,
          { strokeDasharray: len, strokeDashoffset: len },
          { strokeDashoffset: 0, duration: 0.8, ease: "power2.out" },
          0.8
        );
      }

      if (subline) {
        enterTl.fromTo(subline, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.75);
      }
      if (factsRow) {
        enterTl.fromTo(factsRow, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.8);
      }
      if (link) {
        enterTl.fromTo(link, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.85);
      }

      if (seamSeal) {
        enterTl.fromTo(seamSeal, { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }, 1.0);
      }
      if (bottomRibbon) {
        enterTl.fromTo(bottomRibbon, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 1.05);
      }
    }

    if (isReducedMotion) {
      return () => {
        gsap.ticker.remove(sealTicker);
        gsap.ticker.remove(ribbonTicker);
      };
    }

    // 4. Scene 2 Pinned Expanding Window
    const scene2 = section.querySelector<HTMLElement>("#windowsScene2");
    const revealBox = section.querySelector<HTMLElement>("#windowRevealBox");
    const progressBar = section.querySelector<HTMLElement>("#windowProgressBar");
    const captionCard = section.querySelector<HTMLElement>("#windowCaptionCard");

    if (scene2 && revealBox) {
      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: scene2,
          start: "top top",
          end: "+=120%",
          pin: true,
          scrub: 1,
        },
      });

      pinTl.fromTo(
        revealBox,
        { width: "42vw", height: "54svh", borderRadius: "24px" },
        { width: "100vw", height: "100svh", borderRadius: "0px", ease: "none" }
      );

      if (progressBar) {
        pinTl.fromTo(progressBar, { width: "0%" }, { width: "100%", ease: "none" }, 0);
      }

      if (captionCard) {
        pinTl.fromTo(
          captionCard,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.3
        );
      }
    }

    // 5. Scene 3 Facts Cross Grid Count-Up
    const factCells = section.querySelectorAll<HTMLElement>(".fact-cell[data-target]");
    factCells.forEach((cell) => {
      const target = parseFloat(cell.getAttribute("data-target") || "0");
      const suffix = cell.getAttribute("data-suffix") || "";
      const numEl = cell.querySelector(".fact-number");
      if (!numEl) return;

      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cell,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          numEl.textContent = `${Math.round(obj.val)}${suffix}`;
        },
      });
    });

    return () => {
      gsap.ticker.remove(sealTicker);
      gsap.ticker.remove(ribbonTicker);
    };
  }, []);

  const strips = [
    {
      id: "stripStudents",
      title: "STUDENTS",
      src: "/images/about/students.jpg",
      alt: "Students collaborating at KR Arts and Science College",
    },
    {
      id: "stripCampus",
      title: "CAMPUS",
      src: "/images/about/campus.jpg",
      alt: "Campus entrance gate of KR Arts and Science College",
    },
    {
      id: "stripEvents",
      title: "EVENTS",
      src: "/images/about/events.jpg",
      alt: "Learning commons and campus events at KR Arts and Science College",
    },
  ];

  return (
    <section className="about-windows-section" id="about" ref={sectionRef} aria-label="About KR Arts And Science College">
      {/* SCENE 1: SPLIT PANEL */}
      <div className="split-panel-scene-1" id="windowsScene1">
        <div className="split-panel-body" id="splitPanelBody">
          {/* LEFT PANEL */}
          <div className="split-left-panel" id="splitLeftPanel">
            <div className="split-left-content" id="splitLeftContent">
              <div className="split-eyebrow">
                <span className="eyebrow-line" id="splitEyebrowLine" aria-hidden="true"></span>
                <span className="eyebrow-text" id="splitEyebrowText">ABOUT US</span>
              </div>

              <h2 className="split-headline" id="splitHeadline">
                <span className="sr-only">We build futures in Peraiyur, for everyone.</span>

                <span className="headline-line" aria-hidden="true">
                  <span className="word-mask"><span className="word">We</span></span>
                  <span className="word-mask"><span className="word">build</span></span>
                  <span className="word-mask">
                    <span className="word styled-futures">
                      futures
                      <svg className="wavy-underline-svg" viewBox="0 0 160 18" fill="none" aria-hidden="true">
                        <path
                          className="wavy-underline-path"
                          id="splitWavyUnderlinePath"
                          d="M4 11 C 28 3, 44 17, 68 11 C 92 5, 108 17, 132 11 C 142 8, 150 10, 156 11"
                          stroke="rgba(232, 239, 249, 0.6)"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </span>

                <span className="headline-line" aria-hidden="true">
                  <span className="word-mask"><span className="word">in</span></span>
                  <span className="word-mask"><span className="word">Peraiyur,</span></span>
                </span>

                <span className="headline-line" aria-hidden="true">
                  <span className="word-mask"><span className="word">for</span></span>
                  <span className="word-mask"><span className="word">everyone.</span></span>
                </span>
              </h2>

              <p className="split-subline" id="splitSubline">
                KR Arts And Science College &bull; Madurai Kamaraj University &bull; Est. 2023
              </p>

              <div className="split-facts-row" id="splitFactsRow" role="group" aria-label="Key College Facts">
                <div className="fact-col">
                  <span className="fact-number">2023</span>
                  <span className="fact-label">Founded</span>
                </div>
                <div className="fact-divider" aria-hidden="true"></div>
                <div className="fact-col">
                  <span className="fact-number">11</span>
                  <span className="fact-label">Programmes</span>
                </div>
                <div className="fact-divider" aria-hidden="true"></div>
                <div className="fact-col">
                  <span className="fact-number">100%</span>
                  <span className="fact-label">Placement</span>
                </div>
              </div>

              <div className="split-cta-wrap">
                <a href="#windowsScene2" className="split-link" id="splitLink">
                  <span className="link-label">Our story</span>
                  <span className="link-sliding-line" aria-hidden="true"></span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Photo Accordion Strips */}
          <div className="split-right-strips" id="splitRightStrips" role="tablist" aria-label="Campus Highlights">
            {strips.map((strip, idx) => (
              <button
                key={strip.id}
                type="button"
                className={`photo-strip ${activeStrip === idx ? "is-active" : ""}`}
                id={strip.id}
                role="tab"
                aria-selected={activeStrip === idx}
                onClick={() => setActiveStrip(idx)}
                onMouseEnter={() => setActiveStrip(idx)}
              >
                <div className="strip-image-wrap">
                  <img
                    className="strip-photo"
                    src={strip.src}
                    alt={strip.alt}
                    loading="lazy"
                    width="640"
                    height="853"
                  />
                  <div className="strip-overlay" aria-hidden="true"></div>
                </div>
                <span className="strip-label-vertical" aria-hidden="true">{strip.title}</span>
                <div className="strip-label-card" role="tabpanel">
                  <span className="strip-card-title">{strip.title}</span>
                </div>
                <div className="strip-progress-bar" aria-hidden="true">
                  <span className="strip-progress-fill"></span>
                </div>
              </button>
            ))}

            {/* SEAL BADGE */}
            <div className="split-seam-seal" id="splitSeamSeal" aria-hidden="true">
              <div className="seal-inner-circle">
                <img className="seal-college-logo" src="/assets/logo.jpeg" alt="" width="52" height="52" />
                <svg className="seal-text-ring-svg" viewBox="0 0 112 112" width="112" height="112">
                  <defs>
                    <path id="splitBadgeSealPath" d="M 56, 56 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" fill="none" />
                  </defs>
                  <text className="seal-badge-text">
                    <textPath href="#splitBadgeSealPath" startOffset="0%">
                      KR ARTS AND SCIENCE COLLEGE &bull; EST. 2023 &bull;
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM RIBBON */}
        <div className="split-bottom-ribbon" id="splitBottomRibbon" aria-hidden="true">
          <div className="split-ribbon-track" id="splitRibbonTrack">
            <div className="split-ribbon-content">
              <span>ARTS</span><span className="ribbon-gold-dot"></span>
              <span>SCIENCE</span><span className="ribbon-gold-dot"></span>
              <span>COMMERCE</span><span className="ribbon-gold-dot"></span>
              <span>TECHNOLOGY</span><span className="ribbon-gold-dot"></span>
              <span>AVIATION</span><span className="ribbon-gold-dot"></span>
              <span>LEADERSHIP</span><span className="ribbon-gold-dot"></span>
              <span>TAMIL</span><span className="ribbon-gold-dot"></span>
              <span>ENGLISH</span><span className="ribbon-gold-dot"></span>
              <span>COMPUTER SCIENCE</span><span className="ribbon-gold-dot"></span>
              <span>AI</span><span className="ribbon-gold-dot"></span>
              <span>CRIMINOLOGY</span><span className="ribbon-gold-dot"></span>
              <span>MATHEMATICS</span><span className="ribbon-gold-dot"></span>
              <span>CHEMISTRY</span><span className="ribbon-gold-dot"></span>
              <span>HOME SCIENCE</span><span className="ribbon-gold-dot"></span>
              <span>PHYSICAL EDUCATION</span><span className="ribbon-gold-dot"></span>
            </div>
            <div className="split-ribbon-content" aria-hidden="true">
              <span>ARTS</span><span className="ribbon-gold-dot"></span>
              <span>SCIENCE</span><span className="ribbon-gold-dot"></span>
              <span>COMMERCE</span><span className="ribbon-gold-dot"></span>
              <span>TECHNOLOGY</span><span className="ribbon-gold-dot"></span>
              <span>AVIATION</span><span className="ribbon-gold-dot"></span>
              <span>LEADERSHIP</span><span className="ribbon-gold-dot"></span>
              <span>TAMIL</span><span className="ribbon-gold-dot"></span>
              <span>ENGLISH</span><span className="ribbon-gold-dot"></span>
              <span>COMPUTER SCIENCE</span><span className="ribbon-gold-dot"></span>
              <span>AI</span><span className="ribbon-gold-dot"></span>
              <span>CRIMINOLOGY</span><span className="ribbon-gold-dot"></span>
              <span>MATHEMATICS</span><span className="ribbon-gold-dot"></span>
              <span>CHEMISTRY</span><span className="ribbon-gold-dot"></span>
              <span>HOME SCIENCE</span><span className="ribbon-gold-dot"></span>
              <span>PHYSICAL EDUCATION</span><span className="ribbon-gold-dot"></span>
            </div>
          </div>
        </div>
      </div>

      {/* SCENE 2: EXPANDING PINNED WINDOW */}
      <div className="windows-scene-2" id="windowsScene2">
        <div className="window-pin-viewport" id="windowPinViewport">
          <div className="window-reveal-box" id="windowRevealBox">
            <img
              className="window-hero-img"
              id="windowHeroImg"
              src="/images/about/campus-wide.jpg"
              alt="Panoramic view of KR Arts And Science College Campus, Peraiyur"
              width="1920"
              height="1080"
              loading="lazy"
            />
            <div className="window-scrim" aria-hidden="true"></div>
          </div>

          <div className="window-caption-card" id="windowCaptionCard">
            <span className="caption-tag">PERAIYUR, MADURAI</span>
            <p className="caption-heading">Where KR Arts and Science College stands.</p>
          </div>

          <div className="window-progress-track" aria-hidden="true">
            <div className="window-progress-bar" id="windowProgressBar"></div>
          </div>
        </div>
      </div>

      {/* SCENE 3: AT A GLANCE */}
      <div className="windows-scene-3" id="windowsScene3">
        <div className="scene-3-container">
          <div className="scene-3-left">
            <span className="scene-3-label">At a glance</span>
            <h3 className="scene-3-heading">KR Arts and Science College</h3>
            <p className="scene-3-subline">Affiliated to Madurai Kamaraj University, Peraiyur, Madurai.</p>
            <Link href="/contact" className="scene-3-link">
              <span className="link-text">Know more about us</span>
              <span className="link-underline" aria-hidden="true"></span>
            </Link>
          </div>

          <div className="scene-3-right">
            <div className="facts-cross-grid" id="factsCrossGrid">
              <div className="fact-cell" data-target="2023" data-suffix="">
                <span className="fact-number" id="factNum1">2023</span>
                <span className="fact-label">Founded</span>
                <span className="fact-detail">Established in Peraiyur</span>
              </div>

              <div className="fact-cell" data-target="11" data-suffix="">
                <span className="fact-number" id="factNum2">11</span>
                <span className="fact-label">Programmes</span>
                <span className="fact-detail">Arts, science and commerce</span>
              </div>

              <div className="fact-cell" data-target="100" data-suffix="%">
                <span className="fact-number" id="factNum3">100%</span>
                <span className="fact-label">Placement</span>
                <span className="fact-detail">Career training achievement</span>
              </div>

              <div className="fact-cell" data-target="70" data-suffix="">
                <span className="fact-number" id="factNum4">70</span>
                <span className="fact-label">Offer letters</span>
                <span className="fact-detail">Secured across recruiters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
