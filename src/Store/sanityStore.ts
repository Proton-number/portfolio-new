import sanityClient from "@/Client";
import { create } from "zustand";

// Define interfaces for better type safety
interface Author {
  name: string;
}

interface Image {
  asset: {
    _id: string;
    url: string;
  };
  alt: string;
}

interface Project {
  title: string;
  description: string;
  author: Author;
  slug: any;
  mainImage: Image;
  body: any;
}

interface SanityStore {
  error: null | string;
  projects: Array<Project> | null;
  fetchProjects: () => Promise<void>;
}

export const sanityStore = create<SanityStore>((set) => ({
  error: null,
  projects: null,
  fetchProjects: async () => {
    const PROJECTS_QUERY = `*[_type == "post"] | order(_createdAt asc) [0...4]{
            title, 
            description,  
            author ->{
                name,
            }, 
            slug, 
            mainImage{
                asset->{
                    _id, 
                    url
                }, 
                alt
            }, 
            body
        }`;

    try {
      const response = await sanityClient.fetch<Array<Project>>(PROJECTS_QUERY);

      if (!response?.length) {
        set({ projects: [], error: "No projects found" });
        return;
      }

      set({ projects: response, error: null });
    } catch (error) {
      console.error("Error fetching projects:", error);
      set({ error: "Failed to fetch projects", projects: null });
    }
  },
}));
