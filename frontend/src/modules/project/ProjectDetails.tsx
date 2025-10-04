import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projectSchema } from "@/schemas/projectSchema";
import { Calendar, Clock, ExternalLink, Github } from "lucide-react";
import { NoImageAvailable } from "../blog/BlogCard";

export default function ProjectDetailsPage(selectedProject:projectSchema) {
    const date = new Date(selectedProject?.creadtedAt).toLocaleDateString();
    const time = new Date(selectedProject?.creadtedAt).toLocaleTimeString();
    
  return (
    <section className="py-20 px-6 bg-surface/30 backdrop-blur-sm min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4 text-text-light text-sm">
            <span className="bg-hero-accent/10 text-hero-accent px-3 py-1 rounded-full">
              {selectedProject?.type}
            </span>
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
            {selectedProject?.title}
          </h1>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            {selectedProject?.livelink && (
              <Button
                asChild
                className="bg-hero-accent text-surface hover:bg-hero-accent/90"
              >
                <a
                  href={selectedProject?.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {selectedProject?.githublink && (
              <Button
                asChild
                variant="outline"
                className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-surface"
              >
                <a
                  href={selectedProject?.githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Frontend Code
                </a>
              </Button>
            )}
            {selectedProject?.backendlink && (
              <Button
                asChild
                variant="outline"
                className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-surface"
              >
                <a
                  href={selectedProject?.backendlink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Backend Code
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="cosmic-card mb-8">
              <div className="p-8">
                {/* Project Image */}
                <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject?.thumbnail  || NoImageAvailable}
                    alt={selectedProject?.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Overview */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Project Overview
                    </h2>
                    <p className="body-text leading-relaxed">
                      {selectedProject?.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Technologies */}
            <Card className="cosmic-card mb-6">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-hero-accent/10 text-hero-accent rounded-full border border-hero-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
