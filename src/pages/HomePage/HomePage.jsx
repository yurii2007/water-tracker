import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import MonthStatsTable from "../../components/MonthStatsTable/MonthStatsTable";
import DailyNorma from "../../components/DailyNorma/DailyNorma";
import {
  DivWrapperPage,
  SectionWrapperDailyNorma,
  SectionWrapperTodayListCalendar,
} from "./HomePage.styled";
import TodayListModal from "../../components/TodayListModal/TodayListModal";

const HomePage = () => {
  return (
    <DivWrapperPage>
      <SectionWrapperDailyNorma>
        <DailyNorma />
        <WaterRatioPanel />
      </SectionWrapperDailyNorma>
      <SectionWrapperTodayListCalendar>
        <TodayListModal />
        <MonthStatsTable />
      </SectionWrapperTodayListCalendar>
    </DivWrapperPage>
  );
};

export default HomePage;
