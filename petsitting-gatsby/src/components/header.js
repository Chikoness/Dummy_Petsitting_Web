import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import { menuData } from "../data/MenuData"
import { Button } from "./button"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">L+H</NavLink>
      <Hamburger />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/services">Book us now!</Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: lightskyblue;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
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