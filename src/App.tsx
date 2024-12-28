import { useRef, useEffect } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import { ThemeProvider } from "./components/theme-provider";
import CustomCursor from "./components/CustomCursor";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav, { Top } from "./components/Nav";

function App() {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (homeRef.current) {
        homeRef.current.style.transform = `translateY(${scrolled * -0.1}px)`;
      }

      if (aboutRef.current) {
        aboutRef.current.style.transform = `translateY(${
          (scrolled - aboutRef.current.offsetTop) * 0.2
        }px)`;
      }
      if (projectsRef.current) {
        projectsRef.current.style.transform = `translateY(${
          (scrolled - projectsRef.current.offsetTop) * 0.1
        }px)`;
      }
      if (contactRef.current) {
        contactRef.current.style.transform = `translateY(${
          (scrolled - contactRef.current.offsetTop) * 0.1
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Nav />
      <Top />
      <CustomCursor />
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <section id="home" ref={homeRef}>
          <Hero />
        </section>
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section id="projects" ref={projectsRef}>
          <Projects />
        </section>
        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
        <footer className="py-8 text-center text-gray-600 dark:text-gray-300">
          <p>© 2024 Dacron. All rights reserved.</p>
        </footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
