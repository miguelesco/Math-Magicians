/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Container = styled.div`
  width: 30%;
  height: 100%;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SimbolsBtn = styled.button`
  width: 100%;
  height: 100%;
  background-color: orange;
  border: solid 1px #bfbfbf;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 2rem 0.75rem;
`;

export default Container;
