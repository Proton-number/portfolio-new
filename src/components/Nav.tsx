"use client";

import { appStore } from "@/Store/appStore";
import { Button } from "./ui/button";
import { Menu, X, MoveRight, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import CenterUnderline from "./animation/CenterUnderline";

function Nav() {
  const { isNavOpen, setIsNavOpen, setActiveSection, setCursorVariant } =
    appStore();
  const [visibility, setVisibility] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);

  // Scroll visibility handling
  const handleScroll = () => {
    setVisibility(window.scrollY > 40);
  };

  // Click outside handling
  const handleClickOutside = (e: MouseEvent) => {
    if (
      isNavOpen &&
      navRef.current &&
      !navRef.current.contains(e.target as Node)
    ) {
      setIsNavOpen(false);
    }
  };

  // Event listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
            className="fixed top-11 right-6 z-30 p-4 "
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
                <CenterUnderline
                  className="text-5xl text-left font-bold"
                  label={item}
                />
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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    setIsDarkMode(savedTheme);
    updateThemeClass(savedTheme);
  }, []);

  const updateThemeClass = (isDark: boolean): void => {
    document.documentElement.classList.toggle("dark", isDark);
  };

  const toggleTheme = (): void => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    updateThemeClass(newTheme);
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
        <CenterUnderline
          className="hover:opacity-70 text-xs"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          label="ABOUT ME"
        />
        <CenterUnderline
          className=" text-xs  hover:opacity-70"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          label=" PROJECTS"
        />
        <div className="flex gap-1  font-semibold  text-xs items-center hover:opacity-70">
          <a href="mailto:favouradebimpe63@gmail.com">
            <p>LET'S TALK</p>
          </a>
          <MoveRight size="18px" />
        </div>
      </div>
    </div>
  );
}
