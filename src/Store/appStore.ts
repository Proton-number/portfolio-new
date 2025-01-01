import { create } from "zustand";
import { format } from "date-fns";

interface portfolioStore {
  mousePosition: { x: number; y: number };
  setMousePosition: (x: number, y: number) => void;
  cursorVariant: string;
  setCursorVariant: (cursorVariant: string) => void;
  isNavOpen: boolean;
  setIsNavOpen: (isNavOpen: boolean) => void;
  activeSection: string;
  setActiveSection: (activeSection: string) => void;
  formattedDate: string;
  formattedTime: string;
  greetings: string;
  updateFormattedDate: () => void;
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
  //logic for time
  formattedDate: "",
  formattedTime: "",
  greetings: "",

  // Action to update the formattedDate
  updateFormattedDate: () => {
    const now = new Date();
    const hour = new Date().getHours();
    set(() => ({
      formattedDate: format(now, "EEEE, MMMM do"),
      formattedTime: format(now, "h:mm a"),
      greetings:
        hour < 12
          ? "Good Morning"
          : hour < 18
            ? "Good Afternoon"
            : "Good Evening",
    }));
  },
}));
