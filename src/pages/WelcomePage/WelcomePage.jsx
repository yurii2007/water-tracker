import { Wrapper } from "./WelcomePage.styled";
import WelcomeTracker from "../../components/WaterTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater";
import { WelcomeWrapper } from "./WelcomePage.styled";

const WelcomePage = () => {
  return (
    <Wrapper>
      <WelcomeWrapper>
        <WelcomeTracker />
        <WhyDrinkWater />
      </WelcomeWrapper>
    </Wrapper>
  );
};

export default WelcomePage;
