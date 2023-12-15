import styled from "styled-components";

import { backgrounds } from "../../constants/backgrounds";

const getBackgroundBottle = (size, page = "home", retina = false) => {
  return retina
    ? backgrounds[page][size].bottleRetina
    : backgrounds[page][size].bottle;
};

export const MainWrapperPage = styled.main`
  min-height: 100vh;

  background-image: url(${backgrounds.sm.bg}),
    url(${({ $page }) => getBackgroundBottle("sm", $page)});
  background-size: ${({ $page }) =>
    $page === "welcome" ? "cover" : "cover, 280px 208px"};
  background-position: ${({ $page }) =>
    $page === "welcome" ? "bottom center" : "top left, top 80px center"};
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${backgrounds.sm.bgRetina}),
      url(${({ $page }) => getBackgroundBottle("sm", $page, true)});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${backgrounds.md.bg}),
      url(${({ $page }) => getBackgroundBottle("md", $page)});
    background-size: ${({ $page }) =>
      $page === "welcome" ? "cover" : "cover, 518px 386px"};
    background-position: ${({ $page }) =>
      $page === "welcome" ? "bottom center" : "top left, top 16px center"};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgrounds.md.bgRetina}),
        url(${({ $page }) => getBackgroundBottle("md", $page, true)});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgrounds.xl.bg}),
      url(${({ $page }) => getBackgroundBottle("xl", $page)});
    background-size: ${({ $page }) =>
      $page === "welcome" ? "contain" : "cover, 738px 548px"};
    background-position: ${({ $page }) =>
      $page === "welcome" ? "bottom center" : "top left, top left 36px"};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgrounds.xl.bgRetina}),
        url(${({ $page }) => getBackgroundBottle("xl", $page, true)});
    }
  }
`;

export const MainContainer = styled.section`
  width: 320px;
  margin: 24px auto 0;
  padding: 0px 20px 40px;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 40px auto 0;
    padding: 0px 32px 44px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    margin: 20px auto 0;
    padding: 0px 112px 56px;
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

export const SectionWrapperDailyNorma = styled.div`
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
