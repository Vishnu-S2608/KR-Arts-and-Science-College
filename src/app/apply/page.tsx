"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Phone,
  Home,
  RefreshCw,
} from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";
import CustomDatePicker from "@/components/ui/CustomDatePicker";

const degreeOptions = [
  {
    value: "B.Sc Artificial Intelligence",
    label: "B.Sc Artificial Intelligence (Frontier Computing)",
  },
  {
    value: "B.Com (Computer Applications)",
    label: "B.Com (Computer Applications) (Business Analytics)",
  },
  {
    value: "BBA Aviation Management",
    label: "BBA Aviation Management (Airport Logistics)",
  },
  {
    value: "B.Sc Computer Science",
    label: "B.Sc Computer Science (Software Engineering)",
  },
  { value: "B.A Tamil", label: "B.A Tamil Literature" },
  {
    value: "B.A Criminology & Police Administration",
    label: "B.A Criminology & Police Administration",
  },
  { value: "B.A English", label: "B.A English Literature" },
  { value: "B.Sc Physical Education", label: "B.Sc Physical Education" },
  { value: "B.Sc Chemistry", label: "B.Sc Chemistry" },
  {
    value: "B.Sc Home Science (Nutrition & Dietetics)",
    label: "B.Sc Home Science (Nutrition & Dietetics)",
  },
  { value: "B.Sc Mathematics", label: "B.Sc Mathematics" },
];

const genderOptions = ["Male", "Female", "Other"];

const hscStreamOptions = [
  "Mathematics, Physics, Chemistry, Biology (Maths-Bio)",
  "Mathematics, Physics, Chemistry, Computer Science",
  "Commerce, Accountancy, Economics, Computer Applications",
  "Commerce, Accountancy, Economics, Business Mathematics",
  "Pure Science (Physics, Chemistry, Botany, Zoology)",
  "Arts / Humanities / Vocational",
];

const mediumOptions = ["English Medium", "Tamil Medium"];

interface ApplicationRecord {
  phone: string;
  degree: string;
  id: string;
  date: string;
  name: string;
}

const initialFormData = {
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
  stream: "",
  medium: "English Medium",
  marks: "",
  bus: false,
};

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const courseParam = searchParams.get("course");

  const [formData, setFormData] = useState(() => {
    let initialDegree = "";
    if (courseParam) {
      const match = degreeOptions.find(
        (d) =>
          d.value.toLowerCase() === courseParam.toLowerCase() ||
          d.label.toLowerCase().includes(courseParam.toLowerCase()),
      );
      if (match) initialDegree = match.value;
    }
    return { ...initialFormData, degree: initialDegree };
  });

  // Adjust course selection during render if URL query course changes
  const [prevCourseParam, setPrevCourseParam] = useState(courseParam);
  if (courseParam !== prevCourseParam) {
    setPrevCourseParam(courseParam);
    if (courseParam) {
      const match = degreeOptions.find(
        (d) =>
          d.value.toLowerCase() === courseParam.toLowerCase() ||
          d.label.toLowerCase().includes(courseParam.toLowerCase()),
      );
      if (match) {
        setFormData((prev) => ({ ...prev, degree: match.value }));
      }
    }
  }

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionState, setSubmissionState] = useState<
    "idle" | "success" | "duplicate"
  >("idle");
  const [submittedData, setSubmittedData] = useState<
    typeof initialFormData | null
  >(null);
  const [applicationId, setApplicationId] = useState<string>("");
  const [submissionTime, setSubmissionTime] = useState<string>("");
  const [duplicatePreviousDate, setDuplicatePreviousDate] =
    useState<string>("");

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.degree.trim()) {
      errs.degree = "Please select your preferred degree programme";
    }
    if (!formData.name.trim()) {
      errs.name = "Please enter student's full name (as in +2 Marksheet)";
    }
    if (!formData.dob.trim()) {
      errs.dob = "Please select date of birth";
    }
    if (!formData.parent.trim()) {
      errs.parent = "Please enter parent / guardian name";
    }
    if (!formData.gender.trim()) {
      errs.gender = "Please select gender";
    }
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter applicant's email address";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address (e.g. name@example.com)";
    }
    if (!formData.address.trim()) {
      errs.address = "Please enter residential town / village";
    }
    if (!formData.school.trim()) {
      errs.school = "Please enter name of higher secondary school";
    }
    if (!formData.stream.trim()) {
      errs.stream = "Please select your +2 major stream / subject group";
    }
    if (!formData.marks.trim()) {
      errs.marks = "Please enter +2 total marks or percentage";
    }

    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      // Scroll to the first missing field
      const firstErrorKey = Object.keys(errs)[0];
      const el = document.getElementById(`apply-${firstErrorKey}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Strict validation of mandatory columns
    if (!validate()) {
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    const selectedDegree = formData.degree.trim();

    // Check localStorage history for duplicate application for the SAME course
    let history: ApplicationRecord[] = [];
    try {
      const saved = localStorage.getItem("kr_admissions_applications");
      if (saved) {
        history = JSON.parse(saved);
      }
    } catch {
      // ignore JSON parse error
    }

    // Identify if applicant with this phone has ALREADY applied for this EXACT course
    const existingEntry = history.find(
      (item) =>
        item.phone === cleanPhone &&
        item.degree.toLowerCase() === selectedDegree.toLowerCase(),
    );

    if (existingEntry) {
      setSubmittedData({ ...formData });
      setDuplicatePreviousDate(existingEntry.date || "recently");
      setSubmissionState("duplicate");
      window.scrollTo({ top: 120, behavior: "smooth" });
      return;
    }

    // Generate formal application ID & timestamp
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const newId = `KR-2026-${randomSuffix}`;
    const dateStr = new Date().toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // Save to history
    const newRecord: ApplicationRecord = {
      phone: cleanPhone,
      degree: selectedDegree,
      id: newId,
      date: dateStr,
      name: formData.name.trim(),
    };
    history.push(newRecord);
    try {
      localStorage.setItem(
        "kr_admissions_applications",
        JSON.stringify(history),
      );
    } catch {
      // ignore
    }

    setApplicationId(newId);
    setSubmissionTime(dateStr);
    setSubmittedData({ ...formData });
    setSubmissionState("success");
    setErrors({});

    // Empty form inputs completely for fresh state
    setFormData(initialFormData);

    // Celebration Confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#0334A0", "#1A4FBF", "#FBF2D4", "#022878", "#C59B27"],
      });
    } catch {
      // ignore
    }

    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleResetAndApplyAnother = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmissionState("idle");
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleFieldChange = (
    field: keyof typeof initialFormData,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header with Signature Golden Lines */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
          <span className="text-[#C59B27] font-bold text-xs sm:text-sm tracking-widest uppercase">
            Academic Session 2026–2027 &bull; Direct Admission Desk
          </span>
          <span className="w-8 sm:w-12 h-[2px] bg-[#C59B27] rounded-full" />
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          Undergraduate Admission Application
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Take the definitive first step toward shaping your collegiate journey.
          Complete this provisional application to reserve priority counseling
          for our 11 approved undergraduate degree courses.
        </p>
      </div>

      {/* Main Container Card with Signature Diagonal Boxing & Gold/Blue Hover */}
      <div className="relative bg-white rounded-tl-[32px] rounded-br-[32px] rounded-tr-none rounded-bl-none p-6 sm:p-12 border-2 border-slate-200/90 hover:border-[#C59B27] transition-all duration-300 group overflow-hidden shadow-none">
        {/* Subtle Top Accent Shimmer on Hover */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C59B27]/0 to-transparent group-hover:via-[#C59B27] transition-all duration-500 pointer-events-none" />

        {/* ======================================================== */}
        {/* VIEW 1: SUCCESS CONFIRMATION SCREEN (Replaces form)     */}
        {/* ======================================================== */}
        {submissionState === "success" && submittedData && (
          <div className="animate-in fade-in zoom-in-95 duration-300">
            {/* Green Header Box with Signature Diagonal Boxing */}
            <div className="p-6 sm:p-10 bg-emerald-50/80 border-2 border-emerald-500 rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none text-center mb-8">
              <span className="font-tamil font-bold text-emerald-800 text-xl sm:text-2xl block mb-2">
                உள்ளுவதெல்லாம் உயர்வுள்ளல்
              </span>
              <div className="inline-flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                  Provisional Application Submitted Successfully!
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed mb-5">
                Thank you, <strong>{submittedData.name}</strong>. Our admissions
                counselor will review your application for{" "}
                <strong className="text-emerald-900">
                  {submittedData.degree}
                </strong>{" "}
                and call you directly at{" "}
                <strong className="text-emerald-900">
                  {submittedData.phone}
                </strong>{" "}
                for seat allotment.
              </p>
              <div className="inline-block px-5 py-2.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none bg-white border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-bold shadow-none">
                Direct Helpline: +91 80722 97109 / 04549-299877
              </div>
            </div>

            {/* Application Summary Card with Signature Diagonal Boxing */}
            <div className="bg-slate-50 border border-slate-200 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none p-6 sm:p-8 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Application Reference No.
                  </span>
                  <span className="font-mono text-lg font-bold text-[#021B4E]">
                    {applicationId}
                  </span>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Submitted On
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    {submissionTime}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 text-sm">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">
                    Selected Degree
                  </span>
                  <span className="font-bold text-slate-900">
                    {submittedData.degree}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">
                    Student Name
                  </span>
                  <span className="font-semibold text-slate-900">
                    {submittedData.name}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">
                    Date of Birth
                  </span>
                  <span className="font-semibold text-slate-900">
                    {submittedData.dob || "—"}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">
                    Parent / Guardian
                  </span>
                  <span className="font-semibold text-slate-900">
                    {submittedData.parent}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">
                    Gender
                  </span>
                  <span className="font-semibold text-slate-900">
                    {submittedData.gender}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">
                    Mobile Phone
                  </span>
                  <span className="font-semibold text-slate-900">
                    {submittedData.phone}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">
                    WhatsApp
                  </span>
                  <span className="font-semibold text-slate-900">
                    {submittedData.whatsapp || submittedData.phone}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">
                    Email Address
                  </span>
                  <span className="font-semibold text-slate-900">
                    {submittedData.email || "—"}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">
                    Location / Town
                  </span>
                  <span className="font-semibold text-slate-900">
                    {submittedData.address}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">
                    Higher Secondary School
                  </span>
                  <span className="font-semibold text-slate-900">
                    {submittedData.school}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">
                    +2 Marks / %
                  </span>
                  <span className="font-semibold text-slate-900">
                    {submittedData.marks}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">
                    College Bus Transport
                  </span>
                  <span
                    className={`font-bold ${submittedData.bus ? "text-emerald-700" : "text-slate-600"}`}
                  >
                    {submittedData.bus ? "Required (Opted)" : "Not Required"}
                  </span>
                </div>
              </div>
            </div>

            {/* Back & Follow-up Options with Signature Button Styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={handleResetAndApplyAnother}
                className="relative group overflow-hidden px-6 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] hover:bg-[#FBF2D4] hover:text-[#021B4E] font-bold text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-none"
              >
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B83D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span>Apply for Another Course</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] group-hover:w-full transition-all duration-300" />
              </button>

              <Link
                href="/"
                className="px-6 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none bg-white text-slate-700 border border-slate-300 hover:bg-[#FBF2D4] hover:text-[#021B4E] hover:border-[#C59B27] font-bold text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-none"
              >
                <Home className="w-4 h-4 text-slate-500" />
                <span>Return to College Home</span>
              </Link>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW 2: DUPLICATE WARNING SCREEN (Replaces form)        */}
        {/* ======================================================== */}
        {submissionState === "duplicate" && submittedData && (
          <div className="animate-in fade-in zoom-in-95 duration-300">
            <div className="p-6 sm:p-10 bg-amber-50/90 border-2 border-amber-500 rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none text-center mb-8">
              <div className="w-14 h-14 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                Application Already Registered for This Course
              </h2>
              <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed mb-4">
                We have already received an active application for{" "}
                <strong className="text-amber-900">
                  {submittedData.degree}
                </strong>{" "}
                associated with mobile number{" "}
                <strong className="text-amber-900">
                  {submittedData.phone}
                </strong>{" "}
                (submitted {duplicatePreviousDate}).
              </p>
              <div className="bg-white/80 border border-amber-200 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none p-4 max-w-lg mx-auto text-xs sm:text-sm text-slate-600 mb-6">
                <p className="font-semibold text-slate-800 mb-1">
                  Submitting duplicate applications for the exact same course is
                  not required.
                </p>
                <p>
                  However, if you wish to apply for{" "}
                  <strong>another degree programme</strong> (such as B.Sc AI,
                  BBA Aviation, B.Com, or B.Sc Computer Science), you are
                  welcome to submit an application!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleResetAndApplyAnother}
                  className="relative group overflow-hidden px-6 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] hover:bg-[#FBF2D4] hover:text-[#021B4E] font-bold text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-none"
                >
                  <RefreshCw className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  <span>Choose Another Course to Apply</span>
                </button>

                <a
                  href="tel:+918072297109"
                  className="px-6 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none bg-white text-slate-800 border border-slate-300 hover:bg-[#FBF2D4] hover:text-[#021B4E] hover:border-[#C59B27] font-bold text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-none"
                >
                  <Phone className="w-4 h-4 text-[#021B4E]" />
                  <span>Call Admissions Helpdesk (+91 80722 97109)</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW 3: APPLICATION FORM (Shown in idle state)           */}
        {/* ======================================================== */}
        {submissionState === "idle" && (
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            {/* Validation Banner if errors exist */}
            {Object.keys(errors).length > 0 && (
              <div className="p-4 bg-red-50 border-2 border-red-400 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none flex items-start gap-3 animate-in fade-in duration-200">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-red-800">
                    Mandatory Columns Required
                  </h4>
                  <p className="text-xs sm:text-sm text-red-700 mt-0.5">
                    Please fill in all required fields marked with an asterisk
                    (*) highlighted in red below before submitting.
                  </p>
                </div>
              </div>
            )}

            {/* Step 1: Degree Selection */}
            <div>
              <div className="flex items-center gap-2.5 pb-2 mb-4 border-b border-slate-200">
                <span className="w-7 h-7 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                  Select Preferred Degree Programme *
                </h2>
              </div>

              <div id="apply-degree">
                <CustomSelect
                  id="apply-degree-select"
                  placeholder="-- Choose Your Desired Course --"
                  required
                  hasError={!!errors.degree}
                  value={formData.degree}
                  onChange={(val) => handleFieldChange("degree", val)}
                  options={degreeOptions}
                />
                {errors.degree && (
                  <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.degree}
                  </p>
                )}
              </div>
            </div>

            {/* Step 2: Applicant Personal Particulars */}
            <div>
              <div className="flex items-center gap-2.5 pb-2 mb-4 border-b border-slate-200">
                <span className="w-7 h-7 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                  Applicant Personal Particulars
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div id="apply-name">
                  <label
                    htmlFor="apply-name-input"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    id="apply-name-input"
                    required
                    placeholder="Enter candidate name (as in +2 Marksheet)"
                    className={`w-full px-4 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none border bg-white text-slate-800 font-medium focus:outline-none transition-all shadow-none ${
                      errors.name
                        ? "border-red-500 ring-2 ring-red-200 bg-red-50/20"
                        : "border-slate-300 focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20"
                    }`}
                    value={formData.name}
                    onChange={(e) => handleFieldChange("name", e.target.value)}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                <div id="apply-dob">
                  <label
                    htmlFor="apply-dob-picker"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    Date of Birth *
                  </label>
                  <CustomDatePicker
                    id="apply-dob-picker"
                    required
                    hasError={!!errors.dob}
                    placeholder="DD / MM / YYYY"
                    value={formData.dob}
                    onChange={(val) => handleFieldChange("dob", val)}
                  />
                  {errors.dob && (
                    <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.dob}
                    </p>
                  )}
                </div>

                <div id="apply-parent">
                  <label
                    htmlFor="apply-parent-input"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    id="apply-parent-input"
                    required
                    placeholder="Father / Mother / Guardian full name"
                    className={`w-full px-4 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none border bg-white text-slate-800 font-medium focus:outline-none transition-all shadow-none ${
                      errors.parent
                        ? "border-red-500 ring-2 ring-red-200 bg-red-50/20"
                        : "border-slate-300 focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20"
                    }`}
                    value={formData.parent}
                    onChange={(e) =>
                      handleFieldChange("parent", e.target.value)
                    }
                  />
                  {errors.parent && (
                    <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.parent}
                    </p>
                  )}
                </div>

                <div id="apply-gender">
                  <label
                    htmlFor="apply-gender-select"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    Gender *
                  </label>
                  <CustomSelect
                    id="apply-gender-select"
                    placeholder="-- Select Gender --"
                    required
                    hasError={!!errors.gender}
                    value={formData.gender}
                    onChange={(val) => handleFieldChange("gender", val)}
                    options={genderOptions}
                  />
                  {errors.gender && (
                    <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.gender}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Step 3: Contact & Communication */}
            <div>
              <div className="flex items-center gap-2.5 pb-2 mb-4 border-b border-slate-200">
                <span className="w-7 h-7 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                  Contact &amp; Location Details
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div id="apply-phone">
                  <label
                    htmlFor="apply-phone-input"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="apply-phone-input"
                    required
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none border bg-white text-slate-800 font-medium focus:outline-none transition-all shadow-none ${
                      errors.phone
                        ? "border-red-500 ring-2 ring-red-200 bg-red-50/20"
                        : "border-slate-300 focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20"
                    }`}
                    value={formData.phone}
                    onChange={(e) => handleFieldChange("phone", e.target.value)}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="apply-whatsapp-input"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    WhatsApp Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="apply-whatsapp-input"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none border border-slate-300 bg-white text-slate-800 font-medium focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20 outline-none transition-all shadow-none"
                    value={formData.whatsapp}
                    onChange={(e) =>
                      handleFieldChange("whatsapp", e.target.value)
                    }
                  />
                </div>

                <div id="apply-email">
                  <label
                    htmlFor="apply-email-input"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="apply-email-input"
                    required
                    placeholder="student@example.com"
                    className={`w-full px-4 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none border bg-white text-slate-800 font-medium focus:outline-none transition-all shadow-none ${
                      errors.email
                        ? "border-red-500 ring-2 ring-red-200 bg-red-50/20"
                        : "border-slate-300 focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20"
                    }`}
                    value={formData.email}
                    onChange={(e) => handleFieldChange("email", e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                <div id="apply-address">
                  <label
                    htmlFor="apply-address-input"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    Residential Town / Village *
                  </label>
                  <input
                    type="text"
                    id="apply-address-input"
                    required
                    placeholder="e.g. Peraiyur / T. Kallupatti / Thirumangalam"
                    className={`w-full px-4 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none border bg-white text-slate-800 font-medium focus:outline-none transition-all shadow-none ${
                      errors.address
                        ? "border-red-500 ring-2 ring-red-200 bg-red-50/20"
                        : "border-slate-300 focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20"
                    }`}
                    value={formData.address}
                    onChange={(e) =>
                      handleFieldChange("address", e.target.value)
                    }
                  />
                  {errors.address && (
                    <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.address}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Step 4: Academic Background */}
            <div>
              <div className="flex items-center gap-2.5 pb-2 mb-4 border-b border-slate-200">
                <span className="w-7 h-7 rounded-tl-[8px] rounded-br-[8px] rounded-tr-none rounded-bl-none bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                  Higher Secondary (+2) Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div id="apply-school" className="md:col-span-2">
                  <label
                    htmlFor="apply-school-input"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    Name of Higher Secondary School *
                  </label>
                  <input
                    type="text"
                    id="apply-school-input"
                    required
                    placeholder="School name and location"
                    className={`w-full px-4 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none border bg-white text-slate-800 font-medium focus:outline-none transition-all shadow-none ${
                      errors.school
                        ? "border-red-500 ring-2 ring-red-200 bg-red-50/20"
                        : "border-slate-300 focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20"
                    }`}
                    value={formData.school}
                    onChange={(e) =>
                      handleFieldChange("school", e.target.value)
                    }
                  />
                  {errors.school && (
                    <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.school}
                    </p>
                  )}
                </div>

                <div id="apply-stream">
                  <label
                    htmlFor="apply-stream-select"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    +2 Major Stream / Subject Group *
                  </label>
                  <CustomSelect
                    id="apply-stream-select"
                    placeholder="-- Select +2 Major Stream --"
                    required
                    hasError={!!errors.stream}
                    value={formData.stream}
                    onChange={(val) => handleFieldChange("stream", val)}
                    options={hscStreamOptions}
                  />
                  {errors.stream && (
                    <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.stream}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="apply-medium-select"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    Medium of Study in +2
                  </label>
                  <CustomSelect
                    id="apply-medium-select"
                    placeholder="-- Select Medium --"
                    value={formData.medium}
                    onChange={(val) => handleFieldChange("medium", val)}
                    options={mediumOptions}
                  />
                </div>

                <div id="apply-marks" className="md:col-span-2">
                  <label
                    htmlFor="apply-marks-input"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5"
                  >
                    +2 Total Marks / Percentage *
                  </label>
                  <input
                    type="text"
                    id="apply-marks-input"
                    required
                    placeholder="e.g. 520 / 600 or 86%"
                    className={`w-full px-4 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none border bg-white text-slate-800 font-medium focus:outline-none transition-all shadow-none ${
                      errors.marks
                        ? "border-red-500 ring-2 ring-red-200 bg-red-50/20"
                        : "border-slate-300 focus:border-[#C59B27] focus:ring-2 focus:ring-[#C59B27]/20"
                    }`}
                    value={formData.marks}
                    onChange={(e) => handleFieldChange("marks", e.target.value)}
                  />
                  {errors.marks && (
                    <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.marks}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* College Bus Route Checkbox with Signature Diagonal Boxing */}
            <div className="p-4 bg-[#FBF2D4]/40 rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none border-2 border-[#C59B27]/40 shadow-none">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  id="apply-bus"
                  checked={formData.bus}
                  onChange={(e) => handleFieldChange("bus", e.target.checked)}
                  className="w-5 h-5 mt-0.5 accent-[#021B4E] rounded cursor-pointer"
                />
                <div className="text-xs sm:text-sm text-slate-800 font-medium">
                  <span className="font-bold text-slate-900 block">
                    Require College Bus Transportation Service
                  </span>
                  Connecting routes across Peraiyur, T. Kallupatti,
                  Thirumangalam, Virudhunagar, and surrounding rural villages.
                </div>
              </label>
            </div>

            {/* Submit Action: Signature Diagonal Boxing & Gold/Blue Hover Effect */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="relative group overflow-hidden px-8 py-3 rounded-tl-[14px] rounded-br-[14px] rounded-tr-none rounded-bl-none bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] hover:bg-[#FBF2D4] hover:text-[#021B4E] hover:border-[#0334A0]/30 text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer shadow-none"
              >
                {/* Top Gold Shimmer Line on Hover */}
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5B83D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span>Submit Provisional Application</span>
                <ArrowRight className="w-4 h-4 text-[#C59B27] group-hover:text-[#021B4E] transition-all duration-300 group-hover:translate-x-1" />

                {/* Bottom Expanding Gradient Line on Hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] group-hover:w-full transition-all duration-300" />
              </button>
            </div>
          </form>
        )}

        {/* Bottom Glowing Border Line Expanding on Hover */}
        <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2.5px] bg-gradient-to-r from-[#0334A0] via-[#C59B27] to-[#F5B83D] transition-all duration-500 pointer-events-none" />
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <main className="pt-8 sm:pt-12 pb-20 bg-gradient-to-b from-[#FBF2D4]/20 via-white to-white min-h-screen">
      <Suspense
        fallback={
          <div className="max-w-4xl mx-auto px-4 py-16 text-center text-slate-500">
            Loading Application Desk...
          </div>
        }
      >
        <ApplyFormContent />
      </Suspense>
    </main>
  );
}
