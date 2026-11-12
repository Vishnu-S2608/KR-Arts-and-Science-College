import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COURSES_DATA } from "@/data/coursesData";

export const metadata: Metadata = {
  title: "Undergraduate Degree Programmes | KR Arts and Science College",
  description:
    "Explore 11 career-oriented undergraduate programmes affiliated with Madurai Kamaraj University across Computing, AI, Commerce, Aviation, Sciences, and Humanities.",
};

export default function AcademicsIndexPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] text-slate-900">
      {/* Hero Header (Flat, no icons, no box-shadows) */}
      <section className="bg-[#021B4E] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(3,52,160,0.6),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(197,155,39,0.3),transparent_50%)]" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-white/10 text-[#F5B83D] border border-white/15 text-xs font-bold mb-4 shadow-none">
            <span>Madurai Kamaraj University Affiliation</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Academic Programmes &amp; Curriculum
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
            11 Career-Driven Undergraduate Degrees engineered with modern practical syllabi, dedicated laboratory centers, and 100% placement support.
          </p>
        </div>
      </section>

      {/* Grid of All Courses with Photos & Generous Spacing */}
      <section className="py-14 sm:py-18 lg:py-20">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {COURSES_DATA.map((course) => (
              <article
                key={course.id}
                className="bg-white rounded-tl-[22px] rounded-br-[22px] rounded-tr-none rounded-bl-none border-2 border-slate-200/90 hover:border-[#C59B27] transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-none"
              >
                <div>
                  {/* Photo Banner with Zoom on Hover */}
                  <Link
                    href={`/academics/${course.slug}`}
                    className="relative aspect-[16/10] w-full block overflow-hidden bg-slate-900"
                  >
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Animated Light Sweep across Photo on Hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-tl-[6px] rounded-br-[6px] text-[10px] font-bold bg-[#021B4E]/95 text-[#F5B83D] border border-[#C59B27]/50 uppercase tracking-wider backdrop-blur-sm shadow-none">
                        {course.categoryLabel}
                      </span>
                      <span className="font-mono text-xl sm:text-2xl font-black text-white/95 drop-shadow select-none">
                        {course.number}
                      </span>
                    </div>

                    {/* Bottom Duration Badge on Photo */}
                    <div className="absolute bottom-3.5 left-3.5 z-10 flex items-center gap-1.5 text-[11px] font-semibold text-slate-200 drop-shadow">
                      <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
                      <span>{course.duration}</span>
                    </div>
                  </Link>

                  {/* Content Container (Description removed) */}
                  <div className="p-6 sm:p-8">
                    <Link
                      href={`/academics/${course.slug}`}
                      className="block group-hover:text-[#0334A0] transition-colors"
                    >
                      <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#021B4E] leading-snug">
                        {course.title}
                      </h2>
                    </Link>
                    <p className="mt-2 text-xs sm:text-sm text-[#C59B27] font-semibold">
                      {course.department}
                    </p>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-6 pt-4 sm:p-8 sm:pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <Link
                    href={`/academics/${course.slug}`}
                    className="text-xs sm:text-sm font-bold text-[#0334A0] hover:text-[#021B4E] inline-flex items-center gap-1.5 group/link"
                  >
                    <span>View Curriculum</span>
                    <span className="text-[#C59B27] group-hover/link:translate-x-1.5 transition-transform duration-300 font-bold">
                      &rarr;
                    </span>
                  </Link>

                  <Link
                    href={`/apply?course=${encodeURIComponent(course.title)}`}
                    className="px-4 py-2 rounded-tl-[8px] rounded-br-[8px] text-xs font-bold text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27] transition-all shadow-none"
                  >
                    Apply Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
