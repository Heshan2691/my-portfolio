"use client";
import { motion } from "framer-motion";

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
    <section id="blogs" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Blogs & Articles
        </motion.h2>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-xl shadow-lg text-left hover:bg-gray-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-3">{blog.title}</h3>
              <p className="text-gray-300 mb-4">{blog.description}</p>
              <span className="text-indigo-400 font-semibold">Read More →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
