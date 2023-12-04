import {
  WdwWrapper,
  WdwTitle,
  WdwList,
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
      <WdwList>
        <WdwItem>
          <WdwIconBox>
            <Circle
              width={8}
              height={8}
              fill={{ color: primaryBlue }}
              stroke={{ color: primaryBlue }}
            />
          </WdwIconBox>
          <WdwItemText>Supply of nutrients to all organs</WdwItemText>
        </WdwItem>
        <WdwItem>
          <WdwIconBox>
            <Circle
              width={8}
              height={8}
              fill={{ color: primaryBlue }}
              stroke={{ color: primaryBlue }}
            />
          </WdwIconBox>
          <WdwItemText>Providing oxygen to the lungs</WdwItemText>
        </WdwItem>
        <WdwItem>
          <WdwIconBox>
            <Circle
              width={8}
              height={8}
              fill={{ color: primaryBlue }}
              stroke={{ color: primaryBlue }}
            />
          </WdwIconBox>
          <WdwItemText>Maintaining the work of the heart</WdwItemText>
        </WdwItem>
        <WdwItem>
          <WdwIconBox>
            <Circle
              width={8}
              height={8}
              fill={{ color: primaryBlue }}
              stroke={{ color: primaryBlue }}
            />
          </WdwIconBox>
          <WdwItemText>Release of processed substances</WdwItemText>
        </WdwItem>
        <WdwItem>
          <WdwIconBox>
            <Circle
              width={8}
              height={8}
              fill={{ color: primaryBlue }}
              stroke={{ color: primaryBlue }}
            />
          </WdwIconBox>
          <WdwItemText>
            Ensuring the stability of the internal environment
          </WdwItemText>
        </WdwItem>
        <WdwItem>
          <WdwIconBox>
            <Circle
              width={8}
              height={8}
              fill={{ color: primaryBlue }}
              stroke={{ color: primaryBlue }}
            />
          </WdwIconBox>
          <WdwItemText>Maintaining within the normal temperature</WdwItemText>
        </WdwItem>
        <WdwItem>
          <WdwIconBox>
            <Circle
              width={8}
              height={8}
              fill={{ color: primaryBlue }}
              stroke={{ color: primaryBlue }}
            />
          </WdwIconBox>
          <WdwItemText>
            Maintaining an immune system capable of resisting disease
          </WdwItemText>
        </WdwItem>
      </WdwList>
    </WdwWrapper>
  );
};

export default WhyDrinkWater;
