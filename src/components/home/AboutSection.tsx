"use client";

import { useState, useEffect, useRef } from "react";
import LifeAtKR from "./LifeAtKR";

export default function AboutSection() {
  const [activeStrip, setActiveStrip] = useState<number>(0);

  // Animated Count-Up Odometer for the 4 Key Facts
  const [counts, setCounts] = useState({
    year: 1980,
    programmes: 0,
    placement: 0,
    offers: 0,
  });

  const factsRef = useRef<HTMLDivElement>(null);

  const strips = [
    {
      id: "stripStudents",
      title: "STUDENTS",
      src: "/kr_student.jpg",
      alt: "Students at KR Arts and Science College",
    },
    {
      id: "stripCampus",
      title: "CAMPUS",
      src: "/kr_campus_2.png",
      alt: "Campus entrance gate of KR Arts and Science College",
    },
    {
      id: "stripLibrary",
      title: "LIBRARY",
      src: "/kr_lib.webp",
      alt: "Library and learning commons at KR Arts and Science College",
    },
  ];

  // Automatically cycle through the 3 photos every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStrip((prev) => (prev + 1) % strips.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [strips.length]);

  useEffect(() => {
    let animFrameId: number;

    const runCountUp = () => {
      const duration = 1600; // ms
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);

        setCounts({
          year: Math.floor(ease * (2023 - 1980) + 1980),
          programmes: Math.floor(ease * 11),
          placement: Math.floor(ease * 100),
          offers: Math.floor(ease * 70),
        });

        if (progress < 1) {
          animFrameId = requestAnimationFrame(step);
        } else {
          setCounts({ year: 2023, programmes: 11, placement: 100, offers: 70 });
        }
      };

      cancelAnimationFrame(animFrameId);
      animFrameId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          runCountUp();
        } else {
          // Reset numbers when scrolled out of view so it animates every time
          setCounts({ year: 1980, programmes: 0, placement: 0, offers: 0 });
        }
      },
      { threshold: 0.2 },
    );

    if (factsRef.current) {
      observer.observe(factsRef.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <section
      className="about-windows-section"
      id="about"
      aria-label="About KR Arts And Science College"
    >
      {/* SCENE 1: SPLIT PANEL (Matching Reference Image) */}
      <div className="split-panel-scene-1" id="windowsScene1">
        <div className="split-panel-body" id="splitPanelBody">
          {/* LEFT PANEL: Compact Text Side with Key Facts & Odometer Effects */}
          <div className="split-left-panel" id="splitLeftPanel">
            <div className="split-left-content" id="splitLeftContent">
              {/* Eyebrow: Gold Accent Line + "ABOUT US" */}
              <div className="split-eyebrow">
                <span
                  className="eyebrow-line"
                  id="splitEyebrowLine"
                  aria-hidden="true"
                ></span>
                <span className="eyebrow-text" id="splitEyebrowText">
                  ABOUT US
                </span>
              </div>

              {/* Grand Headline: "We build futures in Peraiyur, for everyone." with wavy underline on "futures" */}
              <h2 className="split-headline" id="splitHeadline">
                <span className="sr-only">
                  We build futures in Peraiyur, for everyone.
                </span>

                <span className="headline-line" aria-hidden="true">
                  <span className="word-mask">
                    <span className="word">We</span>
                  </span>
                  <span className="word-mask">
                    <span className="word">build</span>
                  </span>
                  <span className="word-mask">
                    <span className="word styled-futures">
                      futures
                      <svg
                        className="wavy-underline-svg"
                        viewBox="0 0 160 18"
                        fill="none"
                        aria-hidden="true"
                      >
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
                  <span className="word-mask">
                    <span className="word">in</span>
                  </span>
                  <span className="word-mask">
                    <span className="word">Peraiyur,</span>
                  </span>
                </span>

                <span className="headline-line" aria-hidden="true">
                  <span className="word-mask">
                    <span className="word">for</span>
                  </span>
                  <span className="word-mask">
                    <span className="word">everyone.</span>
                  </span>
                </span>
              </h2>

              {/* Subline: Madurai Kamaraj University kept cleanly on the next line */}
              <p className="split-subline" id="splitSubline">
                <span className="subline-college">
                  KR Arts And Science College
                </span>
                <span className="subline-univ">
                  Madurai Kamaraj University &bull; Est. 2023
                </span>
              </p>

              {/* Key Facts: 2 Rows (2023 Founded | 11 Programmes) & (100% Placement | 70+ Offers) */}
              <div
                ref={factsRef}
                className="split-facts-container"
                id="splitFactsContainer"
                role="group"
                aria-label="Key College Facts"
              >
                {/* Row 1: 2023 Founded & 11 Programmes */}
                <div className="split-facts-row">
                  <div className="fact-col group">
                    <span className="fact-number">{counts.year}</span>
                    <span className="fact-label">Founded</span>
                  </div>
                  <div className="fact-divider" aria-hidden="true"></div>
                  <div className="fact-col group">
                    <span className="fact-number">{counts.programmes}</span>
                    <span className="fact-label">Programmes</span>
                  </div>
                </div>

                {/* Row 2: 100% Placement & 70+ Offers */}
                <div className="split-facts-row">
                  <div className="fact-col group">
                    <span className="fact-number">
                      {`${counts.placement}%`}
                    </span>
                    <span className="fact-label">Placement</span>
                  </div>
                  <div className="fact-divider" aria-hidden="true"></div>
                  <div className="fact-col group">
                    <span className="fact-number">{`${counts.offers}+`}</span>
                    <span className="fact-label">Offers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Photo Accordion Strips (Auto-cycles every 4s, pauses on hover) */}
          <div
            className="split-right-strips"
            id="splitRightStrips"
            role="tablist"
            aria-label="Campus Highlights"
          >
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
                <span className="strip-label-vertical" aria-hidden="true">
                  {strip.title}
                </span>
                <div className="strip-label-card" role="tabpanel">
                  <span className="strip-card-title">{strip.title}</span>
                </div>
                <div className="strip-progress-bar" aria-hidden="true">
                  <span className="strip-progress-fill"></span>
                </div>
              </button>
            ))}

            {/* ROTATING SEAL BADGE OVERLAPPING SEAM */}
            <div
              className="split-seam-seal"
              id="splitSeamSeal"
              aria-hidden="true"
            >
              <div className="seal-inner-circle">
                <img
                  className="seal-college-logo"
                  src="/assets/logo.jpeg"
                  alt="KR College Seal Logo"
                  width="52"
                  height="52"
                />
                <svg
                  className="seal-text-ring-svg"
                  viewBox="0 0 112 112"
                  width="112"
                  height="112"
                >
                  <defs>
                    <path
                      id="splitBadgeSealPath"
                      d="M 56, 56 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                      fill="none"
                    />
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
      </div>
      {/* Campus Life & Facilities Showcase (Immediately after 3-Image Animation) */}
      <LifeAtKR />
    </section>
  );
}
