import { envVars } from "@/configs/env";
import ProjectCard from "@/modules/project/ProjectCard";
import { projectSchema } from "@/schemas/projectSchema";

export default async function ProjectsPage() {
  const res = await fetch(`${envVars.backend_base_url}/projects`, {
    next: {
      revalidate: 3600,
    },
  });
  const projects = await res.json();

  return (
    
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-2xl text-center m-3">All Projects</h1>
      <div className="flex flex-col lg:flex-row flex-wrap gap-5 items-center justify-center">
        {projects?.data?.data?.map((project:projectSchema, index:number) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
