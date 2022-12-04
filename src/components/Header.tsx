import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import girchiImg from "../images/გირჩი.svg";

const Header = () => {
  return (
    <HeaderSection>
      <MainHeader>
        <HeaderImgs>
          <img src={logo} alt="logo" />
          <img src={girchiImg} alt="girchiImg" />
        </HeaderImgs>
        <HeaderNavbarContainer>
          <HeaderNavbar>
            <li>პოლიტიკოსები</li>
            <li>ანალიტიკა</li>
            <li>სიახლეები</li>
            <li>პროექტები</li>
            <li>გაზეთი</li>
          </HeaderNavbar>
          <ButtonContainer>ავტორიზაცია</ButtonContainer>
        </HeaderNavbarContainer>
      </MainHeader>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.div`
background: #FFFFFF;
`;

const MainHeader = styled.div`
  width: 80%;
  gap: 2rem;
  margin: auto;
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
`;

const HeaderImgs = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const HeaderNavbarContainer = styled.div`
  display: flex;
  gap: 24px;
`;
const HeaderNavbar = styled.ul`
  display: flex;
  gap: 25px;
  align-items: center;
  cursor: pointer;
`;
const ButtonContainer = styled.button`
  background: #1a8917;
  border-radius: 32px;
  cursor: pointer;
  border: none;
  color: white;
  width: 152px;
  height: 40px;
`;
