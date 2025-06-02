// app/page.js
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <footer style={{ textAlign: "center", padding: "2rem 0", color: "#9ca3af", borderTop: "1px solid #e5e7eb" }}>
        © 2025 Juan Zavala
      </footer>
    </>
  );
}
