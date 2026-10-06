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
      {/* Clean Light Header Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#E3F0F6] ${
          isScrolled ? "py-2.5 shadow-sm" : "py-4 shadow-none"
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 flex items-center justify-between">
          
          {/* Logo + College Brand */}
          <a
            href="#home"
            onClick={() => setActiveNav("Home")}
            className="flex items-center space-x-3 group transition-transform duration-200 hover:opacity-90 shrink-0 cursor-pointer"
            title="K.R. College of Arts & Science"
          >
            <CollegeLogo className="w-10 h-10 sm:w-11 sm:h-11 border border-[#E3F0F6] shadow-sm bg-white rounded-full p-0.5" />

            <div className="flex flex-col text-left">
              <span className="font-extrabold text-xs sm:text-base md:text-lg tracking-tight leading-snug text-[#234052] whitespace-nowrap group-hover:text-[#38A9E8] transition-colors">
                K.R. College of Arts & Science
              </span>
              <span className="text-[9px] sm:text-xs font-bold text-[#607887] uppercase tracking-wider whitespace-nowrap">
                Kovilpatti • Estd. 1997
              </span>
            </div>
          </a>

          {/* Navigation Links with Left-to-Right Underline Growth */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 px-2">
            {navItems.map((item) => {
              const isActive = activeNav === item.name;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveNav(item.name)}
                  className={`nav-link-underline cursor-pointer relative px-3 py-1.5 text-xs xl:text-sm font-extrabold uppercase tracking-wider transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-[#38A9E8] active"
                      : "text-[#234052] hover:text-[#38A9E8]"
                  }`}
                >
                  <span className="whitespace-nowrap">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTA Button with Radius Morphing on Hover */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={onOpenApplyModal}
              className="glass-button-morph cursor-pointer inline-flex items-center space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#38A9E8] hover:bg-[#234052] text-white text-xs sm:text-sm font-extrabold tracking-wide uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 whitespace-nowrap"
              title="Apply for Admission"
            >
              <GraduationCap className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">Apply Now</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden cursor-pointer p-2 rounded-xl border border-[#E3F0F6] bg-[#F5FBFE] text-[#234052] hover:bg-white hover:text-[#38A9E8] transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Clean Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-white text-[#234052] p-6 flex flex-col justify-between overflow-y-auto lg:hidden border-b border-[#E3F0F6]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#E3F0F6] pb-4">
              <div className="flex items-center space-x-3">
                <CollegeLogo className="w-10 h-10 border border-[#E3F0F6] bg-white rounded-full p-0.5" />
                <div>
                  <span className="font-extrabold text-base tracking-tight block text-[#234052]">K.R. College of Arts & Science</span>
                  <span className="text-[10px] text-[#607887] font-bold uppercase tracking-wider">Kovilpatti • Estd. 1997</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer p-2 rounded-full bg-[#F5FBFE] text-[#234052] hover:bg-[#EAF7FD] border border-[#E3F0F6]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-2 py-6">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  onClick={() => {
                    setActiveNav(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`cursor-pointer p-3.5 rounded-xl border transition-all text-sm font-extrabold uppercase tracking-wider ${
                    activeNav === item.name
                      ? "bg-[#EAF7FD] border-[#38A9E8] text-[#38A9E8]"
                      : "bg-white border-[#E3F0F6] hover:bg-[#F5FBFE] text-[#234052]"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Footer Actions */}
            <div className="space-y-3 border-t border-[#E3F0F6] pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal();
                }}
                className="glass-button-morph cursor-pointer w-full flex items-center justify-center space-x-2 py-4 bg-[#38A9E8] hover:bg-[#234052] text-white text-sm font-extrabold uppercase tracking-wider shadow-sm transition-colors"
              >
                <GraduationCap className="w-5 h-5 text-white" />
                <span>Apply for Admission 2026-27</span>
              </button>

              <div className="text-center text-xs text-[#607887] font-medium pt-1">
                <span>Helpline: 04632 - 220478 • NAAC Accredited</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
