import { Request, Response } from "express";
import httpStatus from "http-status";
import arduinoService from "../services/arduino-service";

export async function dataPost(req: Request, res: Response) {
  const { temperatura, data, hora } = req.body;
  try {
    const response = await arduinoService.dataPost({
      temperatura: temperatura,
      data: data,
      hora: hora,
    });
    return res.status(httpStatus.CREATED).send(response);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function dataGet(req: Request, res: Response) {
  try {
    const response = await arduinoService.dataGet();
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    if ((error as Error).name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send((error as Error).message);
    }

    return res.status(httpStatus.BAD_REQUEST);
  }
}
