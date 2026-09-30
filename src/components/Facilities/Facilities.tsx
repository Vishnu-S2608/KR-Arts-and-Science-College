"use client";

import React from "react";
import { BookOpen, Monitor, Microchip, Bus, Utensils, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Facilities() {
  const facilities = [
    {
      title: "Central Digital Library",
      desc: "Vast collection of over 30,000 reference books, e-journals, IEEE subscriptions, and quiet study zones.",
      icon: BookOpen,
      image: "/library.png",
    },
    {
      title: "Advanced Computer Centers",
      desc: "3 modern air-conditioned labs equipped with 180+ high-end i7 systems, high-speed fiber internet, and server software.",
      icon: Monitor,
      image: "/computer-lab.png",
    },
    {
      title: "Biotech & Science Labs",
      desc: "Research-grade laboratories for tissue culture, microbiology, molecular biology, and chemistry experiments.",
      icon: Microchip,
      image: "/campus-hero.png",
    },
    {
      title: "Transportation Fleet",
      desc: "Fleet of 25+ modern college buses connecting Kovilpatti, Thoothukudi, Tirunelveli, Sattur, and surrounding rural routes.",
      icon: Bus,
      image: "/library.png",
    },
    {
      title: "Hygienic Cafeteria",
      desc: "Clean, spacious dining hall providing nutritious, wholesome South Indian meals, snacks, and fresh beverages.",
      icon: Utensils,
      image: "/campus-hero.png",
    },
    {
      title: "Indoor & Outdoor Sports Complex",
      desc: "Spacious athletic track, cricket ground, volleyball courts, badminton hall, and fitness gymnasium.",
      icon: Award,
      image: "/computer-lab.png",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-[#F7F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FB] border border-[#1557A6]/20 text-[#1557A6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#D9A441]" />
            <span>CAMPUS INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D52] tracking-tight">
            World-Class Learning Facilities
          </h2>
          <p className="mt-4 text-base text-[#26384A]">
            Designed to foster intellectual exploration, practical skills, physical fitness, and student comfort.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const IconComponent = fac.icon;
            return (
              <motion.div
                key={fac.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#EAF3FB] rounded-3xl overflow-hidden border border-[#1557A6]/15 hover:border-[#1557A6] hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden bg-[#0B2D52]">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D52]/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1557A6] shadow-md">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B2D52] mb-2 group-hover:text-[#1557A6] transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-sm text-[#26384A] leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
