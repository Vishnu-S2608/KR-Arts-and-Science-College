"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Phone, MapPin, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#07090e]/80 backdrop-blur-xl border-b border-slate-800 transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="hidden md:block bg-indigo-500/[0.08] border-b border-indigo-500/[0.15] text-xs py-1.5 text-slate-400">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <MapPin size={13} color="#818cf8" />
            <span>Peraiyur, Madurai District, Tamil Nadu - 625703</span>
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <div className="flex items-center gap-1.5">
              <GraduationCap size={13} color="#818cf8" />
              <span>Affiliated to Madurai Kamaraj University</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={13} color="#818cf8" />
              <span>Admissions Helpline: +91 94420 22000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <div className="container">
        <div className="flex items-center justify-between h-[4.5rem]">
          <Link href="/" className="flex items-center gap-3.5 no-underline">
            <Image
              src="/kr-logo.png"
              alt="KR Arts & Science College Seal"
              width={44}
              height={44}
              className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.3)]"
              priority
            />
            <div className="flex flex-col">
              <span className="text-lg font-extrabold text-white leading-tight tracking-tight">KR Arts &amp; Science</span>
              <span className="text-[0.72rem] text-slate-400 uppercase tracking-wider font-medium">College &bull; Peraiyur</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            <Link href="#programmes" className="text-slate-300 text-[0.92rem] font-medium transition-colors hover:text-white">
              Programmes
            </Link>
            <Link href="#facilities" className="text-slate-300 text-[0.92rem] font-medium transition-colors hover:text-white">
              Campus &amp; Facilities
            </Link>
            <Link href="#why-kr" className="text-slate-300 text-[0.92rem] font-medium transition-colors hover:text-white">
              Why KR College
            </Link>
            <Link href="#admissions" className="text-slate-300 text-[0.92rem] font-medium transition-colors hover:text-white">
              Admissions 2026
            </Link>
            <Link href="#contact" className="text-slate-300 text-[0.92rem] font-medium transition-colors hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#admissions" className="btn btn-primary" style={{ padding: "0.55rem 1.2rem", fontSize: "0.88rem" }}>
              Apply Now
              <ArrowRight size={15} />
            </a>
            <button
              className="md:hidden bg-transparent border-0 text-white cursor-pointer p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-4 p-6 bg-[#0c101d] border-t border-slate-800">
          <Link
            href="#programmes"
            className="text-slate-300 text-[0.92rem] font-medium transition-colors hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Programmes
          </Link>
          <Link
            href="#facilities"
            className="text-slate-300 text-[0.92rem] font-medium transition-colors hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Campus &amp; Facilities
          </Link>
          <Link
            href="#why-kr"
            className="text-slate-300 text-[0.92rem] font-medium transition-colors hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Why KR College
          </Link>
          <Link
            href="#admissions"
            className="text-slate-300 text-[0.92rem] font-medium transition-colors hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Admissions 2026
          </Link>
          <Link
            href="#contact"
            className="text-slate-300 text-[0.92rem] font-medium transition-colors hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
