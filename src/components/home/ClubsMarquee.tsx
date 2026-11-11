"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CLUBS_ROW_1 = [
  "NATIONAL CADET CORPS (NCC)",
  "KR LEADERS CLUB",
  "TRAINING & PLACEMENT CELL",
  "SPORTS & ATHLETICS CLUB",
  "GREEN CLUB ECO PRESERVATION",
  "UNNAT BHARAT ABHIYAN",
  "ART, CRAFT & LITERARY SOCIETY",
];

const CLUBS_ROW_2 = [
  "NATIONAL SERVICE SCHEME (NSS)",
  "YOUTH RED CROSS (YRC)",
  "RED RIBBON CLUB",
  "WOMEN EMPOWERMENT CELL",
  "INNOVATION & CODING HUB",
  "FINE ARTS & CULTURAL CLUB",
  "CITIZEN CONSUMER CLUB",
  "CAREER GUIDANCE FORUM",
];

export default function ClubsMarquee() {
  const marqueeA = useRef<HTMLDivElement>(null);
  const marqueeB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let xA = 0;
    let xB = 0;
    const speed = 0.85;

    // Initialize marqueeB offset so it flows seamlessly from left to right
    if (marqueeB.current) {
      xB = -marqueeB.current.scrollWidth / 2;
    }

    const ticker = () => {
      // Row 1: Right to Left motion (Soft Tone)
      if (marqueeA.current) {
        xA -= speed;
        const halfWidthA = marqueeA.current.scrollWidth / 2;
        if (Math.abs(xA) >= halfWidthA) {
          xA = 0;
        }
        marqueeA.current.style.transform = `translateX(${xA}px)`;
      }

      // Row 2: Left to Right motion (Solid Deep Navy)
      if (marqueeB.current) {
        xB += speed;
        const halfWidthB = marqueeB.current.scrollWidth / 2;
        if (xB >= 0) {
          xB = -halfWidthB;
        }
        marqueeB.current.style.transform = `translateX(${xB}px)`;
      }
    };

    gsap.ticker.add(ticker);
    return () => gsap.ticker.remove(ticker);
  }, []);

  return (
    <section
      id="clubs"
      className="py-4 sm:py-5 bg-gradient-to-r from-[#FBF2D4]/25 via-white to-[#FBF2D4]/25 border-y border-[#0334A0]/10 overflow-hidden relative select-none w-full"
      aria-label="Student Clubs and Societies"
    >
      <div className="flex flex-col gap-3 sm:gap-4 relative z-10">
        {/* Row 1: Soft-Tone Text — Right to Left motion */}
        <div className="overflow-hidden whitespace-nowrap flex">
          <div ref={marqueeA} className="flex shrink-0 will-change-transform">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center shrink-0">
                {CLUBS_ROW_1.map((item, idx) => (
                  <span key={idx} className="flex items-center">
                    <span className="font-marquee text-2xl sm:text-3xl lg:text-4xl uppercase text-[#0334A0]/30 tracking-wide">
                      {item}
                    </span>
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shrink-0 mx-5 sm:mx-7" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Deep Midnight Navy Solid Text — Left to Right motion */}
        <div className="overflow-hidden whitespace-nowrap flex">
          <div ref={marqueeB} className="flex shrink-0 will-change-transform">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center shrink-0">
                {CLUBS_ROW_2.map((item, idx) => (
                  <span key={idx} className="flex items-center">
                    <span className="font-marquee text-2xl sm:text-3xl lg:text-4xl uppercase text-[#021B4E] tracking-wide">
                      {item}
                    </span>
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shrink-0 mx-5 sm:mx-7" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
