import { create } from "zustand";

interface portfolioStore {
  mousePosition: { x: number; y: number };
  setMousePosition: (x: number, y: number) => void;
  cursorVariant: string;
  setCursorVariant: (cursorVariant: string) => void;
  isNavOpen: boolean;
  setIsNavOpen: (isNavOpen: boolean) => void;
  activeSection: string;
  setActiveSection: (activeSection: string) => void;
}
export const appStore = create<portfolioStore>((set) => ({
  mousePosition: { x: 0, y: 0 },
  setMousePosition: (x: number, y: number) => {
    set({ mousePosition: { x, y } });
  },
  cursorVariant: "default",
  setCursorVariant: (cursorVariant: string) => {
    set({ cursorVariant });
  },

  isNavOpen: false,
  setIsNavOpen: (isNavOpen: boolean) => {
    set({ isNavOpen });
  },
  activeSection: "home",
  setActiveSection: (activeSection: string) => {
    set({ activeSection });
  },
}));
