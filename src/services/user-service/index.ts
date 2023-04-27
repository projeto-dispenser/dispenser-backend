import { badRequestError } from "../../errors/bad-request-error";
import { conflictError } from "../../errors/conflict-error";
import { InformationUser } from "../../protocols";
import userRepository from "../../repositories/user-repository";
import { userSchema } from "../../schemas/userSchema";
import bcrypt from "bcrypt";

async function enrollPost(infoUser: InformationUser) {
  await validateUniqueEmail(infoUser.email);
  await validationSchema(infoUser.email, infoUser.password);

  const hashedPassword = await bcrypt.hash(infoUser.password, 12);
  return userRepository.createUser(infoUser.email, hashedPassword);
}

async function validateUniqueEmail(email: string) {
  const userWithSameEmail = await userRepository.findByNameEmail(email);

  if (userWithSameEmail) {
    throw conflictError();
  }
}

async function validationSchema(email: string, password: string) {
  const { error } = userSchema.validate(
    { email, password },
    { abortEarly: false }
  );
  if (error) {
    throw badRequestError();
  }
}

const userService = {
  enrollPost,
};

export default userService;
