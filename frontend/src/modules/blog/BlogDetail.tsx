
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import Markdown from 'react-markdown'
import Image from "next/image";
import { blogSchema } from "@/schemas/blogSchema";
import { NoImageAvailable } from "./BlogCard";

export default function BlogDetailPage(selectedBlog:blogSchema) {
    const date = new Date(selectedBlog?.createdAt).toLocaleDateString();
    const time = new Date(selectedBlog?.createdAt).toLocaleTimeString();
    return (
        <section className="py-20 px-6 bg-surface/30 backdrop-blur-sm min-h-screen">
        <div className="max-w-4xl mx-auto">

          {/* Blog Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-text-light text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {time}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {selectedBlog.title}
            </h1>
          </div>

          {/* Blog Content */}
          <Card className="cosmic-card">
            <Image src={selectedBlog?.thumbnail  || NoImageAvailable} alt={selectedBlog?.title} width={480} height={480} className="w-full mx-auto px-5" />
            <div className="p-8">
              <Markdown
                components={{
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  code({ inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {children}
                    </h2>
                  ),
                  p: ({ children }) => (
                    <p className="body-text mb-4 leading-relaxed">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="body-text mb-4 ml-6 space-y-2">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="list-disc">{children}</li>
                  ),
                  img: ({ src, alt }) => (
                    <Image
                      src={src as string}
                      alt={alt || "default"}
                      width={480} height={480}
                      className="w-full max-w-2xl mx-auto my-6 rounded-lg shadow-lg"
                    />
                  ),
                }}
              >
                {selectedBlog?.content}
              </Markdown>
            </div>
          </Card>
        </div>
      </section>
    );
  }
