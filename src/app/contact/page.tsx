"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Bus,
  Train,
  Plane,
  Send,
} from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";

const contactDeptOptions = [
  "B.Sc Artificial Intelligence",
  "B.Com (Computer Applications)",
  "BBA Aviation Management",
  "B.Sc Computer Science",
  "B.A Tamil",
  "B.A Criminology & Police Administration",
  "B.A English",
  "B.Sc Physical Education",
  "B.Sc Chemistry",
  "B.Sc Home Science (Nutrition & Dietetics)",
  "B.Sc Mathematics",
];

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
    <main className="pt-8 sm:pt-12 pb-20 bg-gradient-to-b from-[#FBF2D4]/20 via-white to-white min-h-screen">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
            <span className="text-[#0334A0] font-bold text-xs sm:text-sm tracking-widest uppercase">
              Campus Connectivity &bull; Admissions Desk
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Connect With Our Admissions Office
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Reach out directly to our student guidance counselors, schedule a
            personal campus tour, or check transit coordinates to our Peraiyur
            campus.
          </p>
        </div>

        {/* Main Grid: Form Left, Info & Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form (Span 7) */}
          <div className="lg:col-span-7 pure-white-card p-6 sm:p-10 border-2 border-[#0334A0]/20 shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0334A0]">
                  Fast Callback Request
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  Send an Admission Query
                </h2>
              </div>
              <span className="text-xs font-semibold text-[#0334A0] bg-[#FBF2D4] px-2.5 py-1 rounded-full border border-[#0334A0]/20">
                Active 2026-27
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-[#0334A0] focus:border-[#0334A0] outline-none transition-all"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    required
                    placeholder="10-digit phone number"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-[#0334A0] focus:border-[#0334A0] outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    placeholder="student@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-[#0334A0] focus:border-[#0334A0] outline-none transition-all"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-dept"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                >
                  Desired Degree Course *
                </label>
                <CustomSelect
                  id="contact-dept"
                  placeholder="-- Select Degree --"
                  required
                  value={formData.dept}
                  onChange={(val) => setFormData({ ...formData, dept: val })}
                  options={contactDeptOptions}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                >
                  Your Query or Questions
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Ask about fee concession, hostel/bus availability, or admission counseling dates..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium focus:ring-2 focus:ring-[#0334A0] focus:border-[#0334A0] outline-none transition-all"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="gold-shimmer-btn w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Submit Query to Admission Officer</span>
              </button>

              {submitted && (
                <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 text-xs font-bold text-center">
                  Enquiry submitted successfully! A college admission counselor
                  will contact you shortly.
                </div>
              )}
            </form>
          </div>

          {/* Right Info & Map (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Campus Contact Box */}
            <div className="pure-white-card p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0334A0] block mb-1">
                Official Campus Desk
              </span>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">
                KR Arts And Science College
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0334A0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">
                      Campus Address:
                    </strong>
                    P. Thambipatti, Peraiyur Taluk, Via T. Kallupatti,
                    <br />
                    Madurai - 625 703, Tamil Nadu, India.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#0334A0] shrink-0" />
                  <div>
                    <strong className="text-slate-900">Direct Helpline:</strong>{" "}
                    <a
                      href="tel:+918072297109"
                      className="text-[#0334A0] font-bold hover:underline"
                    >
                      +91 80722 97109
                    </a>{" "}
                    / 04549-299877
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#0334A0] shrink-0" />
                  <div>
                    <strong className="text-slate-900">Email:</strong>{" "}
                    <a
                      href="mailto:info@krcolleges.in"
                      className="text-[#0334A0] font-bold hover:underline"
                    >
                      info@krcolleges.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <div>
                    <strong className="text-slate-900">
                      Office Working Hours:
                    </strong>{" "}
                    Mon &ndash; Sat (8:30 AM &ndash; 5:00 PM)
                  </div>
                </div>
              </div>
            </div>

            {/* Transit Coordinates Box */}
            <div className="pure-white-card p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0334A0] block mb-1">
                Transit Proximity
              </span>
              <h4 className="font-heading text-lg font-bold text-slate-900 mb-3">
                Transit Coordinates
              </h4>

              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="flex items-center gap-2">
                    <Train className="w-3.5 h-3.5 text-slate-500" />
                    Thirumangalam Railway Station
                  </span>
                  <strong className="text-slate-900">25 km</strong>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="flex items-center gap-2">
                    <Train className="w-3.5 h-3.5 text-slate-500" />
                    Virudhunagar Railway Junction
                  </span>
                  <strong className="text-slate-900">25 km</strong>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="flex items-center gap-2">
                    <Bus className="w-3.5 h-3.5 text-slate-500" />
                    Virudhunagar Central Bus Stand
                  </span>
                  <strong className="text-slate-900">25 km</strong>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="flex items-center gap-2">
                    <Plane className="w-3.5 h-3.5 text-slate-500" />
                    Madurai International Airport (IXM)
                  </span>
                  <strong className="text-slate-900">50 km</strong>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="flex items-center gap-2">
                    <Bus className="w-3.5 h-3.5 text-slate-500" />
                    Madurai Mattuthavani Central Bus Stand
                  </span>
                  <strong className="text-slate-900">60 km</strong>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-64 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              <iframe
                title="KR College Campus Google Map"
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
    </main>
  );
}
