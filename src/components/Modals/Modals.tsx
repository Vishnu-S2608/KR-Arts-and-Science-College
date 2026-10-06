"use client";

import React, { useState } from "react";
import { X, CheckCircle, Clock, User, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-xl border border-[#E3F0F6] relative"
      >
        {/* Header */}
        <div className="bg-[#38A9E8] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3">
            <CollegeLogo className="w-11 h-11 border border-white/40" />
            <div>
              <h3 className="text-xl font-extrabold">Online Admission Application</h3>
              <p className="text-xs text-white/90 font-medium">Academic Session 2026-2027</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EAF7FD] text-[#38A9E8] flex items-center justify-center mx-auto border border-[#E3F0F6]">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#234052]">Application Submitted!</h4>
              <p className="text-sm text-[#607887] font-medium">
                Thank you, <span className="font-bold text-[#38A9E8]">{formData.name}</span>. Our Admissions Officer will contact you shortly at <span className="font-bold text-[#234052]">{formData.phone}</span>.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#38A9E8] text-white font-extrabold text-sm hover:bg-[#234052] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-[#234052] mb-1">Full Student Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-[#607887]" />
                  <input
                    type="text"
                    required
                    placeholder="Enter candidate full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#E3F0F6] text-sm text-[#234052] focus:outline-none focus:border-[#38A9E8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-[#234052] mb-1">Mobile Phone *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-[#607887]" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#E3F0F6] text-sm text-[#234052] focus:outline-none focus:border-[#38A9E8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#234052] mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-[#607887]" />
                    <input
                      type="email"
                      required
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#E3F0F6] text-sm text-[#234052] focus:outline-none focus:border-[#38A9E8]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#234052] mb-1">Course Preference *</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#E3F0F6] text-sm text-[#234052] focus:outline-none focus:border-[#38A9E8] bg-white"
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
                  <label className="block text-xs font-extrabold text-[#234052] mb-1">+2 / HSC Marks %</label>
                  <input
                    type="text"
                    placeholder="e.g. 85%"
                    value={formData.percentage}
                    onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E3F0F6] text-sm text-[#234052] focus:outline-none focus:border-[#38A9E8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#234052] mb-1">City / Town</label>
                  <input
                    type="text"
                    placeholder="e.g. Kovilpatti"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E3F0F6] text-sm text-[#234052] focus:outline-none focus:border-[#38A9E8]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#38A9E8] text-white font-extrabold text-sm hover:bg-[#234052] transition-colors shadow-sm"
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-xl border border-[#E3F0F6] relative"
      >
        <div className="bg-[#38A9E8] text-white p-6 relative">
          <button onClick={onClose} className="absolute top-5 right-5 p-1 rounded-full bg-white/20 hover:bg-white/30 text-white">
            <X className="w-5 h-5" />
          </button>
          <span className="text-xs font-extrabold text-white/80 uppercase tracking-wider">Department Overview</span>
          <h3 className="text-2xl font-extrabold text-white">{dept.name}</h3>
          <p className="text-xs text-white/90 font-medium">Head of Department: {dept.hod}</p>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-[#607887] leading-relaxed font-medium">{dept.description}</p>
          
          <div className="p-4 rounded-xl bg-[#F5FBFE] border border-[#E3F0F6] space-y-1">
            <p className="text-xs font-extrabold text-[#38A9E8] uppercase">Laboratory Infrastructure</p>
            <p className="text-xs text-[#234052] font-medium">{dept.labs}</p>
          </div>

          <div>
            <p className="text-xs font-extrabold text-[#234052] uppercase mb-2">Career Pathways & Roles</p>
            <div className="flex flex-wrap gap-2">
              {dept.careers.map((c, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-[#EAF7FD] text-[#38A9E8] text-xs font-extrabold border border-[#E3F0F6]">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 flex justify-end space-x-3">
            <button onClick={onClose} className="px-5 py-2.5 rounded-full border border-[#E3F0F6] text-xs font-extrabold text-[#607887] hover:bg-[#F5FBFE]">
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenApply();
              }}
              className="px-5 py-2.5 rounded-full bg-[#38A9E8] text-white text-xs font-extrabold shadow-sm hover:bg-[#234052] transition-colors"
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-xl border border-[#E3F0F6] relative"
      >
        <div className="bg-[#38A9E8] text-white p-6 relative">
          <button onClick={onClose} className="absolute top-5 right-5 p-1 rounded-full bg-white/20 hover:bg-white/30 text-white">
            <X className="w-5 h-5" />
          </button>
          <span className="text-xs font-extrabold text-white/80 uppercase tracking-wider">{event.category}</span>
          <h3 className="text-xl font-extrabold text-white">{event.title}</h3>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-4 text-xs font-bold text-[#38A9E8] bg-[#F5FBFE] p-3 rounded-xl border border-[#E3F0F6]">
            <span className="flex items-center space-x-1"><Clock className="w-4 h-4 text-[#38A9E8]" /><span>{event.time}</span></span>
            <span className="flex items-center space-x-1"><MapPin className="w-4 h-4 text-[#38A9E8]" /><span>{event.venue}</span></span>
          </div>

          <p className="text-sm text-[#607887] leading-relaxed font-medium">{event.description}</p>
          {event.speaker && <p className="text-xs font-extrabold text-[#234052]">{event.speaker}</p>}

          <div className="pt-2 flex justify-end">
            <button onClick={onClose} className="px-6 py-2.5 rounded-full bg-[#38A9E8] text-white text-xs font-extrabold hover:bg-[#234052] transition-colors shadow-sm">
              Close Details
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
