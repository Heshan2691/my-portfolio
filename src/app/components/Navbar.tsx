"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to detect current section and navbar background
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style when scrolled
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section when clicking nav links
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(id); // Set active section immediately on click
    if (id === "hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md opacity-60 blur-md group-hover:opacity-100 transition-all duration-500"></div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-2">
            {sections.map((section) => (
              <motion.li
                key={section.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-4 py-2.5 font-medium transition-all ${
                    activeSection === section.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  style={
                    activeSection === section.id
                      ? {
                          background: "rgba(255,255,255,0.08)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(255,255,255,0.18)",
                          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                          borderRadius: "0.75rem",
                        }
                      : {}
                  }
                >
                  <span className="relative z-10 tracking-wide">
                    {section.label}
                  </span>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-200 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                className="h-0.5 w-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0 }
                }
                className="h-0.5 w-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-3 bg-gray-900/90 backdrop-blur-lg border-t border-white/5">
          <ul className="space-y-1">
            {sections.map((section) => (
              <motion.li key={section.id} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left py-3.5 px-4 rounded-md font-medium tracking-wide ${
                    activeSection === section.id
                      ? "text-white shadow-lg"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                  style={
                    activeSection === section.id
                      ? {
                          background: "rgba(255,255,255,0.10)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255,255,255,0.18)",
                          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                          borderRadius: "0.75rem",
                        }
                      : {}
                  }
                >
                  {section.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  );
}
