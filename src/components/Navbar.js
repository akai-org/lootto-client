import React, { useState } from "react";
import styled from "react-emotion";

import Menu from "./Menu";
import IconButton from "./IconButton";
import { Link } from "react-router-dom";

import burger from "../assets/burger.svg";
import star from "../assets/star.svg";
import plus from "../assets/plus.svg";

const Header = styled('header')`
  background: ${props => props.theme.color.accent.primary.base};
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const MenuIcon = ({ onClick }) => (
  <IconButton onClick={onClick} src={burger} width="25" height="25" alt="Pokaż menu" />
);

const StarCount = styled('span')`
  position: relative;
  font-weight: 700;
  padding-right: 16px;

  &::before {
    content: url(${star});
    position: absolute;
    width: 20px;
    height: 20px;
    left: -24px;
    top: 1px;
  }
`

function Navbar({ stars }) {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const showMenu = () => setMenuVisibility(true);
  const hideMenu = () => setMenuVisibility(false);

  return (
    <>
      <Header>
        <MenuIcon onClick={showMenu}></MenuIcon>
        <div>
          <StarCount>{stars}</StarCount>
          <Link to='/exchange'><IconButton src={plus} width="12" height="12" /></Link>
        </div>
      </Header>
      <Menu isVisible={menuVisibility} onClose={hideMenu} />
    </>
  );
}

export default Navbar;
