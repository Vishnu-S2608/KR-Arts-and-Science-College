import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
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
    <main className="pt-[calc(var(--header-height)+2rem)] min-h-[80vh]">
      {/* Department Header & Hero */}
      <section className="section-wrapper bg-blue-tint !pb-14">
        <div className="container">
          {/* Quick Department Selector Tabs */}
          <div className="mb-8 overflow-x-auto whitespace-nowrap pb-2 flex gap-2">
            {allDepts.map((d) => {
              const isActive = d.id === id;
              return (
                <Link
                  key={d.id}
                  href={`/department/${d.id}`}
                  className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-md"
                      : "bg-blue-100 text-slate-800 border-blue-200 hover:bg-blue-200"
                  }`}
                >
                  {d.label}
                </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-center">
            <div>
              <div className="section-label" id="dept-affiliation">
                {dept.affiliation}
              </div>
              <h1 id="dept-title" className="mb-4">
                {dept.title}
              </h1>
              <p
                id="dept-overview"
                className="text-[1.1rem] leading-relaxed text-slate-600 mb-8"
              >
                {dept.overview}
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/apply" className="btn btn-primary magnetic-btn">
                  Apply for this Degree
                </Link>
                <a href="tel:+918072297109" className="btn btn-outline magnetic-btn">
                  Enquire Admission
                </a>
              </div>
            </div>

            {/* Hero Department Media */}
            <div
              id="dept-media-box"
              className="aspect-[4/3] rounded-[24px] overflow-hidden border border-slate-300 bg-brand-card shadow-lg"
            >
              {dept.image ? (
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="photo-placeholder">
                  <div className="placeholder-line"></div>
                  Photo to be added ({dept.title} Laboratory &amp; Faculty)
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Career Paths */}
      <section className="section-wrapper bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14">
          {/* Core Curriculum Areas */}
          <div>
            <div className="section-label">Academic Framework</div>
            <h2 className="text-[1.85rem] mb-6">Core Curricular Areas</h2>
            <ul
              id="dept-curriculum-list"
              className="list-none flex flex-col gap-3.5 p-0 m-0"
            >
              {dept.curriculum.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3.5 px-5 py-3.5 bg-brand-card rounded-xl border border-slate-300 font-medium text-slate-800"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Pathways */}
          <div>
            <div className="section-label">Employability &amp; Placements</div>
            <h2 className="text-[1.85rem] mb-6">Target Career Pathways</h2>
            <div id="dept-careers-list" className="flex flex-col gap-3">
              {dept.careers.map((career, idx) => (
                <div
                  key={idx}
                  className="px-5 py-4 bg-brand-card border border-slate-300 rounded-xl flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-900">{career}</span>
                  <span className="text-pill text-xs">
                    High Demand
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Neutral Section */}
      <section className="section-wrapper bg-gray-tint">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Department Mentorship</div>
            <h2>Faculty &amp; Academic Guides</h2>
          </div>
          <div className="bg-brand-card border-1.5 border-dashed border-slate-300 rounded-[24px] p-8 md:p-12 text-center shadow-[0_14px_36px_rgba(11,27,63,0.08)]">
            <h3 className="text-xl text-slate-900 mb-2 font-bold">
              Faculty Directory
            </h3>
            <p className="text-slate-600 max-w-[580px] mx-auto text-sm md:text-base">
              Faculty Directory TODO: Updated faculty roster and Ph.D. mentor credentials to be updated.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
