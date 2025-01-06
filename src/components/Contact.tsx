import { appStore } from "@/Store/appStore";
import { Button } from "./ui/button";
import { useEffect } from "react";
import Typewriter from "./animation/Typewriter";
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
        <h2 className="inline-block text-4xl font-bold mb-8 ">Get In Touch</h2>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-center whitespace-pre-wrap ">
          <span> I'm always interested in </span>
          <Typewriter
            text={[
              "hearing about new projects and opportunities.",
              "collaborating on creative ideas.",
              "exploring innovative solutions.",
              "learning from unique challenges.",
            ]}
            speed={70}
            className="text-gray-950 dark:text-white"
            waitTime={600}
            deleteSpeed={40}
            cursorChar={"_"}
          />
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
