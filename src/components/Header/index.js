/** @format */

// This is Header component /Navigation Component
import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
  }
`;
const Nav = styled.nav`
  width: 25rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 48em) {
    display: none;
  }

  a {
    font-weight: 600;
    color: var(--white);
    line-height: 1.5;

    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 3px;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
  }
`;

const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  color: var(--white);
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
`;

const HanburgerBtn = styled.button`
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  cursor: pointer;
  display: none;

  @media only screen and (max-width: 48em) {
    display: inline-block;
  }
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    cursor: pointer;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  background: var(--black);

  background: rgba(53, 53, 63, 0.95);
  border-radius: 20px;
  margin: 0.5rem;
  overflow-x: hidden;
  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <Headers>
      <Logo>
        <img src={logo} alt="CodeBucks" />
        <h3>CodeBucks</h3>
      </Logo>

      <Nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">
          <Button>Contact Us</Button>
        </a>
      </Nav>
      <HanburgerBtn onClick={() => handleClick()} clicked={click}>
        <span />
      </HanburgerBtn>
      <MobileMenu clicked={click}>
        <a href="#home" onClick={() => handleClick()}>
          Home
        </a>
        <a href="#about" onClick={() => handleClick()}>
          About Us
        </a>
        <a href="#services" onClick={() => handleClick()}>
          Services
        </a>
        <a href="#contact" onClick={() => handleClick()}>
          <Button>Contact Us</Button>
        </a>
      </MobileMenu>
    </Headers>
  );
};

export default Header;
