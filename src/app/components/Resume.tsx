"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Resume / CV
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Download my latest resume to learn more about my professional journey,
          skills, and experiences in detail.
        </motion.p>

        {/* Download Button */}
        <motion.a
          href="/cv/resume.pdf"
          download
          className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FaDownload className="text-xl" />
          Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default Resume;
