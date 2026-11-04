"use client";

import { Award, GraduationCap, ShieldCheck, Mail, Phone } from "lucide-react";

export default function AdminSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative" id="administration">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            Leadership &bull; Governance
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Institutional Leadership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Dedicated administrative guides committed to academic rigour, student character development, and future placement excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Secretary & Correspondent */}
          <div className="pure-white-card p-8 flex flex-col justify-between group border-2 border-slate-100 hover:border-amber-400 transition-all">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-amber-500" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full mb-3 inline-block">
                Trustee &bull; Governance
              </span>
              <h3 className="text-2xl font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                Mr. K. Pandiaraj
              </h3>
              <div className="text-sm font-bold text-sky-700 mb-4">
                Secretary &amp; Correspondent
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Spearheading the foundational mission of KR Educational and Charitable Trust to bring affordable, 
                high-tech collegiate education, free transport access, and corporate recruitment linkages to rural youths.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">KR Educational &amp; Charitable Trust</span>
              <span className="text-emerald-600 font-bold">Peraiyur Campus</span>
            </div>
          </div>

          {/* Principal */}
          <div className="pure-white-card p-8 flex flex-col justify-between group border-2 border-slate-100 hover:border-sky-400 transition-all">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-sky-600" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-full mb-3 inline-block">
                Academic Executive
              </span>
              <h3 className="text-2xl font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                Dr. P. S. Senthilkumar
              </h3>
              <div className="text-sm font-bold text-sky-700 mb-4">
                Principal &amp; Head of Faculty
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Directing university syllabus delivery, research compliance under Madurai Kamaraj University, 
                faculty development programs, laboratory execution, and 100% placement coaching regimens.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">Ph.D. Academic Leadership</span>
              <span className="text-sky-600 font-bold">MKU University Affiliation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
