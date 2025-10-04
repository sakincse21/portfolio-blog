import { envVars } from "@/configs/env";
import EditProjectForm from "@/modules/project/EditProjectForm";
import { notFound, redirect } from "next/navigation";

async function getProject(projectId: string) {
  const res = await fetch(`${envVars.backend_base_url}/projects/${projectId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();
  return data?.data;
}

export default async function ProjectEditPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = await getProject(projectId);

  if (!project) {
    redirect("/projects");
  }

  return (
    <div>
      <EditProjectForm project={project} />
    </div>
  );
}
