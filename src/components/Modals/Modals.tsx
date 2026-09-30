"use client";

import React, { useState } from "react";
import { X, CheckCircle, GraduationCap, Clock, Award, BookOpen, User, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DepartmentItem } from "../Departments/Departments";
import { EventItem } from "../Events/Events";
import CollegeLogo from "../Common/CollegeLogo";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourseName?: string;
}

export function ApplyModal({ isOpen, onClose, selectedCourseName = "" }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: selectedCourseName || "B.Sc. Computer Science",
    percentage: "",
    city: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#1557A6]/20 relative"
      >
        {/* Header */}
        <div className="bg-[#0B2D52] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3">
            <CollegeLogo className="w-11 h-11 border border-white/30" />
            <div>
              <h3 className="text-xl font-bold">Online Admission Application</h3>
              <p className="text-xs text-[#4B9FE1]">Academic Session 2026-2027</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#0B2D52]">Application Submitted!</h4>
              <p className="text-sm text-[#26384A]">
                Thank you, <span className="font-bold text-[#1557A6]">{formData.name}</span>. Our Admissions Officer will contact you shortly at <span className="font-bold">{formData.phone}</span>.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#1557A6] text-white font-bold text-sm hover:bg-[#0B2D52] transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0B2D52] mb-1">Full Student Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter candidate full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1557A6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B2D52] mb-1">Mobile Phone *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1557A6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B2D52] mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1557A6]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B2D52] mb-1">Course Preference *</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1557A6] bg-white"
                >
                  <option value="B.Sc. Computer Science">B.Sc. Computer Science</option>
                  <option value="B.Sc. Artificial Intelligence & Data Science">B.Sc. Artificial Intelligence & Data Science</option>
                  <option value="B.Com. General & Professional Accounting">B.Com. General & Professional Accounting</option>
                  <option value="BBA (Bachelor of Business Administration)">BBA (Business Administration)</option>
                  <option value="B.Sc. Biotechnology">B.Sc. Biotechnology</option>
                  <option value="B.A. English Literature">B.A. English Literature</option>
                  <option value="B.Sc. Mathematics">B.Sc. Mathematics</option>
                  <option value="M.Sc. Computer Science">M.Sc. Computer Science</option>
                  <option value="M.Com. Finance & Accounting">M.Com. Finance & Accounting</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B2D52] mb-1">+2 / HSC Marks %</label>
                  <input
                    type="text"
                    placeholder="e.g. 85%"
                    value={formData.percentage}
                    onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1557A6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B2D52] mb-1">City / Town</label>
                  <input
                    type="text"
                    placeholder="e.g. Kovilpatti"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1557A6]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#1557A6] text-white font-bold text-sm hover:bg-[#0B2D52] shadow-lg transition"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* Department Detail Modal */
interface DeptModalProps {
  dept: DepartmentItem | null;
  onClose: () => void;
  onOpenApply: () => void;
}

export function DepartmentModal({ dept, onClose, onOpenApply }: DeptModalProps) {
  if (!dept) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#1557A6]/20 relative"
      >
        <div className="bg-[#0B2D52] text-white p-6 relative">
          <button onClick={onClose} className="absolute top-5 right-5 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white">
            <X className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold text-[#D9A441] uppercase tracking-wider">Department Overview</span>
          <h3 className="text-2xl font-bold text-white">{dept.name}</h3>
          <p className="text-xs text-[#4B9FE1]">Head of Department: {dept.hod}</p>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-[#26384A] leading-relaxed">{dept.description}</p>
          
          <div className="p-4 rounded-2xl bg-[#EAF3FB] border border-[#1557A6]/20 space-y-1">
            <p className="text-xs font-bold text-[#1557A6] uppercase">Laboratory Infrastructure</p>
            <p className="text-xs text-[#0B2D52]">{dept.labs}</p>
          </div>

          <div>
            <p className="text-xs font-bold text-[#0B2D52] uppercase mb-2">Career Pathways & Roles</p>
            <div className="flex flex-wrap gap-2">
              {dept.careers.map((c, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-[#1557A6]/10 text-[#1557A6] text-xs font-semibold">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 flex justify-end space-x-3">
            <button onClick={onClose} className="px-5 py-2 rounded-full border text-xs font-bold text-slate-600">
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenApply();
              }}
              className="px-5 py-2 rounded-full bg-[#1557A6] text-white text-xs font-bold shadow hover:bg-[#0B2D52]"
            >
              Apply for this Department
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* Event Detail Modal */
interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export function EventModal({ event, onClose }: EventModalProps) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#1557A6]/20 relative"
      >
        <div className="bg-[#0B2D52] text-white p-6 relative">
          <button onClick={onClose} className="absolute top-5 right-5 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white">
            <X className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold text-[#D9A441] uppercase tracking-wider">{event.category}</span>
          <h3 className="text-xl font-bold text-white">{event.title}</h3>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-4 text-xs font-semibold text-[#1557A6] bg-[#EAF3FB] p-3 rounded-xl">
            <span className="flex items-center space-x-1"><Clock className="w-4 h-4 text-[#4B9FE1]" /><span>{event.time}</span></span>
            <span className="flex items-center space-x-1"><MapPin className="w-4 h-4 text-[#1557A6]" /><span>{event.venue}</span></span>
          </div>

          <p className="text-sm text-[#26384A] leading-relaxed">{event.description}</p>
          {event.speaker && <p className="text-xs font-bold text-[#0B2D52]">{event.speaker}</p>}

          <div className="pt-2 flex justify-end">
            <button onClick={onClose} className="px-6 py-2.5 rounded-full bg-[#1557A6] text-white text-xs font-bold">
              Close Details
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
