// Navbar/index.jsx

import React, { useState, useEffect, useRef } from "react";
import {
  NavWrapper,
  Nav,
  Brand,
  NavSpacer,
  NavList,
  NavItem,
  NavLink,
} from "./NavbarElements";

const SMALL_SCROLL_THRESHOLD = 50;   // below this, always show "top" style
const LARGE_SCROLL_THRESHOLD = 310;  // past this while scrolling down, hide

const Navbar = () => {
  const [scrollState, setScrollState] = useState("top"); // "top", "compact", "hidden"
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= SMALL_SCROLL_THRESHOLD) {
        // top of page
        setScrollState("top");
      } else if (delta > 0 && currentScrollY > LARGE_SCROLL_THRESHOLD) {
        // scrolling down past the large threshold
        setScrollState("hidden");
      } else if (delta < 0) {
        // scrolling up -> reappear
        setScrollState("compact");
      } else if (delta > 0) {
        // scrolling down not past large threshold
        setScrollState("compact");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavWrapper $scrollState={scrollState}>
      <Nav $scrollState={scrollState}>
        <Brand to="/">Sean Webb</Brand>
        <NavSpacer />
        <NavList>
          <NavItem><NavLink to="/about">About</NavLink></NavItem>
          <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
          <NavItem><NavLink to="/resume">Resume</NavLink></NavItem>
        </NavList>
      </Nav>
    </NavWrapper>
  );
};

export default Navbar;