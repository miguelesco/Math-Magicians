/* eslint-disable linebreak-style */
import styled from 'styled-components';

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const QuoteMessage = styled.div`
  display: flex;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const Author = styled.p`
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export default QuoteContainer;
