import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import MonthStatsTable from "../../components/MonthStatsTable/MonthStatsTable";
import DailyNorma from "../../components/DailyNorma/DailyNorma"
import { DivWrapperPage, SectionWrapperTodayListCalendar } from "./HomePage.styled";

const HomePage = () => {
  return (
    <DivWrapperPage>
      <section>
        <DailyNorma />
        <WaterRatioPanel />
      </section>
      <SectionWrapperTodayListCalendar>
        <MonthStatsTable />
      </SectionWrapperTodayListCalendar>
    </DivWrapperPage>
  );
};

export default HomePage;
