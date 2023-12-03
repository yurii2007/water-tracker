import { ModalContainer } from "./TodayListModal.styled";
// import { ReactComponent as IconGlass } from "../../images/svg/glass_of_water.svg";
import { ReactComponent as IncrementIcon } from "../../images/svg/plus.svg";
import { ReactComponent as DecrementIcon } from "../../images/svg/minus.svg";
import { useState } from "react";
// import { ReactComponent as CloseBtnIcon } from "../../images/svg/";

const TodayListModal = ({ closeModal }) => {
  const [value, setValue] = useState(0);
  // const [time, setTime] = useState(new Date());

  //   const hours = String(time.getHours()).padStart(2, "0");
  //   const minutes = String(time.getMinutes()).padStart(2, "0");

  //   return `${hours}:${minutes}`;
  // }

  const handleUpdate = (evt) => {
    const { name } = evt.target;
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

  return (
    <ModalContainer>
      <div>
        <h3>Add water</h3>
        <button onClick={closeModal} type="button" aria-label="Close"></button>
      </div>
      {/* <div>
        <IconGlass />
        <p></p>
        <p></p>
      </div> */}
      <div>
        <p>Choose a value:</p>
        <p>Amount of water:</p>
        <button
          type="button"
          name="decrement"
          onClick={handleUpdate}
          disabled={value === 0}
        >
          <DecrementIcon aria-label="decrement_button" />
        </button>
        <span>{value}ml</span>
        <button type="button" name="increment" onClick={handleUpdate}>
          <IncrementIcon aria-label="increment_button" />
        </button>
      </div>
      <form>
        <label>
          Recording time:
          <input />
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
        <div>
          <p>{value}</p>
          <button>Save</button>
        </div>
      </form>
    </ModalContainer>
  );
};

export default TodayListModal;
