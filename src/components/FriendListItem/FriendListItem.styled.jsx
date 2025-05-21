import styled from '@emotion/styled';

export const Span = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => (props.children ? 'green' : 'red')};
`;

// 