import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#040508] border-t border-slate-800 pt-20 pb-8 text-slate-400 text-[0.9rem]" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 lg:gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3.5">
              <Image
                src="/kr-logo.png"
                alt="KR Arts and Science College"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-indigo-500/40"
              />
              <div>
                <span className="text-xl font-extrabold text-white leading-tight">KR Arts &amp; Science</span>
                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                  College &bull; Peraiyur
                </p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-[0.88rem]">
              KR Arts and Science College is affiliated to Madurai Kamaraj University, offering premier undergraduate education tailored for career growth and technological innovation.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#10b981", fontSize: "0.82rem" }}>
              <ShieldCheck size={16} />
              <span>Affiliated to Madurai Kamaraj University</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-5">Navigation</h4>
            <ul className="list-none flex flex-col gap-3 p-0 m-0">
              <li>
                <Link href="#overview" className="text-slate-400 transition-colors duration-200 text-[0.88rem] hover:text-white">
                  Home &amp; Overview
                </Link>
              </li>
              <li>
                <Link href="#programmes" className="text-slate-400 transition-colors duration-200 text-[0.88rem] hover:text-white">
                  All 11 Programmes
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="text-slate-400 transition-colors duration-200 text-[0.88rem] hover:text-white">
                  Campus &amp; Facilities
                </Link>
              </li>
              <li>
                <Link href="#admissions" className="text-slate-400 transition-colors duration-200 text-[0.88rem] hover:text-white">
                  Admissions 2026-2027
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="text-base font-bold text-white mb-5">Top Programmes</h4>
            <ul className="list-none flex flex-col gap-3 p-0 m-0">
              <li>
                <Link href="#programmes" className="text-slate-400 transition-colors duration-200 text-[0.88rem] hover:text-white">
                  B.Sc Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="#programmes" className="text-slate-400 transition-colors duration-200 text-[0.88rem] hover:text-white">
                  B.Sc Computer Science
                </Link>
              </li>
              <li>
                <Link href="#programmes" className="text-slate-400 transition-colors duration-200 text-[0.88rem] hover:text-white">
                  B.Com Computer Applications
                </Link>
              </li>
              <li>
                <Link href="#programmes" className="text-slate-400 transition-colors duration-200 text-[0.88rem] hover:text-white">
                  BBA Aviation Management
                </Link>
              </li>
              <li>
                <Link href="#programmes" className="text-slate-400 transition-colors duration-200 text-[0.88rem] hover:text-white">
                  B.A Criminology &amp; Police Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-base font-bold text-white mb-5">College Campus</h4>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-start gap-2.5 text-[0.88rem]">
                <MapPin size={18} color="#818cf8" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>P. Thambipatti, Peraiyur Taluk, Madurai - 625703, Tamil Nadu.</span>
              </div>
              <div className="flex items-start gap-2.5 text-[0.88rem]">
                <Phone size={16} color="#818cf8" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>+91 94420 22000, +91 94420 22001</span>
              </div>
              <div className="flex items-start gap-2.5 text-[0.88rem]">
                <Mail size={16} color="#818cf8" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>admissions@krcollege.edu.in</span>
              </div>
              <div className="flex items-start gap-2.5 text-[0.88rem]">
                <Clock size={16} color="#818cf8" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>Mon - Sat: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} KR Arts and Science College, Peraiyur. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Admission</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">Mandatory Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
