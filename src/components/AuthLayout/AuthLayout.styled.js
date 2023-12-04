import styled from "styled-components";

import bgMob from "../../images/background/mobile/bg_signin@1x.png";
import bgMobRetina from "../../images/background/mobile/bg_signin@2x.png";
import bgBottleMob from "../../images/background/mobile/bottle_signin@1x.png";
import bgBottleMobRetina from "../../images/background/mobile/bottle_signin@2x.png";
import bgBottleTab from "../../images/background/tablet/bottle_signin@1x.png";
import bgBottleTabRetina from "../../images/background/tablet/bottle_signin@2x.png";
import bgDesk from "../../images/background/desktop/bg_signin@1x.png";
import bgDeskRetina from "../../images/background/desktop/bg_signin@2x.png";
import bgDeskBottle from "../../images/background/desktop/bottle_signin@1x.png";
import bgDeskBottleRetina from "../../images/background/desktop/bottle_signin@2x.png";

const AuthLayoutStyles = styled.div`
  background-image: url(${bgMob}), url(${bgBottleMob});
  background-size: cover, 280px 210px;
  background-position: top, bottom 20px center;
  background-repeat: no-repeat;
  height: calc(100vh - 56px);
  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: url(${bgMobRetina}), url(${bgBottleMobRetina});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${bgBottleTab});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgBottleTabRetina});
      background-size: cover;
      background-position: center;
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${bgDesk}), url(${bgDeskBottle});
    height: calc(100vh - 60px);
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgDeskRetina}), url(${bgDeskBottleRetina});
      background-size: contain, 916px 680px;
      background-position: bottom 60px left, left -40px bottom 60px;
    }
  }
`;
export default AuthLayoutStyles;
