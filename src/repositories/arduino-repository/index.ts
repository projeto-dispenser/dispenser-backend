import { prisma } from "../../config/database";

async function createDataArduino(
  temperatura: number,
  data: string,
  hora: string
) {
  return prisma.dataArduino.create({
    data: {
      temperatura: temperatura,
      data: data,
      hora: hora
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
