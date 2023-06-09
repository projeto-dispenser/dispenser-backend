import { Router } from "express";
import { deleteUser, enrollPost, loginPost, userDetailsGet } from "../controllers/user-controller";
import { userSchema } from "../schemas/userSchema";
import { validateBody } from "../middlewares/validation-middleware";

const userRouter = Router();

userRouter.post("/sign-up", validateBody(userSchema), enrollPost);
userRouter.post("/sign-in", loginPost);
userRouter.get("/:userId", userDetailsGet);
userRouter.delete("/:userId", deleteUser);

export { userRouter };
