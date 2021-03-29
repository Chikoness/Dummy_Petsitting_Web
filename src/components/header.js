import { Link, animateScroll } from "react-scroll"
import React from "react"
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { menuData } from "../data/MenuData"
import { Button } from "./button"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const toggleHome = () => {
  animateScroll.scrollToTop();
}

const Header = ({ click, toggle }) => {
  return (
    <Nav>
      <HomeLink onClick={toggleHome}>L<FavoriteBorderIcon />H</HomeLink>
      <Hamburger onClick={toggle}>
        {click ? <CloseIcon /> : <MenuIcon />}
      </Hamburger>
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
  background: rgba(0,0,0,0.8);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: sticky;
  top: 0;
`

const HomeLink = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
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

const Hamburger = styled.div`
  display: none;
  visibility: hidden;

    @media screen and (max-width: 768px) {
        visibility: visible;
        display: block;
        position: absolute;
        top: -5px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        color: #fff;
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