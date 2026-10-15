"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

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
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }

    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <main className="pt-[calc(var(--header-height)+2rem)] min-h-[80vh]">
      <section className="section-wrapper bg-blue-tint">
        <div className="container max-w-[900px]">
          <div className="section-label flex justify-center text-center">
            Academic Year 2026-2027
          </div>
          <h1 className="text-center mb-4">Undergraduate Admission Form</h1>
          <p className="text-center text-[1.1rem] text-slate-600 mb-12">
            Take the first step toward shaping your collegiate trajectory. Complete this provisional application 
            to reserve priority counseling for our 11 approved degree courses.
          </p>

          <div className="bg-brand-card border border-slate-300 rounded-[24px] p-6 sm:p-10 md:p-14 shadow-[0_14px_36px_rgba(11,27,63,0.08)]">
            <form id="apply-form" onSubmit={handleSubmit}>
              <h2 className="text-xl font-bold mb-6 text-slate-900 border-b border-slate-300 pb-2">
                1. Degree Selection
              </h2>

              <div className="form-group">
                <select
                  id="apply-degree"
                  className="form-select"
                  required
                  value={formData.degree}
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                >
                  <option value="" disabled></option>
                  <option value="B.Sc Artificial Intelligence">B.Sc Artificial Intelligence</option>
                  <option value="B.Com (Computer Applications)">B.Com (Computer Applications)</option>
                  <option value="BBA Aviation Management">BBA Aviation Management</option>
                  <option value="B.Sc Computer Science">B.Sc Computer Science</option>
                  <option value="B.A Tamil">B.A Tamil</option>
                  <option value="B.A Criminology & Police Administration">B.A Criminology &amp; Police Administration</option>
                  <option value="B.A English">B.A English</option>
                  <option value="B.Sc Physical Education">B.Sc Physical Education</option>
                  <option value="B.Sc Chemistry">B.Sc Chemistry</option>
                  <option value="B.Sc Home Science (Nutrition & Dietetics)">B.Sc Home Science (Nutrition &amp; Dietetics)</option>
                  <option value="B.Sc Mathematics">B.Sc Mathematics</option>
                </select>
                <label htmlFor="apply-degree" className="form-label">
                  Select Preferred Degree Programme *
                </label>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-6 text-slate-900 border-b border-slate-300 pb-2">
                2. Applicant Personal Particulars
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-group">
                  <input
                    type="text"
                    id="apply-name"
                    className="form-input"
                    placeholder=" "
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <label htmlFor="apply-name" className="form-label">
                    Student Full Name (as in HSC marksheet) *
                  </label>
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    id="apply-dob"
                    className="form-input"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  />
                  <label htmlFor="apply-dob" className="form-label">
                    Date of Birth *
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-group">
                  <input
                    type="text"
                    id="apply-parent"
                    className="form-input"
                    placeholder=" "
                    required
                    value={formData.parent}
                    onChange={(e) => setFormData({ ...formData, parent: e.target.value })}
                  />
                  <label htmlFor="apply-parent" className="form-label">
                    Parent / Guardian Name *
                  </label>
                </div>

                <div className="form-group">
                  <select
                    id="apply-gender"
                    className="form-select"
                    required
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <option value="" disabled></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <label htmlFor="apply-gender" className="form-label">
                    Gender *
                  </label>
                </div>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-6 text-slate-900 border-b border-slate-300 pb-2">
                3. Contact &amp; Connectivity
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-group">
                  <input
                    type="tel"
                    id="apply-phone"
                    className="form-input"
                    placeholder=" "
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <label htmlFor="apply-phone" className="form-label">
                    Primary Mobile Number *
                  </label>
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    id="apply-whatsapp"
                    className="form-input"
                    placeholder=" "
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                  <label htmlFor="apply-whatsapp" className="form-label">
                    WhatsApp Number
                  </label>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="apply-email"
                  className="form-input"
                  placeholder=" "
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label htmlFor="apply-email" className="form-label">
                  Email Address *
                </label>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="apply-address"
                  className="form-input"
                  placeholder=" "
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
                <label htmlFor="apply-address" className="form-label">
                  Residential Address (Village / Town / District) *
                </label>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-6 text-slate-900 border-b border-slate-300 pb-2">
                4. Educational Records
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-group">
                  <input
                    type="text"
                    id="apply-school"
                    className="form-input"
                    placeholder=" "
                    required
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  />
                  <label htmlFor="apply-school" className="form-label">
                    Higher Secondary (+2) School Name *
                  </label>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="apply-marks"
                    className="form-input"
                    placeholder=" "
                    required
                    value={formData.marks}
                    onChange={(e) => setFormData({ ...formData, marks: e.target.value })}
                  />
                  <label htmlFor="apply-marks" className="form-label">
                    +2 Marks / Percentage *
                  </label>
                </div>
              </div>

              {/* College Transport Checkbox */}
              <div className="my-6 p-5 bg-blue-50/50 border border-blue-200 rounded-xl">
                <label className="flex items-center gap-3 text-sm font-semibold text-slate-900 cursor-pointer">
                  <input
                    type="checkbox"
                    id="apply-bus"
                    checked={formData.bus}
                    onChange={(e) => setFormData({ ...formData, bus: e.target.checked })}
                    className="w-[18px] h-[18px] accent-blue-600"
                  />
                  Require College Bus Transportation (Serving Peraiyur, T. Kallupatti, Thirumangalam &amp; Virudhunagar routes)
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary magnetic-btn w-full p-4 text-base mt-4"
              >
                Submit Provisional Application
                <svg className="arrow-icon" viewBox="0 0 24 24" width="18" height="18">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              {/* Success Confirmation Notice */}
              {submitted && (
                <div
                  id="apply-success-box"
                  className="mt-7 p-6 bg-blue-50 border-2 border-blue-600 rounded-xl text-center"
                >
                  <div className="tamil-motto text-[1.1rem] mb-2">
                    உள்ளுவதெல்லாம் உயர்வுள்ளல்
                  </div>
                  <h3 className="text-slate-900 text-xl font-bold mb-2">
                    Provisional Application Submitted
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Thank you, <strong>{formData.name}</strong>, for applying to KR Arts And Science College. 
                    Our admission counsellor will review your records and contact you at <strong>{formData.phone}</strong> for verification and seat allotment.
                  </p>
                  <div className="font-bold text-blue-700 text-sm">
                    For urgent enquiries, call directly: +91 80722 97109
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
