"use client";

import React, { useState } from "react";
import { CheckCircle2, Target, Eye, Compass, UserCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CollegeLogo from "../Common/CollegeLogo";
import ScrollSection from "../Motion/ScrollSection";
import ScrollTextMotion from "../Motion/ScrollTextMotion";
import ScrollImageMotion from "../Motion/ScrollImageMotion";
import ScrollDepthLayer from "../Motion/ScrollDepthLayer";

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
    <section id="about" className="py-24 bg-[#F0F4F8] text-[#234052] relative border-t border-[#D8E3EC]">
      <ScrollSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#D8E3EC] text-[#38A9E8] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <CollegeLogo className="w-5 h-5 border border-[#D8E3EC]" />
            <span>INSTITUTIONAL OVERVIEW</span>
          </div>

          <ScrollTextMotion as="h2" className="text-3xl sm:text-5xl font-extrabold text-[#234052] tracking-tight">
            WHERE EDUCATION MEETS POSSIBILITY
          </ScrollTextMotion>

          <p className="mt-4 text-base sm:text-lg text-[#5A7080] leading-relaxed font-medium">
            Situated in Kovilpatti, K.R. College of Arts & Science is a premier seat of higher learning producing rank holders and industry leaders for over 27 years.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
          
          {/* LEFT COLUMN: Large Photo & Typography Statistics */}
          <ScrollDepthLayer preset="image" className="lg:col-span-6 space-y-8">
            <div className="rounded-2xl overflow-hidden border border-[#D8E3EC] bg-white shadow-sm">
              <ScrollImageMotion
                src="/library.png"
                alt="K.R. College Knowledge Center"
                minScale={1.00}
                maxScale={1.05}
                className="h-[360px] sm:h-[420px]"
              />
            </div>

            {/* Typography Statistics with Thin Horizontal Separators */}
            <div className="space-y-6 pt-2">
              <div className="border-t border-[#D8E3EC] pt-4 flex items-center justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#38A9E8] tracking-tight">27+</span>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#5A7080]">Years of Excellence</p>
                </div>
                <p className="text-xs text-[#5A7080] max-w-xs text-right font-medium">Established in 1997 under National Educational Trust</p>
              </div>

              <div className="border-t border-[#D8E3EC] pt-4 flex items-center justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#38A9E8] tracking-tight">30,000+</span>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#5A7080]">Digital & Print Volumes</p>
                </div>
                <p className="text-xs text-[#5A7080] max-w-xs text-right font-medium">Comprehensive central library & IEEE journal access</p>
              </div>

              <div className="border-t border-[#D8E3EC] pt-4 flex items-center justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#38A9E8] tracking-tight">100%</span>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#5A7080]">Career Placement Support</p>
                </div>
                <p className="text-xs text-[#5A7080] max-w-xs text-right font-medium">Dedicated corporate placement cell & soft skills modules</p>
              </div>
            </div>
          </ScrollDepthLayer>

          {/* RIGHT COLUMN: Tabbed Governance Cards */}
          <ScrollDepthLayer preset="content" className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white border border-[#D8E3EC] shadow-sm">
              {(["vision", "mission", "quality", "leadership"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold capitalize transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-[#38A9E8] text-white shadow-sm"
                      : "text-[#234052] hover:bg-[#F0F4F8]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-8 rounded-2xl border border-[#D8E3EC] shadow-sm space-y-5"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3F8] flex items-center justify-center text-[#38A9E8] border border-[#D8E3EC]">
                    <CurrentIcon className="w-6 h-6 text-[#38A9E8]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#234052]">
                    {tabContents[activeTab].title}
                  </h3>
                </div>

                <p className="text-[#5A7080] text-base leading-relaxed font-medium">
                  {tabContents[activeTab].text}
                </p>

                <div className="space-y-3 pt-2">
                  {tabContents[activeTab].points.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#38A9E8] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#234052] font-bold">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </ScrollDepthLayer>
        </div>
      </ScrollSection>
    </section>
  );
}

