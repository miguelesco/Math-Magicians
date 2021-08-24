/* eslint-disable linebreak-style */
import styled from 'styled-components';

const flex = (direction, align, justify) => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `;

const NavbarContainer = styled.nav`
  box-sizing: border-box;
  padding: 0.5rem 2rem;
  ${flex('row', 'center', 'space-between')};
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;

  h1 {
    font-size: calc(1.5rem + 2vw);
    font-weight: bold;
    ${flex('row', 'center', 'center')};
    gap: 1rem;
    color: #000;
    width: 100%;
    @media (min-width: 634px) {
      width: auto;
    }
  }

  ul {
    list-style: none;
    width: 100%;
    ${flex('row', 'center', 'center')};
    gap: 1rem;
    @media (min-width: 634px) {
      width: auto;
    }

    li {
      font-size: calc(1rem + 0.5vw);
      font-weight: bold;
      @media (min-width: 634px) {
        margin-top: 0;
      }

      @media (min-width: 978px) {
        margin-right: 0.8rem;
      }
      
    }
  }

`;

export default NavbarContainer;
