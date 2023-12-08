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
