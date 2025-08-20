"use client";

import { motion } from "framer-motion";
import { FaAward, FaMedal, FaTrophy } from "react-icons/fa";

const achievements = [
  {
    title: "Winner - Hackathon 2024",
    organization: "Rootcode Tech Triathlon",
    year: "2024",
    icon: <FaTrophy className="text-yellow-500" size={28} />,
    description:
      "Secured 1st place among 100+ teams by developing an innovative AI-powered tourism platform.",
  },
  {
    title: "Microsoft Learn Challenge: Build Edition",
    organization: "Microsoft",
    year: "2024",
    icon: <FaMedal className="text-blue-500" size={28} />,
    description:
      "Completed the global challenge successfully and earned a badge for demonstrating cloud skills.",
  },
  {
    title: "Dean’s List Award",
    organization: "University of Colombo",
    year: "2023",
    icon: <FaAward className="text-green-500" size={28} />,
    description:
      "Awarded for maintaining outstanding academic performance in Software Engineering.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Awards 🏆
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-semibold">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.organization}</p>
              <p className="text-sm text-gray-500 mb-3">{achievement.year}</p>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
