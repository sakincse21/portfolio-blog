import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.services";
import AppError from "../../errorHelpers";
import httpStatus from "http-status-codes";
import { setAuthCookie } from "../../utils/setCookie";
import { sendResponse } from "../../utils/sendResponse";

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const {user, accessToken} = await AuthService.login(payload);

    setAuthCookie(res, accessToken);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User Created Successfully",
      data: { ...user, accessToken },
    });
  } catch (error) {
    next(error);
  }
};
export const AuthController = {
  login,
};
