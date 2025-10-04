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
import { blogSchema } from "@/schemas/blogSchema";

export default async function BlogTable() {
  const res = await fetch(`${envVars.backend_base_url}/blogs`, {
    next: {
      tags: ["blogs"],
    },
  });
  const blogPosts = await res.json();
  console.log(blogPosts);
  return (
    <div className="max-w-7xl min-h-screen flex flex-col justify-center items-center gap-4">
      <AddNew endpoint="blogs" />
      <Table>
        <TableCaption>All Blogs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogPosts?.data?.data?.map((post:blogSchema) => (
            <TableRow key={post?.id}>
              <TableCell className="font-medium">{post?.id}</TableCell>
              <TableCell>{post?.title}</TableCell>
              <TableCell>
                {new Date(post?.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                <EditDeleteButtons endpoint="blogs" id={String(post?.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
