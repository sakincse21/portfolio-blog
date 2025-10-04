import { envVars } from "@/configs/env";
import ProjectDetailsPage from "@/modules/project/ProjectDetails";
import { projectSchema } from "@/schemas/projectSchema";
import { redirect } from "next/navigation";


export const generateStaticParams = async () => {
  const res = await fetch(`${envVars.backend_base_url}/projects`);
  const resData = await res.json();
  const projects = resData?.data?.data;

  return projects.slice(0, 2).map((project: projectSchema) => ({
    projectId: [String(project.id)]
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const res = await fetch(`${envVars.backend_base_url}/projects/${projectId}`);
  const resData = await res.json();
  const project = resData?.data;

  return {
    title: project?.title,
    description: project?.content,
  };
};

export default async function SingleBlogPage({params}:{ params: Promise<{ projectId: string }>;}) {
    const {projectId} = await params;
    const res=await fetch(`${envVars.backend_base_url}/projects/${projectId}`);
    const resData=await res.json();
    const project=resData?.data;
    if(!project){
        redirect('/projects')
    }
    console.log(project)
    return (
        <div>
            <ProjectDetailsPage {...project} />
        </div>
    );
}