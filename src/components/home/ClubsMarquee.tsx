"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import gsap from "gsap";

const CLUBS_LIST = [
  { name: "National Cadet Corps (NCC)", badge: "Military Drill & Honor" },
  { name: "KR Leaders Club", badge: "New for 2026" },
  { name: "Training & Placement Cell", badge: "100% Placement Record" },
  { name: "Sports & Athletics Club", badge: "Championship Ground" },
  { name: "Green Club Eco Preservation", badge: "Clean Campus" },
  { name: "Unnat Bharat Abhiyan", badge: "Rural Village Outreach" },
  { name: "Art, Craft & Literary Society", badge: "Creative Expression" },
];

export default function ClubsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let currentX = 0;
    const ticker = () => {
      currentX -= 0.75;
      if (Math.abs(currentX) >= track.scrollWidth / 2) {
        currentX = 0;
      }
      track.style.transform = `translateX(${currentX}px)`;
    };

    gsap.ticker.add(ticker);
    return () => gsap.ticker.remove(ticker);
  }, []);

  return (
    <section className="py-6 bg-gradient-to-r from-sky-50 via-white to-sky-50 border-y border-sky-100 overflow-hidden relative" aria-label="Student Clubs and Societies">
      <div className="flex items-center">
        <div ref={trackRef} className="flex gap-6 whitespace-nowrap will-change-transform">
          {[...CLUBS_LIST, ...CLUBS_LIST].map((club, idx) => (
            <div key={idx} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-sky-200/80 shadow-sm text-xs sm:text-sm font-bold text-slate-800">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>{club.name}</span>
              <span className="text-[10px] font-semibold text-sky-700 bg-sky-100/70 px-2 py-0.5 rounded-full">
                {club.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
