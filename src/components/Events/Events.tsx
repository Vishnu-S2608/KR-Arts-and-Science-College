"use client";

import React from "react";
import { Calendar, MapPin, Clock, ArrowRight, Bell } from "lucide-react";
import { motion } from "framer-motion";

export interface EventItem {
  id: string;
  title: string;
  date: string;
  month: string;
  time: string;
  venue: string;
  category: string;
  description: string;
  speaker?: string;
  image: string;
}

interface EventsProps {
  onSelectEvent: (event: EventItem) => void;
}

export default function Events({ onSelectEvent }: EventsProps) {
  const events: EventItem[] = [
    {
      id: "event-1",
      title: "National Conference on AI & Emerging Cloud Technologies",
      date: "24",
      month: "OCT 2026",
      time: "10:00 AM - 04:00 PM",
      venue: "Auditorium Hall A",
      category: "Academic Conference",
      description: "Distinguished keynote speakers from IT majors and research labs presenting papers on Deep Learning, NLP, and Cloud Security.",
      speaker: "Dr. K. Senthilkumar (Chief AI Architect, TCS)",
      image: "/computer-lab.png",
    },
    {
      id: "event-2",
      title: "KR-FEST 2026: Inter-Collegiate Cultural Carnival",
      date: "12",
      month: "NOV 2026",
      time: "09:00 AM - 06:00 PM",
      venue: "Main Open Air Theatre",
      category: "Cultural Fest",
      description: "A grand celebration of music, classical & folk dance, mime, fine arts, and literary competitions with 40+ college teams.",
      speaker: "Chief Guest: Thiru S. Rajendran (Eminent Tamil Scholar)",
      image: "/campus-hero.png",
    },
    {
      id: "event-3",
      title: "Annual Campus Mega Placement Drive 2026",
      date: "05",
      month: "DEC 2026",
      time: "08:30 AM - 05:00 PM",
      venue: "Campus Placement Complex",
      category: "Placement Drive",
      description: "30+ IT MNCs, core science industries, and corporate banks conducting direct campus interviews for final year students.",
      speaker: "Organized by K.R. Placement & Training Cell",
      image: "/library.png",
    },
  ];

  return (
    <section id="events" className="py-20 bg-[#EAF3FB]/60 relative border-t border-[#1557A6]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#1557A6]/20 text-[#1557A6] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            <Bell className="w-4 h-4 text-[#D9A441]" />
            <span>CAMPUS HAPPENINGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D52] tracking-tight">
            Upcoming Events & News
          </h2>
          <p className="mt-4 text-base text-[#26384A]">
            Stay updated with conferences, cultural festivals, sports tournaments, and placement drives at K.R. College.
          </p>
        </div>

        {/* Events Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#1557A6]/15 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Frame with Date Badge */}
                <div className="relative h-48 overflow-hidden bg-[#0B2D52]">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D52]/80 via-transparent to-transparent" />

                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-white rounded-2xl px-3.5 py-2 text-center shadow-lg border border-[#1557A6]/20">
                    <span className="block text-xl font-extrabold text-[#1557A6] leading-none">
                      {evt.date}
                    </span>
                    <span className="block text-[10px] font-bold text-[#D9A441] uppercase mt-0.5">
                      {evt.month}
                    </span>
                  </div>

                  <span className="absolute bottom-3 left-4 text-xs font-bold text-white bg-[#1557A6]/80 px-3 py-1 rounded-full backdrop-blur-md">
                    {evt.category}
                  </span>
                </div>

                {/* Event Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B2D52] mb-3 group-hover:text-[#1557A6] transition-colors leading-snug">
                    {evt.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-[#26384A] mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-[#4B9FE1]" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-[#1557A6]" />
                      <span>{evt.venue}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#26384A] leading-relaxed line-clamp-3">
                    {evt.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectEvent(evt)}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#EAF3FB] text-[#1557A6] font-bold text-xs hover:bg-[#1557A6] hover:text-white transition-colors"
                >
                  <span>Event Details & Registration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
