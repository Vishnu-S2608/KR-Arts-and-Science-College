"use client";

import React, { useState } from "react";
import { CheckCircle2, Target, Eye, Compass, Award, Building2, UserCheck, Sparkles, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CollegeLogo from "../Common/CollegeLogo";

export default function About() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "quality" | "leadership">("vision");

  const tabContents = {
    vision: {
      title: "Our Vision",
      icon: Eye,
      text: "To emerge as a benchmark institution of academic brilliance, fostering innovative thinking, moral ethics, research capabilities, and rural youth empowerment in Southern Tamil Nadu.",
      points: [
        "Nurturing intellectual competence and creative problem-solving.",
        "Promoting moral values and social responsibility.",
        "Empowering women and rural youth with career-ready skillsets."
      ]
    },
    mission: {
      title: "Our Mission",
      icon: Target,
      text: "Providing affordable, high-quality higher education through modern pedagogical methods, industry partnership, hands-on laboratory learning, and character building.",
      points: [
        "State-of-the-art academic infrastructure and digital library.",
        "Faculty-driven mentorship and continuous career counseling.",
        "Comprehensive industry exposure and campus recruitment drives."
      ]
    },
    quality: {
      title: "Quality Policy",
      icon: Compass,
      text: "K.R. College is committed to continuous enhancement in education, research output, administrative transparency, and total student satisfaction.",
      points: [
        "Adhering to UGC & NAAC quality benchmarks.",
        "Regular curriculum enhancement aligned with industry trends.",
        "Systematic feedback mechanisms from students & alumni."
      ]
    },
    leadership: {
      title: "Visionary Management",
      icon: UserCheck,
      text: "Founded under the benevolent patronage of National Educational Trust, Kovilpatti. Guided by distinguished academics and visionary philanthropists.",
      points: [
        "Dedicated trust governance focused on student welfare.",
        "Continuous infrastructure expansion & merit scholarships.",
        "Global alumni network spanning top IT & public sectors."
      ]
    }
  };

  const CurrentIcon = tabContents[activeTab].icon;

  return (
    <section id="about" className="py-24 bg-[#F7F9FC] relative overflow-hidden">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#4B9FE1]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D9A441]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Flying Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#EAF3FB] border border-[#1557A6]/20 text-[#1557A6] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <CollegeLogo className="w-5 h-5 border border-[#1557A6]/30" />
            <span>INSTITUTIONAL OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2D52] tracking-tight">
            A Legacy of Educational Excellence Since 1997
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#26384A] leading-relaxed font-medium">
            Situated in Kovilpatti, K.R. College of Arts & Science is a premier seat of higher learning producing rank holders and industry leaders for over 27 years.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Campus Image Reveal with Flying Stat Counter */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#0B2D52]">
              <img
                src="/library.png"
                alt="K.R. College Library & Knowledge Center"
                className="w-full h-[400px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D52]/85 via-transparent to-transparent" />

              {/* Floating Stat Banner at bottom of image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#1557A6]/20 flex justify-around text-center shadow-xl">
                <div>
                  <p className="text-2xl font-extrabold text-[#1557A6]">27+</p>
                  <p className="text-xs text-[#26384A] font-bold">Years Glory</p>
                </div>
                <div className="w-px bg-slate-200" />
                <div>
                  <p className="text-2xl font-extrabold text-[#D9A441]">30,000+</p>
                  <p className="text-xs text-[#26384A] font-bold">Digital Books</p>
                </div>
                <div className="w-px bg-slate-200" />
                <div>
                  <p className="text-2xl font-extrabold text-[#4B9FE1]">100%</p>
                  <p className="text-xs text-[#26384A] font-bold">Student Support</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tabbed Interactive Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            {/* Interactive Tab Navigation */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#EAF3FB] border border-[#1557A6]/15 shadow-sm">
              {(["vision", "mission", "quality", "leadership"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold capitalize transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-[#1557A6] to-[#4B9FE1] text-white shadow-md scale-105"
                      : "text-[#0B2D52] hover:bg-white/70"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Animated Tab Content Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-7 sm:p-9 rounded-3xl border border-[#1557A6]/15 shadow-xl space-y-5"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-[#EAF3FB] flex items-center justify-center text-[#1557A6] shadow-sm">
                    <CurrentIcon className="w-7 h-7 text-[#1557A6]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0B2D52]">
                    {tabContents[activeTab].title}
                  </h3>
                </div>

                <p className="text-[#26384A] text-base leading-relaxed font-medium">
                  {tabContents[activeTab].text}
                </p>

                <div className="space-y-3 pt-2">
                  {tabContents[activeTab].points.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#26384A] font-bold">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
