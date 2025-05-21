import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  font-size: 20px;
  width: 100%;
  text-align: center;
  border-collapse: collapse;

  thead{
    font-weight: 200;
    text-transform: uppercase;
    /* color: #fff; */
    background-color: #7fd5dd;
  }

  tbody {
font-size: 16px;
  }

  th, td {
  padding: 10px;
  border: 1px solid #ddd;
  /* text-align: left; */
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: #ffffff;
}
`;
