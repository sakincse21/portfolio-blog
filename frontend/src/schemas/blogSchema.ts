export interface blogSchema{
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    authorId: number;
    thumbnail?: string;
    isFeatured: boolean;
    tags: string[];
    views: number;
}