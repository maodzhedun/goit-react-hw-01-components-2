import styled from '@emotion/styled';
import { getRandomColor } from "../../utils/GetRandomColor";

export const Wrapper = styled.div`
  h2 {
    font-size: 28px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  /* gap: 12px; */
  justify-content: center;
  font-size: 24px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 24px;
  color: #f1e4e4;
  background-color: ${getRandomColor};
`;
