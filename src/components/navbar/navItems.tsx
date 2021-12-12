import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive/index";
import { menuStyle } from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
        lg:mr-10
            `}
`;
// menu?:any to apply custom style if prop
const NavItems = styled.li<{ menu?: any }>`
  ${tw`
        items-center
        md:mr-10
        font-sans
        font-bold
        sm:text-base
        md:text-lg
        md:text-gray-600
        lg:text-lg
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-400
    `}

    ${({menu}) => menu && css`
        ${tw`
            text-white
            text-2xl
            mb-10
            font-black
        `}
    `}
`;

const NavLinks = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.md });

  if (isMobile)
    return (
      <Menu right styles={menuStyle}>
        <ListContainer>
          <NavItems menu>Home</NavItems>
          <NavItems menu>About</NavItems>
          <NavItems menu>Contact</NavItems>
        </ListContainer>
      </Menu>
    )

  return (
    <ListContainer>
      <NavItems>Home</NavItems>
      <NavItems>About</NavItems>
      <NavItems>Contact</NavItems>
    </ListContainer>
  );
};

export default NavLinks;
