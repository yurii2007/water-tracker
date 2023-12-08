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

const WaterRatioPanel = () => {
  // const [inputValue, setInputValue] = useState(0);
  const toggleModal = useModal();

  // const handleChange = (evt) => {
  //   const value = parseInt((1250 / 2000) * 100);
  //   //Формула ((к-сть випитої води(із мого модального вікна)/добова норма води) * 100)
  //   setWater(value);
  //   setInputValue(parseInt(evt.target.value));
  // };

  return (
    <ContainerWater>
      <InputContainer>
        <TodayText>Today</TodayText>
        <InputRange type="range" min="0" max="100" value={30} disabled />
        <WrapperPercentage>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </WrapperPercentage>
      </InputContainer>
      <AddBtn onClick={() => toggleModal(<AddWaterModal />)} type="button">
        <AddIcon aria-label="add_water" />
        Add water
      </AddBtn>
    </ContainerWater>
  );
};

export default WaterRatioPanel;
