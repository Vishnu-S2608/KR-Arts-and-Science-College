"use client";

import React from "react";
import { Quote, Star, Sparkles, Building2 } from "lucide-react";
import ScrollSection from "../Motion/ScrollSection";
import ScrollTextMotion from "../Motion/ScrollTextMotion";

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
    <section className="py-24 bg-[#F0F4F8] text-[#234052] relative border-t border-[#D8E3EC]">
      <ScrollSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D8E3EC] text-[#38A9E8] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#38A9E8]" />
            <span>ALUMNI VOICES</span>
          </div>

          <ScrollTextMotion as="h2" className="text-3xl sm:text-4xl font-extrabold text-[#234052] tracking-tight">
            Stories of Student Success
          </ScrollTextMotion>

          <p className="mt-4 text-base text-[#5A7080] font-medium">
            Hear from our proud graduates working across leading MNCs and research institutions globally.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-2xl border border-[#D8E3EC] hover:border-[#38A9E8] hover:shadow-md transition-all duration-250 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-10 h-10 text-[#38A9E8]" />
                  <div className="flex text-[#F4C95D] space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-[#234052] leading-relaxed italic mb-6 font-medium">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8E3EC]">
                <h4 className="text-base font-extrabold text-[#234052]">
                  {t.name}
                </h4>
                <p className="text-xs text-[#38A9E8] font-semibold mt-0.5">
                  {t.degree}
                </p>
                <div className="inline-flex items-center space-x-1.5 text-xs text-[#234052] font-extrabold mt-2.5 bg-[#F0F4F8] px-3 py-1 rounded-full border border-[#D8E3EC]">
                  <Building2 className="w-3.5 h-3.5 text-[#38A9E8]" />
                  <span>{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollSection>
    </section>
  );
}

