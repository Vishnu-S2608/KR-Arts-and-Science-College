"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  Train,
  Plane,
  Bus,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#011236] text-slate-300 pt-10 pb-10 border-t-2 border-[#C59B27]/50 relative overflow-hidden"
      id="contact"
    >
      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#0334A0]/25 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[250px] bg-[#C59B27]/15 blur-[130px] rounded-full pointer-events-none" />

      {/* 1. OUTLINE-ONLY COLLEGE NAME (Pure outline stroke, 100% clearly visible, no solid fill) */}
      <div className="overflow-hidden select-none pointer-events-none pt-2 pb-5 text-center">
        <span
          className="font-heading font-black text-4xl sm:text-6xl md:text-8xl lg:text-[104px] tracking-wider uppercase text-transparent inline-block whitespace-nowrap"
          style={{
            WebkitTextStroke: "2px #F5B83D",
            letterSpacing: "0.08em",
            filter: "drop-shadow(0 0 10px rgba(245, 184, 61, 0.40))",
          }}
        >
          KR ARTS &amp; SCIENCE
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* 2. ACCREDITATIONS & ADMISSIONS STRIP (College logo and name removed) */}
        <div className="pb-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5 shadow-none">
              <Award className="w-3.5 h-3.5 text-[#F5B83D]" />
              <span>
                AISHE Code: <strong className="text-[#F5B83D]">C-66023</strong>
              </span>
            </div>
            <div className="px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5 shadow-none">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                Placement:{" "}
                <strong className="text-emerald-400">
                  100% Verifiable Record
                </strong>
              </span>
            </div>
            <div className="px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 shadow-none">
              <span>
                Affiliated to Madurai Kamaraj University &bull; Approved by
                Govt. of Tamil Nadu
              </span>
            </div>
          </div>

          <Link
            href="/apply"
            className="relative group overflow-hidden px-5 py-2 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs font-bold text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27] hover:border-[#0334A0]/30 transition-all duration-300 shadow-none shrink-0"
          >
            <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B83D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span>Admissions 2026-27</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] group-hover:w-full transition-all duration-300" />
          </Link>
        </div>

        {/* 3. MULTI-COLUMN GRID */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-7 items-start">
          {/* Column 1: Institutional Trust & Sacred Motto (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#C59B27] rounded-full" />
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">
                Institutional Trust
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Established in 2023 under the aegis of{" "}
              <strong className="text-white">
                KR Educational and Charitable Trust
              </strong>
              . Committed to holistic academic excellence, character building,
              and career empowerment for rural youth across Madurai district.
            </p>

            {/* TRADITIONAL PALM LEAF MANUSCRIPT BANNER (Calibrated viewBox so dots NEVER overlap Tamil text) */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Sacred Institutional Motto
              </span>

              <div className="w-full max-w-[320px]">
                <div className="relative flex items-center justify-center px-10 py-2.5 rounded-sm overflow-hidden my-1">
                  {/* Olai Chuvadi Palm Leaf SVG Container (Wide 380x42 viewBox with dots placed far outside text bounds) */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm"
                    preserveAspectRatio="none"
                    viewBox="0 0 380 42"
                  >
                    <defs>
                      <linearGradient
                        id="footerOlaiLeafGrad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#EAD9AB" />
                        <stop offset="12%" stopColor="#F6ECC9" />
                        <stop offset="50%" stopColor="#FFF9E8" />
                        <stop offset="88%" stopColor="#F6ECC9" />
                        <stop offset="100%" stopColor="#EAD9AB" />
                      </linearGradient>
                    </defs>

                    {/* Palm Leaf Manuscript Outline */}
                    <path
                      d="M 12 2 L 368 2 C 375 2 380 8 377 21 C 380 34 375 40 368 40 L 12 40 C 5 40 0 34 3 21 C 0 8 5 2 12 2 Z"
                      fill="url(#footerOlaiLeafGrad)"
                      stroke="#BCA060"
                      strokeWidth="1.25"
                    />

                    {/* Dried palm fiber horizontal grain lines */}
                    <line
                      x1="26"
                      y1="11"
                      x2="354"
                      y2="11"
                      stroke="#CBB177"
                      strokeWidth="0.6"
                      strokeDasharray="6 3"
                      opacity="0.6"
                    />
                    <line
                      x1="26"
                      y1="31"
                      x2="354"
                      y2="31"
                      stroke="#CBB177"
                      strokeWidth="0.6"
                      strokeDasharray="8 4"
                      opacity="0.6"
                    />

                    {/* Left cord binding eyelet (Placed at cx=14, giving complete clearance from text) */}
                    <circle
                      cx="14"
                      cy="21"
                      r="3.2"
                      fill="#D9C494"
                      stroke="#8E7036"
                      strokeWidth="1"
                    />
                    <circle cx="14" cy="21" r="1.3" fill="#5A431A" />

                    {/* Right cord binding eyelet (Placed at cx=366, giving complete clearance from text) */}
                    <circle
                      cx="366"
                      cy="21"
                      r="3.2"
                      fill="#D9C494"
                      stroke="#8E7036"
                      strokeWidth="1"
                    />
                    <circle cx="366" cy="21" r="1.3" fill="#5A431A" />
                  </svg>

                  {/* Etched Tamil script comfortably centered without touching the end dots */}
                  <span className="relative z-10 font-tamil font-bold text-[13px] sm:text-sm text-[#2C1802] tracking-wider whitespace-nowrap px-2">
                    உள்ளுவதெல்லாம் உயர்வுள்ளல்
                  </span>
                </div>
              </div>

              <span className="text-[11px] text-slate-400 block mt-2 leading-relaxed">
                (Let your thoughts and aims be ever lofty and elevated)
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (Span 1.5) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#C59B27] rounded-full" />
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">
                Navigation
              </h4>
            </div>

            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>About Our Story</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#programmes"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>All 11 Programmes</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="hover:text-white text-[#F5B83D] font-bold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#F5B83D]" />
                  <span>Admissions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#placements"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>100% Placements</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/clubs"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Student Clubs</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#chronicle"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Campus Chronicle</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Contact Directory</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ========================================================================= */}
          {/* Column 3: MAP & FULL ADDRESS SIDE-BY-SIDE IN THE SAME ROW (Span 5.5)      */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#C59B27] rounded-full" />
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">
                Campus Location &amp; Full Address
              </h4>
            </div>

            {/* DUAL BOXING IN THE SAME ROW: Map (Left) + Full Address (Right) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
              {/* Box 1: Interactive Map Card */}
              <div className="relative group overflow-hidden rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none border-2 border-[#C59B27]/50 bg-[#021B4E]/60 p-2 flex flex-col justify-between transition-all duration-300 hover:border-[#C59B27]">
                {/* Top Accent Shimmer on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B83D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Map iframe with transparent overlay for CustomCursor */}
                <div className="relative h-32 w-full rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none overflow-hidden bg-slate-900">
                  <iframe
                    title="KR Arts And Science College Campus Location"
                    src="https://maps.google.com/maps?q=KR%20Arts%20and%20Science%20College%20Peraiyur%20Madurai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="pointer-events-none"
                  />

                  {/* Interactive Clickable Overlay to allow custom cursor tracking */}
                  <a
                    href="https://maps.google.com/maps?q=KR+Arts+and+Science+College+Peraiyur+Madurai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-[#011236]/30 transition-all cursor-pointer group/overlay"
                    title="Click to Open KR Arts And Science College in Google Maps"
                  >
                    <span className="opacity-0 group-hover/overlay:opacity-100 transition-opacity duration-200 px-2.5 py-1 rounded-tl-[6px] rounded-br-[6px] rounded-tr-none rounded-bl-none bg-[#021B4E]/90 text-[#F5B83D] border border-[#C59B27] text-[10px] font-bold flex items-center gap-1 shadow-none">
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-[#C59B27]" />
                    </span>
                  </a>
                </div>

                {/* Map Footer Bar with Open Map button */}
                <div className="pt-2 px-0.5 flex items-center justify-between gap-1.5">
                  <div className="text-[10px] text-slate-300 flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3 text-[#F5B83D] shrink-0" />
                    <span className="truncate">Peraiyur Tk, Madurai</span>
                  </div>

                  <a
                    href="https://maps.google.com/maps?q=KR+Arts+and+Science+College+Peraiyur+Madurai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-0.5 rounded-tl-[6px] rounded-br-[6px] rounded-tr-none rounded-bl-none bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] hover:bg-[#FBF2D4] hover:text-[#021B4E] text-[10px] font-bold shrink-0 flex items-center gap-1 transition-colors shadow-none"
                  >
                    <span>Open Map</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                {/* Bottom Expanding Line */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-300 pointer-events-none" />
              </div>

              {/* Box 2: Full Campus Address Card (IN THE SAME ROW SIDE-BY-SIDE!) */}
              <div className="relative group overflow-hidden rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none bg-white/5 border-2 border-[#C59B27]/50 p-3 flex flex-col justify-between transition-all duration-300 hover:border-[#C59B27] text-xs text-slate-200">
                {/* Top Accent Shimmer on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B83D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F5B83D] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold text-[11px] mb-0.5">
                        Full Campus Address
                      </strong>
                      <p className="leading-snug text-slate-300 text-[10px]">
                        P. Thambipatti, Peraiyur Tk, Via T. Kallupatti, Madurai
                        - 625 703, Tamil Nadu.
                      </p>
                    </div>
                  </div>

                  <div className="pt-1.5 border-t border-white/10 space-y-0.5 text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3 h-3 text-[#F5B83D] shrink-0" />
                      <a
                        href="tel:+918072297109"
                        className="hover:text-[#F5B83D] font-bold text-white"
                      >
                        +91 80722 97109
                      </a>
                      <span className="text-slate-500">&bull;</span>
                      <a
                        href="tel:04549299877"
                        className="hover:text-white text-slate-300"
                      >
                        04549-299877
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3 h-3 text-[#F5B83D] shrink-0" />
                      <a
                        href="mailto:info@krcolleges.in"
                        className="hover:text-white text-slate-300"
                      >
                        info@krcolleges.in
                      </a>
                    </div>
                  </div>

                  <div className="pt-1.5 border-t border-white/10 grid grid-cols-2 gap-1 text-[9.5px] text-slate-300">
                    <div className="flex items-center gap-1">
                      <Train className="w-3 h-3 text-[#F5B83D] shrink-0" />
                      <span>
                        Thirumangalam: <strong>25km</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Train className="w-3 h-3 text-[#F5B83D] shrink-0" />
                      <span>
                        Virudhunagar: <strong>25km</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Plane className="w-3 h-3 text-[#F5B83D] shrink-0" />
                      <span>
                        Airport: <strong>50km</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bus className="w-3 h-3 text-[#F5B83D] shrink-0" />
                      <span>
                        Bus Stand: <strong>60km</strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Expanding Line */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-300 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Column 4: Departments (Span 1.5) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#C59B27] rounded-full" />
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">
                Departments
              </h4>
            </div>

            <ul className="space-y-1 text-[11px]">
              <li>
                <Link
                  href="/apply?course=B.Sc+Artificial+Intelligence"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Artificial Intelligence</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/apply?course=B.Com+(Computer+Applications)"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Commerce (CA)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/apply?course=BBA+Aviation+Management"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Aviation Management</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/apply?course=B.Sc+Computer+Science"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Computer Science</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/apply?course=B.A+Tamil"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Tamil</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/apply?course=B.A+Criminology+%26+Police+Administration"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Criminology &amp; Police Admin</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/apply?course=B.Sc+Mathematics"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Mathematics</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/apply?course=B.Sc+Chemistry"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Chemistry</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/apply?course=B.A+English"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>English Literature</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/apply?course=B.Sc+Physical+Education"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Physical Education</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/apply?course=B.Sc+Home+Science+(Nutrition+%26+Dietetics)"
                  className="hover:text-[#F5B83D] transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Home Science</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. BOTTOM BAR: COPYRIGHT & POLICIES */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 KR Arts And Science College. All rights reserved.
            Affiliated to Madurai Kamaraj University.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/apply"
              className="hover:text-[#F5B83D] transition-colors"
            >
              Admissions Policy
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#F5B83D] transition-colors"
            >
              Campus Bus Routes
            </Link>
            <Link
              href="/#chronicle"
              className="hover:text-[#F5B83D] transition-colors"
            >
              Press &amp; Media
            </Link>
            <a
              href="https://wa.me/918072297109"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline font-semibold"
            >
              Direct WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
