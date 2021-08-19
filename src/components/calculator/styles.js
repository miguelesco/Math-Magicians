/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Container = styled.div` 
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const ValueDisplay = styled.div`
  width: 100%;
  height: 20%;
  background-color: gray;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 1rem;
  font-size: 1.8em;
  color: #fff;
  p {
    margin: 0;
  }
`;

export const Error = styled.div`
  background: #222831;
  height: calc(5px + 1.5vw);
  padding: 0.5rem;
  text-align: left;
  font-size: calc(#{12px} + #{0.3}vw);
  font-weight: 700;
  line-height: 32px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: flex-end;
  width: 100%;
`;

export default Container;
