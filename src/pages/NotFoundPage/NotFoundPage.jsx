import Lottie from "lottie-react";

import { routes } from "../../constants/routes";

import notFoundAnim from "../../images/animation/notFoundAnim.json";
import { TryTrackerLink } from "../../components/WaterTracker/WaterTracker.styled";
import { DivNotFoundWrapper } from "./NotFound.styled";

const NotFoundPage = () => {
  return (
    <DivNotFoundWrapper>
      <Lottie animationData={notFoundAnim} loop />
      <TryTrackerLink to={routes.Home}>Go Home</TryTrackerLink>
    </DivNotFoundWrapper>
  );
};

export default NotFoundPage;
