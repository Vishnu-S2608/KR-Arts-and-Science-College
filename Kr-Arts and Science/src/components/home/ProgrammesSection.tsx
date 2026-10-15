"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ProgrammeItem {
  number: string;
  title: string;
  description: string;
  slug: string;
  image?: string;
}

const PROGRAMMES_LIST: ProgrammeItem[] = [
  {
    number: "01",
    title: "B.Sc Artificial Intelligence",
    description: "Machine learning, neural networks, predictive modeling, and intelligent computing algorithms.",
    slug: "ai",
    image: "/images/computer-lab.png",
  },
  {
    number: "02",
    title: "B.Com (Computer Applications)",
    description: "Corporate accounting, taxation systems, computerized business solutions, and e-commerce.",
    slug: "commerce",
  },
  {
    number: "03",
    title: "BBA Aviation Management",
    description: "Airport ground operations, airline dispatch, aviation logistics, and passenger handling protocols.",
    slug: "aviation",
  },
  {
    number: "04",
    title: "B.Sc Computer Science",
    description: "Data structures, full stack architectures, DBMS, cloud computing, and cyber security principles.",
    slug: "cs",
    image: "/images/computer-lab.png",
  },
  {
    number: "05",
    title: "B.A Tamil",
    description: "Classical Sangam literature, epigraphy, modern linguistics, journalism, and Tamil creative arts.",
    slug: "tamil",
  },
  {
    number: "06",
    title: "B.A Criminology & Police Admin",
    description: "Penology, criminal psychology, forensic investigation fundamentals, and administrative law.",
    slug: "criminology",
  },
  {
    number: "07",
    title: "B.A English",
    description: "British, American & Postcolonial literatures, critical analysis, phonetics, and professional communication.",
    slug: "english",
  },
  {
    number: "08",
    title: "B.Sc Physical Education",
    description: "Kinesiology, sports physiology, athletic coaching techniques, nutrition, and event management.",
    slug: "physical-education",
  },
  {
    number: "09",
    title: "B.Sc Chemistry",
    description: "Organic synthesis, inorganic structures, analytical spectrophotometry, and industrial laboratory methods.",
    slug: "chemistry",
  },
  {
    number: "10",
    title: "B.Sc Home Science (Nutrition & Dietetics)",
    description: "Clinical dietetics, food chemistry, public health nutrition planning, and culinary science.",
    slug: "home-science",
  },
  {
    number: "11",
    title: "B.Sc Mathematics",
    description: "Real and complex analysis, linear algebra, discrete mathematics, and applied operations research.",
    slug: "mathematics",
  },
];

export default function ProgrammesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Horizontal scroll on desktop
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1025px)", () => {
      const totalScroll = track.scrollWidth - container.clientWidth;
      if (totalScroll > 0) {
        gsap.to(track, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 20%",
            end: () => `+=${totalScroll + 300}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    // 3D Tilt on hover for cards
    const cards = track.querySelectorAll<HTMLElement>(".programme-card");
    const cleanupCards: Array<() => void> = [];

    cards.forEach((card) => {
      const onMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, {
          rotationY: x * 8,
          rotationX: -y * 8,
          transformPerspective: 800,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const onMouseLeave = () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);

      cleanupCards.push(() => {
        card.removeEventListener("mousemove", onMouseMove);
        card.removeEventListener("mouseleave", onMouseLeave);
      });
    });

    return () => {
      mm.revert();
      cleanupCards.forEach((fn) => fn());
    };
  }, []);

  return (
    <section className="section-wrapper bg-gray-tint" id="programmes">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Academic Degrees</div>
          <h2>11 Undergraduate Programmes</h2>
          <p style={{ maxWidth: "620px" }}>
            Curated curricula designed in accordance with Madurai Kamaraj University regulations, coupled with specialized value-added industry modules.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="programmes-container" ref={containerRef}>
        <div className="programmes-track" ref={trackRef}>
          {PROGRAMMES_LIST.map((prog) => (
            <article key={prog.number} className="programme-card">
              <div className="programme-card-media">
                <span className="programme-number">{prog.number}</span>
                {prog.image ? (
                  <img src={prog.image} alt={`${prog.title} Lab`} loading="lazy" />
                ) : (
                  <div className="photo-placeholder">
                    <div className="placeholder-line"></div>
                    Photo to be added
                  </div>
                )}
              </div>
              <div className="programme-card-body">
                <div>
                  <span className="text-pill" style={{ marginBottom: "0.65rem" }}>
                    3 Years Regular
                  </span>
                  <h3 className="programme-title">{prog.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--gray-600)", marginTop: "0.5rem" }}>
                    {prog.description}
                  </p>
                </div>
                <Link href={`/department/${prog.slug}`} className="link-explore">
                  Explore Programme
                  <svg className="arrow-icon" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
