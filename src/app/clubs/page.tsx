import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Briefcase,
  Trophy,
  Trees,
  HeartHandshake,
  Palette,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Student Clubs & Societies | KR Arts And Science College",
  description:
    "Discover student clubs, NCC cadet wing, KR Leaders Club, and community outreach bodies at KR Arts And Science College, Madurai.",
};

const CLUBS = [
  {
    title: "National Cadet Corps (NCC)",
    badge: "Honor & Defense",
    tagColor: "gold",
    icon: ShieldCheck,
    description:
      "Instilling selfless service, leadership, and national character. Cadets undergo rigorous drill maneuvers, obstacle navigation, weapon training, and national Thal Sainik Camp conditioning.",
    bullets: [
      "B & C Certificate Training",
      "Annual Thal Sainik Trials",
      "Republic Day Camp Path",
    ],
    image: "/images/campus-hero.png",
  },
  {
    title: "KR Leaders Club",
    badge: "New for 2026",
    tagColor: "gold",
    icon: Users,
    description:
      "Dynamic student platform for parliamentary debates, public policy critiques, civic advocacy, and youth governance dialogues across Peraiyur taluk.",
    bullets: [
      "Civic Leadership Forums",
      "Model Youth Parliament",
      "Bureaucratic Mentorship",
    ],
  },
  {
    title: "Training & Placement Cell",
    badge: "100% Placement",
    tagColor: "sky",
    icon: Briefcase,
    description:
      "Conducting continuous aptitude sessions, corporate technical mock interviews, resume writing labs, and coordinating with 7+ top recruiting companies.",
    bullets: [
      "Continuous Aptitude Training",
      "Corporate Mock Interviews",
      "Soft Skills Certification",
    ],
    image: "/images/library.png",
  },
  {
    title: "Sports & Athletics Club",
    badge: "Championship Ground",
    tagColor: "emerald",
    icon: Trophy,
    description:
      "Managing inter-collegiate track and field meets, cricket tournaments, volleyball championships, kabaddi, and athletic conditioning programs.",
    bullets: [
      "Inter-College Tournament Meets",
      "Sprint & Relay Honors",
      "Physical Education Wing",
    ],
  },
  {
    title: "Green Club Eco Preservation",
    badge: "Clean Campus",
    tagColor: "emerald",
    icon: Trees,
    description:
      "Dedicated to tree planting drives, rainwater monitoring, eco-friendly plastic separation, and green environmental awareness across Peraiyur.",
    bullets: [
      "Eco-Preservation Drives",
      "Clean Peraiyur Outreach",
      "Solar Campus Monitoring",
    ],
    image: "/images/college-entrance.jpg",
  },
  {
    title: "Unnat Bharat Abhiyan",
    badge: "Flagship Outreach",
    tagColor: "blue",
    icon: HeartHandshake,
    description:
      "Connecting higher education institutions with rural villages for socio-economic development, digital literacy, and local livelihood enhancement.",
    bullets: [
      "Rural Village Baseline Surveys",
      "Digital Literacy Camps",
      "Women Empowerment Programs",
    ],
  },
  {
    title: "Art & Literary Society",
    badge: "Creative Arts",
    tagColor: "sky",
    icon: Palette,
    description:
      "Fostering fine arts, painting, traditional Tamil rangoli, theatre staging, poetry recitals, and campus cultural festival management.",
    bullets: [
      "Annual Arts Exhibits",
      "Creative Writing Workshops",
      "Cultural Stage Management",
    ],
  },
];

export default function ClubsPage() {
  return (
    <main className="pt-8 sm:pt-12 pb-20 bg-gradient-to-b from-[#FBF2D4]/20 via-white to-white min-h-screen">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
            <span className="text-[#0334A0] font-bold text-xs sm:text-sm tracking-widest uppercase">
              Campus Leadership &bull; Student Societies
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Student Clubs, NCC Cadet Wing &amp; Societies
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Active co-curricular organizations fostering patriotic character,
            creative artistic expression, environmental protection,
            sportsmanship, and civic leadership.
          </p>
        </div>

        {/* Clubs Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLUBS.map((club, idx) => {
            const Icon = club.icon;
            return (
              <div
                key={idx}
                className="pure-white-card p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0334A0]/10 border border-[#0334A0]/20 flex items-center justify-center text-[#0334A0] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                        club.tagColor === "gold"
                          ? "bg-[#FBF2D4] text-[#0334A0] border-[#0334A0]/20"
                          : club.tagColor === "emerald"
                            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                            : "bg-[#0334A0]/10 text-[#0334A0] border-[#0334A0]/20"
                      }`}
                    >
                      {club.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-[#0334A0] transition-colors mb-2">
                    {club.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {club.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {club.bullets.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0334A0] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">
                    Co-Curricular Wing
                  </span>
                  <Link
                    href="/apply"
                    className="text-xs font-bold text-[#0334A0] hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Join Club via Admission</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
