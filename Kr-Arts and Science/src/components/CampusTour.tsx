import Image from "next/image";
import { Cpu, Library, Building2, Trophy, Check, Sparkles } from "lucide-react";

const facilities = [
  {
    title: "High-Performance Computing & AI Labs",
    category: "Technology",
    icon: <Cpu size={14} />,
    image: "/images/computer-lab.png",
    description:
      "Modern terminal suites featuring dedicated high-speed optical fiber connectivity, advanced GPU workstations for deep learning models, and Linux/Windows environments.",
    perks: ["60+ Workstations", "Gigabit Internet", "Python/AI Toolchains", "Uninterrupted Power Backup"],
  },
  {
    title: "Central Digital Library & Research Center",
    category: "Knowledge Hub",
    icon: <Library size={14} />,
    image: "/images/library.png",
    description:
      "A quiet sanctuary of scholarship housing thousands of academic textbooks, national and international journal subscriptions, digital e-book databases, and collaborative discussion zones.",
    perks: ["10,000+ Textbooks", "E-Journal Access", "Quiet Study Pods", "National Repositories"],
  },
  {
    title: "Main Campus & Architectural Gateway",
    category: "Campus Ambience",
    icon: <Building2 size={14} />,
    image: "/images/college-entrance.jpg",
    description:
      "A calm green sanctuary in Peraiyur designed to stimulate academic focus. Features spacious smart classrooms, seminar auditoriums, administrative blocks, and green courtyards.",
    perks: ["Spacious Classrooms", "Smart Projectors", "Lush Greenery", "24/7 Security CCTV"],
  },
  {
    title: "Athletics, NSS/NCC & Student Recreation",
    category: "Physical Fitness",
    icon: <Trophy size={14} />,
    image: "/campus-hero.png",
    description:
      "Full-fledged outdoor athletic grounds for cricket, football, volleyball, and track events, coupled with active NCC and NSS wings building leadership and discipline.",
    perks: ["Standard Athletic Track", "Inter-Collegiate Tournaments", "Active NCC/NSS Units", "Coached Training"],
  },
];

export default function CampusTour() {
  return (
    <section className="section-wrapper" id="facilities" style={{ background: "rgba(10, 14, 24, 0.4)" }}>
      <div className="container">
        <div className="section-header">
          <span className="badge">
            <Sparkles size={13} />
            World-Class Infrastructure
          </span>
          <h2>
            Designed for <span className="gradient-text">Excellence &amp; Innovation</span>
          </h2>
          <p>
            Experience a modern college campus tailored for immersive learning, practical technology exploration, and holistic extracurricular growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((f, idx) => (
            <div
              key={idx}
              className="group relative rounded-[24px] overflow-hidden border border-slate-800 bg-[#0c101d] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-[260px] w-full overflow-hidden">
                <Image
                  src={f.image}
                  alt={f.title}
                  width={600}
                  height={340}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md border border-slate-700/60 text-slate-100 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  {f.icon}
                  <span>{f.category}</span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{f.title}</h3>
                <p className="text-slate-400 text-[0.92rem] leading-relaxed mb-5">{f.description}</p>

                <div className="flex flex-wrap gap-2">
                  {f.perks.map((perk, pIdx) => (
                    <span
                      key={pIdx}
                      className="text-xs bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-lg flex items-center gap-1.5"
                    >
                      <Check size={12} color="#10b981" />
                      {perk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
