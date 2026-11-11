"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  CheckCircle,
  Send,
  AlertCircle,
  RefreshCw,
  ArrowLeft,
} from "lucide-react";
import { DEPARTMENTS_DATA } from "@/data/departments";
import CustomSelect from "@/components/ui/CustomSelect";

interface AdmissionFormProps {
  preselectedProgramme?: string;
}

export default function AdmissionForm({
  preselectedProgramme,
}: AdmissionFormProps) {
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
  const [submissionState, setSubmissionState] = useState<
    "idle" | "success" | "duplicate"
  >("idle");
  const [applicationId, setApplicationId] = useState("");

  useEffect(() => {
    if (preselectedProgramme) {
      requestAnimationFrame(() => {
        setFormData((prev) =>
          prev.programme === preselectedProgramme
            ? prev
            : { ...prev, programme: preselectedProgramme },
        );
      });
    }
  }, [preselectedProgramme]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim())
      errs.fullName = "Please enter applicant's full name";
    if (
      !formData.mobile.trim() ||
      !/^\d{10}$/.test(formData.mobile.replace(/\D/g, ""))
    ) {
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

    const cleanPhone = formData.mobile.replace(/\D/g, "");

    // Check duplicate
    let history: Array<{ phone: string; degree: string }> = [];
    try {
      const saved = localStorage.getItem("kr_admissions_applications");
      if (saved) history = JSON.parse(saved);
    } catch {}

    const isDuplicate = history.some(
      (item) =>
        item.phone === cleanPhone &&
        item.degree.toLowerCase() === formData.programme.toLowerCase(),
    );

    if (isDuplicate) {
      setSubmissionState("duplicate");
      return;
    }

    // Generate ID
    const randomId = "KR-2026-" + Math.floor(100000 + Math.random() * 900000);
    history.push({
      phone: cleanPhone,
      degree: formData.programme,
    });
    try {
      localStorage.setItem(
        "kr_admissions_applications",
        JSON.stringify(history),
      );
    } catch {}

    setApplicationId(randomId);
    setSubmissionState("success");

    // Clear form inputs
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      programme: "",
      hscPercentage: "",
      city: "",
      message: "",
    });

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {}
  };

  const handleReset = () => {
    setSubmissionState("idle");
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      programme: "",
      hscPercentage: "",
      city: "",
      message: "",
    });
    setErrors({});
  };

  const programmeOptions = Object.values(DEPARTMENTS_DATA).map((d) => d.title);

  return (
    <section className="section-wrapper" id="admissions">
      <div className="container" style={{ maxWidth: "860px" }}>
        <div className="section-header text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
            <span className="text-[#C59B27] font-bold text-xs sm:text-sm tracking-widest uppercase">
              Academic Admissions 2026–2027
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
          </div>
          <h2>
            Apply for{" "}
            <span className="gradient-text">Provisional Admission</span>
          </h2>
          <p>
            Secure your seat at KR Arts and Science College. Fill out the
            application below and our admissions counselors will contact you
            within 24 hours.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[24px] border border-slate-700/60 bg-gradient-to-b from-slate-900/70 to-[#07090e]/95 p-7 md:p-12 shadow-none">
          {submissionState === "success" ? (
            <div className="text-center py-10 px-4 flex flex-col items-center gap-4 animate-in fade-in duration-300">
              <span className="font-tamil font-bold text-emerald-400 text-lg block">
                உள்ளுவதெல்லாம் உயர்வுள்ளல்
              </span>
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border-2 border-emerald-500 flex items-center justify-center text-emerald-400">
                <CheckCircle size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Provisional Application Submitted Successfully!
              </h3>
              <p className="text-slate-300 max-w-lg text-sm sm:text-base">
                Your provisional admission inquiry has been safely registered.
                Our admissions counselor will review your application and reach
                out to you shortly.
              </p>
              <div className="bg-blue-900/30 border border-blue-500/40 px-6 py-2 rounded-xl text-slate-200 text-sm">
                <span>Application Ref ID: </span>
                <strong className="text-amber-300 font-mono text-base">
                  {applicationId}
                </strong>
              </div>
              <div className="text-xs text-slate-400">
                Direct Helpline: +91 80722 97109 / 04549-299877
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="relative group overflow-hidden px-6 py-2.5 rounded-xl bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] hover:bg-[#FBF2D4] hover:text-[#021B4E] font-bold text-sm inline-flex items-center gap-2 mt-4 transition-all duration-300 cursor-pointer"
              >
                <ArrowLeft size={16} />
                <span>Apply for Another Course</span>
              </button>
            </div>
          ) : submissionState === "duplicate" ? (
            <div className="text-center py-10 px-4 flex flex-col items-center gap-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-amber-500/15 border-2 border-amber-500 flex items-center justify-center text-amber-400">
                <AlertCircle size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Application Already Registered
              </h3>
              <p className="text-slate-300 max-w-lg text-sm">
                An application for this programme has already been registered
                with this mobile number. You can apply for a different course or
                contact our helpdesk.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="relative group overflow-hidden px-6 py-2.5 rounded-xl bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] hover:bg-[#FBF2D4] hover:text-[#021B4E] font-bold text-sm inline-flex items-center gap-2 mt-4 transition-all duration-300 cursor-pointer"
              >
                <RefreshCw size={16} />
                <span>Choose Another Course</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-semibold text-slate-300"
                    htmlFor="fullName"
                  >
                    Student Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="w-full bg-[#0a0e1a]/80 border border-slate-700/60 text-slate-100 text-[0.95rem] px-[1.15rem] py-[0.85rem] rounded-2xl outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 focus:bg-[#0f1424]/95 placeholder:text-slate-500"
                    placeholder="e.g. S. Siva Kumar"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                  {errors.fullName && (
                    <span className="flex items-center gap-1 text-red-400 text-xs mt-1">
                      <AlertCircle size={12} /> {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Mobile */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-semibold text-slate-300"
                    htmlFor="mobile"
                  >
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    className="w-full bg-[#0a0e1a]/80 border border-slate-700/60 text-slate-100 text-[0.95rem] px-[1.15rem] py-[0.85rem] rounded-2xl outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 focus:bg-[#0f1424]/95 placeholder:text-slate-500"
                    placeholder="e.g. 9442022000"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                  {errors.mobile && (
                    <span className="flex items-center gap-1 text-red-400 text-xs mt-1">
                      <AlertCircle size={12} /> {errors.mobile}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-semibold text-slate-300"
                    htmlFor="email"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full bg-[#0a0e1a]/80 border border-slate-700/60 text-slate-100 text-[0.95rem] px-[1.15rem] py-[0.85rem] rounded-2xl outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 focus:bg-[#0f1424]/95 placeholder:text-slate-500"
                    placeholder="e.g. siva@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-red-400 text-xs mt-1">
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Programme Selection */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-semibold text-slate-300"
                    htmlFor="programme"
                  >
                    Preferred Degree Programme *
                  </label>
                  <CustomSelect
                    id="programme"
                    placeholder="-- Select Programme --"
                    value={formData.programme}
                    onChange={(val) =>
                      setFormData({ ...formData, programme: val })
                    }
                    options={programmeOptions}
                  />
                  {errors.programme && (
                    <span className="flex items-center gap-1 text-red-400 text-xs mt-1">
                      <AlertCircle size={12} /> {errors.programme}
                    </span>
                  )}
                </div>

                {/* 12th Marks */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-semibold text-slate-300"
                    htmlFor="hscPercentage"
                  >
                    HSC / 12th Std Percentage (or Appearing)
                  </label>
                  <input
                    id="hscPercentage"
                    type="text"
                    className="w-full bg-[#0a0e1a]/80 border border-slate-700/60 text-slate-100 text-[0.95rem] px-[1.15rem] py-[0.85rem] rounded-2xl outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 focus:bg-[#0f1424]/95 placeholder:text-slate-500"
                    placeholder="e.g. 85% or Appearing 2026"
                    value={formData.hscPercentage}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hscPercentage: e.target.value,
                      })
                    }
                  />
                </div>

                {/* City */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-semibold text-slate-300"
                    htmlFor="city"
                  >
                    Native City / Town
                  </label>
                  <input
                    id="city"
                    type="text"
                    className="w-full bg-[#0a0e1a]/80 border border-slate-700/60 text-slate-100 text-[0.95rem] px-[1.15rem] py-[0.85rem] rounded-2xl outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 focus:bg-[#0f1424]/95 placeholder:text-slate-500"
                    placeholder="e.g. Peraiyur, Madurai, Usilampatti"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                  <label
                    className="text-sm font-semibold text-slate-300"
                    htmlFor="message"
                  >
                    Questions or Hostel/Transport Requirements (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full bg-[#0a0e1a]/80 border border-slate-700/60 text-slate-100 text-[0.95rem] px-[1.15rem] py-[0.85rem] rounded-2xl outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/35 focus:bg-[#0f1424]/95 placeholder:text-slate-500"
                    placeholder="Let us know if you require college bus transit, hostel accommodation, or fee scholarship details..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                {/* Submit CTA (Compact size with signature gold/navy hover) */}
                <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center mt-4">
                  <button
                    type="submit"
                    className="relative group overflow-hidden px-8 py-3 rounded-xl bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] hover:bg-[#FBF2D4] hover:text-[#021B4E] font-bold text-sm sm:text-base inline-flex items-center gap-2 transition-all duration-300 cursor-pointer"
                    style={{ boxShadow: "none" }}
                  >
                    <Send size={16} />
                    <span>Submit Application for 2026 Admission</span>
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-3">
                    🔒 Your personal details are securely held and will only be
                    used for official college admission purposes.
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
