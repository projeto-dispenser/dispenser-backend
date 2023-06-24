import { notFoundError } from "../../errors/not-found-error";
import { InformationDash, UserId } from "../../protocols";
import dashboardRepository from "../../repositories/dashboard-repository";

async function timePost(infoDash: InformationDash) {
  const existDashboard = await dashboardRepository.findByDashUserId(
    infoDash.userId
  );
  if (existDashboard) {
    return dashboardRepository.updateDashboard(existDashboard.id, infoDash);
  }

  return dashboardRepository.createDashboard(
    infoDash.userId,
    infoDash.schedule1,
    infoDash.schedule2,
    infoDash.schedule3,
    infoDash.schedule4
  );
}

async function timeUserGet(userId: UserId) {
  const timeUser = await dashboardRepository.findTimeByUserId(userId);
  if (!timeUser) {
    throw notFoundError();
  }

  return timeUser;
}

async function timeGet() {
  const timeUser = await dashboardRepository.findTime();
  if (!timeUser) {
    throw notFoundError();
  }

  return timeUser;
}

const dashboardService = {
  timePost,
  timeUserGet,
  timeGet
};

export default dashboardService;
