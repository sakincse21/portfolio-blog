import { envVars } from "@/configs/env";
import ProjectDetailsPage from "@/modules/project/ProjectDetails";
import { redirect } from "next/navigation";

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