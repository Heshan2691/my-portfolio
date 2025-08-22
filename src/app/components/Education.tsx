"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "BSc (Hons) in Information Technology",
    institution: "University of Moratuwa",
    year: "2023 - Present",
    description:
      "Focused on Software Engineering, Full-stack development, Cloud computing, and AI/ML applications.",
  },
  {
    degree: "Diploma in English - Level 3",
    institution: "American College of Higher Education, Sri Lanka",
    year: "2022",
    description: "Obtained a merit level award in level 3",
  },
  {
    degree: "G.C.E Advanced Level Examination",
    institution: "Ranabima Royal College",
    year: "2017 - 2019",
    description:
      "Completed my Advanced Level studies in the Physical Science stream... Subjects - Combined Maths, Physics, Chemistry",
  },
  {
    degree: "G.C.E Ordinary Level Examination",
    institution: "Ranabima Royal College",
    year: "2011 - 2016",
    description: "Completed secondary education with 9 A passes",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        {/* Creative Horizontal Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8"
        >
          {/* Timeline line */}
          <div
            className="absolute md:top-1/2 md:left-0 md:right-0 md:h-2 md:w-full md:bg-gradient-to-r from-purple-500/40 via-pink-400/30 to-blue-400/40 hidden md:block z-0"
            style={{ transform: "translateY(-50%)" }}
          ></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative z-10 flex-shrink-0 w-full md:w-72"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Timeline dot */}
              <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg border-4 border-white/10">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>
              </div>

              {/* Card */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-2xl relative w-full md:w-72 h-80 flex flex-col justify-between">
                {/* Year badge */}
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 mb-3">
                  {edu.year}
                </span>

                <h3 className="text-xl font-bold text-purple-300 mb-2">
                  {edu.degree}
                </h3>

                <p className="text-gray-300 mb-3">
                  <span className="font-medium text-white">
                    {edu.institution}
                  </span>
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {edu.description}
                </p>

                {/* Gradient glow effect */}
                <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-br from-purple-500/10 via-pink-400/10 to-blue-400/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
