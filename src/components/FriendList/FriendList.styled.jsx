import styled from '@emotion/styled';

export const WrapperList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h2{
    text-transform: uppercase;
  }
`;

export const FriendItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px;
  border: 1px dashed rgb(0, 0, 0);
  box-shadow: 8px 7px 11px 3px rgba(0, 0, 0, 0.37);
  -webkit-box-shadow: 8px 7px 11px 3px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 8px 7px 11px 3px rgba(0, 0, 0, 0.37);
`;
