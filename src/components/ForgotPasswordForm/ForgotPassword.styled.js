import { Link } from "react-router-dom";
import styled from "styled-components";

export const HaveAccount = styled.div`
  display: inline-block;
  margin-top: 100px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: initial;
    gap: 20px;
  }
`;
export const Linkings = styled(Link)`
  color: var(--primary-blue);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  outline: none;
  &:hover,
  &:focus {
    color: var(--secondary-yellow);
  }
`;
