"use client";

import { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import Image from "next/image";
import styles from "./Projects.module.css";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image?: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Need to ensure these images exist in the public folder
// You can download sample project images from Unsplash or other free sources
const projects: Project[] = [
  {
    title: "Travel Planner App",
    description:
      "An AI-powered travel planning web application that helps tourists explore Sri Lanka by suggesting destinations, hotels, and events.",
    tech: ["React", "Next.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Heshan2691/travel-app",
    demo: "https://travel-app-demo.com",
    image: "/projects/project1.png",
    color: "from-sky-400 to-blue-600",
  },
  {
    title: "Job Portal Platform",
    description:
      "A MERN stack job portal with featured jobs and employers, including authentication, admin panel, and search functionality.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/Heshan2691/job-portal",
    demo: "https://job-portal-demo.com",
    image: "/projects/project2.png",
    color: "from-indigo-400 to-violet-600",
  },
  {
    title: "Baby Driver Game",
    description:
      "An IoT-based learning game for children built using Arduino, ESP32, RFID, and React dashboard integration.",
    tech: ["Arduino", "ESP32", "React", "Node.js"],
    github: "https://github.com/Heshan2691/baby-driver",
    demo: "https://baby-driver-demo.com",
    image: "/projects/project1.png",
    color: "from-amber-400 to-orange-600",
  },
  {
    title: "AI Image Generator",
    description:
      "A web application that leverages AI models to generate unique images from text descriptions with various style options.",
    tech: ["Python", "React", "TensorFlow", "Flask"],
    github: "https://github.com/Heshan2691/ai-image-gen",
    demo: "https://ai-image-gen-demo.com",
    image: "/projects/project1.png",
    color: "from-purple-400 to-pink-600",
  },
  {
    title: "Crypto Dashboard",
    description:
      "Real-time cryptocurrency tracking dashboard with personalized alerts, portfolio management, and market analysis tools.",
    tech: ["React", "Node.js", "WebSockets", "D3.js"],
    github: "https://github.com/Heshan2691/crypto-dashboard",
    demo: "https://crypto-dashboard-demo.com",
    image: "/projects/project1.png",
    color: "from-green-400 to-teal-600",
  },
  {
    title: "Smart Home Controller",
    description:
      "IoT application for controlling smart home devices with voice commands, automation rules, and energy usage monitoring.",
    tech: ["React Native", "Firebase", "IoT", "MQTT"],
    github: "https://github.com/Heshan2691/smart-home",
    demo: "https://smart-home-demo.com",
    image: "/projects/project1.png",
    color: "from-yellow-400 to-orange-600",
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Mouse interactive effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from center as a percentage
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);

    // Limit rotation to a small degree for subtle effect
    setRotation({
      x: -percentY * 5, // Inverse Y for natural tilt
      y: percentX * 5,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
      className={`relative rounded-2xl overflow-hidden shadow-2xl group ${styles.cardGlow} ${styles.perspective3d} ${styles.shine}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.3s ease-out",
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Project Image */}
      <div className={`${styles.projectImage} w-full relative`}>
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className={styles.imageOverlay}></div>

            {/* Interactive overlay elements on hover */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt size={16} />
                </motion.a>
              </div>
            </motion.div>

            {/* Technology badge */}
            <div className="absolute top-4 right-4">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg`}
              >
                {project.tech[0]}
              </span>
            </div>
          </>
        ) : (
          <div
            className={`flex items-center justify-center h-full bg-gradient-to-br ${project.color}`}
          >
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        )}
      </div>

      {/* Card background with overlay */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0"></div>

      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-transparent border border-white/10 rounded-2xl z-10"></div>

      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 blur-md z-0`}
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 0.4 }}
      ></motion.div>

      {/* Content container */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Project Title */}
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white font-medium shadow-md transition-transform hover:scale-105 ${styles.tag}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto relative z-10">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-4 py-2 rounded-lg text-white transition-all ${styles.buttonPulse}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGithub /> Code
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 bg-gradient-to-r ${project.color} px-4 py-2 rounded-lg text-white transition-all font-medium ${styles.buttonPulse}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaExternalLinkAlt /> Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  // Filter projects based on selected category
  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "all") return true;
    if (
      selectedCategory === "web" &&
      project.tech.some((t) => ["React", "Next.js", "Web"].includes(t))
    )
      return true;
    if (
      selectedCategory === "mobile" &&
      project.tech.some((t) =>
        ["React Native", "Mobile", "iOS", "Android"].includes(t)
      )
    )
      return true;
    if (
      selectedCategory === "ai" &&
      project.tech.some((t) =>
        ["AI", "TensorFlow", "Machine Learning", "Python"].includes(t)
      )
    )
      return true;
    if (
      selectedCategory === "iot" &&
      project.tech.some((t) => ["IoT", "Arduino", "ESP32", "MQTT"].includes(t))
    )
      return true;
    return false;
  });

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div
          className={`absolute top-0 -left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px] ${styles["animate-blob"]}`}
        ></div>
        <div
          className={`absolute bottom-0 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px] ${styles["animate-blob"]} ${styles["animation-delay-2000"]}`}
        ></div>
        <div
          className={`absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-500 rounded-full filter blur-[100px] ${styles["animate-blob"]} ${styles["animation-delay-4000"]}`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="inline-block mb-3"
          >
            <div className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-2">
              What I&apos;ve Built
            </div>
            <motion.h2
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              Interactive Gallery
            </motion.h2>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto my-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg mt-4"
          >
            Explore my featured projects showcasing my skills in web
            development, UI/UX design, and software engineering
          </motion.p>

          {/* Category filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <button
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All Projects
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === "web"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
              onClick={() => setSelectedCategory("web")}
            >
              Web Development
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === "mobile"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
              onClick={() => setSelectedCategory("mobile")}
            >
              Mobile Apps
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === "iot"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
              onClick={() => setSelectedCategory("iot")}
            >
              IoT Projects
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === "ai"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
              onClick={() => setSelectedCategory("ai")}
            >
              AI & ML
            </button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-400">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* View more projects button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.div className="relative">
            {/* Animated dots around the button */}
            <div className="absolute -inset-4 opacity-70 blur-md">
              <div
                className={`absolute top-0 -left-10 w-16 h-16 bg-blue-400 rounded-full ${styles.floatingElement}`}
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className={`absolute bottom-0 -right-10 w-12 h-12 bg-purple-400 rounded-full ${styles.floatingElement}`}
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className={`absolute -bottom-6 left-10 w-8 h-8 bg-cyan-400 rounded-full ${styles.floatingElement}`}
                style={{ animationDelay: "0.8s" }}
              ></div>
            </div>

            {/* Button */}
            <motion.a
              href="https://github.com/Heshan2691"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg shadow-lg font-medium transition-colors group z-10 ${styles.buttonPulse}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View More on GitHub{" "}
              <HiChevronRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
