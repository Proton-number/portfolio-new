import { appStore } from "@/Store/appStore";
import { useEffect } from "react";

function CustomCursor() {
  const { mousePosition, setMousePosition, cursorVariant } = appStore();

  //   custom cursor logic
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`
          w-4 h-4 bg-white rounded-full
          transition-transform duration-300 ease-out
          ${cursorVariant === "hover" ? "scale-150" : "scale-100"}
        `}
        />
      </div>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`
          w-8 h-8 border border-white rounded-full
          transition-transform duration-500 ease-out
          ${cursorVariant === "hover" ? "scale-100" : "scale-0"}
        `}
        />
      </div>
    </div>
  );
}

export default CustomCursor;
