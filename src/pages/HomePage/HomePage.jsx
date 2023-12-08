import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import MonthStatsTable from "../../components/MonthStatsTable/MonthStatsTable";
import { DivWrapperPage, SectionWrapperTodayListCalendar } from "./HomePage.styled";

const HomePage = () => {
  return (
    <DivWrapperPage>
      <section>
        <WaterRatioPanel />
      </section>
      <SectionWrapperTodayListCalendar>
        <MonthStatsTable />
      </SectionWrapperTodayListCalendar>
    </DivWrapperPage>
  );
};

export default HomePage;
