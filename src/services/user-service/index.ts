import { conflictError } from "../../errors/conflict-error";
import { notFoundError } from "../../errors/not-found-error";
import { unauthorizedError } from "../../errors/unauthorized-error";
import { InformationUser, UserId } from "../../protocols";
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

  const availableID = await userRepository.findAvailableId();
  if (availableID) {
    const { id } = availableID;
    await userRepository.deleteAvailableId(id);
    const hashedPassword = await bcrypt.hash(infoUser.password, 12);
    return userRepository.createUserWithId(id, infoUser.email, hashedPassword);
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

async function userDetailsGet(userId: UserId) {
  const user = await userRepository.findByUserId(userId);
  if (!user) {
    throw notFoundError();
  }

  return user;
}

async function deleteUser(userId: UserId) {
  const user = await userRepository.findByUserId(userId);
  if (user) {
    await userRepository.deleteUserById(userId);
    await userRepository.createAvailableId(userId);
  } else {
    throw notFoundError();
  }

  return user;
}

const userService = {
  enrollPost,
  loginPost,
  userDetailsGet,
  deleteUser,
};

export default userService;
