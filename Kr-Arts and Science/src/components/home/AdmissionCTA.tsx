import Link from "next/link";

export default function AdmissionCTA() {
  return (
    <section className="section-wrapper bg-blue-tint" id="admissions">
      <div className="container">
        <div className="admission-banner">
          <div className="section-label !justify-center">Admissions Open 2026-2027</div>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] mb-4 font-bold">
            Ready to explore your future?
          </h2>
          <p className="max-w-[620px] mx-auto text-[1.05rem] text-slate-600">
            Join KR Arts And Science College. Benefit from dedicated faculty mentorship, 
            modern lab infrastructure, bus routes across Madurai district, and 100% placement track record.
          </p>
          <div className="admission-actions">
            <a href="tel:+918072297109" className="btn btn-outline magnetic-btn">
              Call Counsellor: +91 80722 97109
            </a>
            <a href="https://wa.me/918072297109" target="_blank" rel="noopener noreferrer" className="btn btn-outline magnetic-btn">
              WhatsApp Admissions
            </a>
            <Link href="/apply" className="btn btn-primary magnetic-btn">
              Book a Campus Tour &amp; Apply
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
