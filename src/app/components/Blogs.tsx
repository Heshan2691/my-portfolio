"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    title: "Understanding Next.js 13 App Router",
    description:
      "A deep dive into the new Next.js App Router, server components, and how to structure modern apps.",
    link: "https://your-blog-link.com",
  },
  {
    title: "Building a MERN Stack Application",
    description:
      "Step-by-step guide to building a full-stack application using MongoDB, Express, React, and Node.js.",
    link: "https://your-blog-link.com",
  },
  {
    title: "Getting Started with Docker",
    description:
      "Learn how Docker helps in containerization and improves development workflows.",
    link: "https://your-blog-link.com",
  },
];

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Blogs & Articles ✍️
        </motion.h2>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg text-left overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Gradient Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-pink-500/10 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Blog Title */}
              <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-indigo-300 transition-colors">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
                {blog.description}
              </p>

              {/* Read More Button */}
              <span className="flex items-center gap-2 text-indigo-400 font-semibold relative z-10 group-hover:gap-4 transition-all">
                Read More <FaArrowRight className="text-sm" />
              </span>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-400/60 transition duration-500"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
