import { Router } from "express";
import { timePost } from "../controllers/dashboard-controller";
import { validateBody } from "../middlewares/validation-middleware";
import { timeSchema } from "../schemas/timeSchema";

const dashboardRouter = Router();

dashboardRouter.post("/", validateBody(timeSchema), timePost);

export { dashboardRouter };
