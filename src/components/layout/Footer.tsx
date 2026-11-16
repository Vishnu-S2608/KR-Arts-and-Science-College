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
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#011236] text-slate-300 pt-12 sm:pt-16 pb-12 border-t-2 border-[#FFD700]/50 relative overflow-hidden"
      id="contact"
    >
      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-900/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[250px] bg-[#FFD700]/15 blur-[130px] rounded-full pointer-events-none" />

      {/* 1. OUTLINE-ONLY COLLEGE NAME (Back to normal Verdana style) */}
      <div className="overflow-hidden select-none pointer-events-none pt-2 pb-6 text-center">
        <span
          className="footer-outline-title font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-[104px] tracking-wider uppercase text-transparent inline-block whitespace-nowrap"
          style={{
            fontFamily: '"Verdana", Geneva, Tahoma, sans-serif',
            fontWeight: 800,
            WebkitTextStroke: "2px #FFD700",
            letterSpacing: "0.08em",
            filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.40))",
          }}
        >
          KR ARTS &amp; SCIENCE
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3. MULTI-COLUMN GRID (Spacious, department section removed, map & address prominently enlarged) */}
        <div className="py-10 lg:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Column 1: Institutional Trust & Sacred Motto (Span 4) */}
          <div className="md:col-span-1 lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#FFD700] rounded-full" />
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

            {/* TRADITIONAL PALM LEAF MANUSCRIPT BANNER */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                Sacred Institutional Motto
              </span>

              <div className="w-full max-w-[340px]">
                <div className="relative flex items-center justify-center px-10 py-3 rounded-sm overflow-hidden my-1">
                  {/* Olai Chuvadi Palm Leaf SVG Container */}
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

                    {/* Left cord binding eyelet */}
                    <circle
                      cx="14"
                      cy="21"
                      r="3.2"
                      fill="#D9C494"
                      stroke="#8E7036"
                      strokeWidth="1"
                    />
                    <circle cx="14" cy="21" r="1.3" fill="#5A431A" />

                    {/* Right cord binding eyelet */}
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

                  {/* Etched Tamil script - Ultra-bold dark black for crisp clarity */}
                  <span
                    className="relative z-10 font-tamil font-black text-sm sm:text-[15px] text-black tracking-wide whitespace-nowrap px-2"
                    style={{
                      fontFamily: "'Noto Sans Tamil', sans-serif",
                      fontWeight: 900,
                      color: "#000000",
                    }}
                  >
                    உள்ளுவதெல்லாம் உயர்வுள்ளல்
                  </span>
                </div>
              </div>

              <span className="text-[11px] text-slate-400 block mt-2.5 leading-relaxed">
                (Let your thoughts and aims be ever lofty and elevated)
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (Span 2) */}
          <div className="md:col-span-1 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#FFD700] rounded-full" />
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">
                Navigation
              </h4>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                  <span>About Our Story</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#programmes"
                  className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                  <span>All Programmes</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="hover:text-white text-[#FFD700] font-bold transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                  <span>Admissions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#placements"
                  className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                  <span>100% Placements</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/clubs"
                  className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                  <span>Student Clubs</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#chronicle"
                  className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                  <span>Campus Chronicle</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                  <span>Contact Directory</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ========================================================================= */}
          {/* Column 3: ENLARGED MAP & FULL ADDRESS CARDS (Span 6)                       */}
          {/* ========================================================================= */}
          <div className="col-span-1 md:col-span-2 lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#FFD700] rounded-full" />
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">
                Campus Location &amp; Full Address
              </h4>
            </div>

            {/* Enlarged Map Card + Unboxed Full Address Details */}
            <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr] gap-5 sm:gap-6 items-start">
              {/* Box 1: Interactive Map Card (Enlarged Height and Cleaner Padding) */}
              <div className="relative group overflow-hidden rounded-tl-[18px] rounded-br-[18px] rounded-tr-none rounded-bl-none border-2 border-[#FFD700]/50 bg-[#021B4E]/60 p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:border-[#FFD700] shadow-lg">
                {/* Top Accent Shimmer on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Map iframe with spacious height */}
                <div className="relative h-48 sm:h-56 w-full rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none overflow-hidden bg-slate-900 border border-white/10">
                  <iframe
                    title="KR Arts And Science College Campus Location"
                    src="https://maps.google.com/maps?q=KR%20Arts%20and%20Science%20College%20Peraiyur%20Madurai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="pointer-events-none w-full h-full"
                  />

                  {/* Interactive Clickable Overlay */}
                  <a
                    href="https://maps.google.com/maps?q=KR+Arts+and+Science+College+Peraiyur+Madurai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-[#011236]/35 transition-all cursor-pointer group/overlay"
                    title="Click to Open KR Arts And Science College in Google Maps"
                  >
                    <span className="opacity-0 group-hover/overlay:opacity-100 transition-opacity duration-200 px-3 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-[#021B4E]/95 text-[#FFD700] border border-[#FFD700] text-xs font-bold flex items-center gap-1.5 shadow-md">
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#FFD700]" />
                    </span>
                  </a>
                </div>

                {/* Map Footer Bar with Open Map button */}
                <div className="pt-3.5 px-0.5 flex items-center justify-between gap-2">
                  <div className="text-xs text-slate-300 flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                    <span className="truncate font-medium">Peraiyur Tk, Madurai</span>
                  </div>

                  <a
                    href="https://maps.google.com/maps?q=KR+Arts+and+Science+College+Peraiyur+Madurai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-tl-[6px] rounded-br-[6px] rounded-tr-none rounded-bl-none bg-[#021B4E] text-[#FFD700] border border-[#FFD700] hover:bg-[#FBF2D4] hover:text-black text-xs font-bold shrink-0 flex items-center gap-1.5 transition-colors shadow-none"
                  >
                    <span>Open Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Bottom Expanding Line */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-black via-[#FFD700] to-[#FFD700] transition-all duration-300 pointer-events-none" />
              </div>

              {/* Full Campus Address Details (Unboxed) */}
              <div className="space-y-4 py-1">
                {/* Address Block */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold text-xs uppercase tracking-wider mb-1">
                      Campus Address
                    </strong>
                    <p className="leading-relaxed text-slate-300 text-xs sm:text-[13px]">
                      P. Thambipatti, Peraiyur Tk, Via T. Kallupatti, Madurai – 625 703, Tamil Nadu, India.
                    </p>
                  </div>
                </div>

                {/* Contact Numbers and Email - Single Line Strict Alignment */}
                <div className="pt-3 border-t border-white/10 space-y-2 text-xs sm:text-[13px]">
                  <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap overflow-x-visible">
                    <Phone className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                    <span className="text-slate-400 text-xs shrink-0">Phone:</span>
                    <a
                      href="tel:+918072297109"
                      className="hover:text-[#FFD700] font-bold text-white transition-colors whitespace-nowrap"
                    >
                      +91 80722 97109
                    </a>
                    <span className="text-slate-500 shrink-0">&bull;</span>
                    <a
                      href="tel:04549299877"
                      className="hover:text-white text-slate-300 transition-colors whitespace-nowrap"
                    >
                      04549-299877
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                    <span className="text-slate-400 text-xs">Email:</span>
                    <a
                      href="mailto:info@krcolleges.in"
                      className="hover:text-[#FFD700] text-slate-200 transition-colors"
                    >
                      info@krcolleges.in
                    </a>
                  </div>
                </div>

                {/* Transit Distance Badges */}
                <div className="pt-3 border-t border-white/10">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Transit Distances
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5 bg-white/[0.03] px-2.5 py-1.5 rounded-tl-[6px] rounded-br-[6px] border border-white/5">
                      <Train className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                      <span className="truncate">
                        Thirumangalam: <strong className="text-white">25 km</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/[0.03] px-2.5 py-1.5 rounded-tl-[6px] rounded-br-[6px] border border-white/5">
                      <Train className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                      <span className="truncate">
                        Virudhunagar: <strong className="text-white">25 km</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/[0.03] px-2.5 py-1.5 rounded-tl-[6px] rounded-br-[6px] border border-white/5">
                      <Plane className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                      <span className="truncate">
                        Madurai Airport: <strong className="text-white">50 km</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/[0.03] px-2.5 py-1.5 rounded-tl-[6px] rounded-br-[6px] border border-white/5">
                      <Bus className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                      <span className="truncate">
                        Madurai Bus Stand: <strong className="text-white">60 km</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM BAR: COLLEGE NAME & COPYRIGHT (Centered right in the middle below, admission policy & other 3 links removed) */}
        <div className="pt-8 mt-6 border-t border-white/10 text-center text-xs sm:text-sm text-slate-400">
          <p className="leading-relaxed">
            &copy; 2026 <strong className="text-white font-semibold">KR Arts And Science College</strong>. All rights reserved. Affiliated to Madurai Kamaraj University.
          </p>
        </div>
      </div>
    </footer>
  );
}
