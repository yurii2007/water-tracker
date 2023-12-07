import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import MonthStatsTable from "../../components/MonthStatsTable/MonthStatsTable";

const HomePage = () => {
  return (
    <div>
      <section>
        <WaterRatioPanel />
      </section>
      <section>
        <MonthStatsTable />
      </section>
    </div>
  );
};

export default HomePage;
