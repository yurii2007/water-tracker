import styled from "styled-components";

export const ContainerWater = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 356px;
  }

  @media screen and (min-width: 1440px) {
    width: 391px;
  }
`;

export const TodayText = styled.p`
  color: var(--primary-blue);
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 8px;
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
    margin-left: 10px;
    margin-bottom: 4px;
  }
  &[type="range"]::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background: var(--white-color);
    border-radius: 50%;
    border: solid 1px var(--primary-blue);
    appearance: none;
    margin-top: -2px;
  }

  @media screen and (min-width: 768px) {
    &[type="range"] {
      width: 325px;
    }
  }

  @media screen and (min-width: 1440px) {
    &[type="range"] {
      width: 368px;
    }
  }
`;

export const WrapperPercentage = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: var(--primary-blue);
    font-size: 12px;
    line-height: 1.3;

    &::before {
      height: 8px;
      display: flex;
      content: "|";
      color: var(--secondary-lightblue);
      justify-content: center;
      align-items: center;
      margin-bottom: 4px;
      margin-top: 4px;
    }
    &:first-child {
      margin-left: 4px;
    }
    &:nth-child(2) {
      position: absolute;
      top: 80%;
      left: 49.5%;
      transform: translate(-50%, -50%);
      font-size: 16px;
      font-weight: 500;
      line-height: 1.25;
    }
  }
`;

export const AddBtn = styled.button`
  width: 100%;
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
  cursor: pointer;
  transition: background-color var(--animation-transition),
    box-shadow var(--animation-transition);

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
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
  }
`;


