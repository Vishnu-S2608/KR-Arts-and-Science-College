"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  href: string;
  isDropdown?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Home", href: "/" },
  {
    id: "programmes",
    label: "Academics",
    href: "/academics",
    isDropdown: true,
  },
  { id: "clubs", label: "Clubs & NCC", href: "/clubs" },
  { id: "placements", label: "Placements", href: "/placements" },
  { id: "chronicle", label: "Chronicle", href: "/chronicle" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [academicsDropdown, setAcademicsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const routeSection =
    pathname.startsWith("/events") || pathname.startsWith("/chronicle")
      ? "chronicle"
      : pathname.startsWith("/clubs")
        ? "clubs"
        : pathname.startsWith("/placements")
          ? "placements"
          : pathname.startsWith("/academics") || pathname.startsWith("/programmes")
            ? "programmes"
            : null;

  const [homeActiveSection, setHomeActiveSection] = useState<string>("hero");
  const activeSection =
    pathname === "/" ? homeActiveSection : routeSection || "hero";

  const isClickScrollingRef = useRef(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLElement | null>>({});

  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
    height: number;
    top: number;
    opacity: number;
  }>({ left: 0, width: 0, height: 0, top: 0, opacity: 0 });

  // Update sliding pill position to match ONLY the active / clicked item
  const updateIndicator = (targetId: string) => {
    const targetEl = itemRefs.current[targetId];
    const container = navContainerRef.current;

    if (targetEl && container) {
      const targetRect = targetEl.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setIndicatorStyle({
        left: targetRect.left - containerRect.left,
        top: targetRect.top - containerRect.top,
        width: targetRect.width,
        height: targetRect.height,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    updateIndicator(activeSection);
    const timer = setTimeout(() => updateIndicator(activeSection), 40);
    return () => clearTimeout(timer);
  }, [activeSection, pathname]);

  // Window resize updater
  useEffect(() => {
    const handleResize = () => updateIndicator(activeSection);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection]);

  // Navbar background scroll state (Scroll spy disabled per design: on home, indicator stays on Home)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLElement>,
    targetId: string,
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        isClickScrollingRef.current = true;
        setHomeActiveSection(targetId);

        const lenis = (
          window as unknown as {
            __lenis?: {
              scrollTo: (
                target: HTMLElement | number,
                opts?: { offset?: number; duration?: number },
              ) => void;
            };
          }
        ).__lenis;
        if (lenis) {
          lenis.scrollTo(el, { offset: -70, duration: 0.8 });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
        window.history.pushState(null, "", `#${targetId}`);

        setTimeout(() => {
          isClickScrollingRef.current = false;
        }, 1100);
      }
    } else {
      // When navigating back to home page sections from an inner page
      setHomeActiveSection(targetId);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      isClickScrollingRef.current = true;
      setHomeActiveSection("hero");

      const lenis = (
        window as unknown as {
          __lenis?: {
            scrollTo: (
              target: HTMLElement | number,
              opts?: { offset?: number; duration?: number },
            ) => void;
          };
        }
      ).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 0.8 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      window.history.pushState(null, "", "/");

      setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 1100);
    }
  };

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
    if (!mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  const artsDepts = [
    { id: "tamil", label: "B.A Tamil", href: "/academics/tamil" },
    { id: "english", label: "B.A English Literature", href: "/academics/english" },
    { id: "criminology", label: "B.A Criminology & Police Admin", href: "/academics/criminology" },
  ];

  const scienceDepts = [
    { id: "cs", label: "B.Sc Computer Science", href: "/academics/cs" },
    { id: "ai", label: "B.Sc Artificial Intelligence", href: "/academics/ai" },
    { id: "mathematics", label: "B.Sc Mathematics", href: "/academics/mathematics" },
    { id: "chemistry", label: "B.Sc Chemistry", href: "/academics/chemistry" },
    { id: "home-science", label: "B.Sc Home Science (Nutrition)", href: "/academics/home-science" },
    { id: "physical-education", label: "B.Sc Physical Education", href: "/academics/physical-education" },
  ];

  const aviationDepts = [
    { id: "aviation", label: "BBA Aviation Management", href: "/academics/aviation" },
  ];

  const commerceDepts = [
    { id: "commerce", label: "B.Com (Computer Applications)", href: "/academics/commerce" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
        {/* NAVIGATION BAR WITH REDUCED COMPACT HEIGHT & EXPANDED HORIZONTAL WIDTH */}
        <nav
          className={`w-full transition-all duration-300 shadow-none ${
            scrolled
              ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-2.5 sm:py-3"
              : "bg-white border-b border-slate-200/80 py-3 sm:py-3.5"
          }`}
          aria-label="Main Navigation"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between">
            {/* 1. College Seal Branding */}
            <Link
              href="/"
              className="flex items-center gap-3.5 sm:gap-4 group shrink-0"
              onClick={closeMobile}
            >
              <div
                id="krNavbarLogo"
                className="relative w-13 h-13 sm:w-14 sm:h-14 md:w-[62px] md:h-[62px] rounded-full overflow-hidden border-2 border-slate-300 group-hover:border-black transition-all duration-300 flex items-center justify-center bg-white shrink-0 p-0.5"
              >
                <img
                  src="/kr-logo-official.png"
                  alt="KR Arts And Science College Seal"
                  className="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-heading font-bold text-base sm:text-lg md:text-[19px] text-black tracking-tight leading-tight group-hover:text-black transition-colors">
                  KR Arts &amp; Science College
                </span>
                <span className="text-xs sm:text-[12.5px] text-black/75 font-medium leading-tight mt-0.5">
                  Madurai Kamaraj University Affiliation
                </span>
                <span className="text-[11px] sm:text-xs text-black/60 font-medium leading-tight">
                  Est. 2023
                </span>
              </div>
            </Link>

            {/* 2. Center Spring-Sliding Diagonal Curved Rectangle Nav (Balanced Proportional Width) */}
            <div
              ref={navContainerRef}
              className="hidden lg:flex items-center mx-auto rounded-tl-[18px] rounded-br-[18px] rounded-tr-none rounded-bl-none bg-[#021B4E] border border-[#FFD700]/30 p-1 relative isolation-isolate shadow-none"
            >
              {/* Universal Spring Sliding Indicator Pill (Solid Royal Blue toggle switch effect, NO box shadow) */}
              <div
                className="absolute rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none pointer-events-none -z-0 will-change-transform"
                style={{
                  left: `${indicatorStyle.left}px`,
                  top: `${indicatorStyle.top}px`,
                  width: `${indicatorStyle.width}px`,
                  height: `${indicatorStyle.height}px`,
                  opacity: indicatorStyle.opacity,
                  backgroundColor: "#0334A0",
                  boxShadow: "none",
                  transition:
                    "left 950ms cubic-bezier(0.19, 1, 0.22, 1), width 950ms cubic-bezier(0.19, 1, 0.22, 1), top 950ms cubic-bezier(0.19, 1, 0.22, 1), opacity 400ms ease",
                }}
              />

              {NAV_ITEMS.map((item) => {
                const isSelected = activeSection === item.id;

                if (item.isDropdown) {
                  return (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => setAcademicsDropdown(true)}
                      onMouseLeave={() => setAcademicsDropdown(false)}
                    >
                      <Link
                        ref={(el) => {
                          itemRefs.current[item.id] = el;
                        }}
                        href="/academics"
                        onClick={() => setAcademicsDropdown(false)}
                        className={`relative z-10 px-3.5 xl:px-4.5 py-1.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs xl:text-sm font-bold whitespace-nowrap inline-flex items-center gap-1 transition-colors duration-500 shadow-none ${
                          isSelected
                            ? "text-white font-extrabold"
                            : "text-slate-200 hover:text-white"
                        }`}
                        aria-expanded={academicsDropdown}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${academicsDropdown ? "rotate-180" : ""}`}
                        />
                      </Link>

                    {/* Academics Mega Dropdown Menu (Clean categories, NO icons, NO count badges, matching diagonal shape badge) */}
                    {academicsDropdown && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[760px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none p-5 border border-slate-200/90 shadow-none">
                          {/* Top Banner */}
                          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                            <div>
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                                11 Undergraduate Degree Programmes
                              </span>
                            </div>
                            {/* Matching Diagonal Box Shape for MKU Affiliation Badge (Dark Navy bg with White text) */}
                            <span className="text-[11px] font-semibold text-white bg-[#021B4E] px-3.5 py-1.5 border border-[#0334A0]/50 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none shadow-none tracking-wide">
                              3 Years Regular &bull; MKU Affiliated
                            </span>
                          </div>

                          {/* 3 Section Columns: Arts | Science | Aviation & Commerce */}
                          <div className="grid grid-cols-3 gap-6">
                            {/* Column 1: Arts (Simple bg & text color hover) */}
                            <div>
                              <div className="pb-2 mb-2.5 border-b border-slate-200">
                                <span className="text-xs font-extrabold uppercase tracking-wider text-black">
                                  Arts
                                </span>
                              </div>
                              <div className="flex flex-col gap-1">
                                {artsDepts.map((d) => (
                                  <Link
                                    key={d.id}
                                    href={d.href}
                                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-black hover:bg-slate-100 hover:text-black transition-colors duration-150"
                                    onClick={() => setAcademicsDropdown(false)}
                                  >
                                    <span className="leading-snug">
                                      {d.label}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 2: Science (Simple bg & text color hover) */}
                            <div>
                              <div className="pb-2 mb-2.5 border-b border-slate-200">
                                <span className="text-xs font-extrabold uppercase tracking-wider text-black">
                                  Science
                                </span>
                              </div>
                              <div className="flex flex-col gap-1">
                                {scienceDepts.map((d) => (
                                  <Link
                                    key={d.id}
                                    href={d.href}
                                    className="block px-3 py-2 rounded-lg text-xs font-semibold text-black hover:bg-slate-100 hover:text-black transition-colors duration-150"
                                    onClick={() => setAcademicsDropdown(false)}
                                  >
                                    <span className="leading-snug">
                                      {d.label}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 3: Aviation & Commerce (Simple bg & text color hover) */}
                            <div className="flex flex-col gap-4">
                              {/* Aviation Section */}
                              <div>
                                <div className="pb-2 mb-2.5 border-b border-slate-200">
                                  <span className="text-xs font-extrabold uppercase tracking-wider text-black">
                                    Aviation
                                  </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                  {aviationDepts.map((d) => (
                                    <Link
                                      key={d.id}
                                      href={d.href}
                                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-black hover:bg-slate-100 hover:text-black transition-colors duration-150"
                                      onClick={() =>
                                        setAcademicsDropdown(false)
                                      }
                                    >
                                      <span className="leading-snug">
                                        {d.label}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Commerce Section */}
                              <div>
                                <div className="pb-2 mb-2.5 border-b border-slate-200">
                                  <span className="text-xs font-extrabold uppercase tracking-wider text-black">
                                    Commerce
                                  </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                  {commerceDepts.map((d) => (
                                    <Link
                                      key={d.id}
                                      href={d.href}
                                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-black hover:bg-slate-100 hover:text-black transition-colors duration-150"
                                      onClick={() =>
                                        setAcademicsDropdown(false)
                                      }
                                    >
                                      <span className="leading-snug">
                                        {d.label}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[item.id] = el;
                  }}
                  href={item.href}
                  onClick={(e) => {
                    if (item.id === "hero") {
                      scrollToTop(e);
                    } else if (item.href.startsWith("/#")) {
                      scrollToSection(e, item.id);
                    }
                  }}
                  className={`relative z-10 px-3.5 xl:px-4.5 py-1.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs xl:text-sm font-bold whitespace-nowrap transition-colors duration-500 shadow-none ${
                    isSelected
                      ? "text-white font-extrabold"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* 3. Right Primary Action CTA ("Apply Now 2026" - Signature Diagonal Cut with Gold/Navy Invert) */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-4.5 sm:px-5.5 py-2 sm:py-2.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold tracking-wide text-[#FFD700] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-black border border-[#FFD700] hover:border-[#FFD700] transition-all duration-300 shadow-none group"
            >
              <span>Apply Now 2026</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FFD700] group-hover:text-black group-hover:translate-x-1 transition-all" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={toggleMobile}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY DRAWER */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-white/95 backdrop-blur-xl z-50 flex flex-col p-6 overflow-y-auto animate-in slide-in-from-right duration-200">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="p-3 text-base font-semibold text-black rounded-xl hover:bg-[#FBF2D4]/50 hover:text-black"
              onClick={(e) => {
                closeMobile();
                scrollToTop(e);
              }}
            >
              Home
            </Link>

            {/* Department Accordion in Mobile */}
            <div className="p-3 bg-slate-50 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  11 Academic Programmes
                </span>
                <Link
                  href="/academics"
                  className="text-xs font-bold text-black hover:underline"
                  onClick={closeMobile}
                >
                  View All &rarr;
                </Link>
              </div>

              <div>
                <span className="text-xs font-extrabold text-black uppercase tracking-wider block mb-1">
                  Arts
                </span>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {artsDepts.map((d) => (
                    <Link
                      key={d.id}
                      href={d.href}
                      className="py-1 text-sm font-medium text-black hover:text-black flex items-center gap-2"
                      onClick={closeMobile}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] shrink-0" />
                      <span>{d.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-extrabold text-black uppercase tracking-wider block mb-1">
                  Science
                </span>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {scienceDepts.map((d) => (
                    <Link
                      key={d.id}
                      href={d.href}
                      className="py-1 text-sm font-medium text-black hover:text-black flex items-center gap-2"
                      onClick={closeMobile}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] shrink-0" />
                      <span>{d.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-extrabold text-black uppercase tracking-wider block mb-1">
                  Aviation &amp; Commerce
                </span>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {[...aviationDepts, ...commerceDepts].map((d) => (
                    <Link
                      key={d.id}
                      href={d.href}
                      className="py-1 text-sm font-medium text-black hover:text-black flex items-center gap-2"
                      onClick={closeMobile}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] shrink-0" />
                      <span>{d.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/placements"
              className="p-3 text-base font-semibold text-black rounded-xl hover:bg-slate-100 hover:text-black"
              onClick={closeMobile}
            >
              100% Placements Track Record
            </Link>
            <Link
              href="/clubs"
              className="p-3 text-base font-semibold text-black rounded-xl hover:bg-slate-100 hover:text-black"
              onClick={closeMobile}
            >
              Clubs, NCC &amp; NSS Outreach
            </Link>
            <Link
              href="/chronicle"
              className="p-3 text-base font-semibold text-black rounded-xl hover:bg-slate-100 hover:text-black"
              onClick={closeMobile}
            >
              Campus Chronicle &amp; Events
            </Link>

            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col gap-3">
              <Link
                href="/apply"
                className="gold-shimmer-btn w-full text-center py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                onClick={closeMobile}
              >
                <span>Apply Online for 2026</span>
              </Link>
              <a
                href="tel:+918072297109"
                className="w-full text-center py-3 rounded-xl text-sm font-semibold text-white bg-[#021B4E] border border-[#0334A0]/50 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Admissions: +91 80722 97109</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
    {/* Structural Spacer for Fixed Navbar to preserve exact document flow */}
    <div className="h-[76px] sm:h-[86px] md:h-[94px] w-full shrink-0 pointer-events-none" aria-hidden="true" />
  </>
  );
}
