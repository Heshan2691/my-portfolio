"use client";
import styles from "./ProjectsGallery.module.css";
import { useState } from "react";
import Project from "../components/project";
import Modal from "../components/modal";

const projects = [
  {
    title: "TripSuthra",
    src: "project1.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "project2.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "project1.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "project1.png",
    color: "#706D63",
  },
];

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
