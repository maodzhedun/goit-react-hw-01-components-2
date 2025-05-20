import styled from '@emotion/styled';

export const Userprofile = styled.div`
  display: flex;
  flex-direction: column;

  gap: 26px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 1px dashed #100301;
  padding: 3px;

  /* margin-bottom: 14px; */
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h1 {
    font-size: 42px;
  }
`;

export const Statistics = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;

  /* background-color: #becbd7; */
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
