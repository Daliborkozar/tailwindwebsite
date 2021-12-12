import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logocar from "../logo/index";
import NavLinks from './navItems'

const NavbarCotainer = styled.div`
  min-height: 68px;
  ${tw` 
       flex
       flex-row
       items-center
      ml-1
      sm:ml-3
      md:ml-5
      lg:ml-12
       justify-between
    `}
`;

const Navbar = () => {
  return (
    <NavbarCotainer>
      <Logocar />
      <NavLinks />
    </NavbarCotainer>
  );
};

export default Navbar;
