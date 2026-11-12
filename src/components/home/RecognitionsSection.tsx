"use client";

interface RecognitionPartner {
  name: string;
  category: string;
  logo: string;
  alt: string;
}

const PARTNERS: RecognitionPartner[] = [
  {
    name: "MySky Fly Aviation",
    category: "Aviation MoU Partner",
    logo: "/images/partners/myskyfly.png",
    alt: "MySky Fly Aviation Partner Logo",
  },
  {
    name: "PandiyaNadu Cultural Foundation",
    category: "Cultural Heritage Partner",
    logo: "/images/partners/pandayanadu.png",
    alt: "PandiyaNadu Cultural Foundation Logo",
  },
  {
    name: "Kalaignar Centenary Library",
    category: "Research Resource Linkage",
    logo: "/images/partners/kalaignar.png",
    alt: "Kalaignar Centenary Library Madurai Logo",
  },
  {
    name: "Madurai Kamaraj University",
    category: "Affiliating State University",
    logo: "/images/partners/mku.png",
    alt: "Madurai Kamaraj University Emblem Logo",
  },
];

export default function RecognitionsSection() {
  return (
    <section
      id="recognitions"
      className="py-8 sm:py-10 bg-white border-b border-slate-100 relative"
      aria-label="Institutional Recognition and Partner Affiliations"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0334A0] uppercase">
              Official Accreditations &bull; Strategic Tie-Ups
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#011640] tracking-tight">
            Trusted With Our Recognition
          </h2>
        </div>

        {/* 4 Partners Grid: Clean Logos with Titles and Tags */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-start">
          {PARTNERS.map((p, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center text-center p-4 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none transition-all duration-300 hover:-translate-y-1"
            >
              {/* Signature Diagonal Logo Container */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-tl-[18px] rounded-br-[18px] rounded-tr-none rounded-bl-none bg-white border-2 border-slate-200/90 group-hover:border-[#C59B27] group-hover:bg-[#FAFBFD] flex items-center justify-center p-3.5 transition-all duration-300 shadow-none relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />
                <img
                  src={p.logo}
                  alt={p.alt}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
              </div>

              {/* Partner Name */}
              <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-[15px] mt-4 leading-snug group-hover:text-[#0334A0] transition-colors">
                {p.name}
              </h3>

              {/* Category Subtitle */}
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                {p.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
