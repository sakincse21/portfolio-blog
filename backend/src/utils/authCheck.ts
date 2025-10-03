import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import AppError from "../errorHelpers";
import httpStatus from "http-status-codes";
import { prisma } from "../configs/db";
import { JwtPayload } from "jsonwebtoken";

export const authCheck =
  (...authRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.cookies)
    const accessToken = req.cookies.accessToken || req.headers.authorization;
    // const accessToken = req.cookies?.accessToken;

    if (!accessToken) {
      throw new AppError(httpStatus.UNAUTHORIZED, "No token provided");
    }

    const verifiedToken = verifyToken(accessToken as string);

    if (!verifiedToken) {
      throw new AppError(httpStatus.UNAUTHORIZED, "User is not authorized.");
    }

    const ifUserExitst = await prisma.user.findUnique({
      where: { id: verifiedToken.id, email: verifiedToken.email },
    });

    if (!ifUserExitst?.id) {
      throw new AppError(httpStatus.FORBIDDEN, "User does not exist.");
    }

    if (!authRoles.includes(ifUserExitst.role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You do not have permission to access the endpoint."
      );
    }

    req.user = verifiedToken;
    console.log(req.user)

    next();
  };
