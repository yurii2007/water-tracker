import styled from "styled-components";

export const ModalBox = styled.div`
  width: 280px;
  padding: 24px 12px;
  border-radius: 10px;
  background: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
  }
`;

export const ArticleCalculateWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  h3 {
    color: var(--primary-black);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }
`;

export const Genders = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;

    font-size: 16px;
    line-height: 1.25;
  }

  input:checked {
    fill: blue;
  }
`;
