"use client";

import React, { useState, useEffect } from "react";
import { GraduationCap, ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CollegeLogo from "../Common/CollegeLogo";

interface NavbarProps {
  onOpenApplyModal: () => void;
}

export default function Navbar({ onOpenApplyModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>("Home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Departments", href: "#departments" },
    { name: "Campus Life", href: "#campus-life" },
    { name: "Facilities", href: "#facilities" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Full-Width End-to-End Left to Right Header Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#071A2F]/95 backdrop-blur-2xl border-[#4B9FE1]/30 shadow-xl py-2.5"
            : "bg-white/95 backdrop-blur-2xl border-[#1557A6]/15 shadow-sm py-3.5"
        }`}
      >
        <div className="w-full px-3 sm:px-6 md:px-8 flex items-center justify-between">
          
          {/* 1. Left Corner: Official Emblem Logo + College Name (Shifted Left) */}
          <a
            href="#home"
            onClick={() => setActiveNav("Home")}
            className="flex items-center space-x-2.5 sm:space-x-3 group transition-transform duration-300 transform hover:scale-[1.02] shrink-0"
            title="K.R. College of Arts & Science"
          >
            <div className="relative flex items-center justify-center rounded-full p-0.5 bg-gradient-to-r from-[#1557A6] via-[#4B9FE1] to-[#D9A441] shadow-md shrink-0">
              <CollegeLogo className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white shadow-md bg-white rounded-full p-0.5" />
            </div>

            {/* College Name Text next to logo */}
            <div className="flex flex-col text-left">
              <span
                className={`font-black text-xs sm:text-base md:text-lg tracking-tight leading-snug transition-colors whitespace-nowrap ${
                  isScrolled ? "text-white" : "text-[#071A2F]"
                }`}
              >
                K.R. College of Arts & Science
              </span>
              <span className="text-[9px] sm:text-xs font-extrabold text-[#D9A441] uppercase tracking-wider whitespace-nowrap">
                Kovilpatti • Estd. 1997
              </span>
            </div>
          </a>

          {/* 2. Center: Clean Navigation Links (Single Line, No Wrap, No AI Icons) */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 px-2">
            {navItems.map((item) => {
              const isActive = activeNav === item.name;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveNav(item.name)}
                  className={`relative px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-extrabold uppercase tracking-wider transition-colors duration-200 rounded-xl whitespace-nowrap ${
                    isActive
                      ? isScrolled
                        ? "text-[#D9A441]"
                        : "text-[#1557A6]"
                      : isScrolled
                      ? "text-slate-200 hover:text-white"
                      : "text-[#26384A] hover:text-[#1557A6]"
                  }`}
                >
                  {/* Clean Active Underline Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="fullWidthNavActiveStraight"
                      className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${
                        isScrolled ? "bg-[#D9A441]" : "bg-[#1557A6]"
                      }`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="whitespace-nowrap">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* 3. Right Corner: Action Button ("Apply Now") */}
          <div className="flex items-center space-x-2.5 shrink-0">
            <button
              onClick={onOpenApplyModal}
              className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#1557A6] via-[#4B9FE1] to-[#1557A6] text-white text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-lg shadow-[#1557A6]/30 hover:shadow-[#4B9FE1]/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/30 whitespace-nowrap"
            >
              <GraduationCap className="w-4 h-4 text-[#D9A441]" />
              <span className="hidden sm:inline">Apply Now</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl border transition-colors ${
                isScrolled
                  ? "bg-white/10 text-white border-white/20"
                  : "bg-[#1557A6] text-white border-[#1557A6]"
              }`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#071A2F]/98 backdrop-blur-2xl text-white p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div className="flex items-center space-x-3">
                <CollegeLogo className="w-10 h-10 border border-[#D9A441]" />
                <div>
                  <span className="font-extrabold text-base tracking-tight block text-white">K.R. College of Arts & Science</span>
                  <span className="text-[10px] text-[#D9A441] font-bold uppercase tracking-wider">Kovilpatti • Estd. 1997</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-2 py-6">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => {
                    setActiveNav(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-3.5 rounded-xl border transition-all text-sm font-extrabold uppercase tracking-wider ${
                    activeNav === item.name
                      ? "bg-[#1557A6] border-[#4B9FE1] text-white shadow-lg"
                      : "bg-white/5 border-white/10 hover:bg-white/10 text-slate-200"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Drawer Footer Actions */}
            <div className="space-y-3 border-t border-white/15 pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal();
                }}
                className="w-full flex items-center justify-center space-x-2 py-4 rounded-full bg-gradient-to-r from-[#1557A6] via-[#4B9FE1] to-[#1557A6] text-white text-sm font-extrabold uppercase tracking-wider shadow-xl border border-white/30"
              >
                <GraduationCap className="w-5 h-5 text-[#D9A441]" />
                <span>Apply for Admission 2026-27</span>
              </button>

              <div className="text-center text-xs text-slate-300 font-medium pt-1">
                <span>Helpline: 04632 - 220478 • NAAC Accredited</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
