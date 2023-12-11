import styled from "styled-components";

import { ReactComponent as GlassSvg } from "../../images/svg/glass_of_water.svg";
import { ReactComponent as EditSvg } from "../../images/svg/edit_icon.svg";

export const SvgEdit = styled(EditSvg)``;

export const SvgGlass = styled(GlassSvg)`
  width: 26px;
  height: 26px;
  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const StyledList = styled.ul`
  max-height: 180px;
  overflow: auto;

  @media screen and (min-width: 768px) {
    min-height: 177px;
    max-height: 200px;
  }

  &::-webkit-scrollbar {
    width: 4px;
    margin-left: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--secondary-skyblue);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--secondary-lightblue);
  }
`;

export const ListWrapper = styled.div`
  width: 100%;

  h2 {
    color: var(--primary-black);
    margin-bottom: 16px;

    @media screen and (min-width: 768px) {
      font-size: 26px;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 12px 0;
  border-bottom: 1px solid #d7e3ff;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }

  & > div:nth-child(1):hover {
    cursor: pointer;
    border-bottom: 1px solid #9ebbff;
  }

  & > div:nth-child(2):hover {
    cursor: pointer;
    border-bottom: 2px solid #ef5050;
  }
`;

export const Amount = styled.p`
  color: var(--primary-blue);
  font-size: 18px;
  line-height: 1.33;
  min-width: 55px;
`;

export const Time = styled.p`
  color: var(--primary-black);
  font-size: 12px;
  line-height: 2;
`;

export const AddBtnWrapper = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: start;
  border-top: 1px solid #d7e3ff;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
    background-color: transparent;
    padding: 0;
    span {
      color: var(--primary-blue);
      font-size: 16px;
      font-weight: 500;
      line-height: 1.33;
      @media screen and (min-width: 768px) {
        font-size: 18px;
      }
    }

    &:hover {
      cursor: pointer;
      span {
        color: var(--secondary-yellow);
      }
    }
  }
`;

// pop-up styles

export const StyledP = styled.p`
  color: var(--primary-black);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: end;
  }
`;
export const BtnCancel = styled.button`
  display: flex;
  padding: 8px 30px;
  width: 232px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: var(--secondary-lightblue);
  cursor: pointer;

  order: 2;
  color: var(--primary-blue);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    order: 1;
    padding: 10px 30px;
    width: 160px;
  }
`;

export const BtnDelete = styled.button`
  display: flex;
  padding: 8px 30px;
  width: 232px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: var(--secondary-red);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  cursor: pointer;

  order: 1;

  color: var(--white-color);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    order: 2;
    padding: 10px 30px;
    width: 160px;
  }
`;
