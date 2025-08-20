"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Script from "next/script";
import styles from "./Hero.module.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 70, damping: 12 },
  },
};

export default function Hero() {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced-motion preference
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const el = innerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX - w / 2) / (w / 2);
      const y = (e.clientY - h / 2) / (h / 2);
      gsap.to(el, {
        rotateX: y * -4,
        rotateY: x * 6,
        transformPerspective: 800,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className={styles.hero} aria-label="Intro">
      {/* Load spline-viewer script */}
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.10.48/build/spline-viewer.js"
        strategy="beforeInteractive"
      />

      {/* Flex container for left content and right robot */}
      <div className={styles.heroContent}>
        {/* Foreground content (left) */}
        <motion.div
          ref={innerRef}
          className={styles.inner}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p className={styles.kicker} variants={item}>
            Hi, I&apos;m Heshan 👋
          </motion.p>

          <motion.h1 className={styles.title} variants={item}>
            Software Engineer Undergraduate
          </motion.h1>

          <motion.p className={styles.subtitle} variants={item}>
            I build performant web apps with <span>Next.js</span> & TypeScript.
            Exploring immersive UI with <span>Three.js</span>, <span>GSAP</span>
            , and <span>Framer Motion</span>.
          </motion.p>

          <motion.div className={styles.cta} variants={item}>
            <a className={styles.primaryBtn} href="/cv/heshan-cv.pdf" download>
              Download CV
            </a>
            <a className={styles.secondaryBtn} href="#contact">
              Contact Me
            </a>
          </motion.div>

          <motion.ul
            className={styles.pills}
            variants={item}
            aria-label="Tech stack"
          >
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Three.js</li>
            <li>GSAP</li>
            <li>Framer Motion</li>
          </motion.ul>

          <div className={styles.scrollHint} aria-hidden="true">
            <span>Scroll</span>
            <div className={styles.mouse}>
              <div className={styles.wheel} />
            </div>
          </div>
        </motion.div>

        {/* Spline robot (right) */}
        <div className={styles.splineWrapper}>
          <spline-viewer url="https://prod.spline.design/01w2ZajJFLL164ga/scene.splinecode"></spline-viewer>
        </div>
      </div>
    </section>
  );
}
