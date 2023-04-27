import { Request, Response } from "express";
import httpStatus from "http-status";
import userService from "../services/user-service";

export async function enrollPost(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const response = await userService.enrollPost({ email, password });
    return res
      .status(httpStatus.CREATED)
      .send({ id: response.id, email: response.email });
  } catch (error) {
    console.log(error);
    if ((error as Error).name === "ConflictError") {
      return res.status(httpStatus.CONFLICT).send((error as Error).message);
    }
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
