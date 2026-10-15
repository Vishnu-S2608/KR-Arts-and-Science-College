"use client";

import { useState } from "react";

interface ChronicleEvent {
  id: string;
  year: string;
  category: string;
  title: string;
  description: string;
  tag: string;
  placeholderText: string;
  span2?: boolean;
}

const CHRONICLES: ChronicleEvent[] = [
  {
    id: "thal-sainik",
    year: "2025-26",
    category: "NCC Honors",
    title: "Cadet Selection for Prestigious Thal Sainik Camp",
    description:
      "Following gruelling multi-stage state conditioning trials, KR College NCC cadets achieved selection to represent the Directorate in national competition drills, marksmanship, and obstacle courses.",
    tag: "National NCC Selection",
    placeholderText: "Photo to be added (NCC Thal Sainik Camp Selection)",
    span2: true,
  },
  {
    id: "shinawatra-mou",
    year: "2025-26",
    category: "International Partnership",
    title: "Shinawatra University, Thailand Bilateral MoU",
    description:
      "Signed in Pathum Thani, Thailand during ICIRI 2026. Establishes cross-border research and student exchange.",
    tag: "Thailand MoU",
    placeholderText: "Photo to be added (Shinawatra University MoU Signing)",
  },
  {
    id: "airport-visit",
    year: "2024-25",
    category: "Aviation Management",
    title: "Madurai Airport Operational Training",
    description:
      "BBA Aviation scholars received direct field insight into passenger ticketing terminals and cargo air logistics.",
    tag: "Aviation Immersion",
    placeholderText: "Photo to be added (Madurai Airport Operational Visit)",
  },
  {
    id: "srivilliputhur-meet",
    year: "2024-25",
    category: "Athletics",
    title: "Srivilliputhur Athletic Meet Overall Championship",
    description:
      "College athletes won gold and silver honors across 100m, 400m relay, and long jump divisions.",
    tag: "Sports Trophy",
    placeholderText: "Photo to be added (Srivilliputhur Meet Victory Ceremony)",
  },
  {
    id: "decathlon-visit",
    year: "2024-25",
    category: "Commerce & AI",
    title: "Decathlon Global Supply Chain Immersion",
    description:
      "Interactive tour analyzing inventory software architecture, barcode integration, and logistics flow.",
    tag: "Industry Visit",
    placeholderText: "Photo to be added (Decathlon Industrial Facility Visit)",
  },
  {
    id: "spark-symposia",
    year: "2024-25",
    category: "Innovation",
    title: "SPARK Innovation Festival Grand Finale",
    description:
      "Inter-collegiate forum showcasing working models in renewable clean energy, AI vision tools, and community banking.",
    tag: "Innovation Expo",
    placeholderText: "Photo to be added (SPARK Grand Innovation Exhibition)",
  },
  {
    id: "trust-foundation",
    year: "2022-23",
    category: "Institutional Milestone",
    title: "Establishment & University Affiliation Clearance",
    description:
      "KR Educational and Charitable Trust laid the foundation for KR Arts And Science College in P. Thambipatti, securing official affiliation under Madurai Kamaraj University to inaugurate higher education in Peraiyur.",
    tag: "Foundation Milestone",
    placeholderText: "Photo to be added (Campus Inauguration Ceremony 2023)",
    span2: true,
  },
  {
    id: "placement-drive",
    year: "2025-26",
    category: "Placements",
    title: "Inaugural Batch 100% Placement Achievement",
    description:
      "All 18 graduating applicants received verifiable offer letters totaling 70+ placement confirmations.",
    tag: "100% Placed",
    placeholderText: "Photo to be added (100% Placement Offer Letters Distribution)",
  },
];

const FILTER_YEARS = [
  { key: "all", label: "All Chronicles" },
  { key: "2025-26", label: "2025-26" },
  { key: "2024-25", label: "2024-25" },
  { key: "2022-23", label: "2022-23" },
];

export default function EventsPage() {
  const [activeYear, setActiveYear] = useState<string>("all");

  const filteredEvents =
    activeYear === "all"
      ? CHRONICLES
      : CHRONICLES.filter((e) => e.year === activeYear);

  return (
    <main className="pt-[calc(var(--header-height)+2rem)] min-h-[80vh]">
      <section className="section-wrapper bg-blue-tint !pb-8">
        <div className="container">
          <div className="section-label">Campus Archive</div>
          <h1 className="mb-4">Campus Chronicle</h1>
          <p className="max-w-[650px] text-[1.1rem] text-slate-600 mb-10">
            A documented history of achievements, student breakthroughs, international MoUs, and
            community milestones at KR Arts And Science College.
          </p>

          {/* Archive Academic Year Filter Buttons */}
          <div className="flex gap-3 flex-wrap">
            {FILTER_YEARS.map((filter) => {
              const isActive = activeYear === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  className={`event-filter-btn btn ${isActive ? "btn-primary" : "btn-outline"}`}
                  onClick={() => setActiveYear(filter.key)}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Bento List Section */}
      <section className="section-wrapper bg-gray-tint">
        <div className="container">
          <div className="bento-grid" id="events-grid">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className={`bento-card ${event.span2 ? "bento-span-2" : ""}`}
                data-year={event.year}
              >
                <div className="bento-media">
                  <div className="photo-placeholder">
                    <div className="placeholder-line"></div>
                    {event.placeholderText}
                  </div>
                </div>
                <div className="bento-body">
                  <div>
                    <div className="bento-date">
                      {event.category} &#8226; {event.year}
                    </div>
                    <h3 className="bento-title">{event.title}</h3>
                    <p
                      style={{
                        fontSize: event.span2 ? "0.9375rem" : "0.875rem",
                        lineHeight: event.span2 ? 1.6 : undefined,
                      }}
                    >
                      {event.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <span className="text-pill">{event.tag}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
