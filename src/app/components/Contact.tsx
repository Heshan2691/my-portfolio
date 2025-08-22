"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formFeedback, setFormFeedback] = useState({ type: "", message: "" });

  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS
  useEffect(() => {
    // Get public key from environment variables
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error("EmailJS public key not found in environment variables");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) {
        throw new Error("Form reference is missing");
      }

      // Use environment variables for EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS configuration");
      }

      console.log("Sending email with:", {
        serviceId,
        templateId,
        formData: {
          from_name: formState.name,
          from_email: formState.email,
          sender_email: formState.email,
          message: formState.message,
          reply_to: formState.email,
          to_name: "Heshan",
          subject: `New Contact from ${formState.name} (${formState.email})`,
        },
      });

      try {
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        console.log("Email sent successfully:", result);
      } catch (error) {
        console.error("EmailJS detailed error:", error);
        throw error; // Rethrow for the outer catch block
      }

      setFormFeedback({
        type: "success",
        message:
          "Your message has been sent successfully! I'll get back to you soon.",
      });

      // Reset the form
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setFormFeedback({
        type: "error",
        message:
          "Sorry, there was a problem sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);

      // Reset feedback after 5 seconds
      setTimeout(() => {
        setFormFeedback({ type: "", message: "" });
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full -top-20 -left-20 blur-3xl animate-pulse"></div>
      <div
        className="absolute w-96 h-96 bg-blue-600/10 rounded-full -bottom-20 -right-20 blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute w-72 h-72 bg-cyan-600/10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Section Label */}
          <motion.p
            className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3"
            variants={itemVariants}
          >
            Get In Touch
          </motion.p>

          {/* Heading and availability tag (fix: always show heading) */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Let&apos;s Connect
          </motion.h2>
          <span className="inline-block px-4 py-2 rounded-full bg-green-600/20 text-green-400 font-semibold text-sm shadow border border-green-400/30 animate-pulse mb-6">
            🚀 Available for new projects
          </span>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 mb-12 max-w-xl mx-auto"
          >
            Have an idea, project, or just want to say hi? Feel free to reach
            out — I&apos;d love to chat and explore how we can work together!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Card - 2 columns */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out through any of these channels. I&apos;m
                always open to discussing new projects, ideas, or opportunities.
              </p>

              {/* Contact Details */}

              <div className="space-y-6 flex-grow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:youremail@example.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      heshanmaduwantha2020@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-400">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a
                      href="tel:+94769255463"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      +94 76 925 5463
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-600/20 rounded-full flex items-center justify-center text-pink-400">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-sm text-gray-400 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/heshan-yatigammana-a67208283/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-blue-600/20 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href="https://github.com/Heshan2691"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-gray-600/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="mailto:heshanmaduwantha2020@gmail.com"
                    className="w-10 h-10 bg-white/5 hover:bg-red-600/20 rounded-full flex items-center justify-center text-gray-400 hover:text-red-400 transition-all"
                    aria-label="Email Me"
                  >
                    <FaEnvelope size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - 3 columns */}
          <motion.div
            className="lg:col-span-3 bg-white/5 backdrop-blur-xl rounded-3xl shadow-xl border border-white/10 p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            {formFeedback.message && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  formFeedback.type === "success"
                    ? "bg-green-600/20 text-green-400"
                    : "bg-red-600/20 text-red-400"
                }`}
              >
                {formFeedback.message}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      required
                      placeholder="John Doe"
                      className="w-full p-4 pl-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="from_email"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      id="from_email"
                      name="from_email"
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      required
                      placeholder="john@example.com"
                      className="w-full p-4 pl-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                    rows={6}
                    placeholder="Tell me about your project, idea, or just say hello..."
                    className="w-full p-4 pl-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                  ></textarea>
                </div>
              </div>

              {/* Hidden fields for EmailJS */}
              <input type="hidden" name="to_name" value="Heshan" />
              <input type="hidden" name="reply_to" value={formState.email} />
              <input
                type="hidden"
                name="sender_email"
                value={formState.email}
              />
              <input
                type="hidden"
                name="subject"
                value={`New Contact from ${formState.name} (${formState.email})`}
              />

              <div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-semibold text-white transition-all disabled:opacity-70 w-full md:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute right-0 translate-x-full opacity-0 transition-transform group-hover:-translate-x-4 group-hover:opacity-100">
                    <FaArrowRight />
                  </span>
                  <span className="flex items-center gap-2 transition-transform group-hover:-translate-x-2">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
