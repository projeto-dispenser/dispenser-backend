import { prisma } from "../../config/database";

async function findByNameEmail(email: string) {
  return prisma?.user.findFirst({ where: { email: email } });
}

async function createUser(email: string, password: string) {
  return prisma?.user.create({ data: { email: email, password: password } });
}

const userRepository = {
  findByNameEmail,
  createUser
};

export default userRepository;
