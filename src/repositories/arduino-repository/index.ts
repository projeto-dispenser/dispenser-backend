import { prisma } from "../../config/database";

async function createDataArduino(
  temperatura: number
) {
  return prisma.dataArduino.create({
    data: {
      temperatura: temperatura,
    },
  });
}

async function findDataArduino() {
  return prisma.dataArduino.findFirst({ orderBy: { id: "desc" } });
}

const arduinoRepository = {
  createDataArduino,
  findDataArduino,
};

export default arduinoRepository;
