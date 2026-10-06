"use client";

import React from "react";
import { Award, Users, BookOpen, TrendingUp, Sparkles, Building2 } from "lucide-react";
import ScrollSection from "../Motion/ScrollSection";
import ScrollTextMotion from "../Motion/ScrollTextMotion";
import ScrollDepthLayer from "../Motion/ScrollDepthLayer";

export default function Achievements() {
  const stats = [
    {
      icon: Building2,
      value: "27+",
      label: "YEARS OF EXCELLENCE",
      detail: "Established in 1997 with institutional reputation",
    },
    {
      icon: Users,
      value: "3,500+",
      label: "ENROLLED STUDENTS",
      detail: "Diverse student community across Tamil Nadu",
    },
    {
      icon: BookOpen,
      value: "120+",
      label: "QUALIFIED FACULTY",
      detail: "Accomplished PhD scholars & research guides",
    },
    {
      icon: Award,
      value: "40+",
      label: "UNIVERSITY RANKS",
      detail: "Manonmaniam Sundaranar University laureates",
    },
    {
      icon: TrendingUp,
      value: "95%+",
      label: "PLACEMENT RECORD",
      detail: "Recruited by top IT MNCs & Corporate leaders",
    },
  ];

  return (
    <section className="py-20 bg-[#F0F4F8] text-[#234052] relative border-t border-[#D8E3EC]">
      <ScrollSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D8E3EC] text-[#38A9E8] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#F28C6B]" />
            <span>NUMBERS THAT DEFINE EXCELLENCE</span>
          </div>

          <ScrollTextMotion as="h2" className="text-3xl sm:text-4xl font-extrabold text-[#234052] tracking-tight">
            Institutional Landmarks
          </ScrollTextMotion>
        </div>

        {/* Stats Grid with Large Sky-Blue Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat) => {
            const IconComp = stat.icon;
            return (
              <ScrollDepthLayer key={stat.label} preset="foreground">
                <div className="bg-white rounded-2xl p-6 border border-[#D8E3EC] hover:border-[#38A9E8] hover:shadow-md transition-all duration-250 text-center flex flex-col items-center justify-between h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3F8] border border-[#D8E3EC] flex items-center justify-center text-[#38A9E8] mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div className="text-4xl sm:text-5xl font-extrabold text-[#38A9E8] tracking-tight mb-2">
                    {stat.value}
                  </div>

                  <h3 className="text-xs font-extrabold text-[#234052] tracking-wider uppercase mb-1">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-[#5A7080] font-medium">
                    {stat.detail}
                  </p>
                </div>
              </ScrollDepthLayer>
            );
          })}
        </div>
      </ScrollSection>
    </section>
  );
}

