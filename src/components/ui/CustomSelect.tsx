"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface OptionItem {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  options: (OptionItem | string)[];
  placeholder?: string;
  required?: boolean;
  className?: string;
  hasError?: boolean;
}

export default function CustomSelect({
  id,
  value,
  onChange,
  options,
  placeholder = "-- Select an option --",
  required = false,
  className = "",
  hasError = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize options to { value, label }
  const normalizedOptions: OptionItem[] = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt,
  );

  const selectedItem = normalizedOptions.find((opt) => opt.value === value);

  // Close on outside click
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

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        const currIndex = normalizedOptions.findIndex((o) => o.value === value);
        const nextIndex = Math.min(currIndex + 1, normalizedOptions.length - 1);
        onChange(normalizedOptions[nextIndex].value);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (isOpen) {
        const currIndex = normalizedOptions.findIndex((o) => o.value === value);
        const prevIndex = Math.max(currIndex - 1, 0);
        onChange(normalizedOptions[prevIndex].value);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full text-left select-none ${className}`}
    >
      {/* Hidden native input */}
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
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full px-4 py-3 rounded-tl-[12px] rounded-br-[12px] rounded-tr-none rounded-bl-none border bg-white text-slate-800 font-medium flex items-center justify-between transition-all duration-200 outline-none shadow-none ${
          hasError
            ? "border-red-500 ring-2 ring-red-200 bg-red-50/20"
            : isOpen
              ? "border-[#021B4E] ring-2 ring-[#C59B27]/30"
              : "border-slate-300 hover:border-[#C59B27]"
        }`}
      >
        <span
          className={`truncate text-sm sm:text-base ${
            selectedItem ? "text-slate-900 font-semibold" : "text-slate-400"
          }`}
        >
          {selectedItem ? selectedItem.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#021B4E] transition-transform duration-200 ml-2 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 left-0 right-0 mt-1.5 py-1.5 bg-white border-2 border-[#C59B27]/60 rounded-tl-[16px] rounded-br-[16px] rounded-tr-none rounded-bl-none max-h-64 overflow-y-auto animate-in fade-in zoom-in-95 duration-150 shadow-none">
          <ul role="listbox">
            {normalizedOptions.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-medium flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-[#021B4E] text-[#F5B83D] font-bold"
                      : "text-slate-700 hover:bg-[#FBF2D4] hover:text-[#021B4E]"
                  }`}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && (
                    <Check className="w-4 h-4 text-[#F5B83D] flex-shrink-0 ml-2" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
