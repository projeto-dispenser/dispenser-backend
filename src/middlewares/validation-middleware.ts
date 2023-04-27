import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

export function validateBody(schema: ObjectSchema) {
  return validate(schema);
}

function validate(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (!error) {
      next();
    } else {
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join("\n");
      return res.status(httpStatus.BAD_REQUEST).send(errorMessage);
    }
  };
}
