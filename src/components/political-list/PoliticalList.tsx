import React, { useState } from "react";
import styled from "styled-components";
import plus from "../../images/plus.png";
import Rating from "./Rating";
// import { ModalProps } from "../ModalPayment";
import SeparatedMoney from "../political-list/SeparatedMoney";
import plusIcon from "../../images/plusicon.png";
import ChooseCandidat from "./ChooseCandidat";
import DraftPublish from "./Draft&Publish";
import Candidate from "./Candidate";

interface ListProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  showPoliticalList: boolean;
  input: number;
  setInput: React.Dispatch<React.SetStateAction<number>>;
  showChosenCandidat: boolean;
  setChosenCandidat: React.Dispatch<React.SetStateAction<boolean>>;
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  setSupportMoney: (number: number) => void;
  supportMoney: number | null;
  addCandidat: boolean;
  setAddCandidat: (boolean: boolean) => void;
}


const PoliticalList: React.FC<ListProps> = ({
  setModal,
  showPoliticalList,
  input,
  setInput,
  showChosenCandidat,
  setChosenCandidat,
  money,
  setMoney,
  setSupportMoney,
  supportMoney,
  addCandidat,
  setAddCandidat,
}) => {
  const [userChoice, setUserChoice] = useState("");

  const [politicansList, setPoliticansList] = useState([]);

  const candidatesArray = [
    {
      value: "ანი ავაზნელი",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
            alt="img1"
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
          />
          ანი ავაზნელი
        </div>
      ),
    },
    {
      value: "ვალერია ზანგური",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
            alt="img2"
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
          />
          ვალერია ზანგური
        </div>
      ),
    },
    {
      value: "დიმა ჭილაია",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400046/alexvolot200400046.jpg?ver=6"
            alt="img3"
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
          />
          დიმა ჭილაია
        </div>
      ),
    },
  ];
  console.log(candidatesArray);
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
              money={money}
              setInput={setInput}
            />
          )}
        </ButtonTextContainer>
        {politicansList.map((person, index)=> <Candidate key={index} userChoice={person} />)}
        {showChosenCandidat && (
          <ChooseCandidat
            setSupportMoney={setSupportMoney}
            supportMoney={supportMoney}
            addCandidat={addCandidat}
            setAddCandidat={setAddCandidat}
            candidatesArray={candidatesArray}
            userChoice={userChoice}
            setUserChoice={setUserChoice}
            setPoliticansList={setPoliticansList}
          />
        )}
        {!showPoliticalList && (
          <ButtonDiv>
            <ButtonD onClick={() => setChosenCandidat(true)}>
              დაამატე პოლიტიკოსი
              <img src={plusIcon} alt="plus-img" />
            </ButtonD>
            <DraftPublish />
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
  display: flex;
`;

const ButtonD = styled.button`
  width: 264px;
  height: 48px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 56px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 15.3px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #292d33;
  background: #f3f3f4;
`;
