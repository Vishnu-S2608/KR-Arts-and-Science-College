"use client";

import React from "react";
import { Quote, Star, Sparkles, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "S. Ananya",
      degree: "B.Sc. Computer Science (Batch 2024)",
      company: "Software Engineer @ TCS",
      quote: "K.R. College provided me with exceptional coding labs and placement training. The professors guided me through live projects that helped me crack the TCS Digital interview in my first attempt!",
    },
    {
      name: "M. Karthik Raja",
      degree: "B.Com. Professional Accounting (Batch 2023)",
      company: "Financial Analyst @ Cognizant",
      quote: "The integrated Tally and CA Foundation coaching at K.R. College built my core accounting skills. The supportive environment and guest lectures from industry experts shaped my career path.",
    },
    {
      name: "P. Archana",
      degree: "B.Sc. Biotechnology (Batch 2024)",
      company: "QC Executive @ Biocon Pharma",
      quote: "State-of-the-art tissue culture and molecular labs gave me real practical research experience. I am proud to be an alumna of K.R. College of Arts & Science!",
    },
  ];

  return (
    <section className="py-20 bg-[#F7F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FB] border border-[#1557A6]/20 text-[#1557A6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#D9A441]" />
            <span>ALUMNI VOICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D52] tracking-tight">
            Stories of Student Success
          </h2>
          <p className="mt-4 text-base text-[#26384A]">
            Hear from our proud graduates working across leading MNCs and research institutions globally.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-[#1557A6]/15 shadow-md hover:shadow-xl hover:border-[#1557A6]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-10 h-10 text-[#4B9FE1]/40" />
                  <div className="flex text-[#D9A441] space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-[#26384A] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1557A6]/10">
                <h4 className="text-base font-extrabold text-[#0B2D52]">
                  {t.name}
                </h4>
                <p className="text-xs text-[#1557A6] font-semibold mt-0.5">
                  {t.degree}
                </p>
                <div className="inline-flex items-center space-x-1 text-xs text-[#D9A441] font-bold mt-2 bg-[#0B2D52] px-2.5 py-1 rounded-full">
                  <Building2 className="w-3 h-3" />
                  <span>{t.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
