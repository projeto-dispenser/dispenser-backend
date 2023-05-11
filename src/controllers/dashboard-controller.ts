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
