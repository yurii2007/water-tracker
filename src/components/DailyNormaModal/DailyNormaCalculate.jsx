import { useEffect, useState } from "react";

import { calculateWaterRate } from "../../utils/calculateWaterRate";

import {
  Genders,
  ArticleCalculateWrapper,
  PAmountOfWater,
} from "./DailyNormaModal.styled";

const DailyNormCalculate = () => {
  const [waterRate, setWaterRate] = useState(calculateWaterRate());
  const [inputValues, setInputValues] = useState({ gender: "male", weight: 0, hours: 0 });

  useEffect(() => {
    setWaterRate(calculateWaterRate(inputValues));
  }, [inputValues]);

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));
  };

  return (
    <ArticleCalculateWrapper>
      <h3>Calculate your rate:</h3>
      <Genders>
        <label>
          <input type="radio" name="gender" value="female" onChange={handleInputChange} />
          For girl
        </label>
        <label>
          <input type="radio" name="gender" value="male" onChange={handleInputChange} />
          For man
        </label>
      </Genders>
      <label>
        Your weight in kilograms:
        <input
          type="number"
          name="weight"
          max={200}
          min={0}
          placeholder="0"
          onChange={handleInputChange}
        />
      </label>
      <label>
        The time of active participation in sports or other activities with a high
        physical load(in hours):
        <input
          type="number"
          name="hours"
          max={24}
          min={0}
          placeholder="0"
          onChange={handleInputChange}
        />
      </label>
      <PAmountOfWater>
        The required amount of water in liters per day:
        <span>{Math.round(waterRate * 100) / 100}&nbsp;L</span>
      </PAmountOfWater>
    </ArticleCalculateWrapper>
  );
};

export default DailyNormCalculate;
