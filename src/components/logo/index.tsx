import React from "react";
import carLogo from "../../assets/logocar2.svg";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    cursor-pointer
    `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md: text-2xl
    font-black
    text-gray-600
    sm:
    md:m-3
    font-sans
    cursor-pointer
    
`}
`;

const Image = styled.div`
  img {
    width: auto;
    height: 30px;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <Image>
          <img src={carLogo} alt="Logo" />
        </Image>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <LogoText>Your Company.</LogoText>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
