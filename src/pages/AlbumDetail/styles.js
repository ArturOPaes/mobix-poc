import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  min-width: 400px;
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 400px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const CardBodyContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    > img {
      height: 300px;
      width: 300px;
    }
    > div {
      text-align: center;
      > div {
        font-size: 14px;
        color: gray;
      }
    }
  }
`;

export const LinkHome = styled(Link)`
  display: flex;
  align-self: center;
  text-decoration: none;
  color: inherit;
  border: 1px solid black;
  border-radius: 5px;
  background: white;
  justify-content: center;
  padding: 5px;
`;

export const Info = styled.div`
  color: #87bdf5;
  > img {
    width: 25px;
    height: 25px;
  }
`;
