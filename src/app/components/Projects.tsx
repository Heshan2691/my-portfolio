"use client";

import { useState, useRef, useEffect } from "react";
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
  images?: string[]; // Array of image URLs
  image?: string; // For backward compatibility
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
    title: "V-App",
    description:
      "V-APP is a mobile and web platform for vehicle maintenance, enabling appointment booking, service history tracking, cloud document storage, and real-time notifications. Features include OTP/social login, PDF report generation, and role-based admin control.",
    tech: [
      "ASP.Net",
      "Next.js",
      "Flutter",
      "Tailwind CSS",
      "SQL Server",
      "Azure Blob Storage",
      "Firebase",
      "Jira",
      "GitHub",
      "Figma",
    ],
    github: "https://github.com/NeonCoders-UoM",
    demo: "https://travel-app-demo.com",
    images: [
      "/projects/vapp1.jpeg",
      "/projects/vapp2.jpeg",
      "/projects/vapp3.jpeg",
      "/projects/vapp4.jpeg",
    ],
    color: "from-sky-400 to-blue-600",
  },
  {
    title: "TripSuthra",
    description:
      "TripSuthra developed a streamlined plan for Sri Lanka travel, simplifying visa applications and offering personalized recommendations. Key features include an admin dashboard for visa management, an AI chatbot for trip suggestions, and an interactive,data-rich trip map.",
    tech: [
      "React js",
      "Express.js",
      "Node js",
      "SQL",
      "TF-IDF",
      "Random Forest",
      "Tailwind CSS",
      "Gemini API",
    ],
    github: "https://github.com/ashiduDissanayake/TripSuthra",
    demo: "https://job-portal-demo.com",
    images: ["/projects/project1.png", "/projects/project2.png"],
    color: "from-indigo-400 to-violet-600",
  },
  {
    title: "Matrimantra",
    description:
      "Matrimantra is a web-based matrimony platform designed to connect users for marriage, featuring advanced profile filtering (age, religion, location), opposite-gender matching, horoscope compatibility, and subscription tiers (Free, Basic, Premium, VIP). It supports user profile management, interest requests, and a responsive UI with a landing page, user list, admin dashboard, and horoscope matching system.",
    tech: ["React Vite", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/LushWare-Org/Matrimony",
    demo: "https://baby-driver-demo.com",
    images: ["/projects/matrimantra1.png", "/projects/matrimantra2.png"],
    color: "from-amber-400 to-orange-600",
  },
  {
    title: "Jobszzy",
    description:
      "Jobszzy is a smart job portal that connects job seekers with the right opportunities and helps employers find top talent quickly and efficiently.",
    tech: ["React Vite", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/LushWare-Org/Jobszzy",
    demo: "https://ai-image-gen-demo.com",
    images: [
      "/projects/jobszzy1.png",
      "/projects/jobszzy2.png",
      "/projects/jobszzy3.png",
    ],
    color: "from-purple-400 to-pink-600",
  },
  {
    title: "FoodLens",
    description:
      "FoodLens is a web app for tracking meals, activity, and mood, featuring a dashboard with real-time health metrics. It includes A-powered meal planning and diet recommendations.",
    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Spoonacular API",
      "News API",
    ],
    github: "https://github.com/Heshan2691/Innovexa",
    demo: "https://crypto-dashboard-demo.com",
    images: [
      "/projects/foodlens1.jpeg",
      "/projects/foodlens2.png",
      "/projects/foodlens3.png",
    ],
    color: "from-green-400 to-teal-600",
  },
  {
    title: "Baby Driver",
    description:
      "Baby Driver is an educational game for young students, using a smartphone app to control a remote car for learning tasks, with a web app managing gameplay and real-time feedback.",
    tech: ["RFID", "ESP32", "Arduino", "React", "Node.js", "MIT App Inventor"],
    github: "https://github.com/Heshan2691/BabyDriver",
    demo: "https://crypto-dashboard-demo.com",
    images: [
      "/projects/babydriver1.jpeg",
      "/projects/babydriver2.jpeg",
      "/projects/babydriver3.jpeg",
      "/projects/babydriver4.jpeg",
      "/projects/babydriver5.jpeg",
    ],
    color: "from-sky-400 to-blue-600",
  },
  {
    title: "Innovate with Ballerina 2025 Official Website",
    description:
      "Collaborated on the development of the official website for Innovate with Ballerina 2025, a web development competition organized by UOM and WSO2",
    tech: ["React Vite", "Tailwind CSS", "Three js", "GSAP", "FramerMotion"],
    github: "https://github.com/IEEESB-UOM/Innovate-with-Ballerina-New",
    demo: "https://innovatewithballerina.com/",
    images: ["/projects/ballerina1.png", "/projects/ballerina2.png"],
    color: "from-yellow-400 to-orange-600",
  },
  {
    title: "MoraForesight 3.0 Official Website",
    description:
      "Collaborated on the development of the official website for MoraForesight 3.0, organized by IEEE student branch UOM",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP", "FramerMotion"],
    github: "https://github.com/IEEESB-UOM/Moraforesight3.0",
    demo: "https://moraforesight.lk/",
    images: ["/projects/foresight1.png", "/projects/foresight2.png"],
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

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Carousel state
  const [imgIndex, setImgIndex] = useState(0);
  const images = project.images || (project.image ? [project.image] : []);

  // Auto-advance carousel
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5s
    return () => clearInterval(timer);
  }, [images.length]);

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
      {/* Project Image Carousel */}
      <div className={`${styles.projectImage} w-full relative`}>
        {images.length > 0 ? (
          <>
            <Image
              src={images[imgIndex]}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className={styles.imageOverlay}></div>
            {/* Carousel indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full bg-white/40 ${
                      imgIndex === i ? "bg-blue-400" : ""
                    } transition-all`}
                  ></span>
                ))}
              </div>
            )}

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
                  className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-all border border-gray-500/30 shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-all border border-gray-500/30 shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt size={18} />
                </motion.a>
              </div>
            </motion.div>
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
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
          {project.title}
        </h3>

        {/* Description - minimized space */}
        <p className="text-gray-300 mb-2 text-md leading-snug line-clamp-3">
          {project.description}
        </p>

        {/* Increased padding between description and GitHub button */}
        <div className="h-8"></div>

        {/* GitHub Button - glassy style, placed after description */}
        <div className="flex justify-start mb-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 ${styles.buttonPulse}`}
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGithub size={20} />
            <span className="tracking-wide">View on GitHub</span>
          </motion.a>
        </div>

        {/* Tech Stack Section - Enhanced */}
        <div className="mb-2">
          {/* <h4 className="text-sm font-semibold text-blue-300 mb-2 flex items-center bg-gray-800/40 rounded-full px-3 py-1 w-fit">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            Tech Stack
          </h4> */}
          <div className="flex flex-wrap gap-2 px-1 py-2 bg-gray-800/20 backdrop-blur-sm rounded-lg border border-gray-700/30">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white font-medium shadow-md transition-all hover:scale-105 hover:-translate-y-1 duration-300 ${styles.tag}`}
              >
                {tech}
              </span>
            ))}
          </div>
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
      project.tech.some((t) =>
        [
          "React",
          "Next.js",
          "React js",
          "React Vite",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Tailwind CSS",
          "TypeScript",
          "GSAP",
          "FramerMotion",
        ].includes(t)
      )
    )
      return true;
    if (
      selectedCategory === "mobile" &&
      project.tech.some((t) =>
        ["React Native", "Mobile", "iOS", "Android", "Flutter"].includes(t)
      )
    )
      return true;
    if (
      selectedCategory === "iot" &&
      project.tech.some((t) => ["RFID", "ESP32", "Arduino"].includes(t))
    )
      return true;
    if (
      selectedCategory === "ai" &&
      project.tech.some((t) =>
        ["AI", "ML", "TF-IDF", "Random Forest", "Gemini API"].includes(t)
      )
    )
      return true;
    return false;
  });

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Desktop/Tablet UI */}
      <div className="hidden sm:block">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Heading Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="inline-block mb-3"
            >
              <div className="text-xs uppercase tracking-widest text-blue-400 font-mono mb-2 letter-spacing-wide">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300">
                  What I&apos;ve Built
                </span>
              </div>
              <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                My Projects
              </motion.h2>
              {/* Animated Underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto my-4 rounded-full"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-gray-300 max-w-2xl mx-auto text-lg mt-6 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md"
              >
                Explore my featured projects showcasing my skills in web
                development, UI/UX design, and software engineering.
              </motion.p>
            </motion.div>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
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
                className={`relative flex items-center gap-3 px-10 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold shadow-xl border border-white/20 hover:bg-white/20 hover:shadow-2xl transition-all duration-300 group z-10 ${styles.buttonPulse}`}
                whileHover={{ scale: 1.06, rotate: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGithub size={22} className="opacity-80" />
                <span className="tracking-wide text-lg">
                  View More on GitHub
                </span>
                <HiChevronRight className="group-hover:translate-x-2 transition-transform text-xl" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile UI - Enhanced Card Layout */}
      <div className="block sm:hidden">
        <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          My Projects
        </h2>
        <div className="flex flex-col gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative"
            >
              {/* Project Image */}
              {project.images && project.images[0] && (
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={400}
                    height={176}
                    className="w-full h-full object-cover rounded-b-2xl border-b-4 border-blue-400"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              )}
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2 line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300 font-medium shadow"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 rounded-full text-xs bg-gray-700/40 text-gray-300 font-medium">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
                <div className="flex gap-4 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-xs shadow hover:bg-blue-500/40 transition"
                  >
                    <FaGithub size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
