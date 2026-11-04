"use client";

import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  GraduationCap, 
  Heart, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Bus
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t-2 border-amber-400/40 relative overflow-hidden" id="contact">
      {/* Subtle Ambient Background */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[250px] bg-sky-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Branding Strip */}
        <div className="pb-12 border-b border-slate-800/80 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 bg-white shrink-0 p-0.5 shadow-lg">
              <img 
                src="/assets/logo.jpeg" 
                alt="KR Arts And Science College Seal"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <span className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight block">
                KR Arts And Science College
              </span>
              <span className="text-xs sm:text-sm text-sky-400 font-semibold">
                Affiliated to Madurai Kamaraj University &bull; Approved by Govt. of Tamil Nadu &bull; Est. 2023
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
              AISHE Code: <strong className="text-amber-400">C-66023</strong>
            </div>
            <div className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
              Placement: <strong className="text-emerald-400">100% Verifiable Record</strong>
            </div>
            <Link
              href="/apply"
              className="gold-shimmer-btn px-5 py-2 rounded-full text-xs font-bold"
            >
              Admissions 2026-27
            </Link>
          </div>
        </div>

        {/* 4 Multi-Column Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: About Trust & Identity (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              About the College
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Established in 2023 under the aegis of <strong className="text-slate-200">KR Educational and Charitable Trust</strong>, 
              dedicated to fostering intellectual empowerment, moral character, and guaranteed corporate career placements for rural youth across Madurai district.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs text-slate-400 uppercase tracking-wider block font-bold mb-1">
                Sacred Institutional Motto
              </span>
              <span className="font-tamil text-amber-400 font-bold text-base block">
                உள்ளுவதெல்லாம் உயர்வுள்ளல்
              </span>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                (Let your thoughts and aims be ever lofty and elevated)
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/#programmes" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>All 11 Courses</span>
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-amber-400 text-amber-300 font-semibold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Admissions 2026</span>
                </Link>
              </li>
              <li>
                <Link href="/#placements" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>100% Placements</span>
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Clubs &amp; NCC Wing</span>
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Campus Chronicle</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Contact &amp; Bus Routes</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Degrees (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              Key Programmes
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/department/ai" className="hover:text-sky-400 transition-colors">
                  B.Sc Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/department/aviation" className="hover:text-sky-400 transition-colors">
                  BBA Aviation Management
                </Link>
              </li>
              <li>
                <Link href="/department/commerce" className="hover:text-sky-400 transition-colors">
                  B.Com (Computer Applications)
                </Link>
              </li>
              <li>
                <Link href="/department/cs" className="hover:text-sky-400 transition-colors">
                  B.Sc Computer Science
                </Link>
              </li>
              <li>
                <Link href="/department/criminology" className="hover:text-sky-400 transition-colors">
                  B.A Criminology &amp; Police Admin
                </Link>
              </li>
              <li>
                <Link href="/department/chemistry" className="hover:text-sky-400 transition-colors">
                  B.Sc Chemistry
                </Link>
              </li>
              <li>
                <Link href="/department/home-science" className="hover:text-sky-400 transition-colors">
                  B.Sc Home Science (Nutrition)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact & Transit Map (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Campus &amp; Location
            </h4>

            <div className="space-y-2.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  P. Thambipatti, Peraiyur Tk, Via T. Kallupatti, Madurai - 625 703, Tamil Nadu.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs">
                  <a href="tel:+918072297109" className="hover:text-sky-400 font-bold">+91 80722 97109</a> / 04549-299877
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs">
                  <a href="mailto:info@krcolleges.in" className="hover:text-sky-400">info@krcolleges.in</a>
                </span>
              </div>
            </div>

            {/* Google Map Thumbnail Embed */}
            <div className="h-28 rounded-xl overflow-hidden border border-slate-800 shadow-md">
              <iframe
                title="KR Arts And Science College Campus Location"
                src="https://maps.google.com/maps?q=KR%20Arts%20and%20Science%20College%20Peraiyur%20Madurai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 KR Arts And Science College. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/apply" className="hover:text-slate-300 transition-colors">
              Admissions Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Campus Bus Routes
            </Link>
            <Link href="/events" className="hover:text-slate-300 transition-colors">
              Press &amp; Media
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
