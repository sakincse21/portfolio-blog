import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectCard({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  return (
    <div key={project.title} className="w-full max-w-sm">
        <Card className="overflow-hidden pt-0 w-full h-full hover-lift">
          
            <div className="aspect-video bg-accent-soft relative overflow-hidden flex-shrink-0">
              {/* Project Image */}
              <img
                src={project?.thumbnail as string}
                alt={project?.title}
                width={480}
                height={480}
                className="absolute inset-0 w-full h-full object-cover p-2 mx-auto"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/20 to-hero-accent/20"></div>
              {/* Hover Icon */}
              <a
                href={project?.livelink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-background/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-6 h-6 text-hero-accent" />
                  </div>
                </div>
              </a>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wide text-text-light font-medium">
                  {project?.type}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {project?.title}
              </h3>
              <div className="body-text flex flex-wrap gap-2 mb-4">
                {project.technologies?.map((each, techIndex) => (
                  <span
                    key={techIndex}
                    className="border-2 bg-background px-2 py-1 rounded-md text-xs"
                  >
                    {each}
                  </span>
                ))}
              </div>
              <div className="body-text flex flex-wrap gap-2">
                {project?.livelink && (
                  <Link
                    href={project?.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="text-xs" variant="default">
                      Live
                    </Button>
                  </Link>
                )}
                {project?.githublink && (
                  <a
                    href={project?.githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="text-xs" variant="outline">
                      <GithubIcon />
                      Frontend
                    </Button>
                  </a>
                )}
                {project?.backendlink && (
                  <a
                    href={project?.backendlink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="text-xs" variant="outline">
                      <GithubIcon />
                      Backend
                    </Button>
                  </a>
                )}
              </div>
            </div>
        </Card>
    </div>
  );
}
