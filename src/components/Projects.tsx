import { Card } from "./ui/card";
// import Image from "next/image";

interface project {
  title: string;
  description: string;
}

function Projects() {
  const project: Array<project> = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with Next.js and TypeScript",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
    },
    {
      title: "Weather App",
      description:
        "Real-time weather application using weather API integration",
    },
    {
      title: "Task Manager",
      description:
        "Simple and efficient task management application with React",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-32">
      <h1 className="font-bold text-8xl mb-4">PROJECTS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-40 mt-20 p-6 ">
        {project.map((item, index) => (
          <Card key={index} className="border-none">
            <h3>{item.title}</h3>
            <h3>{item.description}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
