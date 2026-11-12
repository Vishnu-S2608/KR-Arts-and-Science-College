import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CLUBS_DATA } from "@/data/clubsData";

export const metadata: Metadata = {
  title: "Student Clubs, NCC Cadet Wing & NSS Societies | KR Arts And Science College",
  description:
    "Discover student clubs, NCC cadet wing, NSS community outreach, KR Leaders Club, and sports societies at KR Arts And Science College, Madurai.",
};

export default function ClubsPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] text-slate-900">
      {/* 1. Breadcrumbs Bar */}
      <div className="bg-[#FAF8F2] border-b border-slate-200/80 py-3.5">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-[#0334A0] transition-colors">
            Home
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-[#021B4E] font-bold">Clubs, NCC &amp; NSS</span>
        </div>
      </div>

      {/* 2. Hero Banner with Signature Diagonal Boxing */}
      <section className="relative bg-[#021B4E] text-white overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(3,52,160,0.6),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(197,155,39,0.25),transparent_50%)]" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-[11px] font-bold bg-[#C59B27] text-slate-950 uppercase tracking-wider shadow-none">
                Co-Curricular Life
              </span>
              <span className="px-3.5 py-1.5 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none text-[11px] font-bold bg-white/10 text-white border border-white/20 shadow-none">
                Madurai Kamaraj University &bull; 7 TN BN NCC
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Student Clubs, NCC Cadet Wing &amp; NSS Outreach
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Explore our active co-curricular units fostering patriotic character, rural community empowerment, youth civic governance, athletic championships, and artistic expression.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Clubs Directory Grid (Every Card Completely Clickable, No Clutter, Signature Diagonal Cut) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27]" />
            <span className="text-xs font-bold tracking-widest text-[#0334A0] uppercase">
              All Recognized Student Wings &amp; Clubs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {CLUBS_DATA.map((club) => (
              <Link
                key={club.slug}
                href={`/clubs/${club.slug}`}
                className="bg-white rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none border-2 border-slate-200 hover:border-[#C59B27] transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-none cursor-pointer hover:-translate-y-1"
              >
                <div>
                  {/* Photo Banner with Zoom on Hover & Light Sweep */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={club.image}
                      alt={club.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3.5 py-1.5 rounded-tl-[7px] rounded-br-[7px] text-[10px] font-bold bg-[#021B4E]/95 text-[#F5B83D] border border-[#C59B27]/50 uppercase tracking-wider backdrop-blur-sm shadow-none">
                        {club.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 z-10 text-white">
                      <span className="text-[11px] font-semibold text-[#F5B83D] block uppercase tracking-wider">
                        {club.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-7 sm:p-8">
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#021B4E] group-hover:text-[#0334A0] transition-colors leading-snug mb-2.5">
                      {club.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {club.tagline}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="p-7 pt-4 sm:p-8 sm:pt-4 border-t border-slate-100 flex items-center justify-between mt-auto bg-slate-50/50">
                  <span className="text-xs font-bold text-[#0334A0] group-hover:text-[#021B4E] inline-flex items-center gap-1.5 transition-colors">
                    <span>View Club Details</span>
                    <span className="text-[#C59B27] group-hover:translate-x-1.5 transition-transform duration-300 font-bold">
                      &rarr;
                    </span>
                  </span>

                  <span className="text-xs font-bold text-slate-400">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
