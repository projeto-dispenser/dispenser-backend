import Joi from "joi";

export const timeSchema = Joi.object({
  userId: Joi.number().required(),
  schedule1: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .optional(),
  schedule2: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .optional(),
  schedule3: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .optional(),
  schedule4: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .optional(),
});
