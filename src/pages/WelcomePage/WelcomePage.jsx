import WelcomeTracker from "../../components/WaterTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater";
import { WelcomeWrapper } from "./WelcomePage.styled";
import { MainContainer, MainWrapperPage } from "../HomePage/HomePage.styled";

const WelcomePage = () => {
  return (
    <MainWrapperPage $page="welcome">
      <MainContainer>
        <WelcomeWrapper>
          <WelcomeTracker />
          <WhyDrinkWater />
        </WelcomeWrapper>
      </MainContainer>
    </MainWrapperPage>
  );
};

export default WelcomePage;
