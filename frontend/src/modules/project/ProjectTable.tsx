import AddNew from "@/components/ui/add-new";
import EditDeleteButtons from "@/components/ui/edit-delete-btns";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { envVars } from "@/configs/env";
import { projectSchema } from "@/schemas/projectSchema";

export default async function ProjectTable() {
  const res = await fetch(`${envVars.backend_base_url}/projects`, {
    next: {
      tags: ["projects"],
    },
  });
  const projects = await res.json();
  // console.log(projects);
  return (
    <div className="max-w-7xl min-h-screen flex flex-col justify-center items-center gap-4">
      <AddNew endpoint="projects" />
      <Table>
        <TableCaption>All Projects.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects?.data?.data?.map((project:projectSchema) => (
            <TableRow key={project?.id}>
              <TableCell className="font-medium">{project?.id}</TableCell>
              <TableCell>{project?.title}</TableCell>
              <TableCell>
                {new Date(project?.creadtedAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                <EditDeleteButtons endpoint={"projects"} id={String(project?.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
