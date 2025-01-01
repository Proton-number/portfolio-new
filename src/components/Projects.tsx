import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { sanityStore } from "@/Store/sanityStore";
import { appStore } from "@/Store/appStore";
import { PortableText } from "@portabletext/react";

function Projects() {
  const { projects, fetchProjects } = sanityStore();
  const { setCursorVariant } = appStore();

  useEffect(() => {
    const loadProjects = async (): Promise<void> => {
      try {
        await fetchProjects();
      } catch (error: unknown) {
        console.error("Error encountered when fetching:", error);
      }
    };
    loadProjects();
  }, [fetchProjects]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-32">
      <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold mb-4">
        PROJECTS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-16 p-6 ">
        {projects?.map((project, index) => (
          <a href={project?.projectUrl} key={index} target="_blank" rel="noopener noreferrer">
            <Card
              className="border-none relative group overflow-hidden cursor-pointer shadow-xl"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <div className="relative ">
                <img
                  src={project?.mainImage?.asset?.url}
                  alt={project.mainImage.alt}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>
              <div className="absolute inset-0 bg-background flex flex-col sm:p-6 opacity-0 hover:opacity-65 transition-opacity duration-300 ">
                <CardHeader>
                  <CardTitle className="text-4xl font-semibold  mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-secondary-background">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PortableText value={project.body} />
                </CardContent>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
