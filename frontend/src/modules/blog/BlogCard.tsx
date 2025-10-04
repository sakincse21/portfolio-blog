import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { blogSchema } from "@/schemas/blogSchema";

export const NoImageAvailable = "https://i.ibb.co.com/2Yk2kbTX/depositphotos-696539308-stock-illustration-image-available-icon-isolated-white.webp";

export default function BlogCard({post, index}:{post:blogSchema,index:number}) {
    const date = new Date(post.createdAt);
  return (
    <Card key={index} className="pt-2 min-w-xs">
      <Link className="group grid gap-4" href={`/blogs/${post?.id}`}>
        <Image
          alt="Blog post cover"
          className="aspect-video w-full overflow-hidden rounded-t-lg object-cover transition-opacity group-hover:opacity-90"
          height={225}
          width={400}
          src={post?.thumbnail || NoImageAvailable}
        />
        <CardHeader className="grid gap-2">
          <CardTitle className="text-lg font-semibold group-hover:underline">
            {post.title}
          </CardTitle>
          <p className="text-muted-foreground text-sm leading-none">
            {post.content.slice(0,120)}...
          </p>
        </CardHeader>
        <CardContent className="text-muted-foreground flex items-center gap-2 text-sm">
          <span>{date.toLocaleDateString()}</span>
        </CardContent>
      </Link>
    </Card>
  );
}
