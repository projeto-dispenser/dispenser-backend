import { prisma } from "../../config/database";

async function findByNameEmail(email: string) {
  return prisma?.user.findUnique({ where: { email: email } });
}

async function findSessionById(userId: number) {
  return prisma.session.findFirst({ where: { userId: userId } });
}

async function createUser(email: string, password: string) {
  return prisma?.user.create({ data: { email: email, password: password } });
}

async function createSession(token: string, userId: number) {
  return prisma.session.create({ data: { token: token, userId: userId } });
}

const userRepository = {
  findByNameEmail,
  findSessionById,
  createUser,
  createSession,
};

export default userRepository;
