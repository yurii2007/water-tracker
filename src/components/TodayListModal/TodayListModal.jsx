import {
  BtnSaveWrapper,
  BtnWrapper,
  FormStyled,
  HeaderWrapper,
  ModalContainer,
} from "./TodayListModal.styled";
// import { ReactComponent as IconGlass } from "../../images/svg/glass_of_water.svg";
// import { ReactComponent as IncrementIcon } from "../../images/svg/plus.svg";
// import { ReactComponent as DecrementIcon } from "../../images/svg/minus.svg";
import { useState } from "react";
import { ReactComponent as CloseBtnIcon } from "../../images/svg/x.svg";

const formatTime = (time) => {
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};

const TodayListModal = ({ closeModal }) => {
  const [value, setValue] = useState(0);
  const [selectedTime, setSelectedTime] = useState(new Date());

  // const handleTimeChange = (evt) => {
  //   const selectedHour = parseInt(evt.target.value.substring(0, 2), 10);
  //   const selectedMinute = parseInt(evt.target.value.substring(3), 10);
  //   const newTime = new Date(selectedTime);
  //   newTime.setHours(selectedHour);
  //   newTime.setMinutes(selectedMinute);
  //   setSelectedTime(newTime);
  // };

  const hours = Array.from({ length: 24 }, (_, index) => index);
  const minutes = Array.from({ length: 12 }, (_, index) => index * 5);

  const handleUpdate = (evt) => {
    const { name } = evt.target;
    console.log(name);
    switch (name) {
      case "decrement":
        setValue((state) => state - 50);
        break;
      case "increment":
        setValue((state) => state + 50);
        break;
      case "input":
        setValue(evt.target.value);
        break;
      default:
    }
  };

  const rettm = formatTime(selectedTime);
  console.log(rettm);
  return (
    <ModalContainer>
      <HeaderWrapper>
        <h3>Add water</h3>
        <button onClick={closeModal} type="button" aria-label="Close">
          <CloseBtnIcon />
        </button>
      </HeaderWrapper>
      {/* <div>
        <IconGlass />
        <p></p>
        <p></p>
      </div> */}

      <p>Choose a value:</p>
      <p>Amount of water:</p>
      <BtnWrapper>
        <button
          type="button"
          name="decrement"
          onClick={handleUpdate}
          disabled={value === 0}
        >
          {/* <DecrementIcon aria-label="decrement_button" /> */}
        </button>
        <span>{value}ml</span>
        <button type="button" name="increment" onClick={handleUpdate}>
          {/* <IncrementIcon aria-label="increment_button" /> */}
          {/* <StyledIncrementIcon/> */}
        </button>
      </BtnWrapper>
      <FormStyled>
        <label>
          Recording time:
          <select
            value={rettm}
            onChange={(evt) => {
              const [hours, minutes] = evt.target.value.split(":");
              const newTime = new Date(selectedTime);
              newTime.setHours(Number(hours));
              newTime.setMinutes(Number(minutes));
              setSelectedTime(newTime);
            }}
          >
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
            max="15000"
          />
        </label>
        <BtnSaveWrapper>
          <p>{value}</p>
          <button>Save</button>
        </BtnSaveWrapper>
      </FormStyled>
    </ModalContainer>
  );
};

export default TodayListModal;
