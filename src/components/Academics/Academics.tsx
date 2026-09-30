"use client";

import React, { useState } from "react";
import { GraduationCap, Search, Clock, Award, BookOpen, ArrowRight, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CollegeLogo from "../Common/CollegeLogo";

interface Program {
  id: string;
  name: string;
  degree: string;
  category: "UG" | "PG" | "Skill";
  duration: string;
  eligibility: string;
  description: string;
  highlights: string[];
}

interface AcademicsProps {
  onSelectProgram: (program: Program) => void;
}

export default function Academics({ onSelectProgram }: AcademicsProps) {
  const [activeFilter, setActiveFilter] = useState<"All" | "UG" | "PG" | "Skill">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const programs: Program[] = [
    {
      id: "bsc-cs",
      name: "B.Sc. Computer Science",
      degree: "Undergraduate",
      category: "UG",
      duration: "3 Years (6 Semesters)",
      eligibility: "10+2 with Mathematics or Computer Science",
      description: "Comprehensive study of software development, algorithm design, database management, and cloud computing principles.",
      highlights: ["AI & Data Science Modules", "Live Coding Labs", "TCS & Infosys Campus Preparation"],
    },
    {
      id: "bsc-ai",
      name: "B.Sc. Artificial Intelligence & Data Science",
      degree: "Undergraduate",
      category: "UG",
      duration: "3 Years (6 Semesters)",
      eligibility: "10+2 with Mathematics / Physics",
      description: "Modern curriculum covering machine learning, deep learning, python analytics, neural networks, and big data technologies.",
      highlights: ["GPU AI Workstations", "Industry Python Certification", "Kaggle & Hackathon Mentorship"],
    },
    {
      id: "bcom",
      name: "B.Com. General & Professional Accounting",
      degree: "Undergraduate",
      category: "UG",
      duration: "3 Years (6 Semesters)",
      eligibility: "10+2 in Commerce / Arts / Science stream",
      description: "Comprehensive financial accounting, corporate law, auditing, GST compliance, and Tally Prime software mastery.",
      highlights: ["CA / CMA Foundation Coaching", "Tally & GST Practical Training", "Banking Internship Opportunities"],
    },
    {
      id: "bba",
      name: "BBA (Bachelor of Business Administration)",
      degree: "Undergraduate",
      category: "UG",
      duration: "3 Years (6 Semesters)",
      eligibility: "10+2 Higher Secondary Pass",
      description: "Management principles, strategic marketing, human resource development, financial management, and entrepreneurship.",
      highlights: ["Business Plan Competitions", "Corporate Industrial Visits", "Leadership Development Cell"],
    },
    {
      id: "bsc-biotech",
      name: "B.Sc. Biotechnology",
      degree: "Undergraduate",
      category: "UG",
      duration: "3 Years (6 Semesters)",
      eligibility: "10+2 with Biology / Chemistry",
      description: "Explore molecular biology, genetic engineering, microbiology, plant biotechnology, and bioprocess technology.",
      highlights: ["Advanced Tissue Culture Lab", "Pharma Industry Internships", "Research Paper Guidance"],
    },
    {
      id: "ba-english",
      name: "B.A. English Literature",
      degree: "Undergraduate",
      category: "UG",
      duration: "3 Years (6 Semesters)",
      eligibility: "10+2 Higher Secondary Pass",
      description: "British & World literature, linguistics, journalism, creative writing, and advanced English communication mastery.",
      highlights: ["Language Laboratory Skills", "Journalism & Media Workshops", "Public Speaking Training"],
    },
    {
      id: "bsc-maths",
      name: "B.Sc. Mathematics",
      degree: "Undergraduate",
      category: "UG",
      duration: "3 Years (6 Semesters)",
      eligibility: "10+2 with Mathematics",
      description: "Pure and applied mathematics, differential equations, operations research, statistics, and computational math.",
      highlights: ["LaTeX & MATLAB Skills", "Competitive Exam Coaching", "University Rank Legacy"],
    },
    {
      id: "msc-cs",
      name: "M.Sc. Computer Science",
      degree: "Postgraduate",
      category: "PG",
      duration: "2 Years (4 Semesters)",
      eligibility: "B.Sc CS / BCA / B.Sc IT",
      description: "Advanced algorithms, cybersecurity, cloud architecture, IoT systems, and dissertation research work.",
      highlights: ["Thesis Publication Guidance", "High Performance Computing", "PG Placement Track"],
    },
    {
      id: "mcom",
      name: "M.Com. Finance & Accounting",
      degree: "Postgraduate",
      category: "PG",
      duration: "2 Years (4 Semesters)",
      eligibility: "B.Com / BBA / Corporate Secretaryship",
      description: "Advanced corporate financial reporting, quantitative techniques, international trade, and security analysis.",
      highlights: ["NET / SET Exam Coaching", "Financial Analytics Lab", "Corporate Internship"],
    },
    {
      id: "skill-ai",
      name: "Full Stack Web & AI Development",
      degree: "Certification",
      category: "Skill",
      duration: "6 Months Parallel Course",
      eligibility: "Open to all enrolled students",
      description: "Hands-on training in React, Node.js, Python, Tailwind CSS, and AI API integration for production web apps.",
      highlights: ["Portfolio Project Building", "GitHub Certification", "Direct Industry Mentorship"],
    },
  ];

  const filteredPrograms = programs.filter((p) => {
    const matchesCategory = activeFilter === "All" || p.category === activeFilter;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="academics" className="py-24 bg-[#F7F9FC] relative border-t border-[#1557A6]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#EAF3FB] border border-[#1557A6]/20 text-[#1557A6] text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
            <CollegeLogo className="w-5 h-5 border border-[#1557A6]/30" />
            <span>ACADEMIC OFFERINGS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2D52] tracking-tight">
            Programs Designed for Tomorrow's Leaders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#26384A] font-medium">
            Discover undergraduate, postgraduate, and value-added certification courses tailored to meet global industry demands.
          </p>
        </motion.div>

        {/* Filter Controls & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#EAF3FB] border border-[#1557A6]/15 w-full md:w-auto shadow-sm">
            {(["All", "UG", "PG", "Skill"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-[#1557A6] to-[#4B9FE1] text-white shadow-md scale-105"
                    : "text-[#0B2D52] hover:bg-white/70"
                }`}
              >
                {cat === "All" ? "All Programs" : cat === "UG" ? "Undergraduate (UG)" : cat === "PG" ? "Postgraduate (PG)" : "Skill Certifications"}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#1557A6]" />
            <input
              type="text"
              placeholder="Search program..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#1557A6]/20 bg-white text-sm text-[#0B2D52] placeholder-[#26384A]/60 focus:outline-none focus:border-[#1557A6] focus:ring-2 focus:ring-[#1557A6]/20 transition shadow-sm font-medium"
            />
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-7 border border-[#1557A6]/15 shadow-md hover:shadow-2xl hover:border-[#4B9FE1] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#EAF3FB] text-[#1557A6] text-xs font-extrabold uppercase tracking-wider">
                      {program.degree}
                    </span>
                    <span className="flex items-center space-x-1.5 text-xs text-[#26384A] font-extrabold">
                      <Clock className="w-3.5 h-3.5 text-[#4B9FE1]" />
                      <span>{program.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0B2D52] mb-3 group-hover:text-[#1557A6] transition-colors">
                    {program.name}
                  </h3>

                  <p className="text-sm text-[#26384A] leading-relaxed mb-4 line-clamp-3 font-medium">
                    {program.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#1557A6]/10 mb-6">
                    {program.highlights.slice(0, 2).map((hl, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-[#0B2D52] font-semibold">
                        <CheckCircle className="w-4 h-4 text-[#D9A441] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectProgram(program)}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-2xl bg-[#EAF3FB] text-[#1557A6] font-extrabold text-sm hover:bg-[#1557A6] hover:text-white transition-colors duration-200"
                >
                  <span>Program Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
