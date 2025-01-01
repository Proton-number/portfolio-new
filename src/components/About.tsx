import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { appStore } from "@/Store/appStore";
function About() {
  const skills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "Framer Motion",
    "Sanity",
  ];
  const { setCursorVariant } = appStore();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-32">
      <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold">ABOUT ME</h1>
      <Card className=" mt-10 p-6 sm:p-8 max-w-6xl mx-4 bg-background/50 backdrop-blur-sm border-muted shadow-xl">
        <div className="space-y-6">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Who is Favour?
          </p>
          <p className="text-lg leading-relaxed">
            I'm a passionate frontend developer with 4 years of experience
            building modern web applications. I focus on creating clean,
            efficient, and user-friendly solutions that solve real-world
            problems. When I am not coding, you can find me watching football,
            anime, or playing video games. I am always open to new and exciting
            opportunities.
          </p>

          <div className="space-y-4">
            <h3 className="font-medium text-lg">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge variant="secondary" key={skill} className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <Button
            className="mt-6"
            variant="outline"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/AdebimpeFavour.pdf"; // Update with your resume file path
              link.download = "Favour-Resume.pdf"; // Update with your desired filename
              link.click();
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default About;
