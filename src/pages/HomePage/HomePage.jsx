import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import MonthStatsTable from "../../components/MonthStatsTable/MonthStatsTable";
import DailyNorma from "../../components/DailyNorma/DailyNorma";
import { DivWrapperPage, SectionWrapperTodayListCalendar } from "./HomePage.styled";
import TodayListModal from "../../components/TodayListModal/TodayListModal";

const HomePage = () => {
  return (
    <DivWrapperPage>
      <section>
        <DailyNorma />
        <WaterRatioPanel />
      </section>
      <SectionWrapperTodayListCalendar>
        <TodayListModal />
        <MonthStatsTable />
      </SectionWrapperTodayListCalendar>
    </DivWrapperPage>
  );
};

export default HomePage;
