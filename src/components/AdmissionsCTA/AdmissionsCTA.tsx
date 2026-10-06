"use client";

import React from "react";
import { GraduationCap, ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";
import CollegeLogo from "../Common/CollegeLogo";
import ScrollSection from "../Motion/ScrollSection";
import ScrollTextMotion from "../Motion/ScrollTextMotion";

interface AdmissionsCTAProps {
  onOpenApplyModal: () => void;
}

export default function AdmissionsCTA({ onOpenApplyModal }: AdmissionsCTAProps) {
  return (
    <section className="py-20 bg-[#38A9E8] text-white relative overflow-hidden">
      <ScrollSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
            <CollegeLogo className="w-6 h-6 border border-white/40" />
            <span>ADMISSIONS OPEN FOR ACADEMIC YEAR 2026-2027</span>
          </div>

          {/* Heading */}
          <ScrollTextMotion as="h2" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            YOUR NEXT CHAPTER STARTS HERE
          </ScrollTextMotion>

          {/* Paragraph */}
          <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-medium">
            Take the first step toward academic brilliance and a rewarding career. Secure your seat at K.R. College of Arts & Science today.
          </p>

          {/* Value Bullet Points */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-white pt-2">
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Affordable Fee Structure</span>
            </span>
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Merit Scholarships Available</span>
            </span>
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Bus Fleet Across Districts</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={onOpenApplyModal}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-white text-[#38A9E8] font-extrabold text-base shadow-sm hover:bg-[#234052] hover:text-white transition-all duration-250"
            >
              <GraduationCap className="w-5 h-5 text-current" />
              <span>Apply Online Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-white/10 text-white font-extrabold text-base border border-white/30 hover:bg-white/20 transition-all duration-250"
            >
              <PhoneCall className="w-5 h-5 text-white" />
              <span>Contact Admissions Cell</span>
            </a>
          </div>

        </div>
      </ScrollSection>
    </section>
  );
}
