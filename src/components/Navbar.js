import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Logo = styled(Link)`
    font-size: 3rem;
    text-decoration: none;
`;
const NavBarContainer = styled.section`
    position: fixed;
    height: auto;
    padding: 10px 30px;
    width: 100%;
    z-index: 1;
    background-color: rgb(236,230,218, 0.75);
    display: flex;
    box-shadow: 1px 1px 2px #404040;
`;
const Nav = styled.nav`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
`;
const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0px 30px;
    color: #383838;
    border-bottom: 1px solid #101010;
    transition: border-bottom 200ms ease-in;
    height: 100%;
    margin: 0px 10px;
    &:hover {
        color: #4e615b;
        border-bottom: 3px solid #4e615b;
    }
    &:last-child {
        margin-right: 0px;
    }
`;


const Navbar = () => {
    return (
        <NavBarContainer>
            <Logo to='/'>Naturey</Logo>
            <Nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>About</NavLink>
                <NavLink to='/'>Tours</NavLink>
                <NavLink to='/'>Contact</NavLink>
            </Nav>
        </NavBarContainer>
    )
}

export default Navbar
