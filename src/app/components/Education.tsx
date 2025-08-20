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
      "Focused on full-stack development, cloud computing, and AI/ML applications.",
  },
  {
    degree: "Professional Certification in UI/UX Design",
    institution: "Google UX Design Professional Certificate",
    year: "2022 - 2023",
    description:
      "Comprehensive program covering design thinking process, wireframing, prototyping, and user research.",
  },
  {
    degree: "GCE Advanced Level",
    institution: "Ranabima Royal College",
    year: "2017 - 2019",
    description:
      "Specialized in Mathematics and Science stream. Participated in coding competitions and tech clubs.",
  },
  {
    degree: "GCE Ordinary Level",
    institution: "Ranabima Royal College",
    year: "2011 - 2016",
    description:
      "Completed secondary education with distinction in ICT and Mathematics.",
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
      className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6" ref={containerRef}>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400"
        >
          Education
        </motion.h2>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative border-l-4 border-purple-500/50 ml-6 space-y-12"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative ml-6"
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute -left-[42px] top-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                <FaGraduationCap className="text-white text-lg" />
              </motion.div>

              {/* Content card */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
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
              </motion.div>
            </motion.div>
          ))}

          {/* End dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-4 -left-[10px] w-6 h-6 rounded-full bg-pink-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
