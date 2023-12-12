import WelcomeTracker from "../../components/WaterTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater";
import { WelcomeWrapper } from "./WelcomePage.styled";
import { DivWrapperPage } from "../HomePage/HomePage.styled";

const WelcomePage = () => {
  return (
    <DivWrapperPage $page="welcome">
      <section>
        <WelcomeWrapper>
          <WelcomeTracker />
          <WhyDrinkWater />
        </WelcomeWrapper>
      </section>
    </DivWrapperPage>
  );
};

export default WelcomePage;
