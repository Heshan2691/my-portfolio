import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Blogs from "./components/Blogs";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ProjectsGallery from "./components/ProjectsGallery";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Blogs />
      <Resume />
      <Contact />
      <ProjectsGallery />
    </main>
  );
}
