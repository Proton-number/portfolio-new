"use client";

import { appStore } from "@/Store/appStore";
import { Button } from "./ui/button";
import { Menu, X, MoveRight, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function Nav() {
  const { isNavOpen, setIsNavOpen, setActiveSection, setCursorVariant } =
    appStore();
  const [visibility, setVisibility] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleVisibility = (): void => {
    if (window.scrollY > 40) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => toggleVisibility();
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navRef.current &&
        !(navRef.current as HTMLElement).contains(e.target as Node) &&
        isNavOpen
      ) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <>
      {/* The menu button */}
      <AnimatePresence mode="wait">
        {visibility && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="fixed top-11 right-6 z-50 p-4 "
          >
            {!isNavOpen && (
              <Button size="icon" onClick={() => setIsNavOpen(true)}>
                <Menu />
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* The drawer */}
      <nav
        ref={navRef}
        className={`
      fixed top-0 right-0 h-full bg-black dark:bg-white backdrop-blur-lg
      w-96 z-40 transform transition-transform duration-300
      ${isNavOpen ? "translate-x-0" : "translate-x-full"}
    `}
      >
        <div className="p-8 flex flex-col h-full ">
          <Button
            onClick={() => setIsNavOpen(false)}
            size="icon"
            className="mb-10  bg-white dark:bg-black hover:bg-slate-100 "
          >
            <X className="text-black dark:text-white" />
          </Button>
          <div className="flex items-start flex-col gap-20">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Button
                variant="link"
                className="text-secondary"
                key={item}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
                onClick={() => {
                  setIsNavOpen(false);
                  const sectionId = item.toLowerCase();
                  document
                    .getElementById(sectionId)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection(sectionId);
                }}
              >
                {" "}
                <span className="text-5xl text-left">{item}</span>
              </Button>
            ))}
          </div>
          <div className="text-black flex justify-around mt-20">
            <a
              href="https://github.com/Proton-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                className="text-background"
                aria-label="GitHub icon"
              />
            </a>
            <a
              href="https://x.com/Dacron4show?t=-XZuMFlvkKQK5xz1w-NrSA&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon className="text-background" />
            </a>
            <a
              href="https://www.instagram.com/dacron4show/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="text-background" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

export function Top() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDarkMode;
    setIsDarkMode(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newIsDark);
  };
  return (
    <div className="p-5 flex justify-between items-center">
      <div>
        <Button size={"icon"} onClick={toggleTheme}>
          <Sun
            className={`h-5 w-5 transition-all ${isDarkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}
          />
          <Moon
            className={`absolute h-5 w-5 transition-all ${isDarkMode ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}
          />
        </Button>
      </div>

      <div className="flex gap-7 items-center">
        <p
          className="hover:opacity-70 text-xs"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          ABOUT ME
        </p>
        <p
          className=" text-xs  hover:opacity-70"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          PROJECTS
        </p>
        <div className="flex gap-1  font-semibold  text-xs items-center hover:opacity-70">
          <p>LET'S TALK</p>
          <MoveRight size="18px" />
        </div>
      </div>
    </div>
  );
}
