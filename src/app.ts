import express, { Express } from "express";
import cors from "cors";
import { loadEnv } from "./config/env";
import { connectDB, disconnectDB } from "./config/database";
import { userRouter } from "./routers/user-router";
import { dashboardRouter } from "./routers/dashboard-router";
import { arduinoRouter } from "./routers/arduino-router";

loadEnv();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/test", (_req, res) => res.send("OK!"))
  .use("/", userRouter)
  .use("/time", dashboardRouter)
  .use("/api", arduinoRouter);

export async function init(): Promise<Express> {
  connectDB();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
