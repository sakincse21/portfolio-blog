export interface projectSchema{
    id: number;
    title: string;
    description: string;
    technologies: string[];
    isFeatured: boolean;
    thumbnail?: string;
    livelink: string;
    githublink: string;
    backendlink?: string;
    type: string;
    creadtedAt: string;
    updatedAt: string;
}