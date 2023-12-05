import styled from "styled-components";

export const TextPercentage = styled.span`
  position: absolute;
  top: 96%;
  left: ${(props) => props.percentPosition}%;
  transform: translateX(-50%);
  color: var(--primary-blue);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
`;

export const ContainerWater = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TodayText = styled.p`
  color: var(--primary-blue);
  font-size: 18px;
  line-height: 1.3;
`;

export const InputRange = styled.input`
  &[type="range"] {
    width: 256px;
    height: 8px;
    border-radius: 10px;
    appearance: none;
    background: linear-gradient(
      to right,
      #9ebbff 0%,
      #9ebbff ${(props) => props.value}%,
      #d7e3ff ${(props) => props.value}%,
      #d7e3ff 100%
    );
  }
`;

export const WrapperPercentage = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: var(--primary-blue);

    font-size: 12px;
    line-height: 1.3;
    position: relative;

    &::before {
      display: flex;
      content: "|";
      color: blue;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const AddBtn = styled.button`
  width: 178px;
  display: inline-flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  height: 44px;
  gap: 10px;
  border-radius: 10px;
  border: none;
  background-color: var(--primary-blue);
  color: var(--white-color);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  svg {
    stroke: var(--white-color);
  }

  &:hover,
  &:focus {
    color: var(--secondary-yellow);

    svg {
      stroke: var(--secondary-yellow);
    }
  }
`;
