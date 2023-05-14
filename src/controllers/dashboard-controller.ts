import { Request, Response } from "express";
import httpStatus from "http-status";
import dashboardService from "../services/dashboard-service";

export async function timePost(req: Request, res: Response) {
  const { userId, schedule1, schedule2, schedule3, schedule4 } = req.body;
  try {
    const response = await dashboardService.timePost({
      userId,
      schedule1,
      schedule2,
      schedule3,
      schedule4,
    });
    return res.status(httpStatus.CREATED).send(response);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function timeUserGet(req: Request, res: Response) {
  try {
    const userId = Number(req.params.userId);
    const response = await dashboardService.timeUserGet(userId);
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    if ((error as Error).name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send((error as Error).message);
    }

    return res.status(httpStatus.BAD_REQUEST);
  }
}

export async function allTimeGet(req: Request, res: Response) {
  try {
    const response = await dashboardService.timeGet();
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    if ((error as Error).name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send((error as Error).message);
    }

    return res.status(httpStatus.BAD_REQUEST);
  }
}