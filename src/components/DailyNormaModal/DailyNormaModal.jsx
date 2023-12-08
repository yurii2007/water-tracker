import DailyNormaCalculate from "./DailyNormaCalculate";
import DailyNormaForm from "./DailyNormaForm";
import DailyNormaHeading from "./Heading/DailyNormaHeading";
import { ModalBox } from "./DailyNormaModal.styled";

const DailyNormaModal = () => {
  return (
    <ModalBox>
      <DailyNormaHeading />
      <DailyNormaCalculate />
      <DailyNormaForm />
    </ModalBox>
  );
};

export default DailyNormaModal;
