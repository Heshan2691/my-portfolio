"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Type definitions
interface VolunteeringExperience {
  role: string;
  event: string;
  date: string;
  skills: string[];
  description: string;
}
interface VolunteeringOrg {
  name: string;
  logo: string;
  location: string;
  experiences: VolunteeringExperience[];
}

const volunteeringOrgs: VolunteeringOrg[] = [
  {
    name: "IEEE Student Branch University of Moratuwa",
    logo: "/IEEESBUOM.webp", // Update with your actual image path
    location: "Moratuwa, Western Province, Sri Lanka",
    experiences: [
      {
        role: "Organizing Committee Member - Web Design Committee",
        event: "Innovate with Ballerina 2025",
        date: "May 2025 - Present",
        skills: ["React.js", "TypeScript", "Web Design", "Teamwork"],
        description:
          "Contributed to the design and development of event websites, collaborating with a cross-functional team to deliver innovative solutions.",
      },
      {
        role: "Organizing Committee Member - Logistics Committee",
        event: "FINNC 25",
        date: "Mar 2025 - July 2025",
        skills: ["Event Logistics", "Coordination", "Problem Solving"],
        description:
          "Managed logistics and coordinated event activities, ensuring smooth execution and participant satisfaction.",
      },
      {
        role: "Event Organizing Committee Member - Web Design Committee",
        event: "Mora Foresight 3.0",
        date: "Feb 2025 - Aug 2025",
        skills: ["Web Design", "Project Management"],
        description:
          "Contribute to the web design team for a major university project, focusing on user experience and accessibility.",
      },
    ],
  },
  {
    name: "Rotaract Club of University of Moratuwa",
    logo: "/Rotaract.jpeg", // Update with your actual image path
    location: "Moratuwa, Western Province, Sri Lanka",
    experiences: [
      {
        role: "Event Co-Chair",
        event: "Urbanscape",
        date: "Aug 2023 - Apr 2024",
        skills: ["Leadership", "Event Planning"],
        description:
          "Co-led a large-scale event, overseeing planning, execution, and team coordination.",
      },
      {
        role: "Organizing Committee Member",
        event: "Monster Mash 2.0",
        date: "Aug 2023 - Oct 2023",
        skills: ["Teamwork", "Creativity"],
        description:
          "Supported event organization and contributed creative ideas for engagement activities.",
      },
      {
        role: "Organizing Committee Member",
        event: "Inter School Peace Day Debate Competition",
        date: "Sep 2023 - Oct 2023",
        skills: ["Coordination", "Communication"],
        description:
          "Helped organize and facilitate a debate competition promoting peace and understanding among schools.",
      },
    ],
  },
  {
    name: "IoT and Embedded Systems Research Labs - Faculty of IT University of Moratuwa",
    logo: "/IESlab.jpeg", // Update with your actual image path
    location: "Moratuwa, Western Province, Sri Lanka",
    experiences: [
      {
        role: "Firmware Team Member",
        event: "IoT and Embedded Systems Research Labs",
        date: "Mar 2025 - Present",
        skills: ["Embedded Systems", "IoT", "Firmware Development", "Teamwork"],
        description:
          "Collaborated on firmware development for IoT devices, contributing to research and innovation in embedded systems.",
      },
    ],
  },
  {
    name: "Open-Source Contributor",
    logo: "/hacktoberfest.png", // Update with your actual image path
    location: "Remote",
    experiences: [
      {
        role: "Open-Source Contributor",
        event: "Hacktoberfest 2024",
        date: "Oct 2024",
        skills: ["Open Source", "Git", "Collaboration"],
        description:
          "Contributed to global open-source projects during Hacktoberfest, improving codebases and collaborating with developers worldwide.",
      },
    ],
  },
];

export default function Achievements() {
  const [selectedOrg, setSelectedOrg] = useState<VolunteeringOrg | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (org: VolunteeringOrg) => {
    setSelectedOrg(org);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrg(null);
  };

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Volunteering & Community Experience
        </motion.h2>

        {/* Organization Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {volunteeringOrgs.map((org: VolunteeringOrg, idx: number) => (
            <motion.div
              key={idx}
              className="cursor-pointer flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              whileHover={{ scale: 1.07 }}
              onClick={() => handleOpenModal(org)}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 border-2 border-purple-400/40 mb-4">
                <Image
                  src={org.logo}
                  alt={org.name + " logo"}
                  width={48}
                  height={48}
                  className="object-contain rounded-[12px]"
                />
              </div>
              <h3 className="text-lg font-bold text-purple-300 mb-1 text-center">
                {org.name}
              </h3>
              <p className="text-xs text-gray-400 text-center">
                {org.location}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup for Organization Details */}
        {showModal && selectedOrg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black rounded-2xl shadow-2xl p-8 max-w-lg w-full relative animate-fadeIn overflow-y-auto max-h-[80vh] hide-scrollbar">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-pink-400 text-2xl font-bold"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 border-2 border-purple-400/40">
                  <Image
                    src={selectedOrg.logo}
                    alt={selectedOrg.name + " logo"}
                    width={48}
                    height={48}
                    className="object-contain rounded-[12px]"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-300 mb-1">
                    {selectedOrg.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {selectedOrg.location}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                {selectedOrg.experiences.map(
                  (exp: VolunteeringExperience, i: number) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-purple-500/10 via-pink-400/10 to-blue-400/10 p-5 rounded-xl border border-white/10 shadow-md"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white">
                          {exp.role}
                        </span>
                        <span className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded-full">
                          {exp.date}
                        </span>
                      </div>
                      <div className="text-sm text-indigo-300 mb-1">
                        {exp.event}
                      </div>
                      <div className="text-gray-300 mb-2">
                        {exp.description}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.skills.map((skill: string, sidx: number) => (
                          <span
                            key={sidx}
                            className="px-2 py-1 text-xs rounded bg-indigo-500/20 text-indigo-300 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
