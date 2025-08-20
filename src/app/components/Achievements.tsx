"use client";

import { motion } from "framer-motion";
import { FaAward, FaMedal, FaTrophy } from "react-icons/fa";

const achievements = [
  {
    title: "Winner - Hackathon 2024",
    organization: "Rootcode Tech Triathlon",
    year: "2024",
    icon: <FaTrophy className="text-yellow-400 drop-shadow-lg" size={32} />,
    description:
      "Secured 1st place among 100+ teams by developing an innovative AI-powered tourism platform.",
  },
  {
    title: "Microsoft Learn Challenge: Build Edition",
    organization: "Microsoft",
    year: "2024",
    icon: <FaMedal className="text-blue-400 drop-shadow-lg" size={32} />,
    description:
      "Completed the global challenge successfully and earned a badge for demonstrating cloud skills.",
  },
  {
    title: "Dean’s List Award",
    organization: "University of Colombo",
    year: "2023",
    icon: <FaAward className="text-green-400 drop-shadow-lg" size={32} />,
    description:
      "Awarded for maintaining outstanding academic performance in Software Engineering.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Achievements & Awards 🏆
        </motion.h2>

        {/* Achievement Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative group p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.07 }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {achievement.icon}
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {achievement.title}
              </h3>

              {/* Organization + Year */}
              <p className="text-purple-300 font-medium">
                {achievement.organization}
              </p>
              <p className="text-sm text-gray-400 mb-4">{achievement.year}</p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {achievement.description}
              </p>

              {/* Glow effect border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400/60 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
