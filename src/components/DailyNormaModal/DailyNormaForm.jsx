import { useDispatch } from "react-redux";

import { updateWaterRateThunk } from "../../redux/User/UserThunk";

const DailyNormaForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWaterRate = e.target.elements.amount.value * 1000;
    dispatch(updateWaterRateThunk(newWaterRate));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Write down how much water you will drink(in litres)
        <input type="number" name="amount" min={1} max={15} step={0.1} required />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default DailyNormaForm;
