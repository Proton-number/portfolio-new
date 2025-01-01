import { appStore } from "@/Store/appStore";
import { Button } from "./ui/button";
import { useEffect } from "react";

function Contact() {
  const {
    setCursorVariant,
    formattedDate,
    updateFormattedDate,
    formattedTime,
    greetings,
  } = appStore();

  useEffect(() => {
    updateFormattedDate(); // Update immediately
    const timer = setInterval(updateFormattedDate, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative min-h-80 flex flex-col  items-center py-32">
        <h2 className="text-4xl font-bold mb-8 ">Get In Touch</h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-center ">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <a href="mailto:favouradebimpe63@gmail.com">
          <Button
            className="text-lg px-8"
            size="lg"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Contact Me
          </Button>
        </a>
      </div>
      <div className="flex justify-around mt-20">
        <p> {formattedDate}</p>
        <p>{formattedTime}</p>
        <p>{greetings}</p>
      </div>
    </>
  );
}

export default Contact;
