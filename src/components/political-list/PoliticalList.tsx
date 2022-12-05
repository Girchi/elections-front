import React from "react";
import styled from "styled-components";
import plus from "../../images/plus.png";
import Rating from "./Rating";
import { ModalProps } from "../ModalPayment";

const PoliticalList: React.FC<ModalProps> = ({ setModal }) => {


  return (
    <MainContainer>
      <Rating />
      <ButtonTextContainer>
        <TextDiv>
          <h2>შექმენი შენი პარტიული სია</h2>
          <h3>
            გამოყავი თანხა, აირჩიე პოლიტიკოსები, დააფინანსე და შექმენი სია
          </h3>
        </TextDiv>
        <button onClick={() => setModal(true)}>
          გამოყავი თანხა
          <img src={plus} alt="plus" />
        </button>
      </ButtonTextContainer>
    </MainContainer>
  );
};

export default PoliticalList;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
  gap: 24px;
`;

const ButtonTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  align-items: center;
  button {
    width: 205px;
    height: 48px;
    background: #f2f6ec;
    border-radius: 56px;
    outline: none;
    border: none;
    /* font-family: "TBC Contractica"; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #1a8917;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    /* font-family: "TBC Contractica"; */
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #292d33;
  }
  h3 {
    /* font-family: "TBC Contractica1"; */
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #727a82;
  }
`;
