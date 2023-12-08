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

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-size: 16px;
    line-height: 1.25;
    color: var(--primary-black);
  }

  input[type="number"] {
    padding: 12px 10px;
    border: 1px solid var(--secondary-lightblue);
    border-radius: 6px;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--primary-blue);

    &:focus {
      outline: none;
    }
  }
`;

export const Genders = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  label {
    flex-direction: row;
    align-items: center;
    gap: 6px;
  }

  input:checked {
    fill: blue;
  }
`;

export const PAmountOfWater = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    display: block;

    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--primary-blue);
  }
`;

export const FormStyles = styled.form`
  label {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;

    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--primary-black);
  }

  input {
    padding: 12px 10px;
    border: 1px solid var(--secondary-lightblue);
    border-radius: 6px;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--primary-blue);

    &:focus {
      outline: none;
    }
  }

  @media screen and (min-width: 768px) {
    button {
      margin-left: auto;
    }
  }
`;
