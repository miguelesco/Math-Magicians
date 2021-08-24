/* eslint-disable linebreak-style */
import { NavLink } from 'react-router-dom';
import { FaCalculator, FaRegHandPointRight } from 'react-icons/fa';
import NavbarContainer from './styles';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <NavbarContainer>
      <h1>
        <FaCalculator />
        Math Magicians
      </h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className="link"
              activeClassName="active-link"
              exact
            >
              <FaRegHandPointRight className="hand" />
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
