import Lottie from "lottie-react";
import { createPortal } from "react-dom";

import muscleCupAnimData from "../../images/animation/muscleCup.json";
import { DivLoaderWrapper } from "./Loader.styled";

const style = {
  width: 300,
  height: 300,
};

const Loader = () => {
  return createPortal(
    <DivLoaderWrapper>
      <Lottie animationData={muscleCupAnimData} loop style={style} />
    </DivLoaderWrapper>,
    document.body
  );
};

export default Loader;
