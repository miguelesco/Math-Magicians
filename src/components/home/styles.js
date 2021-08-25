/* eslint-disable linebreak-style */
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  font-size: 3em;
`;

export const Description = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1.5;
`;

export default HomeContainer;
