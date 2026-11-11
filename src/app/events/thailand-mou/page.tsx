import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Globe2,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Shinawatra University Thailand International MoU | KR Arts And Science College",
  description:
    "Official bilateral academic partnership treaty formalized between KR Arts And Science College and Shinawatra University, Thailand at ICIRI 2026. Student exchange, joint research, and global internships.",
};

export default function ThailandMouPage() {
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
              International Bilateral Treaty &bull; ICIRI 2026, Thailand
            </span>
            <span className="w-8 sm:w-14 h-[2px] bg-[#C59B27] rounded-full" />
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-[#011640] tracking-tight leading-tight">
            KR Arts &amp; Science College Partners with{" "}
            <span className="font-serif italic text-[#C59B27]">
              Shinawatra University, Thailand
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            A milestone bilateral academic treaty opening global student
            exchanges, international research sabbaticals, and career
            internships in Southeast Asia for students across rural Madurai.
          </p>

          {/* Quick Meta Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-tl-[8px] rounded-br-[8px] bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] text-xs font-bold">
              <Globe2 className="w-3.5 h-3.5" />
              Pathum Thani, Thailand
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-tl-[8px] rounded-br-[8px] bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Verified Bilateral Treaty
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-tl-[8px] rounded-br-[8px] bg-[#FBF2D4] text-[#021B4E] border border-[#0334A0]/20 text-xs font-bold">
              <Calendar className="w-3.5 h-3.5 text-[#0334A0]" />
              ICIRI 2026 Landmark Session
            </span>
          </div>
        </div>

        {/* Featured Image & Highlights Hero Showcase */}
        <div className="relative group overflow-hidden bg-white rounded-tl-[28px] rounded-br-[28px] rounded-tr-none rounded-bl-none border-2 border-slate-200/90 hover:border-[#C59B27] p-6 sm:p-10 mb-12 shadow-none transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Media Document Frame */}
            <div className="lg:col-span-7 relative">
              <div className="relative overflow-hidden rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border-2 border-[#C59B27] bg-[#021B4E] p-2">
                <img
                  src="/images/thailand-mou-iciri.jpg"
                  alt="KR Arts And Science College Bilateral Treaty with Shinawatra University, Thailand at ICIRI 2026"
                  className="w-full h-auto max-h-[520px] object-contain rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none mx-auto block"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>Official Treaty Seal &amp; Delegation Ceremony</span>
                <span className="font-mono font-bold text-[#0334A0]">
                  SKRGC-SIU-2026
                </span>
              </div>
            </div>

            {/* Strategic Pillars Callout */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27] block mb-1">
                  Cross-Border Academic Horizon
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#011640] leading-snug">
                  Four Strategic Pillars of the Bilateral Treaty
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#021B4E] text-[#F5B83D] flex items-center justify-center shrink-0 text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Reciprocal Student Exchange
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Qualified undergraduates spend a semester immersion at
                      Shinawatra University’s Bangkok campus with credit
                      recognition.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#021B4E] text-[#F5B83D] flex items-center justify-center shrink-0 text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Joint Research &amp; SCOPUS Publications
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Faculty collaboration on AI computing, biotechnology,
                      business economics, and sustainable rural technology in
                      indexed journals.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#021B4E] text-[#F5B83D] flex items-center justify-center shrink-0 text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Faculty Mobility &amp; Guest Lectures
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      International professors from Thailand deliver hybrid and
                      physical guest lectures for KR College degree courses.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#021B4E] text-[#F5B83D] flex items-center justify-center shrink-0 text-xs font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Southeast Asian Internships
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Direct interview pathways for student internships and
                      corporate training with multinational enterprises in
                      Bangkok.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Chronicle Narrative Article */}
        <div className="bg-white rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none border-2 border-slate-200/90 p-6 sm:p-12 mb-12 space-y-8">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#011640] mb-4">
              Executive Conference Summary &bull; ICIRI 2026
            </h2>
            <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
              <p>
                During the prestigious{" "}
                <strong>
                  International Conference on Integrated Research &amp;
                  Innovation (ICIRI 2026)
                </strong>
                held in Pathum Thani, Thailand, the governing council of{" "}
                <strong>KR Arts And Science College</strong> officially executed
                a comprehensive Memorandum of Understanding (MoU) with{" "}
                <strong>Shinawatra University (SIU)</strong>. This landmark
                treaty represents an unprecedented milestone for higher
                education in the rural Peraiyur taluk of Madurai.
              </p>
              <p>
                Founded under the vision of educational internationalization,
                Shinawatra University is renowned for cutting-edge programs in
                management, computer science, and modern technology. Through
                this agreement, undergraduate students enrolled in programs such
                as <strong>B.Sc Artificial Intelligence</strong>,{" "}
                <strong>B.Sc Computer Science</strong>,
                <strong>BBA Aviation Management</strong>, and{" "}
                <strong>B.Com (Computer Applications)</strong> gain direct
                access to cross-institutional academic resources, shared digital
                research repositories, and subsidized semester exchange
                opportunities.
              </p>
              <p>
                The signing ceremony was graced by institutional dignitaries,
                academic deans, and global scholars representing 14 countries.
                Speaking on the occasion, the leadership of KR Educational and
                Charitable Trust reiterated its foundational commitment: to
                ensure that rural students in southern Tamil Nadu enjoy the same
                world-class pedagogical advantages and global exposure as their
                metropolitan peers.
              </p>
            </div>
          </div>

          {/* Department Beneficiaries Grid */}
          <div className="pt-6 border-t border-slate-200">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-4">
              Direct Beneficiary Academic Programmes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  title: "B.Sc Artificial Intelligence",
                  tag: "Frontier Computing",
                  link: "/apply?course=B.Sc+Artificial+Intelligence",
                },
                {
                  title: "B.Sc Computer Science",
                  tag: "Software Engineering",
                  link: "/apply?course=B.Sc+Computer+Science",
                },
                {
                  title: "BBA Aviation Management",
                  tag: "International Logistics",
                  link: "/apply?course=BBA+Aviation+Management",
                },
                {
                  title: "B.Com (Computer Applications)",
                  tag: "Global Business Analytics",
                  link: "/apply?course=B.Com+(Computer+Applications)",
                },
              ].map((prog, i) => (
                <Link
                  key={i}
                  href={prog.link}
                  className="p-4 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none bg-slate-50 hover:bg-[#FBF2D4] border border-slate-200 hover:border-[#C59B27] transition-all group"
                >
                  <span className="text-[10px] font-bold text-[#0334A0] uppercase tracking-wider block mb-1">
                    {prog.tag}
                  </span>
                  <strong className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#021B4E] block">
                    {prog.title}
                  </strong>
                  <span className="text-[11px] font-semibold text-[#C59B27] flex items-center gap-1 mt-2">
                    <span>Apply for Seat</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
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
            Ready to Experience International Opportunities at KR College?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Applications are currently open for the 2026–2027 academic session.
            Secure your provisional seat today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/apply"
              className="px-8 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none text-sm font-bold text-[#021B4E] bg-[#F5B83D] hover:bg-[#FBF2D4] transition-all shadow-none"
            >
              Apply for 2026-27 Admission
            </Link>

            <Link
              href="/events/lkp-aviation"
              className="px-6 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none text-sm font-bold text-[#F5B83D] border border-[#C59B27] hover:bg-white/10 transition-all shadow-none"
            >
              Read LKP Aviation Story &rarr;
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
