import { Router } from "express";
import { userRouter } from "../modules/user/user.routes";
import { postRouter } from "../modules/post/post.routes";
import { authRouter } from "../modules/auth/auth.routes";
import { projectRouter } from "../modules/project/project.routes";

const router = Router();

router.use('/auth',authRouter);
router.use('/post',postRouter);
router.use('/user',userRouter);
router.use('/project',projectRouter);

export const AppRouter = router;