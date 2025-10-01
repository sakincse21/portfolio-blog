import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../configs/db";
import AppError from "../../errorHelpers";
import httpStatus from 'http-status-codes';

const createPost = async (payload: Prisma.PostCreateInput): Promise<Post> => {
    const result = await prisma.post.create({
        data: payload,
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        }
    })

    return result;
}

const updatePost = async (postId:number, payload: Prisma.PostUpdateInput): Promise<Post> => {
    
    const ifPostExists = await prisma.post.findUnique({
        where:{
            id: postId
        }
    })
    if(!ifPostExists){
        throw new AppError(httpStatus.NOT_FOUND, "Post does not exist.")
    }
    const result = await prisma.post.update({
        where:{
            id: ifPostExists?.id
        },
        data: payload
    })

    return result;
}

const deletePost = async (postId:number) => {
    const result = await prisma.post.delete({
        where: {
            id: postId
        }
    })

    return result;
}

const getPostById = async (postId:number): Promise<Post> => {
    return await prisma.$transaction(async (tx)=>{
        const ifPostExists = await tx.post.update({
            where: {
                id: postId
            },
            data:{
                views: {
                    increment: 1
                }
            }
        })
        if(!ifPostExists?.id){
            throw new AppError(httpStatus.NOT_FOUND, "Post does not exist.")
        }
        const result = await prisma.post.findUnique({
            where:{
                id: postId
            }
        })
        if(!result?.id){
            throw new AppError(httpStatus.NOT_FOUND, "Post does not exist.")
        }
        return result;
    })
}


const getAllPosts = async ({
    page = 1,
    limit = 10,
    search,
    isFeatured,
    tags
}: {
    page?: number,
    limit?: number,
    search?: string,
    isFeatured?: boolean,
    tags?: string[]
}) => {
    const skip = (page - 1) * limit;

    const where: any = {
        AND: [
            search && {
                OR: [
                    { title: { contains: search, mode: 'insensitive' } },
                    { content: { contains: search, mode: 'insensitive' } }
                ]

            },
            typeof isFeatured === "boolean" && { isFeatured },
            (tags && tags.length > 0) && { tags: { hasEvery: tags } }
        ].filter(Boolean)
    }

    const result = await prisma.post.findMany({
        skip,
        take: limit,
        where,
        include: {
            author: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    const total = await prisma.post.count({ where })

    return {
        data: result,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    };
};


const getBlogStat = async () => {
    return await prisma.$transaction(async (tx) => {
        const aggregates = await tx.post.aggregate({
            _count: true,
            _sum: { views: true },
            _avg: { views: true },
            _max: { views: true },
            _min: { views: true },
        })

        const featuredCount = await tx.post.count({
            where: {
                isFeatured: true
            }
        });

        const topFeatured = await tx.post.findFirst({
            where: { isFeatured: true },
            orderBy: { views: "desc" }
        })

        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7)

        const lastWeekPostCount = await tx.post.count({
            where: {
                createdAt: {
                    gte: lastWeek
                }
            }
        })

        return {
            stats: {
                totalPosts: aggregates._count ?? 0,
                totalViews: aggregates._sum.views ?? 0,
                avgViews: aggregates._avg.views ?? 0,
                minViews: aggregates._min.views ?? 0,
                maxViews: aggregates._max.views ?? 0
            },
            featured: {
                count: featuredCount,
                topPost: topFeatured,
            },
            lastWeekPostCount
        };
    })
}



export const PostService = {
    createPost, updatePost, deletePost, getPostById, getAllPosts, getBlogStat
}