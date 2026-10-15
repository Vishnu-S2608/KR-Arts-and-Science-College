"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import placementsData from "@/data/placements.json";

function getInitials(fullName: string) {
  if (!fullName) return "";
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

interface Student {
  id: string;
  name: string;
  offers: number;
  photo: string;
}

const RECRUITERS_LIST = [
  "Besant Technologies",
  "Best Money Gold",
  "Maruti Suzuki",
  "Bhima Jewellers",
  "Pothys",
  "Theni Anantham",
  "BDreamz Global Solution",
];

export default function PlacementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);

  // 1. Data Sorting: Highest offers first, ties alphabetical (as in placements.js)
  const sortedStudents = [...(placementsData as Student[])].sort((a, b) => {
    if (b.offers !== a.offers) return b.offers - a.offers;
    return a.name.localeCompare(b.name);
  });

  const row1 = sortedStudents.slice(0, 6);
  const row2 = sortedStudents.slice(6, 12);
  const row3 = sortedStudents.slice(12, 18);

  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const track3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    // Numbers count-up
    const placedNum = section.querySelector("#placementsPlacedNum");
    const offersNum = section.querySelector("#placementsOffersNum");

    if (placedNum) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: 18,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: placedNum,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          placedNum.textContent = `${Math.round(obj.val)}`;
        },
      });
    }

    if (offersNum) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: 70,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: offersNum,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          offersNum.textContent = `${Math.round(obj.val)}`;
        },
      });
    }

    // Running Rows Marquee ticker
    let x1 = 0;
    let x2 = 0;
    let x3 = 0;

    const tickerCb = () => {
      if (paused) return;

      const t1 = track1Ref.current;
      const t2 = track2Ref.current;
      const t3 = track3Ref.current;

      if (t1) {
        x1 -= 1.0;
        if (Math.abs(x1) >= t1.scrollWidth / 2) x1 = 0;
        t1.style.transform = `translateX(${x1}px)`;
      }

      if (t2) {
        x2 += 1.0;
        if (x2 >= 0) x2 = -t2.scrollWidth / 2;
        t2.style.transform = `translateX(${x2}px)`;
      }

      if (t3) {
        x3 -= 1.0;
        if (Math.abs(x3) >= t3.scrollWidth / 2) x3 = 0;
        t3.style.transform = `translateX(${x3}px)`;
      }
    };

    gsap.ticker.add(tickerCb);
    return () => gsap.ticker.remove(tickerCb);
  }, [paused]);

  const renderStudentItem = (student: Student, idx: number, isDup = false) => {
    return (
      <div
        key={`${student.id}-${idx}-${isDup ? "dup" : "orig"}`}
        className="student-item"
        tabIndex={isDup ? -1 : 0}
        role={isDup ? undefined : "listitem"}
        aria-hidden={isDup ? "true" : undefined}
      >
        <div className="student-photo-frame">
          <img
            className="student-photo"
            src={student.photo}
            alt={isDup ? "" : `${student.name}, placed student`}
            width={400}
            height={500}
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const initials = target.nextElementSibling as HTMLElement;
              if (initials) initials.style.display = "flex";
            }}
          />
          <div className="student-initials" style={{ display: "none" }} aria-hidden="true">
            {getInitials(student.name)}
          </div>
        </div>
        <h3 className="student-name">{student.name}</h3>
        <p className="student-offers">{student.offers === 1 ? "1 offer" : `${student.offers} offers`}</p>
      </div>
    );
  };

  return (
    <section
      className="placements-section"
      id="placements"
      ref={sectionRef}
      aria-label="Placement Achievements and Placed Students"
    >
      {/* 1. HEADER */}
      <div className="placements-container">
        <header className="placements-header">
          <div className="placements-header-title">
            <span className="placements-label">Placements</span>
            <h2 className="placements-heading">
              100% Placement<br />Achievement
            </h2>
          </div>

          <div className="placements-stats" aria-label="Placement Statistics">
            <div className="placements-stat-box">
              <span className="placements-stat-number" id="placementsPlacedNum" aria-label="18 Students placed">
                18
              </span>
              <span className="placements-stat-label">Students placed</span>
            </div>

            <div className="placements-stat-divider" aria-hidden="true"></div>

            <div className="placements-stat-box">
              <span className="placements-stat-number" id="placementsOffersNum" aria-label="70 Offer letters">
                70
              </span>
              <span className="placements-stat-label">Offer letters</span>
            </div>
          </div>
        </header>
      </div>

      {/* 2. RUNNING ROWS */}
      <div className="placements-marquee-viewport" id="placementsMarqueeArea" aria-label="Placed students running rows">
        {/* Row 1: Leftward */}
        <div className="marquee-row-wrapper" data-row="1" data-direction="left">
          <div className="marquee-track" id="marqueeTrack1" ref={track1Ref}>
            {row1.map((s, i) => renderStudentItem(s, i, false))}
            {row1.map((s, i) => renderStudentItem(s, i, true))}
          </div>
        </div>

        {/* Row 2: Rightward */}
        <div className="marquee-row-wrapper" data-row="2" data-direction="right">
          <div className="marquee-track" id="marqueeTrack2" ref={track2Ref}>
            {row2.map((s, i) => renderStudentItem(s, i, false))}
            {row2.map((s, i) => renderStudentItem(s, i, true))}
          </div>
        </div>

        {/* Row 3: Leftward */}
        <div className="marquee-row-wrapper" data-row="3" data-direction="left">
          <div className="marquee-track" id="marqueeTrack3" ref={track3Ref}>
            {row3.map((s, i) => renderStudentItem(s, i, false))}
            {row3.map((s, i) => renderStudentItem(s, i, true))}
          </div>
        </div>
      </div>

      <div className="placements-container">
        {/* Accessibility Pause / Resume Button */}
        <div className="marquee-controls">
          <button
            type="button"
            className="marquee-toggle-btn"
            id="marqueeToggleBtn"
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            {paused ? "Resume" : "Pause"}
          </button>
        </div>

        {/* 3. RECRUITERS */}
        <div className="placements-recruiters">
          <div className="placements-recruiters-divider" aria-hidden="true"></div>

          <span className="placements-label recruiters-label">Our recruiters</span>

          <div className="placements-recruiters-list" id="placementsRecruitersList">
            {RECRUITERS_LIST.map((rec, idx) => (
              <span key={idx} style={{ display: "contents" }}>
                <span className="recruiter-name">{rec}</span>
                {idx < RECRUITERS_LIST.length - 1 && (
                  <span className="recruiter-sep" aria-hidden="true"></span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* 4. LINK */}
        <div className="placements-action">
          <Link href="/apply" className="placements-apply-link">
            <span className="link-text">Apply for admission</span>
            <span className="link-underline" aria-hidden="true"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
