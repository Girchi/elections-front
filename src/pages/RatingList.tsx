import React from "react";
import styled from "styled-components";
import Authorize from "../components/Authorize";
import search from "../images/search.svg";
import upArrow from "../images/up_arrow.png";
import downArrow from "../images/down_arrow.png";

const RatingList = () => {
  return (
    <RatingContainer>
      <Authorize />
      <Rating>
        <SearchHeader>
          <TextContainer>
            <h4>გირჩის პარტიული სია</h4>
            <span>გირჩის პოტენციური პარტიული კანდიდატები და რეიტინგი</span>
          </TextContainer>
          <InputDiv>
            <SearchInput type="text" placeholder="პოლიტიკოსის ძიება" />
            <img src={search} alt="search" />
          </InputDiv>
        </SearchHeader>
        <ListHeader>
          <h4># პოლიტიკოსები</h4>
          <ArrowContainer>
            {" "}
            მხარდამჭერები{" "}
            <ArrowDiv>
              <img src={upArrow} alt="uparrow" />
              <img src={downArrow} alt="uparrow" />
            </ArrowDiv>
          </ArrowContainer>
          <ArrowContainer>
            {" "}
            მხარდაჭერა{" "}
            <ArrowDiv>
              <img src={upArrow} alt="uparrow" />
              <img src={downArrow} alt="uparrow" />
            </ArrowDiv>
          </ArrowContainer>
        </ListHeader>
      </Rating>
    </RatingContainer>
  );
};

export default RatingList;

const RatingContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  gap: 24px;
  box-shadow: 0px 1px 5px rgba(41, 45, 51, 0.04),
    inset 0px -1px 0px rgba(41, 45, 51, 0.1);
  border-radius: 8px;
`;

const Rating = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background: #ffffff;
  padding: 40px;
  border-radius: 8px;
  gap: 32px;
`;

const SearchHeader = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  h4 {
    font-family: "TBC Contractica";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #292d33;
  }
  span {
    font-family: "TBC Contractica";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #727a82;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputDiv = styled.div`
  position: relative;
  img {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 28%;
    left: 6%;
  }
`;

const SearchInput = styled.input`
  width: 323px;
  background-color: transparent;
  border: 1px solid;
  border-color: #e0e2e7;
  border-radius: 6px;
  padding: 16px;
  padding-left: 50px;
  :focus {
    border: 1px solid;
    border-color: #e0e2e7;
  }
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(41, 45, 51, 0.04);
  box-shadow: inset 0px -2px 0px #eaeaeb;
  border-radius: 6px;
  padding: 12px 20px;
  h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #727a82;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #727a82;
`;

const ArrowDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  img {
    width: 8px;
    height: 4px;
  }
`;
