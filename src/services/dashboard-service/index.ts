import { InformationDash } from "../../protocols";
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

const dashboardService = {
    timePost,
  };
  
  export default dashboardService;