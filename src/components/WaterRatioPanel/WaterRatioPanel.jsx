import { useModal } from "../ModalContext/ModalContextProvider";
import AddWaterModal from "../AddWaterModal/AddWaterModal";
import { ReactComponent as AddIcon } from "../../images/svg/plus_circle.svg";
import {
  AddBtn,
  ContainerWater,
  InputContainer,
  InputRange,
  TodayText,
  WrapperPercentage,
} from "./WaterRatioPanel.styled";
import { useSelector } from "react-redux";
import { selectorWaterInfo } from "../../redux/selectors";

const WaterRatioPanel = () => {
  const currentDayPercent = useSelector(selectorWaterInfo);
  const toggleModal = useModal();
  return (
    <ContainerWater>
      <InputContainer>
        <TodayText>Today</TodayText>
        <InputRange
          type="range"
          min="0"
          max="100"
          value={currentDayPercent.percent}
          disabled
        />
        <WrapperPercentage>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </WrapperPercentage>
      </InputContainer>
      <AddBtn
        onClick={() =>
          toggleModal(<AddWaterModal size="medium" title="Add water" />)
        }
        type="button"
      >
        <AddIcon aria-label="add_water" />
        Add water
      </AddBtn>
    </ContainerWater>
  );
};

export default WaterRatioPanel;
