"use client";

import React from "react";
import { BookOpenCheck, Award, Cpu, Briefcase, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import ScrollSection from "../Motion/ScrollSection";
import ScrollTextMotion from "../Motion/ScrollTextMotion";
import ScrollDepthLayer from "../Motion/ScrollDepthLayer";

export default function WhyChoose() {
  const features = [
    {
      icon: BookOpenCheck,
      title: "Academic Excellence",
      description: "Rigorous curriculum affiliated to Manonmaniam Sundaranar University, with regular university rank holders and top academic laurels.",
    },
    {
      icon: Award,
      title: "Experienced Faculty",
      description: "Accomplished professors, PhD scholars, and researchers who provide individual mentorship and practical subject expertise.",
    },
    {
      icon: Cpu,
      title: "Modern Infrastructure",
      description: "High-speed AI & Computer labs, advanced Biotechnology & Science facilities, smart classrooms, and a vast digital library.",
    },
    {
      icon: Briefcase,
      title: "Industry Exposure",
      description: "MoUs with corporate giants, regular industrial visits, guest lectures by industry leaders, and real-world project training.",
    },
    {
      icon: GraduationCap,
      title: "Holistic Development",
      description: "Active NSS, NCC, Fine Arts, Sports, and leadership clubs fostering moral values, athletic prowess, and personality enrichment.",
    },
    {
      icon: Sparkles,
      title: "100% Placement Support",
      description: "Dedicated Training & Placement Cell providing soft skills, mock interviews, and placement drives with top IT & MNC companies.",
    },
  ];

  return (
    <section className="py-24 bg-[#F0F4F8] relative overflow-hidden border-t border-[#D8E3EC]">
      <ScrollSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D8E3EC] text-[#38A9E8] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#F28C6B]" />
            <span>THE K.R. ADVANTAGE</span>
          </div>

          <ScrollTextMotion as="h2" className="text-3xl sm:text-5xl font-extrabold text-[#234052] tracking-tight">
            Why Choose K.R. College of Arts & Science?
          </ScrollTextMotion>

          <p className="mt-4 text-base sm:text-lg text-[#5A7080] leading-relaxed font-medium">
            We offer an inspiring campus ecosystem designed to nurture academic brilliance, professional competence, and personal growth.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            const preset = idx % 2 === 0 ? "content" : "foreground";

            return (
              <ScrollDepthLayer key={feature.title} preset={preset}>
                <div className="bg-white p-8 rounded-2xl border border-[#D8E3EC] hover:border-[#38A9E8] hover:shadow-md transition-all duration-250 group flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#EBF3F8] text-[#38A9E8] flex items-center justify-center mb-6 border border-[#D8E3EC] group-hover:bg-[#38A9E8] group-hover:text-white transition-colors duration-250">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#234052] mb-3 group-hover:text-[#38A9E8] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#5A7080] leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-[#D8E3EC] flex items-center justify-between text-xs font-extrabold text-[#38A9E8]">
                    <span>Discover Advantage</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </ScrollDepthLayer>
            );
          })}
        </div>
      </ScrollSection>
    </section>
  );
}

