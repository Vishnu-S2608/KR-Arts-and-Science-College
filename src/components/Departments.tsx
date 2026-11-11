"use client";

import { useState } from "react";
import { DEPARTMENTS_DATA, Department } from "@/data/departments";
import {
  BookOpen,
  Briefcase,
  ChevronRight,
  X,
  CheckCircle2,
} from "lucide-react";

interface DepartmentsProps {
  onSelectDepartmentForApply?: (deptTitle: string) => void;
}

export default function Departments({
  onSelectDepartmentForApply,
}: DepartmentsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  const departmentsList = Object.values(DEPARTMENTS_DATA);

  const filteredDepts =
    activeCategory === "all"
      ? departmentsList
      : departmentsList.filter((dept) => {
          if (activeCategory === "computing")
            return dept.category === "computing";
          if (activeCategory === "commerce")
            return dept.category === "commerce";
          if (activeCategory === "science") return dept.category === "science";
          if (activeCategory === "arts") return dept.category === "arts";
          return true;
        });

  const handleApplyClick = (deptTitle: string) => {
    if (onSelectDepartmentForApply) {
      onSelectDepartmentForApply(deptTitle);
    }
    const elem = document.getElementById("admissions");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-wrapper" id="programmes">
      <div className="container">
        <div className="section-header">
          <span className="badge">Academic Offerings</span>
          <h2>
            Explore Our <span className="gradient-text">11 Undergraduate</span>{" "}
            Programmes
          </h2>
          <p>
            Curriculums meticulously structured under Madurai Kamaraj University
            regulations with specialized industry certifications and practical
            laboratory training.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {[
            { id: "all", label: "All Programmes (11)" },
            { id: "computing", label: "Computing & AI" },
            { id: "commerce", label: "Commerce & Aviation" },
            { id: "science", label: "Science & Health" },
            { id: "arts", label: "Arts, Law & Languages" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`border text-sm font-semibold px-5 py-2.5 rounded-full cursor-pointer transition-all duration-200 ${
                activeCategory === tab.id
                  ? "bg-indigo-500/20 border-indigo-500/60 text-indigo-200 shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                  : "bg-white/[0.04] border-slate-700/60 text-slate-300 hover:bg-white/[0.08] hover:text-white"
              }`}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Programmes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredDepts.map((dept) => (
            <div
              key={dept.id}
              className="flex flex-col justify-between h-full p-6 rounded-[24px] border border-slate-800 bg-[#0c101d]/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-500/15 text-indigo-300">
                    {dept.degree}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {dept.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1.5 text-white">
                  {dept.title}
                </h3>
                <p className="text-sm text-slate-400 mb-3.5">{dept.deptName}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
                  {dept.overview}
                </p>

                {/* Key Curriculum Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {dept.curriculum.slice(0, 3).map((sub, idx) => (
                    <span
                      key={idx}
                      className="text-[0.74rem] bg-white/[0.04] border border-slate-700/50 px-2 py-0.5 rounded-md text-slate-300"
                    >
                      {sub}
                    </span>
                  ))}
                  {dept.curriculum.length > 3 && (
                    <span className="text-[0.74rem] bg-white/[0.04] border border-slate-700/50 px-2 py-0.5 rounded-md text-slate-300">
                      +{dept.curriculum.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 pt-5 border-t border-slate-800/80 mt-auto">
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ padding: "0.55rem 1rem", fontSize: "0.85rem" }}
                  onClick={() => setSelectedDept(dept)}
                >
                  <BookOpen size={14} />
                  View Syllabus
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ padding: "0.55rem 1rem", fontSize: "0.85rem" }}
                  onClick={() => handleApplyClick(dept.title)}
                >
                  Apply Now
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Syllabus Modal */}
      {selectedDept && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedDept(null)}
        >
          <div
            className="bg-[#0c101d] border border-slate-700 rounded-[24px] max-w-[680px] w-full max-h-[85vh] overflow-y-auto p-8 relative shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 bg-white/[0.08] hover:bg-white/[0.18] text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              onClick={() => setSelectedDept(null)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-500/15 text-indigo-300 mb-3 inline-block">
              {selectedDept.degree} &bull; {selectedDept.duration}
            </span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>
              {selectedDept.title}
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
                fontSize: "0.95rem",
              }}
            >
              {selectedDept.deptName} | {selectedDept.affiliation}
            </p>

            <p
              style={{
                lineHeight: "1.6",
                color: "var(--text-primary)",
                marginBottom: "2rem",
              }}
            >
              {selectedDept.overview}
            </p>

            <h4
              style={{
                fontSize: "1.1rem",
                marginBottom: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <BookOpen size={17} color="#818cf8" />
              Core Curriculum Modules
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                marginBottom: "2rem",
              }}
            >
              {selectedDept.curriculum.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.6rem",
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    color="#10b981"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h4
              style={{
                fontSize: "1.1rem",
                marginBottom: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Briefcase size={17} color="#06b6d4" />
              Career Outcomes &amp; Pathways
            </h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "2rem",
              }}
            >
              {selectedDept.careers.map((career, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: "0.82rem",
                    background: "rgba(6, 182, 212, 0.12)",
                    border: "1px solid rgba(6, 182, 212, 0.25)",
                    color: "#67e8f9",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  {career}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "1rem",
              }}
            >
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedDept(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  handleApplyClick(selectedDept.title);
                  setSelectedDept(null);
                }}
              >
                Apply for {selectedDept.title}
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
