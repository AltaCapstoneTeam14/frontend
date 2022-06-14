import React from 'react'
import styled from 'styled-components'


function Navbar() {
  return (
        <NavbarContainer>
            <Logo>Bishapay</Logo>
            <Menu>
                <MenuLink>Home</MenuLink>
                <MenuLink>About Us</MenuLink>
                <MenuLink>Product</MenuLink>
                <MenuLink>FAQ</MenuLink>
            </Menu>
            <LoginButton>Log In</LoginButton>
        </NavbarContainer>
  )
}

const NavbarContainer = styled.nav`
    width:1200px;
    height:100px;
    margin: auto;
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-weight:bold;
    font-family: 'Roboto', sans-serif;
    padding: 20px;
    padding-top:0;
`
const Logo = styled.a`
    font-size:32px;
    color: #605CFF;
    justify-content: start;
    text-decoration: none;
    cursor: pointer;
`

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-top:10px;
`


const MenuLink = styled.a`
    font-size: 20px;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    padding: 20px;
    margin: 0 20px;

    &:active {
        color: #407BFF;
    }
`
const LoginButton = styled.button`
    padding:10px 30px;
    border-radius:20px;
    background: #605CFF;
    color: white;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 3px 20px 20px -11px rgba(117,166,146,0.78);
    -webkit-box-shadow: 3px 26px 33px -11px rgba(117,166,146,0.78);
    -moz-box-shadow: 3px 26px 33px -11px rgba(117,166,146,0.78);
`


export default Navbar