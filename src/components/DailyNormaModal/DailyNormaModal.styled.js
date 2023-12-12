import styled from "styled-components";

export const GenderFormulas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  margin-bottom: 12px;

  p {
    font-size: 16px;
    line-height: 1.25;
  }
  span {
    color: var(--primary-blue);
    font-size: 18px;
    line-height: 1.33;
  }

  @media screen and (min-width: 767px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const VolumeNorm = styled.p`
  padding: 10px;
  margin-bottom: 24px;

  color: #8f8f8f;
  border-radius: 10px;
  border: 1px solid var(--secondary-gray);

  font-size: 12px;
  line-height: 1.33;
  span {
    color: var(--primary-blue);
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

  @media screen and (min-width: 768px) {
    button {
      margin-left: auto;
    }
  }
`;
