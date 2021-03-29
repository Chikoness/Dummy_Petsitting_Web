import { Link, animateScroll } from "react-scroll"
import React from "react"
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import { menuData } from "../data/MenuData"
import { Button } from "./button"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const toggleHome = () => {
  animateScroll.scrollToTop();
}

const Header = () => {
  return (
    <Nav>
      <NavLink onClick={toggleHome}>L<FavoriteBorderIcon />H</NavLink>
      <Hamburger />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index} smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="#services">Book us now!</Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: linear-gradient(180deg, grey 10%, transparent 100%);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: sticky;
  top: 0;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #FFF;
  }
`

const Hamburger = styled(MenuIcon)`
  visibility: hidden;
  color: #fff;

  @media screen and (max-width: 768px) {
    visibility: visible;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-weight: bolder;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;