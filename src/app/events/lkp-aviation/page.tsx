import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Plane, Briefcase, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "LKP Academy Aviation Strategic MoU | KR Arts And Science College",
  description:
    "Official industry partnership treaty between KR Arts And Science College and LKP Academy Aviation for BBA Aviation Management students. Airport ground handling, ticketing, and Madurai Airport immersion.",
};

export default function LkpAviationPage() {
  return (
    <main className="pt-8 sm:pt-12 pb-20 bg-gradient-to-b from-[#FBF2D4]/20 via-white to-white min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb & Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/#chronicle"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none text-xs font-bold text-[#F5B83D] bg-[#021B4E] hover:bg-[#FBF2D4] hover:text-[#021B4E] border border-[#C59B27] transition-all duration-300 shadow-none group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Campus Chronicle</span>
          </Link>
        </div>

        {/* Header Block with Golden Lines */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 sm:w-14 h-[2px] bg-[#C59B27] rounded-full" />
            <span className="text-[#C59B27] font-bold text-xs sm:text-sm tracking-widest uppercase">
              Industry MoU Alliance &bull; Commercial Aviation Training
            </span>
            <span className="w-8 sm:w-14 h-[2px] bg-[#C59B27] rounded-full" />
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-[#011640] tracking-tight leading-tight">
            KR Arts &amp; Science College Partners with{" "}
            <span className="font-serif italic text-[#C59B27]">
              LKP Academy Aviation
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Direct corporate training integration for BBA Aviation Management
            undergraduates, encompassing airport terminal operations, GDS
            ticketing certifications, and active Madurai International Airport
            immersion.
          </p>

          {/* Quick Meta Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-tl-[8px] rounded-br-[8px] bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] text-xs font-bold">
              <Plane className="w-3.5 h-3.5" />
              Madurai Airport (IXM) Immersion
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-tl-[8px] rounded-br-[8px] bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              IATA / GDS Curriculum Aligned
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-tl-[8px] rounded-br-[8px] bg-[#FBF2D4] text-[#021B4E] border border-[#0334A0]/20 text-xs font-bold">
              <Briefcase className="w-3.5 h-3.5 text-[#0334A0]" />
              Direct Corporate Placement Links
            </span>
          </div>
        </div>

        {/* Featured Showcase Hero */}
        <div className="relative group overflow-hidden bg-white rounded-tl-[28px] rounded-br-[28px] rounded-tr-none rounded-bl-none border-2 border-slate-200/90 hover:border-[#C59B27] p-6 sm:p-10 mb-12 shadow-none transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Media Document Frame */}
            <div className="lg:col-span-7 relative">
              <div className="relative overflow-hidden rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border-2 border-[#C59B27] bg-[#021B4E] p-2">
                <img
                  src="/images/campus/campus-hero.png"
                  alt="KR Arts And Science College Aviation Immersion and Airport Operations Training"
                  className="w-full h-auto max-h-[500px] object-cover rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none mx-auto block"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>Field Practical Ground Training Immersion</span>
                <span className="font-mono font-bold text-[#0334A0]">
                  BBA-AVIATION-2026
                </span>
              </div>
            </div>

            {/* Strategic Pillars Callout */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27] block mb-1">
                  Professional Industry Rigour
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#011640] leading-snug">
                  Four Cornerstones of the Aviation Alliance
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#021B4E] text-[#F5B83D] flex items-center justify-center shrink-0 text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Airport Ground Handling Simulations
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Hands-on passenger check-in terminal drills, boarding gate
                      management, and ramp operations protocols.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#021B4E] text-[#F5B83D] flex items-center justify-center shrink-0 text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      GDS Airline Ticketing Certifications
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Industry software certifications on Amadeus and Galileo
                      systems utilized globally across international airports.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#021B4E] text-[#F5B83D] flex items-center justify-center shrink-0 text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Madurai International Airport Immersion
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Curated field visits, cargo apron tours, air traffic
                      management briefings, and on-site internship placements.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#021B4E] text-[#F5B83D] flex items-center justify-center shrink-0 text-xs font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Direct Recruiter Fast-Tracking
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Priority recruitment pipelines into IndiGo, Air India,
                      SpiceJet, Bird Group, and Celebi Ground Handling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Narrative Section */}
        <div className="bg-white rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none border-2 border-slate-200/90 p-6 sm:p-12 mb-12 space-y-8">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#011640] mb-4">
              Academic-Industry Integration for BBA Aviation
            </h2>
            <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
              <p>
                As part of our commitment to delivering verified 100% corporate
                placement outcomes,
                <strong>KR Arts And Science College</strong> has established a
                formal industry-academia partnership with
                <strong>LKP Academy</strong>, a premier national aviation and
                logistics training body. This agreement directly embeds
                commercial aviation standards into our 3-year full-time
                <strong>BBA Aviation Management</strong> degree program,
                affiliated to Madurai Kamaraj University.
              </p>
              <p>
                Students do not merely study theoretical textbooks; they
                participate in live airline reservation drills, baggage
                reconciliation procedures, dangerous goods regulation (DGR)
                safety compliance, and aviation cargo manifest management. With
                Madurai International Airport located just 50 km from the
                campus, practical field exposure is woven directly into the
                academic semester calendar.
              </p>
              <p>
                Graduates emerge with dual credentials: the
                government-recognized undergraduate degree from Madurai Kamaraj
                University alongside professional software competency
                certifications from LKP Academy, making them instantly
                deployable across domestic and international airlines, corporate
                aviation fleets, airport authority desks, and freight logistics
                hubs.
              </p>
            </div>
          </div>

          {/* Career Profiles Grid */}
          <div className="pt-6 border-t border-slate-200">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-4">
              Career Pathways &bull; 100% Placement Assurance
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  title: "Airport Operations Officer",
                  desc: "Terminal & gate control management at international hubs.",
                },
                {
                  title: "Airline Ticketing & GDS Specialist",
                  desc: "Expert reservation booking across global GDS networks.",
                },
                {
                  title: "Air Cargo & Logistics Coordinator",
                  desc: "Freight manifest, customs documentation, and supply routing.",
                },
                {
                  title: "Aviation Guest Relations Executive",
                  desc: "VIP airline lounge and premium customer services.",
                },
              ].map((role, i) => (
                <div
                  key={i}
                  className="p-4 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none bg-slate-50 border border-slate-200"
                >
                  <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-1">
                    {role.title}
                  </strong>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Call to Action and Related Links */}
        <div className="p-8 sm:p-12 rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none bg-[#021B4E] border-2 border-[#C59B27] text-center text-white space-y-6">
          <span className="font-tamil font-bold text-[#F5B83D] text-lg block">
            உள்ளுவதெல்லாம் உயர்வுள்ளல்
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
            Take Flight with BBA Aviation Management at KR College
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Admissions for the 2026–2027 batch are open. Seats are filled on
            merit and personal counseling.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/apply?course=BBA+Aviation+Management"
              className="px-8 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none text-sm font-bold text-[#021B4E] bg-[#F5B83D] hover:bg-[#FBF2D4] transition-all shadow-none"
            >
              Apply for BBA Aviation Management
            </Link>

            <Link
              href="/events/thailand-mou"
              className="px-6 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none text-sm font-bold text-[#F5B83D] border border-[#C59B27] hover:bg-white/10 transition-all shadow-none"
            >
              Read Thailand MoU Story &rarr;
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
