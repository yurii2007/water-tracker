import styled from "styled-components";

import bgMob from "../../images/background/mobile/bg_homescreen@1x.png";
import bgMobRetina from "../../images/background/mobile/bg_homescreen@2x.png";
import bgBottleMob from "../../images/background/mobile/bottle_homepage@1x.png";
import bgBottleMobRetina from "../../images/background/mobile/bottle_homepage@2x.png";
import bgTab from "../../images/background/tablet/bg_mainpage@1x.png";
import bgTabRetina from "../../images/background/tablet/bg_mainpage@2x.png";
import bgBottleTab from "../../images/background/tablet/bottle_homepage@1x.png";
import bgBottleTabRetina from "../../images/background/tablet/bottle_homepage@2x.png";
import bgDesk from "../../images/background/desktop/bg_mainpage@1x.png";
import bgDeskRetina from "../../images/background/desktop/bg_mainpage@2x.png";
import bgDeskBottle from "../../images/background/desktop/bottle_home@1x.png";
import bgDeskBottleRetina from "../../images/background/desktop/bottle_home@2x.png";

export const DivWrapperPage = styled.div`
  width: 320px;
  margin: 24px auto 0;
  padding: 0px 20px 40px;
  background-image: url(${bgMob}), url(${bgBottleMob});
  background-size: cover, 280px 208px;
  background-position: top left, top 80px center;
  background-repeat: no-repeat;
  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: url(${bgMobRetina}), url(${bgBottleMobRetina});
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 40px auto 0;
    padding: 0px 32px 44px;
    background-image: url(${bgTab}), url(${bgBottleTab});
    background-size: cover, 518px 386px;
    background-position: top left, top 16px center;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTabRetina}), url(${bgBottleTabRetina});
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    margin: 20px auto 0;
    padding: 0px 112px 56px;
    background-image: url(${bgDesk}), url(${bgDeskBottle});
    background-size: cover, 738px 548px;
    background-position: top left, top left 36px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgDeskRetina}), url(${bgDeskBottleRetina});
    }
  }
`;

export const SectionWrapperTodayListCalendar = styled.section`
  height: max-content;
  padding: 24px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  box-shadow: 0px 4px 14px 0px #407bff4d;
  border-radius: 10px;
  background: var(--secondary-gray);

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
  }
`;
export const SectionWrapperDailyNorma = styled.section`
  display: flex;
  flex-direction: column;
  gap: 232px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 326px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 32px;
    gap: 466px;
  }
`;
