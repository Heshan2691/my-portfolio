"use client";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Move custom cursor logic to useEffect for client-side only
  React.useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;
    document.body.style.cursor = "none";
    const moveHandler = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    const downHandler = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
      cursor.style.background =
        "radial-gradient(circle at 30% 30%, #f472b6 60%, #a78bfa 100%)";
    };
    const upHandler = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      cursor.style.background =
        "radial-gradient(circle at 30% 30%, #60a5fa 60%, #a78bfa 100%)";
    };
    const leaveHandler = () => {
      cursor.style.opacity = "0";
    };
    const enterHandler = () => {
      cursor.style.opacity = "1";
    };
    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mousedown", downHandler);
    document.addEventListener("mouseup", upHandler);
    document.addEventListener("mouseleave", leaveHandler);
    document.addEventListener("mouseenter", enterHandler);
    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mousedown", downHandler);
      document.removeEventListener("mouseup", upHandler);
      document.removeEventListener("mouseleave", leaveHandler);
      document.removeEventListener("mouseenter", enterHandler);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/Heshan.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          position: "relative",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        {/* Particle background animation */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <ParticleBackground />
        </div>
        {/* Navigation Bar */}
        <Navbar />
        {/* Custom cursor */}
        <div id="custom-cursor" />
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      </body>
    </html>
  );
}
