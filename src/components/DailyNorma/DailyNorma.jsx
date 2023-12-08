import { useSelector } from "react-redux";

import { useModal } from "../ModalContext/ModalContextProvider.jsx";
import { selectDailyNorma } from "../../redux/selectors.js";

import DailyNormaModal from "../DailyNormaModal/DailyNormaModal";
import {
  DailyNormaButton,
  DailyNormaContainer,
  DailyNormaContainerWaterStat,
  DailyNormaHeader,
  DailyNormaWaterNorma,
} from "./DailyNorma.styled";

const DailyNorma = () => {
  const toggleModal = useModal();
  const dailyNorma = useSelector(selectDailyNorma);

  return (
    <DailyNormaContainer>
      <DailyNormaHeader>My daily norma</DailyNormaHeader>
      <DailyNormaContainerWaterStat>
        <DailyNormaWaterNorma>{dailyNorma / 1000}L</DailyNormaWaterNorma>
        <DailyNormaButton onClick={() => toggleModal(<DailyNormaModal />)}>
          Edit
        </DailyNormaButton>
      </DailyNormaContainerWaterStat>
    </DailyNormaContainer>
  );
};

export default DailyNorma;
