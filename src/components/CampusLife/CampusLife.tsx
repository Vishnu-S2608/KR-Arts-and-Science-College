"use client";

import React from "react";
import { Compass, Trophy, Music, Shield, Users, ArrowRight } from "lucide-react";
import ScrollSection from "../Motion/ScrollSection";
import ScrollTextMotion from "../Motion/ScrollTextMotion";
import ScrollImageMotion from "../Motion/ScrollImageMotion";

export default function CampusLife() {
  const activities = [
    {
      title: "Annual Cultural Extravaganza — 'KR-FEST'",
      category: "Cultural & Arts",
      icon: Music,
      desc: "Vibrant inter-collegiate cultural fest bringing together music, classical dance, drama, fashion shows, and creative literary arts.",
      image: "/campus-hero.png",
      span: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
      title: "State Level Athletics & Sports Tournaments",
      category: "Sports & Athletics",
      icon: Trophy,
      desc: "State-of-the-art sports complex hosting cricket, kabaddi, volleyball, track & field meets, producing university champions.",
      image: "/library.png",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
      title: "National Service Scheme (NSS) & NCC Cadets",
      category: "Social Service & Leadership",
      icon: Shield,
      desc: "Active community service camps, blood donation drives, environmental tree planting, and Republic Day parade representations.",
      image: "/computer-lab.png",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
      title: "Clubs & Student Societies",
      category: "Clubs & Innovations",
      icon: Users,
      desc: "Red Ribbon Club, Fine Arts Club, Consumer Club, Youth Red Cross, and Coding Club offering endless avenues for personal growth.",
      image: "/campus-hero.png",
      span: "col-span-1 md:col-span-2 lg:col-span-2",
    },
  ];

  return (
    <section id="campus-life" className="py-24 bg-[#F0F4F8] text-[#234052] relative border-t border-[#D8E3EC]">
      <ScrollSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D8E3EC] text-[#38A9E8] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            <Compass className="w-4 h-4 text-[#38A9E8]" />
            <span>VIBRANT CAMPUS CULTURE</span>
          </div>

          <ScrollTextMotion as="h2" className="text-3xl sm:text-5xl font-extrabold text-[#234052] tracking-tight">
            MORE THAN A CLASSROOM
          </ScrollTextMotion>

          <p className="mt-4 text-base sm:text-lg text-[#5A7080] leading-relaxed font-medium">
            Education extends far beyond classrooms. Experience an energetic, inclusive campus environment packed with events, sports, innovation, and leadership clubs.
          </p>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-white rounded-2xl overflow-hidden border border-[#D8E3EC] hover:border-[#38A9E8] hover:shadow-md transition-all duration-250 group flex flex-col justify-between ${item.span}`}
              >
                {/* Real Photography */}
                <div className="relative h-64 overflow-hidden bg-white border-b border-[#D8E3EC]">
                  <ScrollImageMotion
                    src={item.image}
                    alt={item.title}
                    minScale={1.00}
                    maxScale={1.05}
                    className="w-full h-full"
                  />
                  <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 bg-white/95 px-3 py-1 rounded-full border border-[#D8E3EC] shadow-sm">
                    <IconComp className="w-3.5 h-3.5 text-[#38A9E8]" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#38A9E8]">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#234052] mb-3 group-hover:text-[#38A9E8] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#5A7080] leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D8E3EC] flex items-center justify-between text-xs font-extrabold text-[#38A9E8]">
                    <span>Explore Life at K.R.</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollSection>
    </section>
  );
}

