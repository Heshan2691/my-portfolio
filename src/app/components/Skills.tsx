"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiDotnet,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "C# / .NET", icon: <SiDotnet className="text-purple-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Tech Stack
        </motion.h2>

        {/* Grid of Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl hover:shadow-xl transition-shadow cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
