import React, { useState } from "react";
import { useModal } from "../ModalContext/ModalContextProvider";

import TodayListModal from "../TodayListModal/TodayListModal";
import { ReactComponent as AddIcon } from "../../images/svg/plus_circle.svg";
import {
  AddBtn,
  ContainerWater,
  InputContainer,
  InputRange,
  TextPercentage,
  TodayText,
  WrapperPercentage,
} from "./WaterRatioPanel.styled";

const WaterRatioPanel = () => {
  const [water, setWater] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const toggleModal = useModal();

  const handleChange = (evt) => {
    const value = parseInt((1250 / 2000) * 100);
    console.log(value);
    //Формула ((к-сть випитої води(із мого модального вікна)/добова норма води) * 100)
    setWater(value);
    setInputValue(parseInt(evt.target.value));
  };

  return (
    <ContainerWater>
      <InputContainer>
        <TodayText>Today</TodayText>
        <InputRange
          type="range"
          min="0"
          max="100"
          value={inputValue}
          onChange={handleChange}
        />
        <WrapperPercentage>
          <span>0%</span>
          <span>100%</span>
        </WrapperPercentage>
        <TextPercentage $percentPosition={inputValue}>{water}%</TextPercentage>
      </InputContainer>
      <AddBtn onClick={() => toggleModal(<TodayListModal />)} type="button">
        <AddIcon aria-label="add_water" />
        Add water
      </AddBtn>
    </ContainerWater>
  );
};

export default WaterRatioPanel;
