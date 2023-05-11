import { prisma } from "../../config/database";

async function findByDashUserId(userId: number) {
  return prisma.dashboard.findFirst({ where: { userId: userId } });
}

async function createDashboard(
  userId: number,
  schedule1: string,
  schedule2: string,
  schedule3: string,
  schedule4: string
) {
  return prisma?.dashboard.create({
    data: {
      userId: userId,
      schedule1: schedule1,
      schedule2: schedule2,
      schedule3: schedule3,
      schedule4: schedule4,
    },
  });
}

async function updateDashboard(
  id: number,
  infoDash: {
    schedule1: string;
    schedule2: string;
    schedule3: string;
    schedule4: string;
  }
) {
  return prisma.dashboard.update({
    where: { id },
    data: infoDash,
  });
}

async function findTimeByUserId(userId: number) {
  return prisma.dashboard.findFirst({ where: { userId: userId } });
}

const dashboardRepository = {
  findByDashUserId,
  createDashboard,
  updateDashboard,
  findTimeByUserId
};

export default dashboardRepository;
