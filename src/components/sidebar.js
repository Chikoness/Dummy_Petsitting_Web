import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import { menuData } from "../data/MenuData"
import { Button } from "./button"

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} />
            <SidebarWrapper>
                <SidebarMenu>
                    {menuData.map((item, index) => (
                        <SidebarLink to={item.link} key={index}>
                            {item.title}
                        </SidebarLink>
                    ))}
                    <NavBtn>
                        <Button primary="true" round="true" to="#services">Book us now!</Button>
                    </NavBtn>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

export const SidebarContainer = styled.aside`
    visibility: hidden;
    display: none;

    @media screen and (max-width: 768px) {
        visibility: visible;
        position: fixed;
        z-index: 999;
        width: 100%;
        background: rgba(0,0,0,0.8);
        display: grid;
        top: 80px;
        right: 0;
        transition: 0.3s ease-in-out;
        opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
        right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    }
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #f26A2E;
        transition: 0.1s ease-in-out;
    }
`;

const NavBtn = styled.div`
    padding: 30px 0;
    align-items: center;
    margin-right: 24px;
`