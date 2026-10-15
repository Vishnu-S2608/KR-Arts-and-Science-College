"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dept: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      dept: "",
      message: "",
    });
  };

  return (
    <main className="pt-[calc(var(--header-height)+2rem)] min-h-[80vh]">
      <section className="section-wrapper bg-blue-tint">
        <div className="container">
          <div className="section-label">Campus Connectivity</div>
          <h1 className="mb-4">Contact &amp; Location</h1>
          <p className="max-w-[650px] text-[1.1rem] text-slate-600 mb-12">
            Connect directly with our admissions office, counselor guidance desk, or plan your
            transit visit to our serene Peraiyur campus.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-14 contact-main-grid">
            {/* Left: Contact Form with Animated Floating Labels */}
            <div className="bg-brand-card border border-slate-300 rounded-[24px] p-6 sm:p-10 shadow-[0_14px_36px_rgba(11,27,63,0.08)]">
              <div className="section-label">Send an Enquiry</div>
              <h2 className="text-2xl font-bold mb-6 text-slate-900">
                Counsellor Callback Request
              </h2>

              <form id="contact-form" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="form-group">
                  <input
                    type="text"
                    id="contact-name"
                    className="form-input"
                    placeholder=" "
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <label htmlFor="contact-name" className="form-label">
                    Full Name *
                  </label>
                </div>

                {/* Mobile Number */}
                <div className="form-group">
                  <input
                    type="tel"
                    id="contact-phone"
                    className="form-input"
                    placeholder=" "
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <label htmlFor="contact-phone" className="form-label">
                    Mobile Number *
                  </label>
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <input
                    type="email"
                    id="contact-email"
                    className="form-input"
                    placeholder=" "
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <label htmlFor="contact-email" className="form-label">
                    Email Address *
                  </label>
                </div>

                {/* Interested Degree */}
                <div className="form-group">
                  <select
                    id="contact-dept"
                    className="form-select"
                    required
                    value={formData.dept}
                    onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
                  >
                    <option value="" disabled></option>
                    <option value="B.Sc Artificial Intelligence">B.Sc Artificial Intelligence</option>
                    <option value="B.Com (Computer Applications)">B.Com (Computer Applications)</option>
                    <option value="BBA Aviation Management">BBA Aviation Management</option>
                    <option value="B.Sc Computer Science">B.Sc Computer Science</option>
                    <option value="B.A Tamil">B.A Tamil</option>
                    <option value="B.A Criminology & Police Administration">
                      B.A Criminology &amp; Police Administration
                    </option>
                    <option value="B.A English">B.A English</option>
                    <option value="B.Sc Physical Education">B.Sc Physical Education</option>
                    <option value="B.Sc Chemistry">B.Sc Chemistry</option>
                    <option value="B.Sc Home Science (Nutrition & Dietetics)">
                      B.Sc Home Science (Nutrition &amp; Dietetics)
                    </option>
                    <option value="B.Sc Mathematics">B.Sc Mathematics</option>
                  </select>
                  <label htmlFor="contact-dept" className="form-label">
                    Programme of Interest *
                  </label>
                </div>

                {/* Message */}
                <div className="form-group">
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    placeholder=" "
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                  <label htmlFor="contact-message" className="form-label">
                    Your Query / Questions
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary magnetic-btn w-full"
                >
                  Submit Enquiry
                  <svg className="arrow-icon" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>

                {submitted && (
                  <div
                    id="contact-success"
                    className="block mt-5 p-4 bg-blue-100 border border-blue-300 rounded-xl text-blue-900 text-sm font-semibold text-center"
                  >
                    Enquiry submitted successfully. A college admissions counsellor will contact you shortly.
                  </div>
                )}
              </form>
            </div>

            {/* Right: Verified Facts & Connectivity Table */}
            <div className="flex flex-col gap-8">
              {/* Campus Details Box */}
              <div className="bg-brand-card border border-slate-300 rounded-[24px] p-6 sm:p-8 shadow-[0_14px_36px_rgba(11,27,63,0.08)]">
                <div className="section-label">Verified Campus Contact</div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  KR Arts And Science College
                </h3>
                <p className="text-[0.9375rem] leading-relaxed mb-5 text-slate-600">
                  <strong className="text-slate-900">Campus Address:</strong>
                  <br />
                  P. Thambipatti, Peraiyur Tk, Via T. Kallupatti,
                  <br />
                  Madurai - 625 703, Tamil Nadu, India.
                </p>
                <div className="flex flex-col gap-2 text-[0.9375rem] text-slate-700">
                  <div>
                    <strong className="text-slate-900">Admissions Desk:</strong>{" "}
                    <a href="tel:+918072297109" className="text-blue-600 font-semibold hover:underline">
                      +91 80722 97109
                    </a>
                  </div>
                  <div>
                    <strong className="text-slate-900">Office Phone:</strong> 04549-299877
                  </div>
                  <div>
                    <strong className="text-slate-900">Official Email:</strong>{" "}
                    <a
                      href="mailto:info@krcolleges.in"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      info@krcolleges.in
                    </a>
                  </div>
                  <div>
                    <strong className="text-slate-900">Affiliation:</strong> Madurai Kamaraj University
                  </div>
                </div>
              </div>

              {/* Distance & Transit Info */}
              <div className="bg-brand-card border border-slate-300 rounded-[24px] p-6 sm:p-8 shadow-[0_14px_36px_rgba(11,27,63,0.08)]">
                <div className="section-label">Transit &amp; Proximity</div>
                <h3 className="text-lg font-bold mb-4 text-slate-900">Transit Coordinates</h3>
                <div className="flex flex-col gap-3 text-sm text-slate-600">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Thirumangalam Railway Station</span>
                    <strong className="text-slate-900">25 km</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Virudhunagar Railway Junction</span>
                    <strong className="text-slate-900">25 km</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Virudhunagar Bus Stand</span>
                    <strong className="text-slate-900">25 km</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Madurai Airport (IXM)</span>
                    <strong className="text-slate-900">50 km</strong>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span>Madurai Central Bus Stand</span>
                    <strong className="text-slate-900">60 km</strong>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="h-[250px] rounded-[24px] overflow-hidden border border-slate-300 shadow-md">
                <iframe
                  title="KR College Campus Map"
                  src="https://maps.google.com/maps?q=KR%20Arts%20and%20Science%20College%20Peraiyur%20Madurai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
