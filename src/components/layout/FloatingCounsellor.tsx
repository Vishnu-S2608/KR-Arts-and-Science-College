"use client";

import React from "react";
import { Phone } from "lucide-react";

export default function FloatingCounsellor() {
  return (
    <aside
      aria-label="Direct Admissions Contact and WhatsApp Support"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 select-none"
    >
      {/* Phone Call Trigger (Above WhatsApp) */}
      <div className="relative flex items-center group/call">
        {/* Slide-out Tooltip on Desktop (points left into viewport) */}
        <span
          role="tooltip"
          className="hidden sm:inline-block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-full bg-[#011236] text-[#FBF2D4] border border-[#C59B27]/40 text-xs font-bold whitespace-nowrap opacity-0 group-hover/call:opacity-100 translate-x-1 group-hover/call:translate-x-0 transition-all duration-200 pointer-events-none z-50 shadow-md"
        >
          Call Counsellor &bull; +91 80722 97109
        </span>

        <a
          href="tel:+918072297109"
          className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#021B4E] text-[#F5B83D] border-2 border-[#C59B27] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg"
          title="Call Admission Office: +91 80722 97109"
          aria-label="Call Admission Office"
        >
          {/* Ambient Pulse Ring */}
          <span
            className="absolute inset-0 rounded-full bg-[#0334A0] opacity-30 animate-ping pointer-events-none"
            aria-hidden="true"
          />

          {/* Phone Icon */}
          <Phone className="w-5 h-5 text-[#F5B83D] group-hover/call:rotate-12 transition-transform duration-200" />
        </a>
      </div>

      {/* WhatsApp Chat Trigger (Below Call Icon) */}
      <div className="relative flex items-center group/wa">
        {/* Slide-out Tooltip on Desktop (points left into viewport) */}
        <span
          role="tooltip"
          className="hidden sm:inline-block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-full bg-[#011236] text-[#FBF2D4] border border-[#25D366]/50 text-xs font-bold whitespace-nowrap opacity-0 group-hover/wa:opacity-100 translate-x-1 group-hover/wa:translate-x-0 transition-all duration-200 pointer-events-none z-50 shadow-md"
        >
          Chat on WhatsApp &bull; +91 80722 97109
        </span>

        <a
          href="https://wa.me/918072297109?text=Hello%20KR%20Arts%20and%20Science%20College%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white border-2 border-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg"
          title="Chat on WhatsApp: +91 80722 97109"
          aria-label="Chat on WhatsApp"
        >
          {/* Ambient Pulse Ring */}
          <span
            className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"
            aria-hidden="true"
          />

          {/* WhatsApp SVG Icon */}
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 fill-white group-hover/wa:scale-110 transition-transform duration-200"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
