import Image from "next/image";
import { ArrowRight, BookOpen, Award, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" id="overview">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="badge">
                <span className="badge-pulse" />
                Admissions Open 2026-2027 &bull; Apply Today
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.15] tracking-tight">
              Empowering Minds, <br />
              <span className="gradient-text">Shaping Tomorrow</span> at KR
              College
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-[580px]">
              Affiliated to Madurai Kamaraj University, KR Arts and Science
              College in Peraiyur provides top-tier academic training across
              Artificial Intelligence, Computer Science, Commerce, Aviation, and
              Liberal Arts.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <a href="#admissions" className="btn btn-primary">
                Apply for Admission
                <ArrowRight size={17} />
              </a>
              <a href="#programmes" className="btn btn-secondary">
                <BookOpen size={17} />
                Explore 11+ Programmes
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-8 pt-8 border-t border-slate-800">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  11+
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                  UG Programmes
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  100%
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                  Placement Support
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  GPU
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                  AI &amp; CS Labs
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  MKU
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                  Affiliated Univ.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="relative">
            <div className="group relative rounded-[24px] overflow-hidden border border-slate-700/60 shadow-[0_20px_45px_rgba(0,0,0,0.6)] bg-[#0c101d]">
              <Image
                src="/campus-hero.png"
                alt="KR Arts and Science College Campus Ground"
                width={700}
                height={480}
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/95 via-transparent to-transparent flex flex-col justify-end p-7">
                <span className="inline-flex items-center gap-1.5 bg-indigo-600/85 text-white px-3 py-1 rounded-full text-xs font-semibold w-fit mb-2">
                  State-of-the-Art Campus
                </span>
                <h3 className="text-xl font-bold text-white">
                  Peraiyur Main Campus, Madurai
                </h3>
              </div>
            </div>

            {/* Floating Accredited Badge */}
            <div className="absolute -bottom-6 left-4 lg:-left-8 bg-[#0f1422]/95 backdrop-blur-md border border-indigo-500/30 rounded-2xl p-4 md:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3.5 z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Award size={22} />
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <strong style={{ fontSize: "0.92rem", color: "#f8fafc" }}>
                    MKU Affiliated
                  </strong>
                  <CheckCircle2 size={14} color="#10b981" />
                </div>
                <p style={{ fontSize: "0.78rem", color: "#94a3b8" }}>
                  Govt. Approved Degree Programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
