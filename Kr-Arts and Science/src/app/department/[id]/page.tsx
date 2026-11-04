import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  Briefcase, 
  Sparkles, 
  Award,
  Phone,
  Clock
} from "lucide-react";
import { DEPARTMENTS_DATA } from "@/data/departments";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(DEPARTMENTS_DATA).map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const dept = DEPARTMENTS_DATA[id];
  if (!dept) return { title: "Department Not Found" };

  return {
    title: `${dept.title} | KR Arts And Science College`,
    description: dept.overview,
  };
}

export default async function DepartmentDetailPage({ params }: PageProps) {
  const { id } = await params;
  const dept = DEPARTMENTS_DATA[id];

  if (!dept) {
    notFound();
  }

  const allDepts = [
    { id: "ai", label: "B.Sc AI" },
    { id: "commerce", label: "B.Com (CA)" },
    { id: "aviation", label: "BBA Aviation" },
    { id: "cs", label: "B.Sc CS" },
    { id: "tamil", label: "B.A Tamil" },
    { id: "criminology", label: "B.A Criminology" },
    { id: "english", label: "B.A English" },
    { id: "physical-education", label: "B.Sc Physical Ed" },
    { id: "chemistry", label: "B.Sc Chemistry" },
    { id: "home-science", label: "B.Sc Home Science" },
    { id: "mathematics", label: "B.Sc Mathematics" },
  ];

  return (
    <main className="pt-8 sm:pt-12 pb-20 bg-gradient-to-b from-sky-50/40 via-white to-white min-h-screen">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Quick Horizontal Department Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {allDepts.map((d) => {
            const isActive = d.id === id;
            return (
              <Link
                key={d.id}
                href={`/department/${d.id}`}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-sky-600 text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-sky-50 hover:text-sky-700 border border-slate-200"
                }`}
              >
                {d.label}
              </Link>
            );
          })}
        </div>

        {/* Hero Department Header */}
        <div className="pure-white-card p-6 sm:p-12 mb-10 border-2 border-sky-100 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>{dept.affiliation}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {dept.title}
              </h1>

              <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-sky-700">
                  <Clock className="w-4 h-4" />
                  3 Years (6 Semesters) Regular
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  100% Placement Assured
                </span>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {dept.overview}
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link 
                  href="/apply"
                  className="gold-shimmer-btn px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Apply for this Degree</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </Link>

                <a 
                  href="tel:+918072297109"
                  className="px-6 py-3 rounded-full text-sm font-bold text-sky-700 bg-sky-50 border border-sky-200 hover:bg-sky-100 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Admission Counselor</span>
                </a>
              </div>
            </div>

            {/* Department Media Showcase */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-50 relative">
                {dept.image ? (
                  <img 
                    src={dept.image} 
                    alt={dept.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-sky-50 to-amber-50">
                    <GraduationCap className="w-12 h-12 text-sky-500 mb-2" />
                    <span className="font-bold text-slate-800 text-sm">{dept.title}</span>
                    <span className="text-xs text-slate-500 mt-1">Laboratory &amp; Faculty Wing</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-slate-900 border border-slate-200 shadow-sm">
                  MKU Approved Course
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curricular Areas & Target Career Pathways */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Core Curricular Areas */}
          <div className="pure-white-card p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600">
                <BookOpen className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Core Curricular Syllabus
              </h2>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              Compliant with Madurai Kamaraj University academic framework, enriched with practical laboratory sessions.
            </p>

            <ul className="space-y-3">
              {dept.curriculum.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800"
                >
                  <span className="w-2 h-2 rounded-full bg-sky-600 shrink-0 mt-1.5"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Career Pathways */}
          <div className="pure-white-card p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <Briefcase className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Target Career Pathways &amp; Outcomes
              </h2>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              Proven corporate demand sectors with high entry-level compensation packages and recruitment drives.
            </p>

            <div className="space-y-3">
              {dept.careers.map((career, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between"
                >
                  <span className="text-sm font-bold text-slate-900">{career}</span>
                  <span className="text-[10px] font-bold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-full">
                    High Demand
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Fast Action Banner */}
        <div className="p-8 bg-gradient-to-r from-sky-50 via-white to-amber-50 rounded-3xl border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Interested in {dept.title}?</h3>
            <p className="text-xs sm:text-sm text-slate-600">Secure your priority seat allotment for Academic Year 2026-27.</p>
          </div>
          <Link
            href="/apply"
            className="gold-shimmer-btn px-6 py-3 rounded-full text-xs sm:text-sm font-bold shrink-0"
          >
            Apply for this Programme
          </Link>
        </div>
      </div>
    </main>
  );
}
