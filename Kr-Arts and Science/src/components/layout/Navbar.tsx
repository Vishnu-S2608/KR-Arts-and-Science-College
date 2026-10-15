"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const navMenuRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 120 && currentScrollY > lastScrollY) {
        navbar?.classList.add("nav-hidden");
      } else {
        navbar?.classList.remove("nav-hidden");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sliding underline indicator & Magnetic buttons
  useEffect(() => {
    const navMenu = navMenuRef.current;
    const indicator = indicatorRef.current;

    if (navMenu && indicator) {
      const navLinks = navMenu.querySelectorAll<HTMLElement>(".nav-link");

      const moveIndicator = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        const menuRect = navMenu.getBoundingClientRect();
        const left = rect.left - menuRect.left;
        const width = rect.width;

        indicator.style.width = `${width}px`;
        indicator.style.left = `${left}px`;
        indicator.style.opacity = "1";
      };

      navLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => moveIndicator(link));
      });

      const handleMouseLeave = () => {
        const activeLink = navMenu.querySelector<HTMLElement>(".nav-link.active");
        if (activeLink) {
          moveIndicator(activeLink);
        } else {
          indicator.style.opacity = "0";
        }
      };

      navMenu.addEventListener("mouseleave", handleMouseLeave);

      const initialActive = navMenu.querySelector<HTMLElement>(".nav-link.active");
      if (initialActive) {
        moveIndicator(initialActive);
      }
    }

    // Magnetic buttons
    const magneticButtons = document.querySelectorAll<HTMLElement>(".magnetic-btn");
    const cleanupFns: Array<() => void> = [];

    magneticButtons.forEach((btn) => {
      const onMouseMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: x * 0.28,
          y: y * 0.28,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const onMouseLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)",
        });
      };

      btn.addEventListener("mousemove", onMouseMove);
      btn.addEventListener("mouseleave", onMouseLeave);

      cleanupFns.push(() => {
        btn.removeEventListener("mousemove", onMouseMove);
        btn.removeEventListener("mouseleave", onMouseLeave);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, [pathname]);

  const toggleMobile = () => {
    const nextState = !mobileOpen;
    setMobileOpen(nextState);
    if (nextState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <header className="navbar-wrapper" ref={navbarRef}>
        <nav className="navbar" aria-label="Main Navigation">
          <Link href="/" className="nav-brand" aria-label="KR Arts And Science College Home">
            <div className="nav-logo-seal">
              <img src="/assets/logo.jpeg" alt="KR College Seal" width={48} height={48} />
            </div>
            <div className="nav-brand-text">
              <span className="nav-brand-title">KR Arts &amp; Science</span>
              <span className="nav-brand-sub">Madurai Kamaraj Univ.</span>
            </div>
          </Link>

          <ul className="nav-menu" ref={navMenuRef}>
            <div className="nav-sliding-indicator" ref={indicatorRef} aria-hidden="true"></div>
            <li className="nav-item">
              <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item has-dropdown">
              <Link
                href="/#programmes"
                className={`nav-link ${pathname.startsWith("/department") ? "active" : ""}`}
              >
                Academics
              </Link>
              <div className="dropdown-menu">
                <div className="mega-grid-2col">
                  <Link href="/department/ai" className="mega-link">
                    B.Sc Artificial Intelligence
                  </Link>
                  <Link href="/department/commerce" className="mega-link">
                    B.Com (CA)
                  </Link>
                  <Link href="/department/aviation" className="mega-link">
                    BBA Aviation Management
                  </Link>
                  <Link href="/department/cs" className="mega-link">
                    B.Sc Computer Science
                  </Link>
                  <Link href="/department/tamil" className="mega-link">
                    B.A Tamil
                  </Link>
                  <Link href="/department/criminology" className="mega-link">
                    B.A Criminology &amp; Police Admin
                  </Link>
                  <Link href="/department/english" className="mega-link">
                    B.A English
                  </Link>
                  <Link href="/department/physical-education" className="mega-link">
                    B.Sc Physical Education
                  </Link>
                  <Link href="/department/chemistry" className="mega-link">
                    B.Sc Chemistry
                  </Link>
                  <Link href="/department/home-science" className="mega-link">
                    B.Sc Home Science
                  </Link>
                  <Link href="/department/mathematics" className="mega-link">
                    B.Sc Mathematics
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/apply" className={`nav-link ${pathname === "/apply" ? "active" : ""}`}>
                Admissions
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#placements" className="nav-link">
                Placements
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#life" className="nav-link">
                Life at KR
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/clubs" className={`nav-link ${pathname === "/clubs" ? "active" : ""}`}>
                Clubs
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/events" className={`nav-link ${pathname === "/events" ? "active" : ""}`}>
                Chronicle
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav-actions">
            <a href="tel:+918072297109" className="btn btn-outline magnetic-btn">
              Talk to a Counsellor
            </a>
            <Link href="/apply" className="btn btn-primary magnetic-btn">
              Secure Your Seat
            </Link>
          </div>

          <button
            type="button"
            className="mobile-toggle"
            onClick={toggleMobile}
            aria-label="Open mobile navigation menu"
          >
            <div className="mobile-toggle-lines">
              <div className="mobile-toggle-line"></div>
              <div className="mobile-toggle-line"></div>
              <div className="mobile-toggle-line"></div>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div className={`mobile-overlay ${mobileOpen ? "active" : ""}`} aria-label="Mobile Navigation">
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item">
            <Link href="/" className="mobile-nav-link" onClick={closeMobile}>
              Home
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link href="/#about" className="mobile-nav-link" onClick={closeMobile}>
              About College
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link href="/#programmes" className="mobile-nav-link" onClick={closeMobile}>
              All 11 Programmes
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link href="/apply" className="mobile-nav-link" onClick={closeMobile}>
              Admissions 2026
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link href="/#placements" className="mobile-nav-link" onClick={closeMobile}>
              100% Placements
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link href="/clubs" className="mobile-nav-link" onClick={closeMobile}>
              Clubs &amp; NCC
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link href="/events" className="mobile-nav-link" onClick={closeMobile}>
              Campus Chronicle
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link href="/contact" className="mobile-nav-link" onClick={closeMobile}>
              Contact &amp; Location
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
