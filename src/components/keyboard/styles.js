/* eslint-disable linebreak-style */
import styled from 'styled-components';

const KeyboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default KeyboardContainer;
