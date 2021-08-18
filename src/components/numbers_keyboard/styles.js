/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  height: 100%;
  background-color: #f0f0f0;
  display: grid;
  place-items: center;
  grid-template-columns: auto auto auto;
`;

export const NumberBtn = styled.button`
  width: 100%;
  height: 100%;
  background-color: #e3e3e3;
  border: solid 1px #bfbfbf;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 2rem 0.75rem;
  grid-column-start: ${(props) => (props.number === 0 ? '1' : '0')};
  grid-column-end: ${(props) => (props.number === 0 ? '3' : '0')};
`;

export default Container;
