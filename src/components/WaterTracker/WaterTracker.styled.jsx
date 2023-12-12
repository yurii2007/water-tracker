import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TrackerWrapper = styled.div`
  width: 280px;
  min-height: 384px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 254px;
  }
  @media screen and (min-width: 1440px) {
    width: 439px;
    margin-bottom: 0;
  }
`;

export const WelcomeTitle = styled.h1`
  color: var(--primary-black);
  font-size: 28px;
  line-height: 1.14;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.16;
  }
`;

export const WelcomeSubTitle = styled.h2`
  color: var(--primary-black);
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const BenefitsTitle = styled.h3`
  color: var(--primary-black);
  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;
  font-style: normal;
  margin-bottom: 12px;
`;

export const BenefitsList = styled.ul`
  list-style: none;
  padding-bottom: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const BenefitsItem = styled.li`
  display: flex;
  &:nth-child(3) {
    margin-bottom: 0;
  }
  gap: 6px;
  width: 216px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 224px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;

export const BenefitsInfo = styled.p`
  font-size: 16px;
  line-height: 1.25;
  font-weight: 400;
  padding-top: 6px;
  padding-bottom: 6px;

  @media screen and (min-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const TryTrackerLink = styled(NavLink)`
  display: block;
  width: 100%;
  padding: 8px 30px 8px 30px;
  background-color: var(--primary-blue);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border-radius: 10px;
  border: none;

  color: var(--white-color);
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  line-height: 1.25;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    max-width: 276px;
    padding: 10px 30px 10px 30px;
    
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
    max-width: 324px;
  }
`;

export const IconBox = styled.div`
  width: 32px;
  height: 32px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
