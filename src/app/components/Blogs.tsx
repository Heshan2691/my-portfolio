"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    title:
      "Augmenting Reality with Embedded Systems: Crafting Smart Wearables for AR",
    description:
      "Imagine slipping on a pair of sleek glasses that overlay digital instructions on a machine you’re fixing, or wearing a fitness band...",
    link: "https://medium.com/@heshanmaduwantha2020/augmenting-reality-with-embedded-systems-crafting-smart-wearables-for-ar-ae70b50d1f19",
  },
];

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Blogs & Articles
        </motion.h2>

        {/* Blogs Grid */}
        <div
          className={`grid gap-10 ${
            blogs.length === 1
              ? "grid-cols-1"
              : blogs.length === 2
              ? "md:grid-cols-2"
              : "md:grid-cols-3"
          }`}
        >
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
