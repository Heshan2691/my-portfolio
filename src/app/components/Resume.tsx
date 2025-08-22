"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content (Left Side) */}
          <div className="text-left order-2 lg:order-1">
            {/* Heading */}
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold text-left mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Resume / CV
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              Download my latest resume to learn more about my professional
              journey, skills, and experiences in detail. I&apos;ve highlighted
              my technical expertise, project accomplishments, and career
              milestones.
            </motion.p>

            {/* Features */}
            <motion.ul
              className="space-y-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                "Professional Experience",
                "Technical Skills",
                "Education",
                "Certifications",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="/cv/resume.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition duration-300 transform hover:-translate-y-1"
              >
                <FaDownload className="text-xl" />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* 3D Model (Right Side, hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 hidden md:block"
            style={{ overflow: "visible" }}
          >
            <div className="w-full h-[600px] overflow-visible">
              <iframe
                src="https://my.spline.design/interactivekeyboardbyabhinand-rW8lkcpJAyu3XvtKYzwG2g8h/"
                frameBorder="0"
                width="110%"
                height="110%"
                title="Interactive Keyboard 3D Model"
                style={{
                  minHeight: "600px",
                  transform: "scale(1.1)",
                  marginLeft: "-5%",
                  overflow: "visible",
                  position: "relative",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
