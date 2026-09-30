"use client";

import React from "react";
import { BookOpenCheck, Award, Cpu, Briefcase, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-24 bg-[#EAF3FB]/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#1557A6]/20 text-[#1557A6] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#D9A441]" />
            <span>THE K.R. ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2D52] tracking-tight">
            Why Choose K.R. College of Arts & Science?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#26384A] leading-relaxed font-medium">
            We offer an inspiring campus ecosystem designed to nurture academic brilliance, professional competence, and personal growth.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-[#1557A6]/15 hover:border-[#4B9FE1] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1557A6] to-[#4B9FE1] text-white flex items-center justify-center mb-6 shadow-md shadow-[#1557A6]/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-[#D9A441]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0B2D52] mb-3 group-hover:text-[#1557A6] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#26384A] leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-[#1557A6]/10 flex items-center justify-between text-xs font-extrabold text-[#1557A6]">
                  <span>Discover Advantage</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
