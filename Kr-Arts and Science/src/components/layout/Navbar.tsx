"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Mail, 
  Award, 
  ChevronDown, 
  GraduationCap, 
  Menu, 
  X, 
  ExternalLink,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [academicsDropdown, setAcademicsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const allDepts = [
    { id: "ai", label: "B.Sc Artificial Intelligence", tag: "Tech" },
    { id: "commerce", label: "B.Com (Computer Applications)", tag: "Commerce" },
    { id: "aviation", label: "BBA Aviation Management", tag: "Aviation" },
    { id: "cs", label: "B.Sc Computer Science", tag: "Tech" },
    { id: "tamil", label: "B.A Tamil", tag: "Arts" },
    { id: "criminology", label: "B.A Criminology & Police Admin", tag: "Law/Crime" },
    { id: "english", label: "B.A English", tag: "Arts" },
    { id: "physical-education", label: "B.Sc Physical Education", tag: "Sports" },
    { id: "chemistry", label: "B.Sc Chemistry", tag: "Science" },
    { id: "home-science", label: "B.Sc Home Science (Nutrition)", tag: "Science" },
    { id: "mathematics", label: "B.Sc Mathematics", tag: "Science" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 transition-all duration-300">
      {/* 1. TOP UTILITY & ACCREDITATION BAR (Rajalakshmi Inspired) */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 border-b border-sky-900/40 hidden md:block">
        <div className="max-w-[1380px] mx-auto flex items-center justify-between">
          {/* Left: Affiliation & Recognition */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-sky-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Affiliated to Madurai Kamaraj University &bull; Approved by Govt. of TN
            </span>
            <span className="text-slate-500">|</span>
            <span className="inline-flex items-center gap-1 text-amber-400 font-semibold bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
              <Award className="w-3 h-3 text-amber-400" />
              100% Placement Assurance
            </span>
          </div>

          {/* Right: Quick Contacts & Direct Links */}
          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href="tel:+918072297109" 
              className="inline-flex items-center gap-1.5 hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>+91 80722 97109</span>
            </a>
            <span className="text-slate-600">&bull;</span>
            <a 
              href="mailto:info@krcolleges.in" 
              className="inline-flex items-center gap-1.5 hover:text-sky-300 transition-colors"
            >
              <Mail className="w-3 h-3 text-sky-400" />
              <span>info@krcolleges.in</span>
            </a>
            <span className="text-slate-600">&bull;</span>
            <Link 
              href="/apply" 
              className="text-amber-400 font-semibold hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <span>Admissions 2026-27</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR (Pure Premium White Glass) */}
      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_25px_-4px_rgba(2,132,199,0.08)] border-b border-sky-100 py-2.5" 
            : "bg-white border-b border-slate-100 py-3.5"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Identity / Seal */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMobile}>
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-sky-200 group-hover:border-amber-400 transition-colors shadow-sm flex items-center justify-center bg-white shrink-0">
              <img 
                src="/assets/logo.jpeg" 
                alt="KR Arts And Science College Seal" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-tight group-hover:text-sky-700 transition-colors">
                KR Arts &amp; Science College
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                Madurai Kamaraj University Affiliation &bull; Est. 2023
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            <Link 
              href="/" 
              className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                pathname === "/" 
                  ? "text-sky-600 bg-sky-50" 
                  : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link 
              href="/#about" 
              className="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap text-slate-700 hover:text-sky-600 hover:bg-slate-50 transition-all"
            >
              About
            </Link>

            {/* Academics Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAcademicsDropdown(true)}
              onMouseLeave={() => setAcademicsDropdown(false)}
            >
              <button 
                type="button"
                className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all inline-flex items-center gap-1 ${
                  pathname.startsWith("/department") 
                    ? "text-sky-600 bg-sky-50" 
                    : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                }`}
                aria-expanded={academicsDropdown}
              >
                <span>Academics</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${academicsDropdown ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Panel */}
              {academicsDropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[480px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl p-4 shadow-2xl border border-sky-100 ring-1 ring-black/5">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-sky-600" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-900">11 Degree Programmes</span>
                      </div>
                      <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full">
                        3 Years Regular
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 max-h-[340px] overflow-y-auto pr-1">
                      {allDepts.map((d) => (
                        <Link
                          key={d.id}
                          href={`/department/${d.id}`}
                          className="flex items-center justify-between p-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                          onClick={() => setAcademicsDropdown(false)}
                        >
                          <span className="truncate">{d.label}</span>
                          <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded shrink-0 font-semibold">
                            {d.tag}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500">MKU Affiliated Curriculum</span>
                      <Link 
                        href="/department/ai" 
                        className="font-bold text-sky-600 hover:underline flex items-center gap-1"
                        onClick={() => setAcademicsDropdown(false)}
                      >
                        Explore All Departments &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/apply" 
              className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                pathname === "/apply" 
                  ? "text-sky-600 bg-sky-50" 
                  : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
              }`}
            >
              Admissions
            </Link>

            <Link 
              href="/#placements" 
              className="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap text-slate-700 hover:text-sky-600 hover:bg-slate-50 transition-all"
            >
              Placements
            </Link>

            <Link 
              href="/clubs" 
              className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                pathname === "/clubs" 
                  ? "text-sky-600 bg-sky-50" 
                  : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
              }`}
            >
              Clubs &amp; NCC
            </Link>

            <Link 
              href="/events" 
              className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                pathname === "/events" 
                  ? "text-sky-600 bg-sky-50" 
                  : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
              }`}
            >
              Chronicle
            </Link>

            <Link 
              href="/contact" 
              className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                pathname === "/contact" 
                  ? "text-sky-600 bg-sky-50" 
                  : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a 
              href="tel:+918072297109" 
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 hover:bg-sky-100 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Talk to Counsellor</span>
            </a>

            <Link 
              href="/apply" 
              className="gold-shimmer-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Apply Now 2026</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={toggleMobile}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* 3. MOBILE OVERLAY DRAWER */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white/95 backdrop-blur-xl z-50 flex flex-col p-6 overflow-y-auto animate-in slide-in-from-right duration-200">
          <div className="flex flex-col gap-2">
            <Link 
              href="/" 
              className="p-3 text-base font-semibold text-slate-800 rounded-xl hover:bg-sky-50 hover:text-sky-700"
              onClick={closeMobile}
            >
              Home
            </Link>
            <Link 
              href="/#about" 
              className="p-3 text-base font-semibold text-slate-800 rounded-xl hover:bg-sky-50 hover:text-sky-700"
              onClick={closeMobile}
            >
              About College
            </Link>

            {/* Department Accordion in Mobile */}
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                11 Academic Programmes
              </span>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {allDepts.map((d) => (
                  <Link
                    key={d.id}
                    href={`/department/${d.id}`}
                    className="py-1.5 text-sm font-medium text-slate-700 hover:text-sky-600 flex items-center justify-between"
                    onClick={closeMobile}
                  >
                    <span>{d.label}</span>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded text-slate-600 border border-slate-200">
                      {d.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/apply" 
              className="p-3 text-base font-semibold text-slate-800 rounded-xl hover:bg-sky-50 hover:text-sky-700"
              onClick={closeMobile}
            >
              Admissions 2026-27
            </Link>
            <Link 
              href="/#placements" 
              className="p-3 text-base font-semibold text-slate-800 rounded-xl hover:bg-sky-50 hover:text-sky-700"
              onClick={closeMobile}
            >
              100% Placements Track Record
            </Link>
            <Link 
              href="/clubs" 
              className="p-3 text-base font-semibold text-slate-800 rounded-xl hover:bg-sky-50 hover:text-sky-700"
              onClick={closeMobile}
            >
              Clubs &amp; NCC Cadet Wing
            </Link>
            <Link 
              href="/events" 
              className="p-3 text-base font-semibold text-slate-800 rounded-xl hover:bg-sky-50 hover:text-sky-700"
              onClick={closeMobile}
            >
              Campus Chronicle &amp; Events
            </Link>
            <Link 
              href="/contact" 
              className="p-3 text-base font-semibold text-slate-800 rounded-xl hover:bg-sky-50 hover:text-sky-700"
              onClick={closeMobile}
            >
              Contact &amp; Bus Routes
            </Link>

            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col gap-3">
              <Link 
                href="/apply" 
                className="gold-shimmer-btn w-full text-center py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                onClick={closeMobile}
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Apply Online for 2026</span>
              </Link>
              <a 
                href="tel:+918072297109" 
                className="w-full text-center py-3 rounded-xl text-sm font-semibold text-sky-700 bg-sky-50 border border-sky-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Admissions: +91 80722 97109</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
