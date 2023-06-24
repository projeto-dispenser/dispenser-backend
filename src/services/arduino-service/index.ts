import { notFoundError } from "../../errors/not-found-error";
import { InformationArd } from "../../protocols";
import arduinoRepository from "../../repositories/arduino-repository";

async function dataPost(infoArd: InformationArd) {
  return arduinoRepository.createDataArduino(
    infoArd.temperatura,
    infoArd.data,
    infoArd.hora
  );
}

async function dataGet() {
  const dataArduino = await arduinoRepository.findDataArduino();
  if (!dataArduino) {
    throw notFoundError();
  }

  return dataArduino;
}

const arduinoService = {
  dataPost,
  dataGet
};

export default arduinoService;