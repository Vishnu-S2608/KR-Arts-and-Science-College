"use client";

import React from "react";
import { Award, Users, BookOpen, TrendingUp, Sparkles, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Achievements() {
  const stats = [
    {
      icon: Building2,
      value: "27+",
      label: "Years of Glorious Legacy",
      detail: "Established in 1997 with institutional reputation",
    },
    {
      icon: Users,
      value: "3,500+",
      label: "Enrolled Students",
      detail: "Diverse student community across Tamil Nadu",
    },
    {
      icon: BookOpen,
      value: "120+",
      label: "Qualified Faculty",
      detail: "Accomplished PhD scholars & research guides",
    },
    {
      icon: Award,
      value: "40+",
      label: "University Ranks",
      detail: "Manonmaniam Sundaranar University laureates",
    },
    {
      icon: TrendingUp,
      value: "95%+",
      label: "Placement Record",
      detail: "Recruited by top IT MNCs & Corporate leaders",
    },
  ];

  return (
    <section className="py-16 bg-[#0B2D52] text-white relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#1557A6]/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-[#D9A441]/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D9A441] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#D9A441]" />
            <span>NUMBERS THAT DEFINE EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F7F9FC] tracking-tight">
            Institutional Landmarks
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#D9A441]/50 hover:bg-white/10 transition-all duration-300 text-center flex flex-col items-center justify-between"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1557A6]/40 flex items-center justify-center text-[#4B9FE1] mb-4">
                  <IconComp className="w-6 h-6 text-[#D9A441]" />
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold text-[#D9A441] tracking-tight mb-2">
                  {stat.value}
                </div>

                <h3 className="text-base font-bold text-[#F7F9FC] mb-1">
                  {stat.label}
                </h3>

                <p className="text-xs text-slate-300">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
