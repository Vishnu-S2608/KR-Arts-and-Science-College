"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CLUBS_LIST = [
  "NCC",
  "Art & Craft Club",
  "Training & Placement Cell",
  "Green Club",
  "Sports Club",
  "Unnat Bharat Abhiyan",
  "KR Leaders Club (2026)",
];

export default function ClubsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const marqueeTrack = trackRef.current;
    if (!marqueeTrack) return;

    let currentX = 0;
    let speed = -1.2;

    const tickerCallback = () => {
      currentX += speed;
      if (Math.abs(currentX) >= marqueeTrack.scrollWidth / 2) {
        currentX = 0;
      }
      marqueeTrack.style.transform = `translateX(${currentX}px)`;
    };

    gsap.ticker.add(tickerCallback);

    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        // If scrolling downwards, move left; if scrolling upwards, reverse direction to move right!
        speed = self.direction === 1 ? -2.5 : 2.5;
      },
    });

    return () => {
      gsap.ticker.remove(tickerCallback);
      st.kill();
    };
  }, []);

  return (
    <section className="clubs-marquee-wrapper" aria-label="Student Clubs and Societies">
      <div className="clubs-marquee-track" ref={trackRef}>
        {CLUBS_LIST.map((club, idx) => (
          <span key={`a-${idx}`}>
            <span className="marquee-club-text">{club}</span>
            <span className="marquee-separator">&#8226;</span>
          </span>
        ))}
        {CLUBS_LIST.map((club, idx) => (
          <span key={`b-${idx}`}>
            <span className="marquee-club-text">{club}</span>
            <span className="marquee-separator">&#8226;</span>
          </span>
        ))}
        {CLUBS_LIST.map((club, idx) => (
          <span key={`c-${idx}`}>
            <span className="marquee-club-text">{club}</span>
            <span className="marquee-separator">&#8226;</span>
          </span>
        ))}
      </div>
    </section>
  );
}
