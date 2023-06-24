import { Router } from "express";
import { dataGet, dataPost } from "../controllers/arduino-controller";

const arduinoRouter = Router();

arduinoRouter.post("/data", dataPost);
arduinoRouter.get("/latest", dataGet);

export { arduinoRouter };
