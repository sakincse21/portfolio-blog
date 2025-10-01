import { prisma } from "../../configs/db"
import AppError from "../../errorHelpers"
import httpStatus from 'http-status-codes';
import bcryptjs from 'bcrypt';
import { generateToken } from "../../utils/jwt";

const login = async (payload:{email:string,password:string})=>{
    const ifUserExists = await prisma.user.findUnique({
        where:{
            email: payload.email
        }
    })
    if(!ifUserExists?.id){
        throw new AppError(httpStatus.UNAUTHORIZED,"User not found.")
    }

    const passCheck = bcryptjs.compare(payload.password,ifUserExists?.password as string);
    if(!passCheck){
        throw new AppError(httpStatus.UNAUTHORIZED,"Wrong Password.")
    }

    const jwtPayload = {
        userId: ifUserExists.id,
        role: ifUserExists.role,
        email: ifUserExists.email
    }

    const {password, ...user}=ifUserExists;

    const accessToken = generateToken(jwtPayload)

    return {
        user, accessToken
    }
}
export const AuthService={
    login
}