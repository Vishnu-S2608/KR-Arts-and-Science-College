"use client";

import React from "react";
import { Laptop, Landmark, TrendingUp, Dna, BookOpen, Calculator, ArrowRight } from "lucide-react";
import CollegeLogo from "../Common/CollegeLogo";
import ScrollSection from "../Motion/ScrollSection";
import ScrollTextMotion from "../Motion/ScrollTextMotion";
import ScrollDepthLayer from "../Motion/ScrollDepthLayer";

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
    <section id="departments" className="py-24 bg-[#F0F4F8] relative border-t border-[#D8E3EC]">
      <ScrollSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#D8E3EC] text-[#38A9E8] text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
            <CollegeLogo className="w-5 h-5 border border-[#D8E3EC]" />
            <span>ACADEMIC DEPARTMENTS</span>
          </div>

          <ScrollTextMotion as="h2" className="text-3xl sm:text-5xl font-extrabold text-[#234052] tracking-tight">
            Specialized Faculties & Research Centers
          </ScrollTextMotion>

          <p className="mt-4 text-base sm:text-lg text-[#5A7080] font-medium">
            Each department at K.R. College is led by distinguished faculty and equipped with dedicated laboratory facilities.
          </p>
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const IconComp = dept.icon;
            const preset = index % 2 === 0 ? "content" : "foreground";

            return (
              <ScrollDepthLayer key={dept.id} preset={preset}>
                <div className="bg-white rounded-2xl p-8 border border-[#D8E3EC] hover:border-[#38A9E8] hover:shadow-md transition-all duration-250 flex flex-col justify-between group h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#EBF3F8] text-[#38A9E8] flex items-center justify-center mb-6 group-hover:bg-[#38A9E8] group-hover:text-white transition-colors duration-250 border border-[#D8E3EC]">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-extrabold text-[#234052] mb-2 group-hover:text-[#38A9E8] transition-colors">
                      {dept.name}
                    </h3>

                    <p className="text-xs font-extrabold text-[#38A9E8] mb-4">
                      Head of Dept: {dept.hod}
                    </p>

                    <p className="text-sm text-[#5A7080] leading-relaxed mb-6 font-medium">
                      {dept.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectDept(dept)}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-[#D8E3EC] text-sm font-extrabold text-[#38A9E8] group-hover:text-[#234052] transition-colors"
                  >
                    <span>Department Overview</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </ScrollDepthLayer>
            );
          })}
        </div>
      </ScrollSection>
    </section>
  );
}

