import React from "react";
import styled from "styled-components";
import plus from "../../images/plus.png";
import Rating from "./Rating";
// import { ModalProps } from "../ModalPayment";
import SeparatedMoney from "../political-list/SeparatedMoney";
import plusIcon from "../../images/plusicon.png";
import ChooseCandidat from "./ChooseCandidat";

interface ListProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  showPoliticalList: boolean;
  input: string | number;
  setInput: React.Dispatch<React.SetStateAction<string | number>>;
  showChosedCandidat: boolean;
  setChosedCandidat: React.Dispatch<React.SetStateAction<boolean>>;
}

const PoliticalList: React.FC<ListProps> = ({
  setModal,
  showPoliticalList,
  input,
  setInput,
  showChosedCandidat,
  setChosedCandidat,
}) => {
  return (
    <MainContainer>
      <Rating />
      <MainDiv>
        <ButtonTextContainer>
          <TextDiv>
            <h2>შექმენი შენი პარტიული სია</h2>
            <h3>
              გამოყავი თანხა, აირჩიე პოლიტიკოსები, დააფინანსე და შექმენი სია
            </h3>
          </TextDiv>

          {showPoliticalList ? (
            <button onClick={() => setModal(true)}>
              გამოყავი თანხა
              <img src={plus} alt="plus" />
            </button>
          ) : (
            <SeparatedMoney
              setModal={setModal}
              input={input}
              setInput={setInput}
            />
          )}
        </ButtonTextContainer>

        {showChosedCandidat && <ChooseCandidat />}
        {!showPoliticalList && (
          <ButtonDiv>
            <button onClick={() => setChosedCandidat(true)}>
              დაამატე პოლიტიკოსი
              <img src={plusIcon} alt="plus-img" />
            </button>
          </ButtonDiv>
        )}
      </MainDiv>
    </MainContainer>
  );
};

export default PoliticalList;

const MainContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  align-items: flex-start;
  gap: 24px;
`;
const MainDiv = styled.div`
  background: #ffffff;
  width: 100%;
  padding: 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const ButtonTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 205px;
    height: 48px;
    background: #f2f6ec;
    border-radius: 56px;
    outline: none;
    border: none;
    cursor: pointer;
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
const ButtonDiv = styled.div`
  border-top: 1px solid #e0e2e7;
  padding-top: 25px;

  button {
    width: 264px;
    height: 48px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-evenly;
    background: #f3f3f4;
    border-radius: 56px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 15.3px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #292d33;
  }
`;
