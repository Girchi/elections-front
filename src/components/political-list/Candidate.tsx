import styled from "styled-components";

import Delete from "../../images/trash.png";

interface Candidate {
  userChoice: {
    name: string;
    avatar: string;
  };
  index: any;
  setPoliticansList: (array: any) => void;
}

const Candidate: React.FC<Candidate> = ({
  userChoice,
  index,
  setPoliticansList,
}) => {
  const deleteHandler = (ids: number) => {
    setPoliticansList((prev: []) => {
      return prev.filter((item: number, id: number) => id !== ids);
    });
  };
  return (
    <MainCandidate>
      <Politican>
        <h4>{index + 1}</h4>
        <ImageD>
          <img src={userChoice.avatar} alt="" />
          <Info>
            <h3>{userChoice.name}</h3>
            <h5>952 მხარდამჭერი</h5>
          </Info>
        </ImageD>
      </Politican>
      <Money>
        <h3>მხარდასაჭერი თანხა</h3>
        <MoneyChanger>
          <IconsContainer>
            <ForGed placeholder={0 + " GeD"}></ForGed>
            <ForPerCent>
              <h3 style={{ display: "block", width: "100px" }}>პროცენტი</h3>
              <CheckboxContainer>
                <CheckBox id={index} type="checkbox" />
                <CheckBoxLabel htmlFor={index} />
              </CheckboxContainer>
            </ForPerCent>
          </IconsContainer>
          <button onClick={() => deleteHandler(index)}>
            <img src={Delete} alt="Delete" />
          </button>
        </MoneyChanger>
      </Money>
    </MainCandidate>
  );
};

export default Candidate;

const MainCandidate = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Politican = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  h4 {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #292d33;
  }
  img {
    width: 48px;
    height: 48px;
    border: 4px solid rgba(103, 219, 244, 0.24);
    border-radius: 16px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #292d33;
    transform: translateX(-6%);
  }
  h5 {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #727a82;
  }
`;

const ImageD = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const MoneyChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  button {
    width: 44px;
    height: 44px;
    background: #f3f3f4;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }
`;
const IconsContainer = styled.div`
  margin-top: 5px;
  width: 267px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #e0e2e7;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    margin-top: 5px;
    font-size: 12px;
    line-height: 16px;
    color: rgba(114, 122, 130, 0.75);
  }
`;
const ForGed = styled.input`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #292d33;
  gap: 5px;
  margin-left: 12px;
  max-width: 100px;
  border: none;
  :focus {
    outline: none;
  }
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
const Money = styled.div`
  display: flex;
  flex-direction: column;
`;
const ForPerCent = styled.div`
  display: flex;
  h3 {
    transform: translateX(25px);
  }
`;
const CheckboxContainer = styled.div`
  position: relative;
  margin-right: 15px;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 32px;
  height: 20px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
