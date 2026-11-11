"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface CustomDatePickerProps {
  id?: string;
  value: string; // YYYY-MM-DD
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
  hasError?: boolean;
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const YEAR_OPTIONS = Array.from({ length: 35 }, (_, i) => 1995 + i);

export default function CustomDatePicker({
  id,
  value,
  onChange,
  required = false,
  placeholder = "DD / MM / YYYY",
  className = "",
  hasError = false,
}: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const parseInitial = (val: string) => {
    if (val) {
      const parts = val.split("-");
      if (parts.length === 3) {
        const y = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10) - 1;
        if (!isNaN(y) && !isNaN(m) && m >= 0 && m < 12) {
          return { year: y, month: m };
        }
      }
    }
    return { year: 2007, month: 5 };
  };

  const initial = parseInitial(value);
  const [viewYear, setViewYear] = useState<number>(initial.year);
  const [viewMonth, setViewMonth] = useState<number>(initial.month);

  // Synchronize view state during render when external value prop changes
  const [prevValue, setPrevValue] = useState(value);
  if (value !== prevValue) {
    setPrevValue(value);
    if (value) {
      const parts = value.split("-");
      if (parts.length === 3) {
        const y = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10) - 1;
        if (!isNaN(y) && !isNaN(m)) {
          setViewYear(y);
          setViewMonth(m);
        }
      }
    }
  }

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const formatDisplay = (val: string) => {
    if (!val) return "";
    const parts = val.split("-");
    if (parts.length === 3) {
      const y = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10) - 1;
      const d = parseInt(parts[2], 10);
      if (!isNaN(y) && !isNaN(m) && !isNaN(d) && m >= 0 && m < 12) {
        return `${String(d).padStart(2, "0")} ${MONTH_NAMES[m].slice(0, 3)} ${y}`;
      }
    }
    return val;
  };

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((prev) => prev - 1);
    } else {
      setViewMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((prev) => prev + 1);
    } else {
      setViewMonth((prev) => prev + 1);
    }
  };

  const handleSelectDay = (day: number) => {
    const yStr = String(viewYear);
    const mStr = String(viewMonth + 1).padStart(2, "0");
    const dStr = String(day).padStart(2, "0");
    onChange(`${yStr}-${mStr}-${dStr}`);
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full text-left select-none ${className}`}
    >
      {/* Hidden input */}
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        required={required}
        readOnly
        className="sr-only"
        tabIndex={-1}
      />

      {/* Trigger Button with Signature Diagonal Boxing */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full px-4 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none border bg-white text-slate-800 font-medium flex items-center justify-between transition-all duration-200 outline-none shadow-none ${
          hasError
            ? "border-red-500 ring-2 ring-red-200 bg-red-50/20"
            : isOpen
              ? "border-[#021B4E] ring-2 ring-[#C59B27]/30"
              : "border-slate-300 hover:border-[#C59B27]"
        }`}
      >
        <span
          className={value ? "text-slate-900 font-semibold" : "text-slate-400"}
        >
          {value ? formatDisplay(value) : placeholder}
        </span>
        <CalendarIcon className="w-4 h-4 text-[#021B4E] flex-shrink-0 ml-2" />
      </button>

      {/* Custom Calendar Popover */}
      {isOpen && (
        <div className="absolute z-50 left-0 sm:left-auto right-0 sm:right-auto mt-2 p-4 bg-white border-2 border-[#C59B27]/60 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none w-full sm:w-[320px] animate-in fade-in zoom-in-95 duration-150 shadow-none">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1.5 rounded-lg hover:bg-[#FBF2D4] hover:text-[#021B4E] transition-colors cursor-pointer"
              aria-label="Previous Month"
            >
              <ChevronLeft className="w-4 h-4 text-[#021B4E]" />
            </button>

            <div className="flex items-center gap-1.5">
              <select
                value={viewMonth}
                onChange={(e) => setViewMonth(parseInt(e.target.value, 10))}
                className="bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 rounded-lg px-2 py-1 outline-none focus:border-[#C59B27]"
              >
                {MONTH_NAMES.map((name, idx) => (
                  <option key={name} value={idx}>
                    {name}
                  </option>
                ))}
              </select>

              <select
                value={viewYear}
                onChange={(e) => setViewYear(parseInt(e.target.value, 10))}
                className="bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 rounded-lg px-2 py-1 outline-none focus:border-[#C59B27]"
              >
                {YEAR_OPTIONS.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={handleNextMonth}
              className="p-1.5 rounded-lg hover:bg-[#FBF2D4] hover:text-[#021B4E] transition-colors cursor-pointer"
              aria-label="Next Month"
            >
              <ChevronRight className="w-4 h-4 text-[#021B4E]" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mb-1">
            {DAYS_OF_WEEK.map((d) => (
              <span
                key={d}
                className="text-[11px] font-bold text-slate-400 py-1"
              >
                {d}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {Array.from({ length: firstDayOfWeek }).map((_, i) => (
              <div key={`empty-${i}`} className="w-8 h-8" />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const yStr = String(viewYear);
              const mStr = String(viewMonth + 1).padStart(2, "0");
              const dStr = String(day).padStart(2, "0");
              const dateString = `${yStr}-${mStr}-${dStr}`;
              const isSelected = value === dateString;

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleSelectDay(day)}
                  className={`w-8 h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#021B4E] text-[#F5B83D] font-bold border border-[#C59B27]"
                      : "text-slate-700 hover:bg-[#FBF2D4] hover:text-[#021B4E]"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-xs font-semibold">
            <button
              type="button"
              onClick={() => {
                onChange("");
                setIsOpen(false);
              }}
              className="text-slate-500 hover:text-red-600 transition-colors cursor-pointer"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-3 py-1 bg-[#021B4E] text-[#F5B83D] border border-[#C59B27] rounded-lg text-xs font-bold hover:bg-[#FBF2D4] hover:text-[#021B4E] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
