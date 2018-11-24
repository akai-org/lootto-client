import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import cross from "../assets/cross.svg";

const MenuBox = styled('nav')`
  background: ${props => props.theme.color.accent.primary.base};
  padding-top: 20px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 201;
  color: #fff;
  
  transition: transform .5s ease;
  ${props => props.isVisible || `
    transform: translateX(-100%);
  `}
`;

const Overlay = styled('div')`
  transition: background .5s ease;
  display: none;
  ${props => props.isVisible && `
    display: block;
    cursor: pointer;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    z-index: 200;
  `}
`;

const MenuUl = styled('ul')`
  margin: 100px 0 0;
  padding: 0;
  list-style-type: none;
`;

const MenuLink = styled(Link)`
  display: block;
  margin: 0;
  padding: 30px;
  text-transform: uppercase;
  font-weight: 700;
`;

const options = [
  { label: 'Twoje konto', path: '/account' },
  { label: 'Kantor', path: '/exchange' },
  { label: 'Bonusy', path: '/powerups' },
  { label: 'Osiągnięcia', path: '/achievements' }
];

const Menu = ({ isVisible, onClose }) => (
  <>
    <MenuBox isVisible={isVisible}>
      <a style={{marginTop: 40, marginLeft: 20}} onClick={onClose}>
        <img src={cross} width="25" height="25" alt="Ukryj menu" />
      </a>
      <MenuUl>
        {options.map(({ label, path }) => <li key={path}><MenuLink to={path}>{label}</MenuLink></li>)}
      </MenuUl>
    </MenuBox>
    <Overlay isVisible={isVisible} onClick={onClose}>
    </Overlay>
  </>
);

export default Menu;
