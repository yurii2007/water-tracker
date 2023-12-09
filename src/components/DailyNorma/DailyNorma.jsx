import { useSelector } from "react-redux";

import { useModal } from "../ModalContext/ModalContextProvider.jsx";
import { selectDailyNorma } from "../../redux/selectors.js";

import DailyNormaModal from "../DailyNormaModal/DailyNormaModal";
import { DailyNormaContainer, DailyNormaContainerWaterStats } from "./DailyNorma.styled";

const DailyNorma = () => {
  const toggleModal = useModal();
  const dailyNorma = useSelector(selectDailyNorma);

  return (
    <DailyNormaContainer>
      <p>My daily norma</p>
      <DailyNormaContainerWaterStats>
        <span>{dailyNorma / 1000} L</span>
        <button onClick={() => toggleModal(<DailyNormaModal />)} type="button">
          Edit
        </button>
      </DailyNormaContainerWaterStats>
    </DailyNormaContainer>
  );
};

export default DailyNorma;