import { envVars } from "@/configs/env";
import ProjectCard from "../project/ProjectCard";
import { projectSchema } from "@/schemas/projectSchema";

export default async function LatestProject() {

  const res=await fetch(`${envVars.backend_base_url}/projects?limit=3`,{
    next:{
      revalidate: 3600
    }
  })
  const projects = await res.json();

  console.log(projects)

  return (
    <section className="py-16 max-w-7xl mx-auto lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Recent Projects</h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My Recently Completed Projects.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 lg:grid-cols-3">
          {projects?.data?.data?.map((project:projectSchema, index:number) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
