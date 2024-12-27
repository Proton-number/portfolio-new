import { create } from "zustand";

interface portfolioStore {
  mousePosition: { x: number; y: number };
  setMousePosition: (x: number, y: number) => void;
  cursorVariant: string;
  setCursorVariant: (cursorVariant: string) => void;
}
export const appStore = create<portfolioStore>((set, get) => ({
  mousePosition: { x: 0, y: 0 },
  setMousePosition: (x: number, y: number) => {
    set({ mousePosition: { x, y } });
  },
  cursorVariant: "default",
  setCursorVariant: (cursorVariant: string) => {
    set({ cursorVariant });
  },
}));
