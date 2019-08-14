import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const ContainerSearch = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -35px;
  > div {
    border-bottom: 1px solid #b9b9b9;
    margin-left: auto;
    > svg {
      color: #b9b9b9;
    }
    > input {
      margin-left: 10px;
      border: none;
      height: 30px;
      vertical-align: text-bottom;
      min-width: 200px;
      color: #b9b9b9;

      ::placeholder {
        color: #b9b9b9;
      }
    }
  }

  > img {
    margin-left: 15px;
    margin-top: 10px;
    margin-right: 60px;
    width: 25px;
    height: 25px;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 400px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled(Link)`
  text-decoration: none;
  color: inherit;
  border: 1px solid lightgray;
  margin-bottom: 10px;
  margin-right: 10px;
  min-width: 250px;
  border-radius: 5px;
`;

export const CardHeader = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #b9b9b9;
    padding: 5px 5px;
    margin: 10px;
    > strong {
      font-size: 13px;
      color: #949494;
      font-weight: bold;
      max-width: 150px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 15px 15px 15px;
  min-height: 80px;
  color: #949494;
  font-weight: bold;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    > strong {
      color: #87bdf5;
      font-size: 14px;
    }
    > img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Loading = styled.div`
  text-align: center;
`;
