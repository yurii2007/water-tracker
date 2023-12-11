import { useDispatch } from "react-redux";
import { Notify } from "notiflix";

import { updateWaterRateThunk } from "../../redux/User/UserThunk";
import { useModal } from "../ModalContext/ModalContextProvider";

import { FormStyles } from "./DailyNormaModal.styled";
import { BtnSave } from "../SettingModal/SettingModal.styled";

const DailyNormaForm = () => {
  const dispatch = useDispatch();
  const toggleModal = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWaterRate = e.target.elements.amount.value * 1000;
    dispatch(updateWaterRateThunk(newWaterRate))
      .unwrap()
      .then(() => {
        Notify.success("Daily norma was successfully updated");
        toggleModal();
      })
      .catch((error) => {
        Notify.failure(error);
      });
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      <label>
        Write down how much water you will drink(in liters):
        <input type="number" name="amount" min={1} max={15} step={0.1} required />
      </label>
      <BtnSave type="submit">Save</BtnSave>
    </FormStyles>
  );
};

export default DailyNormaForm;
