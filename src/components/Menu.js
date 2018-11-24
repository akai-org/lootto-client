import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import cross from "../assets/cross.svg";
import Button from "./Button";
import IconButton from "./IconButton";
import Layout from "./Layout";

const MenuBox = styled('nav')`
  background: ${props => props.theme.color.accent.primary.base};
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
  margin: 15vh 0;
  padding: 0;
  list-style-type: none;
`;

const MenuLink = styled(Link)`
  display: block;
  line-height: ${({ theme }) => theme.font.lineHeight.caption};
  color: ${({ theme }) => theme.color.text.tertiary};
  font-size: ${({ theme }) => theme.font.size.label.secondary};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 10px 0;
  margin: 30px 0;

  transition: .3s;

  &:hover {
    background: ${props => props.theme.color.accent.primary.light};
    color: ${props => props.theme.color.accent.primary.base};
  }
`;

const Wrapper = styled('div')`
  display: block;
  margin: 0;
  padding: 0;
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
      <Layout>
        <Wrapper>
          <IconButton src={cross} width="25" height="25" alt="Ukryj menu" onClick={onClose} />
        </Wrapper>
        <MenuUl>
          {options.map(({ label, path }) => <li key={path}><MenuLink to={path}><Wrapper>{label}</Wrapper></MenuLink></li>)}
        </MenuUl>
        <Wrapper>
          <Button tertiary>Wyloguj</Button>
        </Wrapper>
      </Layout>
    </MenuBox>
    <Overlay isVisible={isVisible} onClick={onClose}>
    </Overlay>
  </>
);

export default Menu;
