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

export default Container;
