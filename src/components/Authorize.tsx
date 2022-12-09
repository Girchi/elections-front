import React from "react";
import styled from "styled-components";
import hands from "../images/hands.png";

const Authorize = () => {
  return (
    <Authorized>
      <ImgHolder src={hands} alt="hands" />
      <span>პარტიული სიის შესადგენად გაიარეთ ავტორიზაცია</span>

      <AuthorizeButton>ავტორიზაცია</AuthorizeButton>
    </Authorized>
  );
};

export default Authorize;

const Authorized = styled.div`
  background: #ffffff;
  max-width: 318px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  border-radius: 8px;
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #6f7680;
  }
`;

const ImgHolder = styled.img`
  width: 286px;
  height: 180px;
  opacity: 0.8;
  border-radius: 4px;
  :hover {
    opacity: 1;
  }
`;

const AuthorizeButton = styled.button`
  width: 286px;
  background: #1a8917;
  border-radius: 32px;
  border: none;
  padding: 12px 91px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #0d440b;
    transition: all ease-out 0.3s;
  }
`;
