import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const YearFilter = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  padding-left: 40px;

  button {
    border: 0;
    background: none;
  }

  strong {
    font-size: 18px;
    margin: 0 15px;
  }
`;
