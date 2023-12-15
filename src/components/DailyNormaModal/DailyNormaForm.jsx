import { useDispatch } from "react-redux";
import { Notify } from "notiflix";

import { updateWaterRateThunk } from "../../redux/User/UserThunk";
import { useModal } from "../../context/ModalContext/ModalContextProvider"; 

import { FormStyles } from "./DailyNormaModal.styled";
import { BtnSave } from "../SettingModal/SettingModal.styled";
import { updateDailyNorma } from "../../redux/Water/WaterSlice";

const DailyNormaForm = () => {
  const dispatch = useDispatch();
  const toggleModal = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWaterRate = e.target.elements.amount.value * 1000;
    dispatch(updateWaterRateThunk(newWaterRate))
      .unwrap()
      .then(() => {
        dispatch(updateDailyNorma(newWaterRate));
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
