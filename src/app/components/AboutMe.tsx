"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { Montserrat, Playfair_Display } from "next/font/google";

// Initialize fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const AboutMe = () => {
  // Removed unused gradientOpacity state
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Animate elements when they come into view
  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  // Removed unused gradientOpacity effect

  // Terminal lines
  const terminalLines = React.useMemo(
    () => [
      "I am an IT undergraduate at the University of Moratuwa, specializing in Software Engineering and Artificial Intelligence.",
      "I enjoy combining creativity with technology to design meaningful user experiences and develop efficient, scalable systems.",
      "My interests also extend to Data Science and Cloud Computing, and I am eager to enhance my expertise through hands-on projects while contributing to innovative and impactful solutions.",
    ],
    []
  );

  // Typing animation state
  const [typedLines, setTypedLines] = useState<string[]>(["", "", ""]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Only start typing the first time AboutMe comes into view
  const [hasStarted, setHasStarted] = useState(false);
  useEffect(() => {
    if (isInView && !hasStarted) {
      setTypedLines(["", "", ""]);
      setCurrentLine(0);
      setCurrentChar(0);
      setIsDone(false);
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  useEffect(() => {
    if (!hasStarted || isDone) return;
    if (currentLine < terminalLines.length) {
      if (currentChar < terminalLines[currentLine].length) {
        const timeout = setTimeout(() => {
          setTypedLines((prev) => {
            const updated = [...prev];
            updated[currentLine] = terminalLines[currentLine].slice(
              0,
              currentChar + 1
            );
            return updated;
          });
          setCurrentChar((c) => c + 1);
        }, 18);
        return () => clearTimeout(timeout);
      } else {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }
    } else {
      setIsDone(true);
    }
  }, [currentLine, currentChar, isDone, terminalLines, hasStarted]);

  return (
    <section
      id="about"
      ref={ref}
      className={`${montserrat.variable} ${playfair.variable} relative min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100`}
    >
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl"></div>

      {/* Container */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12"
      >
        {/* Profile Image */}
        <motion.div
          variants={item}
          className="flex-shrink-0 relative group"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
          <Image
            src="/profile.jpg" // 👉 replace with your image
            alt="Profile"
            width={360}
            height={480}
            style={{ width: "auto", height: "auto" }}
            className="rounded-2xl shadow-2xl object-cover relative z-10 group-hover:shadow-indigo-500/50 transition-all duration-500"
          />
        </motion.div>

        {/* About Text */}
        <motion.div variants={item} className="flex-1 text-center md:text-left">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-left mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="mb-8"
            style={{ transition: "all 0.4s ease-out" }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Mac Terminal Styled Box */}
            <div
              style={{
                background: "#23232b",
                borderRadius: "1rem",
                boxShadow: "0 8px 32px rgba(0,0,0,0.28)",
                padding: "2.5rem 1.5rem 2rem 1.5rem",
                fontFamily:
                  "'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace",
                color: "#22c55e",
                fontSize: "1.1rem",
                lineHeight: "1.7",
                textAlign: "left",
                position: "relative",
                border: "1px solid #2d2d37",
                maxWidth: "100%",
                overflowX: "auto",
                margin: "0 auto",
              }}
            >
              {/* Mac Terminal Top Bar */}
              <div
                style={{
                  position: "absolute",
                  top: "0.75rem",
                  left: "1.25rem",
                  display: "flex",
                  gap: "0.5rem",
                  height: "16px",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#ff5f56",
                    border: "1px solid #e0443e",
                  }}
                />
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#ffbd2e",
                    border: "1px solid #dea123",
                  }}
                />
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#27c93f",
                    border: "1px solid #1aaf29",
                  }}
                />
              </div>
              {/* Terminal Content */}
              <div style={{ marginTop: "1.5rem" }}>
                {typedLines.map((line, idx) => (
                  <div key={idx} style={{ display: "flex" }}>
                    <span
                      style={{
                        color: "#16a34a",
                        fontWeight: "bold",
                        marginRight: "0.5rem",
                      }}
                    >
                      &gt;{" "}
                    </span>
                    <span>
                      {line}
                      {currentLine === idx && !isDone ? (
                        <span style={{ color: "#16a34a" }}>|</span>
                      ) : null}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={container}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[
              { label: "Years Coding", value: "2+" },
              { label: "Projects", value: "10+" },
              { label: "Tech Stacks", value: "5+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="p-6 rounded-2xl bg-white/30 dark:bg-gray-800/30 shadow-lg backdrop-blur-lg border border-white/20"
              >
                <h3
                  className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.value}
                </h3>
                <p
                  className="text-sm mt-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
