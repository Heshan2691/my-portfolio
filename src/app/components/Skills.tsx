"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { FaDatabase, FaJsSquare, FaFire, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiDotnet,
  SiC,
  SiFlutter,
  SiPostman,
  SiExpress,
} from "react-icons/si";

const skills = [
  {
    name: "Express.js",
    icon: (
      <SiExpress
        className="text-gray-800 dark:text-gray-100"
        style={{ fontSize: "2.5rem" }}
      />
    ),
  },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  {
    name: "JavaScript",
    icon: (
      <FaJsSquare className="text-yellow-400" style={{ fontSize: "2.5rem" }} />
    ),
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "SQL Server", icon: <FaDatabase className="text-blue-800" /> },
  {
    name: "Firebase",
    icon: <FaFire className="text-yellow-500" style={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Flutter",
    icon: (
      <SiFlutter className="text-blue-400" style={{ fontSize: "2.5rem" }} />
    ),
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-pink-500" style={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Postman",
    icon: (
      <SiPostman className="text-orange-500" style={{ fontSize: "2.5rem" }} />
    ),
  },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "C", icon: <SiC className="text-gray-700" /> },
  { name: "C# / .NET", icon: <SiDotnet className="text-purple-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-black"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Tech Stack
        </motion.h2>

        {/* Modern Grid of Skills */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center p-3 bg-white/60 dark:bg-gray-800/60 shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer border border-white/20 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              whileHover={{ scale: 1.08, rotate: 2 }}
            >
              <div className="text-3xl mb-2 drop-shadow-lg">{skill.icon}</div>
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
