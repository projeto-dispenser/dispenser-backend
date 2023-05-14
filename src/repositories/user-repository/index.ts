import { prisma } from "../../config/database";

async function findByNameEmail(email: string) {
  return prisma?.user.findUnique({ where: { email: email } });
}

async function findSessionById(userId: number) {
  return prisma.session.findFirst({ where: { userId: userId } });
}

async function findByUserId(userId: number) {
  return prisma.user.findFirst({ where: { id: userId } });
}

async function findAvailableId() {
  return prisma.availableId.findFirst({
    select: { id: true },
    orderBy: { id: "asc" },
  });
}

async function createUser(email: string, password: string) {
  return prisma?.user.create({ data: { email: email, password: password } });
}

async function createUserWithId(id: number, email: string, password: string) {
  return prisma?.user.create({
    data: { id: id, email: email, password: password },
  });
}

async function createSession(token: string, userId: number) {
  return prisma.session.create({ data: { token: token, userId: userId } });
}

async function deleteUserById(userId: number) {
  await prisma.dashboard.deleteMany({ where: { userId } });
  await prisma.session.deleteMany({ where: { userId } });
  return prisma.user.delete({ where: { id: userId } });
}

async function deleteAvailableId(id: number) {
  await prisma.availableId.delete({ where: { id } });
}

async function createAvailableId(userId: number) {
  await prisma.availableId.create({ data: { id: userId } });
}

const userRepository = {
  findByNameEmail,
  findSessionById,
  findByUserId,
  findAvailableId,
  createUser,
  createUserWithId,
  createSession,
  deleteUserById,
  deleteAvailableId,
  createAvailableId,
};

export default userRepository;
