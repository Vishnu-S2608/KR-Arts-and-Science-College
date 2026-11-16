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
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 flex items-center gap-2 text-xs font-semibold text-black/70">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-black font-bold">Clubs, NCC &amp; NSS</span>
        </div>
      </div>

      {/* 2. Compact Hero Banner with Signature Diagonal Boxing (No Vast Empty Space) */}
      <section className="relative bg-[#021B4E] text-white overflow-hidden py-7 sm:py-9">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(3,52,160,0.6),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,215,0,0.25),transparent_50%)]" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-8">
            {/* Left: Titles & Badges */}
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="px-3 py-1 rounded-tl-[7px] rounded-br-[7px] rounded-tr-none rounded-bl-none text-[10px] font-bold bg-[#FFD700] text-black uppercase tracking-wider shadow-none">
                  Co-Curricular Life
                </span>
                <span className="px-3 py-1 rounded-tl-[7px] rounded-br-[7px] rounded-tr-none rounded-bl-none text-[10px] font-bold bg-white/10 text-white border border-white/20 shadow-none">
                  Madurai Kamaraj University &bull; 7 TN BN NCC
                </span>
              </div>

              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Student Clubs, NCC Cadet Wing &amp; NSS Outreach
              </h1>
            </div>

            {/* Right: Compact Description & Key Metric Pills */}
            <div className="lg:max-w-md lg:border-l lg:border-white/15 lg:pl-6 shrink-0">
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Explore our active co-curricular units fostering patriotic character, rural community empowerment, youth civic governance, athletic championships, and artistic expression.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-tl-[6px] rounded-br-[6px] text-[11px] font-semibold bg-white/10 border border-white/15 text-white">
                  6 Active Wings
                </span>
                <span className="px-2.5 py-0.5 rounded-tl-[6px] rounded-br-[6px] text-[11px] font-semibold bg-white/10 border border-white/15 text-white">
                  Direct SSB Commission
                </span>
                <span className="px-2.5 py-0.5 rounded-tl-[6px] rounded-br-[6px] text-[11px] font-semibold bg-[#FFD700] text-black font-bold">
                  MKU NSS Unit
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Non-Uniform Dynamic Co-Curricular Mosaic (No Monotonous Rows & Columns) */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-8 sm:w-12 h-[2px] bg-[#FFD700]" />
                <span className="text-xs font-bold tracking-widest text-black uppercase">
                  Recognized Co-Curricular Wings &bull; Dynamic Student Life
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight">
                Featured Student Wings &amp; Specialized Societies
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-black/75 max-w-md">
              From Indian Armed Forces officer grooming in NCC to rural village transformation in NSS and civic governance leadership.
            </p>
          </div>

          {/* DYNAMIC ASYMMETRIC BENTO MOSAIC (All 6 Clubs, Zero Empty Space, Distinct Visual Formats) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* ROW 1 - LEFT: NCC ARMY WING (Wide 8-Column Panoramic Feature) */}
            {(() => {
              const ncc = CLUBS_DATA.find((c) => c.slug === "ncc");
              if (!ncc) return null;
              return (
                <Link
                  key={ncc.slug}
                  href={`/clubs/${ncc.slug}`}
                  className="lg:col-span-8 bg-gradient-to-br from-[#021B4E] via-[#0334A0] to-[#011640] text-white rounded-tl-[28px] rounded-br-[28px] rounded-tr-none rounded-bl-none overflow-hidden border-2 border-[#FFD700]/70 hover:border-[#FFD700] transition-all duration-300 shadow-md group flex flex-col md:flex-row items-stretch"
                >
                  <div className="w-full md:w-[46%] relative min-h-[260px] md:min-h-0 overflow-hidden shrink-0">
                    <Image
                      src={ncc.image}
                      alt={ncc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#021B4E]/90 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-tl-[6px] rounded-br-[6px] text-[10px] font-bold bg-[#FFD700] text-black uppercase tracking-wider shadow-xs">
                        Flagship Defense Wing
                      </span>
                      <span className="px-3 py-1 rounded-tl-[6px] rounded-br-[6px] text-[10px] font-bold bg-black/60 text-white backdrop-blur-xs border border-white/20">
                        {ncc.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <span className="inline-block bg-[#021B4E]/90 text-[#FFD700] text-[11px] font-mono font-bold px-3 py-1 rounded-tl-[6px] rounded-br-[6px] border border-[#FFD700]/50">
                        Direct SSB Officer Commission Entry
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
                        <span className="text-[11px] font-mono font-bold text-[#FFD700] uppercase tracking-wider">
                          7 TN BN NCC Directorate
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FFD700] transition-colors leading-tight mb-2">
                        {ncc.title}
                      </h3>
                      <p className="text-xs text-[#FBF2D4] italic font-serif mb-3">
                        &ldquo;{ncc.motto}&rdquo;
                      </p>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                        {ncc.tagline}
                      </p>

                      <div className="grid grid-cols-2 gap-2.5 mb-4">
                        <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-tl-[8px] rounded-br-[8px] border border-white/15">
                          <span className="text-[10px] text-[#FFD700] font-bold block uppercase tracking-wider">Credentials</span>
                          <span className="text-xs font-bold text-white">B &amp; C National Certification</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-xs p-2.5 rounded-tl-[8px] rounded-br-[8px] border border-white/15">
                          <span className="text-[10px] text-[#FFD700] font-bold block uppercase tracking-wider">Trials</span>
                          <span className="text-xs font-bold text-white">Thal Sainik &amp; RDC Selection</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD700] group-hover:text-white transition-colors">
                        <span>Explore NCC Cadet Wing</span>
                        <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                      </span>
                      <span className="text-[11px] text-slate-300 font-mono">Madurai Group</span>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/* ROW 1 - RIGHT: NSS & UBA (Tall 4-Column Community Pillar) */}
            {(() => {
              const nss = CLUBS_DATA.find((c) => c.slug === "nss");
              if (!nss) return null;
              return (
                <Link
                  key={nss.slug}
                  href={`/clubs/${nss.slug}`}
                  className="lg:col-span-4 bg-white rounded-tl-[28px] rounded-br-[28px] rounded-tr-none rounded-bl-none border-2 border-slate-200/90 hover:border-[#10B981] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md group flex flex-col justify-between"
                >
                  <div className="relative h-[200px] sm:h-[220px] w-full overflow-hidden bg-emerald-950">
                    <Image
                      src={nss.image}
                      alt={nss.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-tl-[6px] rounded-br-[6px] text-[10px] font-bold bg-[#021B4E]/95 text-emerald-400 border border-emerald-500/40 uppercase tracking-wider backdrop-blur-sm shadow-xs">
                        Community &bull; UBA
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300 block mb-0.5">
                        {nss.badge}
                      </span>
                      <span className="text-xs font-bold text-white bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                        5 Adopted Revenue Villages
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-black group-hover:text-[#10B981] transition-colors leading-snug mb-1">
                        {nss.title}
                      </h3>
                      <p className="text-xs text-emerald-700 italic font-serif mb-2">
                        &ldquo;{nss.motto}&rdquo;
                      </p>
                      <p className="text-xs text-black leading-relaxed mb-4">
                        {nss.tagline}
                      </p>
                      <div className="bg-emerald-50 border border-emerald-200/70 p-3 rounded-tl-[8px] rounded-br-[8px]">
                        <span className="text-[10px] font-bold text-emerald-800 uppercase block mb-0.5">Key Focus</span>
                        <p className="text-xs text-emerald-900 font-medium">
                          7-Day Rural Residential Immersion &bull; Tree Planting &bull; Health Drives
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-black group-hover:text-[#10B981] inline-flex items-center gap-1.5 transition-colors">
                        <span>View Outreach Mission</span>
                        <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">UBA Unit</span>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/* ROW 2 - LEFT: GREEN CAMPUS ECO CLUB (4-Column Nature Card) */}
            {(() => {
              const eco = CLUBS_DATA.find((c) => c.slug === "green-club");
              if (!eco) return null;
              return (
                <Link
                  key={eco.slug}
                  href={`/clubs/${eco.slug}`}
                  className="lg:col-span-4 bg-gradient-to-br from-emerald-950 via-[#064e3b] to-[#022c22] text-white rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none border-2 border-emerald-500/40 hover:border-[#FFD700] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md group flex flex-col justify-between"
                >
                  <div className="relative h-[190px] w-full overflow-hidden">
                    <Image
                      src={eco.image}
                      alt={eco.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-2.5 py-1 rounded-tl-[6px] rounded-br-[6px] text-[10px] font-bold bg-[#FFD700] text-black uppercase tracking-wider">
                        Environmental Care
                      </span>
                    </div>
                    <div className="absolute bottom-3.5 left-4 z-10 text-white">
                      <span className="text-[11px] font-mono font-bold text-[#FFD700]">
                        10+ Acre Eco Campus &bull; Solar Care
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors leading-snug mb-1">
                        {eco.title}
                      </h3>
                      <p className="text-xs text-emerald-200 italic font-serif mb-2">
                        &ldquo;{eco.motto}&rdquo;
                      </p>
                      <p className="text-xs text-slate-200 leading-relaxed mb-4">
                        {eco.tagline}
                      </p>
                      <div className="bg-white/10 backdrop-blur-xs p-3 rounded-tl-[8px] rounded-br-[8px] border border-white/15">
                        <span className="text-[10px] text-[#FFD700] font-bold block uppercase tracking-wider">Impact Stats</span>
                        <p className="text-xs text-white font-medium">
                          1,000+ Native Saplings Planted &bull; Rainwater Ponds
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#FFD700] group-hover:text-white inline-flex items-center gap-1 transition-colors">
                        <span>View Eco Initiatives</span>
                        <span>&rarr;</span>
                      </span>
                      <span className="text-[10px] text-emerald-200 font-mono">Botanical Unit</span>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/* ROW 2 - RIGHT: ART, CRAFT & LITERARY SOCIETY (Wide 8-Column Cultural Panorama) */}
            {(() => {
              const arts = CLUBS_DATA.find((c) => c.slug === "arts-literary");
              if (!arts) return null;
              return (
                <Link
                  key={arts.slug}
                  href={`/clubs/${arts.slug}`}
                  className="lg:col-span-8 bg-white rounded-tl-[28px] rounded-br-[28px] rounded-tr-none rounded-bl-none border-2 border-slate-200/90 hover:border-[#FFD700] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md group flex flex-col md:flex-row items-stretch"
                >
                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between order-2 md:order-1">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-tl-[5px] rounded-br-[5px] text-[10px] font-bold bg-[#021B4E] text-[#FFD700] uppercase tracking-wider">
                          Heritage &amp; Fine Arts
                        </span>
                        <span className="text-[10px] font-mono font-bold text-black">
                          Tamil Sangam &bull; Cultural Fest
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-black group-hover:text-black transition-colors leading-tight mb-2">
                        {arts.title}
                      </h3>
                      <p className="text-xs text-[#D4AF37] italic font-serif mb-3">
                        &ldquo;{arts.motto}&rdquo;
                      </p>
                      <p className="text-xs sm:text-sm text-black leading-relaxed mb-4">
                        {arts.tagline}
                      </p>

                      <div className="grid grid-cols-2 gap-2.5 mb-4">
                        <div className="bg-slate-50 p-2.5 rounded-tl-[8px] rounded-br-[8px] border border-slate-200/80">
                          <span className="text-[10px] text-black font-bold block uppercase tracking-wider">Literature</span>
                          <span className="text-xs font-bold text-black">Sangam Kaviarangam &amp; Elocution</span>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-tl-[8px] rounded-br-[8px] border border-slate-200/80">
                          <span className="text-[10px] text-black font-bold block uppercase tracking-wider">Stage &amp; Arts</span>
                          <span className="text-xs font-bold text-black">Theatre, Rangoli &amp; Tanjore Art</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-black group-hover:text-black transition-colors">
                        <span>Explore Cultural Society</span>
                        <span className="text-[#FFD700] group-hover:translate-x-1.5 transition-transform duration-300 font-bold">&rarr;</span>
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">Annual Campus Fest</span>
                    </div>
                  </div>

                  <div className="w-full md:w-[46%] relative min-h-[220px] md:min-h-0 overflow-hidden shrink-0 order-1 md:order-2">
                    <Image
                      src={arts.image}
                      alt={arts.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 right-4 z-10">
                      <span className="inline-block bg-[#021B4E]/90 text-[#FFD700] text-[11px] font-mono font-bold px-3 py-1 rounded-tl-[6px] rounded-br-[6px] border border-[#FFD700]/50">
                        Multi-Stage Festival
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/* ROW 3 - LEFT: KR YOUTH LEADERS CLUB (6-Column Civic Card) */}
            {(() => {
              const leaders = CLUBS_DATA.find((c) => c.slug === "leaders-club");
              if (!leaders) return null;
              return (
                <Link
                  key={leaders.slug}
                  href={`/clubs/${leaders.slug}`}
                  className="lg:col-span-6 bg-white rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none border-2 border-slate-200/90 hover:border-[#FFD700] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md group flex flex-col justify-between"
                >
                  <div className="relative h-[200px] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={leaders.image}
                      alt={leaders.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-2.5 py-1 rounded-tl-[6px] rounded-br-[6px] text-[10px] font-bold bg-[#021B4E]/95 text-[#FFD700] border border-[#FFD700]/50 uppercase tracking-wider">
                        Civic Governance &amp; Public Policy
                      </span>
                    </div>
                    <div className="absolute bottom-3.5 left-4 z-10 text-white">
                      <span className="text-[11px] font-mono font-bold text-[#FFD700]">
                        Youth Parliament &bull; Civil Services Foundation
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-black group-hover:text-black transition-colors leading-snug mb-1">
                        {leaders.title}
                      </h3>
                      <p className="text-xs text-black italic font-serif mb-2">
                        &ldquo;{leaders.motto}&rdquo;
                      </p>
                      <p className="text-xs sm:text-sm text-black leading-relaxed mb-4">
                        {leaders.tagline}
                      </p>
                      <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-tl-[8px] rounded-br-[8px]">
                        <span className="text-[10px] font-bold text-black uppercase block mb-0.5">Core Practice</span>
                        <p className="text-xs text-black font-medium">
                          Simulated Parliamentary Debate &bull; Policy Research &bull; IAS/IPS Foundation Mentoring
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-black group-hover:text-black inline-flex items-center gap-1.5 transition-colors">
                        <span>Details &amp; Mock Trials</span>
                        <span className="text-[#FFD700] group-hover:translate-x-1.5 transition-transform duration-300 font-bold">&rarr;</span>
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">Leadership Wing</span>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/* ROW 3 - RIGHT: PHYSICAL EDUCATION & SPORTS WING (6-Column Athletic Action Card) */}
            {(() => {
              const sports = CLUBS_DATA.find((c) => c.slug === "sports-club");
              if (!sports) return null;
              return (
                <Link
                  key={sports.slug}
                  href={`/clubs/${sports.slug}`}
                  className="lg:col-span-6 bg-gradient-to-br from-[#0F4C3A] via-[#0D3B2E] to-[#021B4E] text-white rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none border-2 border-[#10B981]/50 hover:border-[#FFD700] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md group flex flex-col justify-between"
                >
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                      src={sports.image}
                      alt={sports.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C3A] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-2.5 py-1 rounded-tl-[6px] rounded-br-[6px] text-[10px] font-bold bg-[#FFD700] text-black uppercase tracking-wider">
                        Track &amp; Field Champions
                      </span>
                    </div>
                    <div className="absolute bottom-3.5 left-4 z-10 text-white">
                      <span className="text-[11px] font-mono font-bold text-[#FFD700]">
                        Overall Regional Athletic Championship
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors leading-snug mb-1">
                        {sports.title}
                      </h3>
                      <p className="text-xs text-[#FFD700] italic font-serif mb-2">
                        &ldquo;{sports.motto}&rdquo;
                      </p>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                        {sports.tagline}
                      </p>
                      <div className="bg-white/10 backdrop-blur-xs p-3 rounded-tl-[8px] rounded-br-[8px] border border-white/15">
                        <span className="text-[10px] text-[#FFD700] font-bold block uppercase tracking-wider">Tournament Record</span>
                        <p className="text-xs text-white font-medium">
                          100m, 400m Relay Gold &bull; Long Jump &bull; State Volleyball &amp; Cricket Meets
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#FFD700] group-hover:text-white inline-flex items-center gap-1.5 transition-colors">
                        <span>View Championship Roster</span>
                        <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                      </span>
                      <span className="text-[10px] text-emerald-200 font-mono">Sports Directorate</span>
                    </div>
                  </div>
                </Link>
              );
            })()}
          </div>
        </div>
      </section>
    </div>
  );
}
