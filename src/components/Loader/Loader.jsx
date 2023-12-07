import Lottie from "lottie-react";

import muscleCupAnimData from "../../images/animation/muscleCup.json";

const Loader = () => {
  return (
    <Lottie
      animationData={muscleCupAnimData}
      loop
      style={{ width: "200px", height: "200px" }}
    />
  );
};

export default Loader;
