import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import MonthStatsTable from "../../components/MonthStatsTable/MonthStatsTable";
import DailyNorma from "../../components/DailyNorma/DailyNorma";
import {
  MainWrapperPage,
  SectionWrapperDailyNorma,
  SectionWrapperTodayListCalendar,
} from "./HomePage.styled";
import TodayListModal from "../../components/TodayListModal/TodayListModal";

const HomePage = () => {
  return (
    <MainWrapperPage>
      <SectionWrapperDailyNorma>
        <DailyNorma />
        <WaterRatioPanel />
      </SectionWrapperDailyNorma>
      <SectionWrapperTodayListCalendar>
        <TodayListModal />
        <MonthStatsTable />
      </SectionWrapperTodayListCalendar>
    </MainWrapperPage>
  );
};

export default HomePage;
