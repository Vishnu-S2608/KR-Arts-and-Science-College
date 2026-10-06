"use client";

import React, { useState } from "react";
import { Search, Clock, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CollegeLogo from "../Common/CollegeLogo";
import ScrollSection from "../Motion/ScrollSection";
import ScrollTextMotion from "../Motion/ScrollTextMotion";

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
    <section id="academics" className="py-24 bg-[#F0F4F8] text-[#234052] relative border-t border-[#D8E3EC]">
      <ScrollSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#D8E3EC] text-[#38A9E8] text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
            <CollegeLogo className="w-5 h-5 border border-[#D8E3EC]" />
            <span>ACADEMIC OFFERINGS</span>
          </div>

          <ScrollTextMotion as="h2" className="text-3xl sm:text-5xl font-extrabold text-[#234052] tracking-tight">
            Programs Designed for Tomorrow's Leaders
          </ScrollTextMotion>

          <p className="mt-4 text-base sm:text-lg text-[#5A7080] font-medium">
            Discover undergraduate, postgraduate, and value-added certification courses tailored to meet global industry demands.
          </p>
        </div>

        {/* Filter Controls & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white border border-[#D8E3EC] shadow-sm w-full md:w-auto">
            {(["All", "UG", "PG", "Skill"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-[#38A9E8] text-white shadow-sm"
                    : "text-[#234052] hover:bg-[#F0F4F8]"
                }`}
              >
                {cat === "All" ? "All Programs" : cat === "UG" ? "Undergraduate (UG)" : cat === "PG" ? "Postgraduate (PG)" : "Skill Certifications"}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#38A9E8]" />
            <input
              type="text"
              placeholder="Search program..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#D8E3EC] bg-white text-sm text-[#234052] placeholder-[#5A7080] focus:outline-none focus:border-[#38A9E8] focus:ring-1 focus:ring-[#38A9E8] transition shadow-sm font-medium"
            />
          </div>
        </div>

        {/* Large Editorial Horizontal Program Rows */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program, index) => {
              const rowNum = String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={program.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => onSelectProgram(program)}
                  className="group relative bg-white hover:bg-[#EBF3F8] p-6 sm:p-7 rounded-2xl border border-[#D8E3EC] hover:border-[#38A9E8] hover:shadow-md transition-all duration-250 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden"
                >
                  {/* Left Accent Growing Line on Hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#38A9E8] opacity-0 group-hover:opacity-100 transition-opacity duration-250" />

                  {/* Left: Row Number & Program Title */}
                  <div className="flex items-start md:items-center space-x-6">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#38A9E8] tracking-tight shrink-0 font-mono">
                      {rowNum}
                    </span>
                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#EBF3F8] border border-[#D8E3EC] text-[#38A9E8] text-[10px] font-extrabold uppercase tracking-wider">
                          {program.degree}
                        </span>
                        <span className="flex items-center space-x-1 text-xs text-[#5A7080] font-bold">
                          <Clock className="w-3.5 h-3.5 text-[#38A9E8]" />
                          <span>{program.duration}</span>
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#234052] group-hover:text-[#38A9E8] transition-colors leading-snug">
                        {program.name}
                      </h3>
                      <p className="text-xs text-[#5A7080] mt-1 line-clamp-1 max-w-2xl font-medium">
                        {program.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Highlights & Interactive Arrow */}
                  <div className="flex items-center space-x-6 shrink-0 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-[#D8E3EC] pt-4 md:pt-0">
                    <div className="hidden lg:flex items-center space-x-4">
                      {program.highlights.slice(0, 2).map((hl, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5 text-xs text-[#234052] font-semibold bg-[#F0F4F8] px-3 py-1.5 rounded-full border border-[#D8E3EC]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#38A9E8]" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2 text-xs font-extrabold text-[#38A9E8] group-hover:text-[#234052] transition-colors">
                      <span>View Program Details</span>
                      <div className="w-9 h-9 rounded-full bg-[#F0F4F8] border border-[#D8E3EC] group-hover:bg-[#38A9E8] group-hover:text-white flex items-center justify-center transition-all duration-250">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </ScrollSection>
    </section>
  );
}

