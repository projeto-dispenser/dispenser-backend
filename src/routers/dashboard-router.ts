import { Router } from "express";
import { timePost, timeUserGet } from "../controllers/dashboard-controller";
import { validateBody } from "../middlewares/validation-middleware";
import { timeSchema } from "../schemas/timeSchema";

const dashboardRouter = Router();

dashboardRouter.post("/", validateBody(timeSchema), timePost);
dashboardRouter.get("/:userId", timeUserGet);

export { dashboardRouter };
