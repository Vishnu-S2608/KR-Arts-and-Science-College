"use client";

import Link from "next/link";
import { Sparkles, Users, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";

export default function InitiativesSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative" id="initiatives">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Student Empowerment Initiatives
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Cultivating Groundbreaking Thinkers &amp; Civic Leaders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Beyond standard coursework, KR Arts And Science College cultivates future-defining initiatives that propel students toward entrepreneurial and leadership distinction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1. SPARK Innovation Festival */}
          <div className="pure-white-card p-6 sm:p-10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-6 h-6 text-amber-500" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full mb-3 inline-block">
                Annual Symposia
              </span>
              <h3 className="text-2xl font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                SPARK Innovation Festival
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed mb-6">
                Our flagship annual inter-collegiate technology &amp; business model forum. Undergraduates present 
                working prototypes in AI algorithms, sustainable agriculture, and solar clean-tech to panels of external industry evaluators.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Technical Working Models &amp; Coding Hackathons</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Cash Awards &amp; Seed Project Grants</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Corporate Talent Scout Evaluations</span>
                </div>
              </div>
            </div>

            <Link 
              href="/events"
              className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 group-hover:underline pt-4 border-t border-slate-100"
            >
              <span>Explore SPARK Highlights</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 2. KR Leaders Club */}
          <div className="pure-white-card p-6 sm:p-10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-sky-600" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full mb-3 inline-block">
                Launched for 2026
              </span>
              <h3 className="text-2xl font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                KR Leaders Club
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed mb-6">
                Inaugurated to instill confident public speaking, policy debate, ethical governance, and community diplomacy. 
                Scholars organize rural literacy drives, consumer awareness rallies, and model parliament sessions across Peraiyur taluk.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>Debate, Public Diplomacy &amp; Moot Courts</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>Community Service &amp; Village Health Drives</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>Dialogue with Bureaucrats &amp; Police Officers</span>
                </div>
              </div>
            </div>

            <Link 
              href="/clubs"
              className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 group-hover:underline pt-4 border-t border-slate-100"
            >
              <span>View Student Clubs &amp; Activities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
