"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Sparkles, 
  CheckCircle2, 
  Send, 
  Phone, 
  Bus, 
  GraduationCap, 
  User, 
  Calendar, 
  Mail, 
  MapPin, 
  BookOpen, 
  ArrowRight 
} from "lucide-react";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    degree: "",
    name: "",
    dob: "",
    parent: "",
    gender: "",
    phone: "",
    whatsapp: "",
    email: "",
    address: "",
    school: "",
    marks: "",
    bus: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#0284C7", "#0EA5E9", "#EAB308", "#FACC15", "#38BDF8"]
      });
    } catch {
      // ignore
    }

    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  return (
    <main className="pt-8 sm:pt-12 pb-20 bg-gradient-to-b from-sky-50/40 via-white to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Academic Session 2026-2027 &bull; Direct Admission Desk
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Undergraduate Admission Application
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Take the definitive first step toward shaping your collegiate journey. Complete this provisional application 
            to reserve priority counseling for our 11 approved undergraduate degree courses.
          </p>
        </div>

        {/* Application Card (Pure White with Light Blue Glow & Golden CTA) */}
        <div className="pure-white-card p-6 sm:p-12 border-2 border-sky-100 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Degree Selection */}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-4 border-b border-slate-200">
                <span className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Select Preferred Degree Programme *
                </h2>
              </div>

              <div>
                <select
                  id="apply-degree"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                  required
                  value={formData.degree}
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                >
                  <option value="" disabled>-- Choose Your Desired Course --</option>
                  <option value="B.Sc Artificial Intelligence">B.Sc Artificial Intelligence (Frontier Computing)</option>
                  <option value="B.Com (Computer Applications)">B.Com (Computer Applications) (Business Analytics)</option>
                  <option value="BBA Aviation Management">BBA Aviation Management (Airport Logistics)</option>
                  <option value="B.Sc Computer Science">B.Sc Computer Science (Software Engineering)</option>
                  <option value="B.A Tamil">B.A Tamil Literature</option>
                  <option value="B.A Criminology & Police Administration">B.A Criminology &amp; Police Administration</option>
                  <option value="B.A English">B.A English Literature</option>
                  <option value="B.Sc Physical Education">B.Sc Physical Education</option>
                  <option value="B.Sc Chemistry">B.Sc Chemistry</option>
                  <option value="B.Sc Home Science (Nutrition & Dietetics)">B.Sc Home Science (Nutrition &amp; Dietetics)</option>
                  <option value="B.Sc Mathematics">B.Sc Mathematics</option>
                </select>
              </div>
            </div>

            {/* Step 2: Applicant Personal Particulars */}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-4 border-b border-slate-200">
                <span className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Applicant Personal Particulars
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="apply-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Student Full Name (As in +2 Marksheet) *
                  </label>
                  <input
                    type="text"
                    id="apply-name"
                    required
                    placeholder="e.g. S. Vignesh"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="apply-dob" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="apply-dob"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="apply-parent" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    id="apply-parent"
                    required
                    placeholder="e.g. M. Sundarajan"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                    value={formData.parent}
                    onChange={(e) => setFormData({ ...formData, parent: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="apply-gender" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Gender *
                  </label>
                  <select
                    id="apply-gender"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <option value="" disabled>-- Select Gender --</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Contact & Connectivity */}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-4 border-b border-slate-200">
                <span className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold">3</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Contact &amp; Location
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="apply-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Primary Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="apply-phone"
                    required
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="apply-whatsapp" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="apply-whatsapp"
                    placeholder="WhatsApp mobile number"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="apply-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="apply-email"
                  required
                  placeholder="student@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="apply-address" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Residential Town / Village / District *
                </label>
                <input
                  type="text"
                  id="apply-address"
                  required
                  placeholder="Village/Town, District (e.g. T. Kallupatti, Madurai)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
            </div>

            {/* Step 4: Educational Records */}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-4 border-b border-slate-200">
                <span className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold">4</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Higher Secondary (+2) Records
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="apply-school" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    +2 School Name *
                  </label>
                  <input
                    type="text"
                    id="apply-school"
                    required
                    placeholder="Name of Higher Secondary School"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="apply-marks" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    +2 Total Marks / Percentage *
                  </label>
                  <input
                    type="text"
                    id="apply-marks"
                    required
                    placeholder="e.g. 520 / 600 or 86%"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                    value={formData.marks}
                    onChange={(e) => setFormData({ ...formData, marks: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* College Bus Route Checkbox */}
            <div className="p-4 bg-sky-50/80 rounded-2xl border border-sky-200">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  id="apply-bus"
                  checked={formData.bus}
                  onChange={(e) => setFormData({ ...formData, bus: e.target.checked })}
                  className="w-5 h-5 mt-0.5 accent-sky-600 rounded"
                />
                <div className="text-xs sm:text-sm text-slate-800 font-medium">
                  <span className="font-bold text-slate-900 block">Require College Bus Transportation Service</span>
                  Connecting routes across Peraiyur, T. Kallupatti, Thirumangalam, Virudhunagar, and surrounding rural villages.
                </div>
              </label>
            </div>

            {/* Submit Action */}
            <div>
              <button
                type="submit"
                className="gold-shimmer-btn w-full py-4 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-xl cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Submit Provisional Admission Application</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>
            </div>

            {/* Success Box */}
            {submitted && (
              <div className="p-6 bg-emerald-50 border-2 border-emerald-500 rounded-2xl text-center animate-in zoom-in-95 duration-200">
                <span className="font-tamil font-bold text-emerald-800 text-lg block mb-1">
                  உள்ளுவதெல்லாம் உயர்வுள்ளல்
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  Provisional Application Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto mb-4">
                  Thank you, <strong>{formData.name}</strong>. Our admissions counselor will review your application for <strong>{formData.degree}</strong> and call you directly at <strong>{formData.phone}</strong> for seat allotment.
                </p>
                <div className="inline-block px-4 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-800 text-xs font-bold">
                  Direct Helpline: +91 80722 97109 / 04549-299877
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
