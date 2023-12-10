import { useState } from "react";
import { useModal } from "../ModalContext/ModalContextProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Notiflix from "notiflix";
import { useDispatch } from "react-redux";
import { addWaterThunk, getTodayThunk } from "../../redux/Water/WaterThunk";
import {
  AmountText,
  BtnSaveWrapper,
  BtnWrapper,
  FormStyled,
  HeaderWrapper,
  ModalContainer,
  StyledDateWrapper,
  StyledDecrementIcon,
  StyledIncrementIcon,
  TimeGlobalStyles,
  ValueText,
} from "./AddWaterModal.styled";
import { ReactComponent as CloseBtnIcon } from "../../images/svg/x.svg";

const AddWaterModal = () => {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState(new Date());
  const toggleModal = useModal();

  const dispatch = useDispatch();

  const handleUpdate = (evt) => {
    const { name } = evt.currentTarget;
    switch (name) {
      case "decrement":
        setValue((state) => state - 50);
        break;
      case "increment":
        setValue((state) => state + 50);
        break;
      case "input":
        setValue(Number(evt.target.value));
        break;
      default:
    }
  };

  const handleSave = async (evt) => {
    evt.preventDefault();
    if (value === 0) {
      Notiflix.Notify.warning("Please enter a non-zero value for water.");
      return;
    }
    const newTime = new Date(time);
    const saveWater = { amount: value, time: newTime };

    dispatch(addWaterThunk(saveWater));
    dispatch(getTodayThunk());
    toggleModal();
  };

  return (
    <ModalContainer>
      <HeaderWrapper>
        <h3>Add water</h3>
        <button onClick={() => toggleModal()} type="button" aria-label="Close">
          <CloseBtnIcon />
        </button>
      </HeaderWrapper>
      <ValueText>Choose a value:</ValueText>
      <AmountText>Amount of water:</AmountText>
      <BtnWrapper>
        <button
          type="button"
          name="decrement"
          onClick={handleUpdate}
          disabled={value === 0}
        >
          <StyledDecrementIcon aria-label="decrement_button" />
        </button>
        <span>{value}ml</span>
        <button type="button" name="increment" onClick={handleUpdate}>
          <StyledIncrementIcon aria-label="increment_button" />
        </button>
      </BtnWrapper>
      <FormStyled>
        <label>
          Recording time:
          <StyledDateWrapper>
            <DatePicker
              selected={time}
              onChange={(date) => {
                setTime(date);
              }}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={5}
              dateFormat="hh:mm"
              minTime={new Date(2023, 1, 1, 0, 0)}
              maxTime={new Date()}
              timeZone="UTC"
            />
            <TimeGlobalStyles />
          </StyledDateWrapper>
        </label>
        <label>
          Enter the value of the water used:
          <input
            name="input"
            value={value}
            onChange={handleUpdate}
            min="1"
            max="5000"
          />
        </label>
        <BtnSaveWrapper>
          <p>{value}ml</p>
          <button onClick={handleSave}>Save</button>
        </BtnSaveWrapper>
      </FormStyled>
    </ModalContainer>
  );
};

export default AddWaterModal;
