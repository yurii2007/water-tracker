import WelcomeTracker from "../../components/WaterTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater";
import { WelcomeWrapper } from "./WelcomePage.styled";
import { MainWrapperPage } from "../HomePage/HomePage.styled";

const WelcomePage = () => {
  return (
    <MainWrapperPage $page="welcome">
      <WelcomeWrapper>
        <WelcomeTracker />
        <WhyDrinkWater />
      </WelcomeWrapper>
    </MainWrapperPage>
  );
};

export default WelcomePage;
