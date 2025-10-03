import express from "express";
import { UserController } from "./user.contoller";
import { Role } from "@prisma/client";
import { authCheck } from "../../utils/authCheck";

const router = express.Router();

router.get("/", authCheck(Role.ADMIN), UserController.getAllFromDB);

router.get("/me",  authCheck(Role.ADMIN), UserController.getMe);

router.get("/:id", authCheck(Role.ADMIN), UserController.getUserById);


router.post("/", authCheck(Role.ADMIN), UserController.createUser);

router.patch("/:id", authCheck(Role.ADMIN), UserController.updateUser);

router.delete("/:id", authCheck(Role.ADMIN), UserController.deleteUser);

export const userRouter = router;
