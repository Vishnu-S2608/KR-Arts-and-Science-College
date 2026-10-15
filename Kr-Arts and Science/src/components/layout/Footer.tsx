"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const giantTitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const giantTitle = giantTitleRef.current;
    if (!giantTitle) return;

    gsap.fromTo(
      giantTitle,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: giantTitle,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        {/* Giant Outlined Text Reveal on Scroll */}
        <div className="footer-giant-title" ref={giantTitleRef} aria-hidden="true">
          KR ARTS &amp; SCIENCE
        </div>

        <div className="footer-grid">
          {/* Col 1: Identity & Motto */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div className="nav-logo-seal" style={{ width: "44px", height: "44px" }}>
                <img src="/assets/logo.jpeg" alt="KR College Logo" width={44} height={44} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--blue-900)", fontSize: "0.95rem" }}>
                  KR Arts And Science College
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--blue-700)", fontWeight: 600 }}>
                  Affiliated to Madurai Kamaraj University
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
              Established 2023 under KR Educational and Charitable Trust. Committed to holistic academic excellence, character building, and career empowerment.
            </p>
            <div className="tamil-motto" style={{ marginTop: "1rem", fontSize: "0.9375rem" }}>
              உள்ளுவதெல்லாம் உயர்வுள்ளல்
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#about">About Our Story</Link></li>
              <li><Link href="/#programmes">All 11 Programmes</Link></li>
              <li><Link href="/apply">Admissions</Link></li>
              <li><Link href="/#placements">100% Placements</Link></li>
              <li><Link href="/clubs">Student Clubs</Link></li>
              <li><Link href="/events">Campus Chronicle</Link></li>
            </ul>
          </div>

          {/* Col 3: Academic Departments */}
          <div>
            <div className="footer-col-title">Departments</div>
            <ul className="footer-links-list">
              <li><Link href="/department/ai">Artificial Intelligence</Link></li>
              <li><Link href="/department/commerce">Commerce (CA)</Link></li>
              <li><Link href="/department/aviation">Aviation Management</Link></li>
              <li><Link href="/department/cs">Computer Science</Link></li>
              <li><Link href="/department/tamil">Tamil</Link></li>
              <li><Link href="/department/criminology">Criminology &amp; Police Admin</Link></li>
              <li><Link href="/department/mathematics">Mathematics</Link></li>
            </ul>
          </div>

          {/* Col 4: Campus Contact & Connectivity */}
          <div>
            <div className="footer-col-title">Campus &amp; Connectivity</div>
            <p style={{ fontSize: "0.8125rem", lineHeight: 1.5, marginBottom: "0.5rem" }}>
              <strong>Campus Address:</strong><br />
              P. Thambipatti, Peraiyur Tk, Via T. Kallupatti,<br />
              Madurai - 625 703, Tamil Nadu.
            </p>
            <p style={{ fontSize: "0.8125rem", lineHeight: 1.5, marginBottom: "0.5rem" }}>
              <strong>Phone:</strong> +91 80722 97109 / 04549-299877<br />
              <strong>Email:</strong> info@krcolleges.in
            </p>
            <p style={{ fontSize: "0.75rem", color: "var(--gray-600)", lineHeight: 1.4, marginBottom: "0.75rem" }}>
              Nearest Railway: Thirumangalam (25 km), Virudhunagar (25 km).<br />
              Madurai Airport: 50 km &#8226; Madurai Bus Stand: 60 km.
            </p>

            {/* Google Map Embed */}
            <div className="footer-map-embed" style={{ borderRadius: "var(--radius-md)", overflow: "hidden", height: "130px" }}>
              <iframe
                title="KR Arts And Science College Location"
                src="https://maps.google.com/maps?q=KR%20Arts%20and%20Science%20College%20Peraiyur%20Madurai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar (Social Links as TEXT only) */}
        <div className="footer-bottom">
          <div>
            &copy; 2026 KR Arts And Science College. All rights reserved.
          </div>
          <div className="footer-social-text-links" aria-label="Official Social Channels">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
