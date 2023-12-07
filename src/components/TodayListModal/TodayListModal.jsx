import { useDispatch } from "react-redux";
import { useState } from "react";
import { addWaterThunk, getTodayThunk } from "../../redux/Water/WaterThunk";
import { useModal } from "../ModalContext/ModalContextProvider";
import { ReactComponent as CloseBtnIcon } from "../../images/svg/x.svg";
import {
  AmountText,
  BtnSaveWrapper,
  BtnWrapper,
  FormStyled,
  HeaderWrapper,
  ModalContainer,
  StyledDecrementIcon,
  StyledIncrementIcon,
  ValueText,
} from "./TodayListModal.styled";

const formatTime = (time) => {
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};

const TodayListModal = () => {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState(new Date());
  const toggleModal = useModal();

  const dispatch = useDispatch();

  const hours = Array.from({ length: 24 }, (_, index) => index);
  const minutes = Array.from({ length: 12 }, (_, index) => index * 5);

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
    const newTime = new Date(time);
    const saveWater = { amount: value, time: newTime };

    await dispatch(addWaterThunk(saveWater));
    await dispatch(getTodayThunk());
    toggleModal();
  };

  return (
    <ModalContainer>
      <HeaderWrapper>
        <h3>Add water</h3>
        <button onClick={()=>toggleModal()} type="button" aria-label="Close">
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
          {/* <DecrementIcon aria-label="decrement_button" /> */}
        </button>
        <span>{value}ml</span>
        <button type="button" name="increment" onClick={handleUpdate}>
          <StyledIncrementIcon aria-label="increment_button" />
        </button>
      </BtnWrapper>
      <FormStyled>
        <label>
          Recording time:
          <select
            value={formatTime(time)}
            onChange={(evt) => {
              const [hours, minutes] = evt.target.value.split(":");
              const newTime = new Date(time);
              newTime.setHours(Number(hours));
              newTime.setMinutes(Number(minutes));
              setTime(newTime);
            }}
          >
            <option value={formatTime(time)}>{formatTime(time)}</option>
            {hours.map((hour) =>
              minutes.map((minute) => {
                const formattedHour = hour < 10 ? `0${hour}` : hour;
                const formattedMinute = minute < 10 ? `0${minute}` : minute;
                const timeValue = `${formattedHour}:${formattedMinute}`;
                return (
                  <option key={timeValue} value={timeValue}>
                    {timeValue}
                  </option>
                );
              })
            )}
          </select>
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
          <p>{value}</p>
          <button onClick={handleSave}>Save</button>
        </BtnSaveWrapper>
      </FormStyled>
    </ModalContainer>
  );
};

export default TodayListModal;
