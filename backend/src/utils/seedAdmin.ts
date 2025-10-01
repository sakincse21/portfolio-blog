import { Prisma, Role, User } from "@prisma/client";
import { envVars } from "../configs/env";
import { prisma } from "../configs/db";
import bcryptjs from "bcrypt";

export const seedAdmin = async () => {
  try {
    const isAdminExist = await prisma.user.findUnique({
      where: {
        email: envVars.ADMIN_EMAIL,
      },
    });
    if (isAdminExist) {
      console.log("Admin exists already");
      return;
    }
    console.log("Trying to create Admin...");

    const hashedPassword = await bcryptjs.hash(
      envVars.ADMIN_PASSWORD,
      Number(envVars.BCRYPT_SALT_ROUND)
    );

    const payload: Prisma.UserCreateInput = {
      name: "Saleheen",
      role: Role.ADMIN,
      email: envVars.ADMIN_EMAIL,
      password: hashedPassword,
      phone: "01833410082",
    };
    const Admin = await prisma.user.create({
      data: payload,
    });

    if(Admin?.role){
        console.log("Admin created successfully.");
    }

    console.log(Admin);
  } catch (error) {
    console.log(error);
  }
};
