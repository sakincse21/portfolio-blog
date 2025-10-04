"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ProjectFormValues,
  projectZodSchema,
} from "@/schemas/projectZodSchema";
import { updateProject } from "@/actions/update";

type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  isFeatured: boolean;
  technologies: string[];
  livelink: string;
  githublink: string;
  backendlink: string;
  type: "FullStack" | "FrontEnd" | "BackEnd";
};

export default function EditProjectForm({ project }: { project: Project }) {
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectZodSchema),
    defaultValues: {
      title: project?.title || "",
      description: project?.description || "",
      thumbnail: project?.thumbnail || "",
      isFeatured: project?.isFeatured ? "true" : "false",
      technologies: project?.technologies?.join(", ") || "",
      livelink: project?.livelink || "",
      githublink: project?.githublink || "",
      backendlink: project?.backendlink || "",
      type: project?.type || "FullStack",
    },
  });

  const onSubmit = async (values: ProjectFormValues) => {
    const toastId = toast.loading("Updating project...");
    const result = await updateProject(project.id, values, "projects");
    if (result?.success) {
      toast.success("Project updated successfully!", { id: toastId });
      redirect("/dashboard/projects");
    } else {
      toast.error("Failed to update project.", { id: toastId });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-3xl mx-auto p-6 shadow-md rounded-lg space-y-6 flex flex-col"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Edit Project
        </h2>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter project title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter project description"
                  rows={8}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="thumbnail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thumbnail URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/image.png" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="technologies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Technologies (comma separated)</FormLabel>
              <FormControl>
                <Input placeholder="typescript, react, nextjs" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="livelink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Live Link</FormLabel>
              <FormControl>
                <Input placeholder="https://my-project.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="githublink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub Link (Frontend)</FormLabel>
              <FormControl>
                <Input placeholder="https://github.com/user/repo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="backendlink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub Link (Backend)</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://github.com/user/repo-backend"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="FullStack">FullStack</SelectItem>
                  <SelectItem value="FrontEnd">FrontEnd</SelectItem>
                  <SelectItem value="BackEnd">BackEnd</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isFeatured"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Featured</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
        >
          Update Project
        </Button>
      </form>
    </Form>
  )}