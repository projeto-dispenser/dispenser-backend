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
    if ((error as Error).name === "ConflictError") {
      return res.status(httpStatus.CONFLICT).send((error as Error).message);
    }
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function loginPost(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const response = await userService.loginPost({ email, password });
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    if ((error as Error).name === "UnauthorizedError") {
      return res.status(httpStatus.UNAUTHORIZED).send((error as Error).message);
    }
    if ((error as Error).name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send((error as Error).message);
    }

    return res.status(httpStatus.BAD_REQUEST);
  }
}

export async function userDetailsGet(req: Request, res: Response) {
  try {
    const userId = Number(req.params.userId);
    const response = await userService.userDetailsGet(userId);
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    if ((error as Error).name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send((error as Error).message);
    }

    return res.status(httpStatus.BAD_REQUEST);
  }
}
