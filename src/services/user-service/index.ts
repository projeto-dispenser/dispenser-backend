import { conflictError } from "../../errors/conflict-error";
import { notFoundError } from "../../errors/not-found-error";
import { unauthorizedError } from "../../errors/unauthorized-error";
import { InformationUser } from "../../protocols";
import userRepository from "../../repositories/user-repository";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

async function enrollPost(infoUser: InformationUser) {
  const userWithSameEmail = await userRepository.findByNameEmail(
    infoUser.email
  );

  if (userWithSameEmail) {
    throw conflictError();
  }

  const hashedPassword = await bcrypt.hash(infoUser.password, 12);
  return userRepository.createUser(infoUser.email, hashedPassword);
}

async function loginPost(infoUser: InformationUser) {
  const token = uuidv4();

  const user = await userRepository.findByNameEmail(infoUser.email);

  if (!user) {
    throw notFoundError();
  }

  const samePassword = await bcrypt.compare(infoUser.password, user.password);
  if (!samePassword) {
    throw unauthorizedError();
  }

  const session = await userRepository.findSessionById(user.id);
  if (session) {
    return session;
  }

  return await userRepository.createSession(token, user.id);
}

const userService = {
  enrollPost,
  loginPost,
};

export default userService;
