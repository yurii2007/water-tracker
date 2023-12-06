import { whyDrinkWater } from "../../constants/whyDrinkWater";

import {
  WdwWrapper,
  WdwTitle,
  WdwItem,
  WdwItemText,
  WdwIconBox,
} from "./WhyDrinkWater.styled";
import { ReactComponent as Circle } from "../../images/svg/plus_circle.svg";

const primaryBlue = "var(--primary-blue)";

const WhyDrinkWater = () => {
  return (
    <WdwWrapper>
      <WdwTitle>Why drink water</WdwTitle>
      <ul>
        {whyDrinkWater.map((element, idx) => (
          <WdwItem key={idx}>
            <WdwIconBox>
              <Circle width={8} height={8} fill={primaryBlue} />
            </WdwIconBox>
            <WdwItemText>{element}</WdwItemText>
          </WdwItem>
        ))}
      </ul>
    </WdwWrapper>
  );
};

export default WhyDrinkWater;
