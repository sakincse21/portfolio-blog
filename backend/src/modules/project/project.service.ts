import { Project, Prisma } from "@prisma/client";
import { prisma } from "../../configs/db";
import AppError from "../../errorHelpers";
import httpStatus from 'http-status-codes';

const createProject = async (payload: Prisma.ProjectCreateInput): Promise<Project> => {
    const result = await prisma.project.create({
        data: payload
    })

    return result;
}

const updateProject = async (projectId:number, payload: Prisma.ProjectUpdateInput): Promise<Project> => {
    
    const ifProjectExists = await prisma.project.findUnique({
        where:{
            id: projectId
        }
    })
    if(!ifProjectExists){
        throw new AppError(httpStatus.NOT_FOUND, "Project does not exist.")
    }
    const result = await prisma.project.update({
        where:{
            id: ifProjectExists?.id
        },
        data: payload
    })

    return result;
}

const deleteProject = async (projectId:number) => {
    const result = await prisma.project.delete({
        where: {
            id: projectId
        }
    })

    return result;
}

const getProjectById = async (projectId:number): Promise<Project> => {
    return await prisma.$transaction(async (tx)=>{
        const result = await prisma.project.findUnique({
            where:{
                id: projectId
            }
        })
        if(!result?.id){
            throw new AppError(httpStatus.NOT_FOUND, "Project does not exist.")
        }
        return result;
    })
}


const getAllProjects = async ({
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

    const result = await prisma.project.findMany({
        skip,
        take: limit,
        where,
        orderBy: {
            updatedAt: "desc"
        }
    });

    const total = await prisma.project.count({ where })

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



const getProjectStat = async () => {
    return await prisma.$transaction(async (tx) => {
        const aggregates = await tx.project.aggregate({
            _count: true,
        })

        const featuredCount = await tx.project.count({
            where: {
                isFeatured: true
            }
        });

        const topFeatured = await tx.project.findFirst({
            where: { isFeatured: true }
        })

        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7)

        const lastWeekProjectCount = await tx.project.count({
            where: {
                creadtedAt: {
                    gte: lastWeek
                }
            }
        })

        return {
            stats: {
                totalProjects: aggregates._count ?? 0,
            },
            featured: {
                count: featuredCount,
                topProject: topFeatured,
            },
            lastWeekProjectCount
        };
    })
}



export const ProjectService = {
    createProject, updateProject, deleteProject, getProjectById, getAllProjects, getProjectStat
}