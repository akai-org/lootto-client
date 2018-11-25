import React, { Fragment, useState } from 'react';
import styled from 'react-emotion';

import Menu from './Menu';
import Layout from './Layout';
import IconButton from './IconButton';
import { Link } from 'react-router-dom';

import burger from '../assets/burger.svg';
import plus from '../assets/plus.svg';
import StarCount from '../components/StarCount';

const Header = styled('header')`
  background: ${props => props.theme.color.accent.primary.base};
  color: #fff;
  padding: 2;
  display: flex;
  justify-content: space-between;

  .menu__stars {
    display: flex;
    align-items: center;
  }
`;

const MenuIcon = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    src={burger}
    width="25"
    height="25"
    alt="Pokaż menu"
  />
);

function Navbar({ stars }) {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const showMenu = () => setMenuVisibility(true);
  const hideMenu = () => setMenuVisibility(false);

  return (
    <Fragment>
      <Header>
        <MenuIcon onClick={showMenu} />
        <div className="menu__stars">
          <StarCount big>{stars}</StarCount>
          <Link to="/exchange">
            <IconButton src={plus} width="12" height="12" />
          </Link>
        </div>
      </Header>
      <Menu isVisible={menuVisibility} onClose={hideMenu} />
    </Fragment>
  );
}

export default Navbar;
