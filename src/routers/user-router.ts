import { Router } from "express";
import { enrollPost } from "../controllers/user-controller";

const userRouter = Router();

userRouter.post("/sign-up", enrollPost);

export { userRouter };
