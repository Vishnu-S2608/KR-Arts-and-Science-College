"use client";

import { useState } from "react";
import gsap from "gsap";

interface LifeItem {
  id: number;
  number: string;
  title: string;
  image?: string;
  alt?: string;
  placeholderText?: string;
}

const LIFE_ITEMS: LifeItem[] = [
  {
    id: 0,
    number: "01",
    title: "Transport Connectivity",
    image: "/images/campus-hero.png",
    alt: "Campus Bus & Transport",
  },
  {
    id: 1,
    number: "02",
    title: "Clean & Green Campus",
    image: "/images/college-entrance.jpg",
    alt: "Green Campus",
  },
  {
    id: 2,
    number: "03",
    title: "Placement Training",
    image: "/images/library.png",
    alt: "Placement Training Facility",
  },
  {
    id: 3,
    number: "04",
    title: "Modern Infrastructure",
    image: "/images/computer-lab.png",
    alt: "Computing Infrastructure",
  },
  {
    id: 4,
    number: "05",
    title: "Individual Care & Mentorship",
    placeholderText: "Photo to be added (Mentorship)",
  },
  {
    id: 5,
    number: "06",
    title: "Innovative Teaching Methods",
    placeholderText: "Photo to be added (Smart Classrooms)",
  },
  {
    id: 6,
    number: "07",
    title: "Efficient & Dedicated Teachers",
    placeholderText: "Photo to be added (Faculty Team)",
  },
  {
    id: 7,
    number: "08",
    title: "Skill Development Cell",
    placeholderText: "Photo to be added (Skill Lab)",
  },
  {
    id: 8,
    number: "09",
    title: "Extra Curricular Vibrance",
    placeholderText: "Photo to be added (Sports & Arts)",
  },
];

export default function LifeAtKR() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleHover = (id: number) => {
    if (id === activeIndex) return;
    setActiveIndex(id);

    const layer = document.querySelector(`.life-photo-layer[data-index="${id}"]`);
    if (layer) {
      gsap.fromTo(
        layer,
        { clipPath: "circle(0% at 50% 50%)" },
        { clipPath: "circle(100% at 50% 50%)", duration: 0.6, ease: "power2.out" }
      );
    }
  };

  return (
    <section className="section-wrapper bg-blue-tint" id="life">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Student Life &amp; Infrastructure</div>
          <h2>Pillars of the Campus Experience</h2>
        </div>

        <div className="life-grid">
          {/* Interactive List */}
          <div className="life-list">
            {LIFE_ITEMS.map((item) => (
              <div
                key={item.id}
                className={`life-item ${activeIndex === item.id ? "active" : ""}`}
                data-index={item.id}
                onMouseEnter={() => handleHover(item.id)}
                onClick={() => handleHover(item.id)}
              >
                <span className="life-item-title">{item.title}</span>
                <span className="life-item-number">{item.number}</span>
              </div>
            ))}
          </div>

          {/* Photo Stage with Circular Clip-Path Reveal Swapping */}
          <div className="life-photo-stage">
            {LIFE_ITEMS.map((item) => (
              <div
                key={item.id}
                className={`life-photo-layer ${activeIndex === item.id ? "active" : ""}`}
                data-index={item.id}
              >
                {item.image ? (
                  <img src={item.image} alt={item.alt || item.title} loading="lazy" />
                ) : (
                  <div className="photo-placeholder">
                    <div className="placeholder-line"></div>
                    {item.placeholderText}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
