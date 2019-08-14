import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  > button {
    width: 200px;
    display: flex;
    justify-content: space-between;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid black;
    border-radius: 4px;

    > div {
      display: inline-block;
      padding-left: 10px;
      vertical-align: middle;
      border-left: 1px solid black;
      line-height: 0.5;
    }
  }

  > ul {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);

    ${props =>
      props.isOpen &&
      css`
        display: block;
      `}

    li {
      cursor: pointer;
      :hover {
        background: #ddd;
      }
      & > a {
        display: block;
        padding: 5px 20px;
        clear: both;
        font-weight: 400;
        line-height: 1.5;
        color: #333;
        white-space: nowrap;
        text-decoration: none;
      }
    }
  }
`;
