import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import MonthStatsTable from "../../components/MonthStatsTable/MonthStatsTable";
import DailyNorma from "../../components/DailyNorma/DailyNorma";
import {
  MainWrapperPage,
  SectionWrapperDailyNorma,
  SectionWrapperTodayListCalendar,
  MainContainer,
} from "./HomePage.styled";
import TodayListModal from "../../components/TodayListModal/TodayListModal";

const HomePage = () => {
  return (
    <MainWrapperPage>
      <MainContainer>
        <SectionWrapperDailyNorma>
          <DailyNorma />
          <WaterRatioPanel />
        </SectionWrapperDailyNorma>
        <SectionWrapperTodayListCalendar>
          <TodayListModal />
          <MonthStatsTable />
        </SectionWrapperTodayListCalendar>
      </MainContainer>
    </MainWrapperPage>
  );
};

export default HomePage;
