// Navbar/NavbarElements.jsx

import styled from "styled-components";
import { Link } from '@tanstack/react-router';

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 95%;
  z-index: 100;
  transform: translateY(${({ $scrollState }) => ($scrollState === "hidden" ? "-200%" : "0")});
  transition: transform 0.3s ease;
  font-family: Monospace;
  top: 1.375rem;
  margin-left: 2.5%;
  backdrop-filter: ${({ $scrollState }) => ($scrollState === "compact" ? "blur(6px)" : "none")}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ $scrollState }) => ($scrollState === "compact" ? "rgba(18, 22, 29, 0.8)" : "")};
  padding: 0.625rem 1.375rem;
  max-width: ${({ $scrollState }) => ($scrollState === "compact" ? "850px" : "1000px")};
  border-radius: 1rem;
  border: ${({ $scrollState }) => ($scrollState === "compact" ? "2px solid #232a35" : "2px solid transparent")};
  margin: 0 auto;
  
  transition: padding 0.3s ease, background-color 0.3s ease, max-width 0.3s ease;
`;

export const Brand = styled(Link)`
  color: #e8ecf3;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 600;
  flex-shrink: 0;
  white-space: nowrap;

  &:hover {
    color: #8baae1;
  }
`;

export const NavSpacer = styled.div`
  flex: 1 1 auto;
  min-width: 1rem;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
  font-size: 1.125rem;
`;

export const NavItem = styled.li`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #e8ecf3;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  font-family: Monospace;
  
  &:hover {
    color: #7fa8d9;
  }
`;