"use client";

import React from "react";

interface CollegeLogoProps {
  className?: string;
  alt?: string;
}

export default function CollegeLogo({
  className = "w-12 h-12",
  alt = "K.R. College of Arts & Science Official Emblem",
}: CollegeLogoProps) {
  return (
    <div className={`relative rounded-full overflow-hidden aspect-square select-none ${className}`}>
      <img
        src="/kr-logo-official.png"
        alt={alt}
        className="w-full h-full object-contain rounded-full pointer-events-none drop-shadow-md"
      />
    </div>
  );
}
