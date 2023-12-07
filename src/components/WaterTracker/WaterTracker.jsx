import { routes } from "../../constants/routes";

import {
  TrackerWrapper,
  WelcomeTitle,
  WelcomeSubTitle,
  BenefitsTitle,
  BenefitsList,
  BenefitsItem,
  BenefitsInfo,
  TryTrackerBtn,
  TryTrackerLink,
  IconBox,
} from "./WaterTracker.styled";
import { waterTrackerInfo } from "../../constants/whyDrinkWater";

const WelcomeTracker = () => {
  return (
    <TrackerWrapper>
      <WelcomeTitle>Water consumption tracker</WelcomeTitle>
      <WelcomeSubTitle>Record daily water intake and track</WelcomeSubTitle>
      <BenefitsTitle>Tracker Benefits</BenefitsTitle>
      <BenefitsList>
        {waterTrackerInfo.map((element, idx) => (
          <BenefitsItem key={idx}>
            <IconBox>{element.icon}</IconBox>
            <BenefitsInfo>{element.descriptions}</BenefitsInfo>
          </BenefitsItem>
        ))}
      </BenefitsList>
      <TryTrackerBtn>
        <TryTrackerLink to={routes.SignUp}>Try Tracker</TryTrackerLink>
      </TryTrackerBtn>
    </TrackerWrapper>
  );
};

export default WelcomeTracker;
