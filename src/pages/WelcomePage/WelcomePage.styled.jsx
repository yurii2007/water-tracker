import styled from "styled-components";
import imgBgDesk1 from "../../images/background/desktop/bg_mainpagebottle@1x.png";
import imgBgDesk2 from "../../images/background/desktop/bg_mainpage@1x.png";
import imgBgTab from "../../images/background/tablet/bg_mainpage@1x.png";
import imgBgMob from "../../images/background/mobile/bg_mainpage_bottle@1x.png";

export const WelcomeWrapper = styled.div`
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 81px;
    padding-top: 80px;
    padding: 80px 98px 185px 104px;
  }
`;
export const Wrapper = styled.section`
  min-height: calc(100vh - 68px);

  background-image: url(${imgBgMob});
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${imgBgTab});
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${imgBgDesk1}), url(${imgBgDesk2});
    background-size: contain;
    background-position: bottom center;
    background-repeat: no-repeat;
  }
`;
