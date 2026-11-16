import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import placementsData from "@/data/placements.json";

interface Student {
  id: string;
  name: string;
  offers: number;
  photo: string;
}

export const metadata: Metadata = {
  title: "100% Campus Placements & Corporate Recruitment | KR Arts and Science College",
  description:
    "Explore the stellar 100% placement record of KR Arts and Science College. 70+ job offers across 7 top corporate firms in tech, logistics, and retail banking.",
};

const RECRUITERS = [
  {
    name: "Best Money Gold",
    sector: "Financial Services",
    logo: "/images/companies/best-money-gold.jpg",
    roles: "Finance Executives, Branch Operations & Customer Relationship Associates",
  },
  {
    name: "Maruti Suzuki",
    sector: "Automotive & Logistics",
    logo: "/images/companies/maruti-suzuki.jpg",
    roles: "Supply Chain Trainees, Logistics Analysts & Operational Associates",
  },
  {
    name: "Bhima Jewellers",
    sector: "Luxury Retail & Bullion",
    logo: "/images/companies/bhima.png",
    roles: "Store Operations, Inventory Management & Corporate Relationship Trainees",
  },
  {
    name: "BDreamz Global",
    sector: "IT Solutions & BPO",
    logo: "/images/companies/bdreamz.png",
    roles: "Software Associates, Web Developers & Technical Support Engineers",
  },
  {
    name: "Pothys Group",
    sector: "Retail & E-Commerce",
    logo: "/images/companies/pothys.png",
    roles: "E-Commerce Associates, Merchandise Planners & Retail Managers",
  },
  {
    name: "Theni Anantham",
    sector: "Retail & Commercial Hub",
    logo: "/images/companies/theni-anantham.webp",
    roles: "Commercial Operations, Accounts Executives & Floor Supervisors",
  },
  {
    name: "Besant Technologies",
    sector: "IT & Software Training",
    logo: "/images/companies/besant.png",
    roles: "Junior Software Engineers, QA Trainees & Python Full-Stack Developers",
  },
];

export default function PlacementsPage() {
  const students = [...(placementsData as Student[])].sort((a, b) => {
    if (b.offers !== a.offers) return b.offers - a.offers;
    return a.name.localeCompare(b.name);
  });

  const row1 = students.slice(0, 6);
  const row2 = students.slice(6, 12);
  const row3 = students.slice(12, 18);

  const renderStudentCard = (student: Student, key: string | number) => (
    <div
      key={key}
      className="w-[145px] sm:w-[165px] shrink-0 bg-white rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none p-2 sm:p-2.5 border-2 border-slate-200/90 hover:border-[#C59B27] hover:bg-gradient-to-b hover:from-white hover:to-[#FAFBFD] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 relative cursor-pointer overflow-hidden shadow-none"
    >
      {/* Top Accent Shimmer on Hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />

      {/* Photo Container - Compact 3:4 Portrait with Defined Borders */}
      <div className="relative aspect-[3/4] w-full rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none overflow-hidden bg-slate-100 mb-2 border border-slate-200/90 shadow-none">
        <Image
          src={student.photo}
          alt={student.name}
          fill
          unoptimized
          sizes="165px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Offer Badge Overlay with Signature Cut */}
        <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-tl-[6px] rounded-br-[6px] rounded-tr-none rounded-bl-none bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] text-[9px] sm:text-[10px] font-black tracking-wide flex items-center gap-1 shadow-none">
          <span>
            {student.offers} {student.offers === 1 ? "Offer" : "Offers"}
          </span>
        </div>
      </div>

      {/* Student Details - Perfectly Centered */}
      <div className="text-center w-full px-0.5">
        <h4
          className="font-heading text-[11px] sm:text-xs font-bold text-[#021B4E] truncate group-hover:text-[#0334A0] transition-colors leading-tight"
          title={student.name}
        >
          {student.name}
        </h4>
        <div className="inline-flex items-center justify-center gap-1 text-[9px] text-emerald-600 font-bold mt-1 bg-emerald-50/80 px-1.5 py-0.5 rounded-tl-[5px] rounded-br-[5px] rounded-tr-none rounded-bl-none border border-emerald-200/60 max-w-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="truncate">Placed</span>
        </div>
      </div>

      {/* Bottom Glowing Border Line Expanding on Hover */}
      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-slate-900">
      {/* 1. Breadcrumbs */}
      <div className="bg-[#FAF8F2] border-b border-slate-200/80 py-3.5">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-[#0334A0] transition-colors">
            Home
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-[#021B4E] font-bold">100% Placements</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative bg-[#021B4E] text-white overflow-hidden py-6 sm:py-8">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(3,52,160,0.6),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(197,155,39,0.25),transparent_50%)]" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="px-3 py-1 rounded-tl-[7px] rounded-br-[7px] rounded-tr-none rounded-bl-none text-[10px] font-bold bg-[#C59B27] text-slate-950 uppercase tracking-wider shadow-none">
                Campus Recruitment
              </span>
              <span className="px-3 py-1 rounded-tl-[7px] rounded-br-[7px] rounded-tr-none rounded-bl-none text-[10px] font-bold bg-white/10 text-white border border-white/20 shadow-none">
                Inaugural Batch &bull; 100% Placement Achievement
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              100% Verified Placements Record
            </h1>
          </div>

          {/* Stat Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-5">
            {[
              { label: "Placement Rate", value: "100%", sub: "18 out of 18 placed" },
              { label: "Job Offers Received", value: "70+", sub: "Multiple offers per student" },
              { label: "Top Corporate Recruiters", value: "7+", sub: "Tech, Retail & Automotive" },
              { label: "Max Offers Single Student", value: "8", sub: "Multi-corporate selection" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none p-3.5 sm:p-4 border border-white/15"
              >
                <div className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F5B83D]">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[10px] text-slate-300 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Corporate Recruiters Portfolio (Compact sizing in separate page) */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-6 sm:w-8 h-[2px] bg-[#C59B27]" />
            <span className="text-[11px] font-bold tracking-widest text-[#0334A0] uppercase">
              Corporate Recruitment Partners
            </span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-5">
            Esteemed Industry Hiring Partners
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-3.5">
            {RECRUITERS.map((company, idx) => (
              <div
                key={idx}
                className="bg-[#FDFCF7] rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none p-3 border-2 border-slate-200/90 hover:border-[#C59B27] transition-all duration-300 flex flex-col justify-between group shadow-none"
              >
                <div>
                  <div className="relative h-12 w-full rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-white p-1.5 border border-slate-200/80 flex items-center justify-center overflow-hidden mb-2.5">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      sizes="160px"
                      className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[9px] font-bold tracking-wider uppercase text-[#0334A0] bg-[#0334A0]/10 px-2 py-0.5 rounded-tl-[5px] rounded-br-[5px] inline-block mb-1.5 truncate max-w-full">
                    {company.sector}
                  </span>
                  <h3 className="font-heading text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0334A0] transition-colors leading-snug truncate" title={company.name}>
                    {company.name}
                  </h3>
                  <p className="mt-1 text-[10px] text-slate-500 leading-tight line-clamp-2" title={company.roles}>
                    {company.roles}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Student Placements Marquee Showcase */}
      <section className="py-14 sm:py-20 bg-[#FDFCF7] overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27]" />
                <span className="text-xs font-bold tracking-widest text-[#0334A0] uppercase">
                  Hall of Achievers &bull; 100% Placed Cohort
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Inaugural Batch Placed Scholars
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Continuous marquee showcase of all 18 graduating scholars and their corporate offer achievements. Hover over any card to pause.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] text-xs font-bold shadow-none">
              <span>All 18 Placed &bull; 70+ Total Offers</span>
            </div>
          </div>
        </div>

        {/* 3-Row Alternating Direction Marquee Showcase (Full Width Edge-to-Edge) */}
        <div className="relative w-full overflow-hidden space-y-2 sm:space-y-2.5 py-3">
          {/* Row 1: Leftward Motion */}
          <div className="overflow-hidden py-2">
            <div className="animate-student-row1 gap-3.5 sm:gap-4 py-1">
              {[...row1, ...row1, ...row1, ...row1].map((s, idx) =>
                renderStudentCard(s, `page-r1-${idx}`),
              )}
            </div>
          </div>

          {/* Row 2: Rightward Motion (Alternating Direction) */}
          <div className="overflow-hidden py-2">
            <div className="animate-student-row2 gap-3.5 sm:gap-4 py-1">
              {[...row2, ...row2, ...row2, ...row2].map((s, idx) =>
                renderStudentCard(s, `page-r2-${idx}`),
              )}
            </div>
          </div>

          {/* Row 3: Leftward Motion */}
          <div className="overflow-hidden py-2">
            <div className="animate-student-row3 gap-3.5 sm:gap-4 py-1">
              {[...row3, ...row3, ...row3, ...row3].map((s, idx) =>
                renderStudentCard(s, `page-r3-${idx}`),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Placement Cell Roadmap & Training (Compact sizing) */}
      <section className="py-10 sm:py-14 bg-white border-t border-slate-200/80">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-6 sm:w-8 h-[2px] bg-[#C59B27]" />
              <span className="text-[11px] font-bold tracking-widest text-[#0334A0] uppercase">
                Career Readiness Framework
              </span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Comprehensive Career Training Cell
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our training methodology starts from Year 1, transforming rural talent into industry-ready corporate professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                step: "01",
                title: "Quantitative Aptitude & Reasoning",
                desc: "Rigorous logical problem-solving drills, verbal ability, and data interpretation workshops conducted by certified corporate trainers.",
              },
              {
                step: "02",
                title: "Technical Mock Interviews & Coding",
                desc: "Hands-on coding sprints, computerized lab assessments, and simulated technical interview rounds mimicking tier-1 IT standards.",
              },
              {
                step: "03",
                title: "Soft Skills & Corporate Grooming",
                desc: "Professional communication, resume mentoring, group discussion masterclasses, and executive etiquette grooming for campus drives.",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="bg-[#FDFCF7] rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none p-4 sm:p-5 border-2 border-slate-200/90 hover:border-[#C59B27] transition-all duration-300"
              >
                <span className="font-heading text-xl sm:text-2xl font-extrabold text-[#C59B27] block mb-2">
                  {pillar.step}
                </span>
                <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-10 rounded-tl-[18px] rounded-br-[18px] rounded-tr-none rounded-bl-none bg-[#021B4E] text-white p-6 sm:p-8 border-2 border-[#C59B27] flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white">
                Launch Your Career with KR College
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-xl">
                Admissions are open for 2026 undergraduate programmes. Join our 100% placement legacy today.
              </p>
            </div>
            <Link
              href="/apply"
              className="px-6 py-2.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs sm:text-sm font-bold text-[#021B4E] bg-[#F5B83D] hover:bg-[#FBF2D4] transition-all duration-300 shrink-0 shadow-none"
            >
              Apply for 2026 Admissions &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
