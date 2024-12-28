import { appStore } from "@/Store/appStore";
import { Button } from "./ui/button";

function Contact() {
  const { setCursorVariant } = appStore();
  return (
    <div className="relative min-h-screen flex flex-col  items-center py-32">
      <h2 className="text-4xl font-bold mb-8 ">Get In Touch</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-center ">
        I'm always interested in hearing about new projects and opportunities.
      </p>
      <Button
        className="text-lg px-8"
        size="lg"
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        Contact Me
      </Button>
    </div>
  );
}

export default Contact;
