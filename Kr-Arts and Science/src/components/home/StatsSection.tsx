"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STATS_DATA = [
  { target: 100, suffix: "%", label: "Placement Achievement" },
  { target: 18, suffix: "", label: "Graduating Students Placed" },
  { target: 70, suffix: "+", label: "Offer Letters Secured" },
  { target: 11, suffix: "", label: "Academic Programmes" },
  { target: 10, suffix: "+", label: "Green Campus Acres" },
  { target: 2023, suffix: "", label: "Year Established" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const statNumbers = section.querySelectorAll<HTMLElement>(".stat-num[data-target]");
    statNumbers.forEach((stat) => {
      const target = parseFloat(stat.getAttribute("data-target") || "0");
      const suffix = stat.getAttribute("data-suffix") || "";

      const counterObj = { val: 0 };
      gsap.to(counterObj, {
        val: target,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stat,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          stat.textContent = `${Math.round(counterObj.val)}${suffix}`;
        },
      });
    });
  }, []);

  return (
    <section className="section-wrapper section-dark stats-section-dark" id="numbers" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Institutional Milestones</div>
          <h2>Documented Facts &amp; Figures</h2>
        </div>

        <div className="stats-grid">
          {STATS_DATA.map((item, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-num" data-target={item.target} data-suffix={item.suffix}>
                0{item.suffix}
              </div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
