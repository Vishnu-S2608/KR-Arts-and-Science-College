"use client";

import React from "react";
import { Laptop, Landmark, TrendingUp, Dna, BookOpen, Calculator, Trophy, ArrowRight, Layers } from "lucide-react";
import { motion } from "framer-motion";
import CollegeLogo from "../Common/CollegeLogo";

export interface DepartmentItem {
  id: string;
  name: string;
  hod: string;
  icon: any;
  description: string;
  labs: string;
  careers: string[];
}

interface DepartmentsProps {
  onSelectDept: (dept: DepartmentItem) => void;
}

export default function Departments({ onSelectDept }: DepartmentsProps) {
  const departments: DepartmentItem[] = [
    {
      id: "cs",
      name: "Department of Computer Science & AI",
      hod: "Dr. S. Meenakshi, Ph.D.",
      icon: Laptop,
      description: "Pioneering education in Software Development, Artificial Intelligence, Cloud Infrastructure, and Data Engineering with hands-on coding labs.",
      labs: "3 High-Speed Computer Labs with 180+ Systems & High-Speed Optical Fiber Internet",
      careers: ["Software Engineer", "AI/ML Developer", "Data Analyst", "Cloud Architect"],
    },
    {
      id: "commerce",
      name: "Department of Commerce",
      hod: "Dr. K. Ramasamy, M.Com., Ph.D.",
      icon: Landmark,
      description: "Fostering financial acumen, corporate governance, auditing expertise, and professional accounting with integrated CA/CMA coaching.",
      labs: "Digital Commerce & Tally Accounting Lab with Real-time Stock Market Simulators",
      careers: ["Financial Accountant", "Tax Consultant", "Banking Specialist", "Audit Officer"],
    },
    {
      id: "bba",
      name: "Department of Business Administration",
      hod: "Prof. P. Vigneswaran, MBA, M.Phil.",
      icon: TrendingUp,
      description: "Developing entrepreneurial mindsets, marketing strategists, and corporate leaders through case studies, industrial visits, and business plan contests.",
      labs: "Entrepreneurship Incubation Cell & Management Simulation Room",
      careers: ["Business Operations Manager", "Marketing Executive", "HR Manager", "Entrepreneur"],
    },
    {
      id: "biotech",
      name: "Department of Biotechnology",
      hod: "Dr. R. Kavitha, Ph.D.",
      icon: Dna,
      description: "Advance studies in genetic engineering, tissue culture, molecular diagnostics, and bioprocessing under expert research faculty.",
      labs: "Advanced Plant Tissue Culture & Molecular Biology Research Laboratory",
      careers: ["Biotech Researcher", "Quality Control Officer", "Pharma Analyst", "Lab Technologist"],
    },
    {
      id: "english",
      name: "Department of English",
      hod: "Prof. M. Shanmugam, M.A., M.Phil.",
      icon: BookOpen,
      description: "Enhancing literary critique, linguistics, journalism skills, and global communication mastery through interactive multimedia language sessions.",
      labs: "Digital Language Laboratory & Media Studio",
      careers: ["Content Strategist", "Journalist", "Public Relations Officer", "Academic Educator"],
    },
    {
      id: "maths",
      name: "Department of Mathematics",
      hod: "Dr. A. Murugesan, Ph.D.",
      icon: Calculator,
      description: "Building strong analytical foundations, mathematical modeling skills, and statistical computing for scientific research and competitive examinations.",
      labs: "Computational Mathematics & Statistical Software Laboratory (MATLAB / R)",
      careers: ["Data Scientist", "Actuarial Analyst", "Operations Researcher", "Quantitative Analyst"],
    },
  ];

  return (
    <section id="departments" className="py-24 bg-[#EAF3FB]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#1557A6]/20 text-[#1557A6] text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
            <CollegeLogo className="w-5 h-5 border border-[#1557A6]/30" />
            <span>ACADEMIC DEPARTMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2D52] tracking-tight">
            Specialized Faculties & Research Centers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#26384A] font-medium">
            Each department at K.R. College is led by distinguished faculty and equipped with dedicated laboratory facilities.
          </p>
        </motion.div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const IconComp = dept.icon;
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-[#1557A6]/15 shadow-lg hover:shadow-2xl hover:border-[#4B9FE1] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1557A6] to-[#4B9FE1] text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md shadow-[#1557A6]/30">
                    <IconComp className="w-7 h-7 text-[#D9A441]" />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0B2D52] mb-2 group-hover:text-[#1557A6] transition-colors">
                    {dept.name}
                  </h3>

                  <p className="text-xs font-extrabold text-[#1557A6] mb-4">
                    Head of Dept: {dept.hod}
                  </p>

                  <p className="text-sm text-[#26384A] leading-relaxed mb-6 font-medium">
                    {dept.description}
                  </p>
                </div>

                <button
                  onClick={() => onSelectDept(dept)}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-[#1557A6]/10 text-sm font-extrabold text-[#1557A6] group-hover:text-[#0B2D52] transition-colors"
                >
                  <span>Department Overview</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
