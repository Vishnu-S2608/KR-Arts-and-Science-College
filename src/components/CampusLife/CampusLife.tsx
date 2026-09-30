"use client";

import React from "react";
import { Compass, Trophy, Music, Shield, HeartHandshake, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="campus-life" className="py-20 bg-[#F7F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FB] border border-[#1557A6]/20 text-[#1557A6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-4 h-4 text-[#D9A441]" />
            <span>VIBRANT CAMPUS CULTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D52] tracking-tight">
            Life at K.R. College
          </h2>
          <p className="mt-4 text-base text-[#26384A]">
            Education extends far beyond classrooms. Experience an energetic, inclusive campus environment packed with events, sports, and leadership clubs.
          </p>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden shadow-xl border border-[#1557A6]/20 group h-80 sm:h-96 ${item.span}`}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D52] via-[#0B2D52]/60 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
                  
                  {/* Top Badge */}
                  <div className="flex items-center space-x-2">
                    <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-[#D9A441]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4B9FE1] bg-[#071A2F]/60 px-3 py-1 rounded-full backdrop-blur-sm border border-[#4B9FE1]/30">
                      {item.category}
                    </span>
                  </div>

                  {/* Bottom Text */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-[#4B9FE1] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
