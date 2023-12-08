import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import MonthStatsTable from "../../components/MonthStatsTable/MonthStatsTable";
import {
  DivWrapperPage,
  SectionWrapperTodayListCalendar,
} from "./HomePage.styled";
import TodayListModal from "../../components/TodayListModal/TodayListModal";

const HomePage = () => {
  return (
    <DivWrapperPage>
      <section>
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
