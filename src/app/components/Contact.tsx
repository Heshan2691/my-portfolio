"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 py-16"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-300 mb-12 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Feel free to reach out to me for collaborations, project discussions, or
        just to say hi!
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a
          href="mailto:youremail@example.com"
          className="text-3xl hover:text-blue-400 transition-colors"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-gray-400 transition-colors"
        >
          <FaGithub />
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-semibold"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
