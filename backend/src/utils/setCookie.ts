import { Response } from "express";
import { envVars } from "../configs/env";


export const setAuthCookie = (res: Response, accessToken: string) => {
  if (accessToken) {
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    });
  }
};


