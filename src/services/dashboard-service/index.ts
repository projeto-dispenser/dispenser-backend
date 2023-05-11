import { notFoundError } from "../../errors/not-found-error";
import { InformationDash, UserId } from "../../protocols";
import dashboardRepository from "../../repositories/dashboard-repository";

async function timePost(infoDash: InformationDash) {
  const existDashboard = await dashboardRepository.findByDashUserId(infoDash.userId);
  console.log(existDashboard)
  if(existDashboard){
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
  const user = await dashboardRepository.findTimeByUserId(userId);
  if (!user) {
    throw notFoundError();
  }

  return user;
}

const dashboardService = {
    timePost,
    timeUserGet
  };
  
  export default dashboardService;