import styled from 'styled-components';

export const Card = styled.div`
  text-decoration: none;
  color: inherit;
  margin: 20px 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 21px 6px rgba(150, 150, 150, 0.5);
`;

export const CardHeader = styled.div`
  padding-top: 15px;
  padding-left: 40px;

  > strong {
    font-family: sans-serif;
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CardBody = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;

  > button {
    height: 30px;
    width: 50px;
    margin-top: 20px;
  }
`;
