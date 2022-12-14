import React from "react";
import styled from "styled-components";
import Authorize from "../components/Authorize";
import search from "../images/search.svg";
import upArrow from "../images/up_arrow.png";
import downArrow from "../images/down_arrow.png";
import userProfile from "../images/prof.png";
import userProfile1 from "../images/prof1.png";
import userProfile2 from "../images/prof2.png";
import userProfile3 from "../images/prof3.png";
import userProfile4 from "../images/prof4.png";
import userProfile5 from "../images/prof5.png";

const RatingList = () => {
  const profileList = [
    userProfile1,
    userProfile2,
    userProfile3,
    userProfile4,
    userProfile5,
  ];

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
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            # <h4> პოლიტიკოსები</h4>
          </div>
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
        <SupportersContainer>
          <ListBody>
            <LeftSide>
              <div>1</div>
              <FullName>
                <img src={userProfile} alt="profile" />
                ვატო გრიგორიანი
              </FullName>
            </LeftSide>
            <Supporters>
              <span>1 123 ადამიანი</span>
              <ImgList>
                <img
                  style={{ zIndex: 5 }}
                  src={userProfile1}
                  alt="userprofile"
                />
                <img
                  style={{ zIndex: 4 }}
                  src={userProfile2}
                  alt="userprofile"
                />
                <img
                  style={{ zIndex: 3 }}
                  src={userProfile3}
                  alt="userprofile"
                />
                <img
                  style={{ zIndex: 2 }}
                  src={userProfile4}
                  alt="userprofile"
                />
                <img
                  style={{ zIndex: 1 }}
                  src={userProfile5}
                  alt="userprofile"
                />

                {/* {profileList.map((profile, index) => {
                  return <img key={index} src={profile} />;
                })} */}
              </ImgList>
            </Supporters>
            <Amount>10 000 000 GeD</Amount>
          </ListBody>
        </SupportersContainer>
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
  padding-right: 30px;
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
    :hover {
    }
  }
`;

const ListBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
`;

const LeftSide = styled.div`
  min-width: 400px;
  display: flex;
  gap: 30px;
  align-items: center;
`;

const FullName = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const SupportersContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Supporters = styled.div`
  min-width: 440px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const ImgList = styled.div`
  display: flex;
  align-items: center;
  img {
    border: 1.5px solid #ffffff;
    border-radius: 18px;
    margin-right: -10px;
  }
`;

const Amount = styled.div`
  color: green;
  font-size: 20px;
`;
