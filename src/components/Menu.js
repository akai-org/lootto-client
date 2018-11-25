import React from 'react';
import styled from 'react-emotion';
import { Link, Redirect } from 'react-router-dom';
import cross from '../assets/cross.svg';
import Button from './Button';
import IconButton from './IconButton';
import Layout from './Layout';
import useCookie from '../hooks/useCookie';

const MenuBox = styled('nav')`
  background: ${props => props.theme.color.accent.primary.base};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1201;
  color: #fff;

  transition: transform 0.5s ease;
  ${props =>
    props.isVisible ||
    `
    transform: translateX(-100%);
  `}
`;

const Overlay = styled('div')`
  transition: background 0.5s ease;
  display: none;
  ${props =>
    props.isVisible &&
    `
    display: block;
    cursor: pointer;
    position: fixed;
    overflow: scroll;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    z-index: 1200;
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

  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.color.accent.primary.light};
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
  { label: 'Osiągnięcia', path: '/achievements' },
  { label: 'Społeczność', path: '/social' }
];

const Menu = ({ isVisible, onClose }) => {
  const [token, setToken] = useCookie('token', '');

  const logout = () => setToken('');

  return (
    <>
      <MenuBox isVisible={isVisible}>
        <Layout>
          <Wrapper>
            <IconButton
              src={cross}
              width="25"
              height="25"
              alt="Ukryj menu"
              onClick={onClose}
            />
          </Wrapper>
          <MenuUl>
            {options.map(({ label, path }) => (
              <li key={path}>
                <MenuLink to={path}>
                  <Wrapper>{label}</Wrapper>
                </MenuLink>
              </li>
            ))}
          </MenuUl>
          <Wrapper>
            <Button tertiary>Wyloguj</Button>
          </Wrapper>
        </Layout>
      </MenuBox>
      <Overlay isVisible={isVisible} onClick={onClose} />
    </>
  );
};

export default Menu;
