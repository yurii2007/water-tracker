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

import { ReactComponent as CalendarIcon } from "../../images/svg/calendar.svg";
import { ReactComponent as GraphicIcon } from "../../images/svg/statistic_icon.svg";
import { ReactComponent as ToolsIcon } from "../../images/svg/instruments_icon.svg";

const primaryBlue = "var(--primary-blue)";

const WelcomeTracker = () => {
  return (
    <TrackerWrapper>
      <WelcomeTitle>Water consumption tracker</WelcomeTitle>
      <WelcomeSubTitle>Record daily water intake and track</WelcomeSubTitle>
      <BenefitsTitle>Tracker Benefits</BenefitsTitle>
      <BenefitsList>
        <BenefitsItem>
          <IconBox>
            <CalendarIcon
              width={"100%"}
              height={"100%"}
              stroke={{ color: primaryBlue }}
            />
          </IconBox>
          <BenefitsInfo>Habit drive</BenefitsInfo>
        </BenefitsItem>
        <BenefitsItem>
          <IconBox>
            <GraphicIcon
              width={"100%"}
              height={"100%"}
              stroke={{ color: primaryBlue }}
            />
          </IconBox>
          <BenefitsInfo>View statistics</BenefitsInfo>
        </BenefitsItem>
        <BenefitsItem>
          <IconBox>
            <ToolsIcon
              width={"100%"}
              height={"100%"}
              stroke={{ color: primaryBlue }}
            />
          </IconBox>
          <BenefitsInfo>Personal rate setting</BenefitsInfo>
        </BenefitsItem>
      </BenefitsList>
      <TryTrackerBtn>
        <TryTrackerLink to="/signup">Try Tracker</TryTrackerLink>
      </TryTrackerBtn>
    </TrackerWrapper>
  );
};

export default WelcomeTracker;
