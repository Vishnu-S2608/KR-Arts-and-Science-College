"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { CheckCircle, Send, Sparkles, AlertCircle } from "lucide-react";
import { DEPARTMENTS_DATA } from "@/data/departments";

interface AdmissionFormProps {
  preselectedProgramme?: string;
}

export default function AdmissionForm({ preselectedProgramme }: AdmissionFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    programme: preselectedProgramme || "",
    hscPercentage: "",
    city: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  useEffect(() => {
    if (preselectedProgramme) {
      requestAnimationFrame(() => {
        setFormData((prev) => (prev.programme === preselectedProgramme ? prev : { ...prev, programme: preselectedProgramme }));
      });
    }
  }, [preselectedProgramme]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter applicant's full name";
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile.replace(/\D/g, ""))) {
      errs.mobile = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.programme) {
      errs.programme = "Please select a programme";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate random application ID
    const randomId = "KR-2026-" + Math.floor(100000 + Math.random() * 900000);
    setApplicationId(randomId);
    setIsSubmitted(true);

    // Fire confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      programme: "",
      hscPercentage: "",
      city: "",
      message: "",
    });
  };

  const programmeOptions = Object.values(DEPARTMENTS_DATA).map((d) => d.title);

  return (
    <section className="section-wrapper" id="admissions">
      <div className="container" style={{ maxWidth: "860px" }}>
        <div className="section-header">
          <span className="badge">
            <Sparkles size={13} />
            Academic Admissions 2026-2027
          </span>
          <h2>
            Apply for <span className="gradient-text">Provisional Admission</span>
          </h2>
          <p>
            Secure your seat at KR Arts and Science College. Fill out the application below and our admissions counselors will contact you within 24 hours.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[24px] border border-slate-700/60 bg-gradient-to-b from-slate-900/70 to-[#07090e]/95 p-7 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-600 before:via-indigo-500 before:to-sky-400">
          {isSubmitted ? (
            <div className="text-center py-12 px-6 flex flex-col items-center gap-4">
              <div className="w-[72px] h-[72px] rounded-full bg-emerald-500/15 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                <CheckCircle size={40} />
              </div>
              <h3 style={{ fontSize: "1.8rem" }}>Application Submitted Successfully!</h3>
              <p style={{ color: "var(--text-secondary)", maxWidth: "520px" }}>
                Thank you, <strong>{formData.fullName}</strong>. Your provisional admission inquiry for{" "}
                <span style={{ color: "#a5b4fc" }}>{formData.programme}</span> has been received.
              </p>
              <div
                style={{
                  background: "rgba(99, 102, 241, 0.12)",
                  border: "1px dashed rgba(99, 102, 241, 0.4)",
                  padding: "0.85rem 1.75rem",
                  borderRadius: "var(--radius-md)",
                  marginTop: "0.5rem",
                }}
              >
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Application Ref ID: </span>
                <strong style={{ fontSize: "1.1rem", color: "#f8fafc", letterSpacing: "0.05em" }}>
                  {applicationId}
                </strong>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                Our counseling desk will reach out to you on <strong>{formData.mobile}</strong> shortly.
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleReset}
                style={{ marginTop: "1rem" }}
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300" htmlFor="fullName">
                    Student Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="w-full bg-[#0a0e1a]/80 border border-slate-700/60 text-slate-100 text-[0.95rem] px-[1.15rem] py-[0.85rem] rounded-2xl outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 focus:bg-[#0f1424]/95 placeholder:text-slate-500"
                    placeholder="e.g. S. Siva Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                  {errors.fullName && <span className="flex items-center gap-1 text-red-400 text-xs mt-1"><AlertCircle size={12} /> {errors.fullName}</span>}
                </div>

                {/* Mobile */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300" htmlFor="mobile">
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    className="w-full bg-[#0a0e1a]/80 border border-slate-700/60 text-slate-100 text-[0.95rem] px-[1.15rem] py-[0.85rem] rounded-2xl outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 focus:bg-[#0f1424]/95 placeholder:text-slate-500"
                    placeholder="e.g. 9442022000"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                  {errors.mobile && <span className="flex items-center gap-1 text-red-400 text-xs mt-1"><AlertCircle size={12} /> {errors.mobile}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full bg-[#0a0e1a]/80 border border-slate-700/60 text-slate-100 text-[0.95rem] px-[1.15rem] py-[0.85rem] rounded-2xl outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 focus:bg-[#0f1424]/95 placeholder:text-slate-500"
                    placeholder="e.g. siva@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span className="flex items-center gap-1 text-red-400 text-xs mt-1"><AlertCircle size={12} /> {errors.email}</span>}
                </div>

                {/* Programme Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300" htmlFor="programme">
                    Preferred Degree Programme *
                  </label>
                  <select
                    id="programme"
                    className="w-full bg-[#0a0e1a]/80 border border-slate-700/60 text-slate-100 text-[0.95rem] px-[1.15rem] py-[0.85rem] rounded-2xl outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 focus:bg-[#0f1424]/95"
                    value={formData.programme}
                    onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                  >
                    <option value="" className="bg-[#0f1422] text-white">Select Programme</option>
                    {programmeOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-[#0f1422] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.programme && <span className="flex items-center gap-1 text-red-400 text-xs mt-1"><AlertCircle size={12} /> {errors.programme}</span>}
                </div>

                {/* 12th Marks */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300" htmlFor="hscPercentage">
                    HSC / 12th Std Percentage (or Appearing)
                  </label>
                  <input
                    id="hscPercentage"
                    type="text"
                    className="w-full bg-[#0a0e1a]/80 border border-slate-700/60 text-slate-100 text-[0.95rem] px-[1.15rem] py-[0.85rem] rounded-2xl outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 focus:bg-[#0f1424]/95 placeholder:text-slate-500"
                    placeholder="e.g. 85% or Appearing 2026"
                    value={formData.hscPercentage}
                    onChange={(e) => setFormData({ ...formData, hscPercentage: e.target.value })}
                  />
                </div>

                {/* City */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300" htmlFor="city">
                    Native City / Town
                  </label>
                  <input
                    id="city"
                    type="text"
                    className="w-full bg-[#0a0e1a]/80 border border-slate-700/60 text-slate-100 text-[0.95rem] px-[1.15rem] py-[0.85rem] rounded-2xl outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 focus:bg-[#0f1424]/95 placeholder:text-slate-500"
                    placeholder="e.g. Peraiyur, Madurai, Usilampatti"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-300" htmlFor="message">
                    Questions or Hostel/Transport Requirements (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full bg-[#0a0e1a]/80 border border-slate-700/60 text-slate-100 text-[0.95rem] px-[1.15rem] py-[0.85rem] rounded-2xl outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 focus:bg-[#0f1424]/95 placeholder:text-slate-500"
                    placeholder="Let us know if you require college bus transit, hostel accommodation, or fee scholarship details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit CTA */}
                <div className="col-span-1 md:col-span-2 mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%", padding: "1rem" }}
                  >
                    <Send size={18} />
                    Submit Application for 2026 Admission
                  </button>
                  <p style={{ textAlign: "center", fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.75rem" }}>
                    🔒 Your personal details are securely held and will only be used for official college admission purposes.
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
