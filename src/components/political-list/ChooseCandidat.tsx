import React from "react";
import styled from "styled-components";
import arrow from "../../images/arrow.png";
import Delete from "../../images/trash.png";
import Select, { components, OptionProps } from "react-select";


const ChooseCandidat = () => {
    const Option = (props: any) => {
        return (
          <div>
            <components.Option {...props}>
              <img src="https://i.picsum.photos/id/153/24/24.jpg?hmac=HhBzaFkAtefIH3nCY7r2lHLaWodBZ57Jkq7-yR3Sk30" />
              {props.value}
            </components.Option>
          </div>
        );
      };
    const options = [
        { value: "ანი ავაზნელი", label: "ანი ავაზნელი" }
      ];
  return (
    <ChooseDiv>
      <Choose>
        <h2>1</h2>
        <SelectD>
          <h3>აირჩიე კანდიდატი</h3>
          <Select 
          placeholder ="პოლიტიკოსის სახელი და გვარი"
          options={options}
          styles={{
            option: (base) => ({
              ...base,
              border: `1px solid red`,
              minWidth: '330',
              height: '44',
            })
          }}
          components={{ Option }}
          />
        </SelectD>
      </Choose>
      <Money>
        <h3>მხარდასაჭერი თანხა</h3>
        <MoneyChanger>
          <IconsContainer>
            <ForGed>
              <h4>0</h4>
              <h4>GeD</h4>
            </ForGed>
            <ForPerCent>
              <h3 style={{ display: "block", width: "100px" }}>პროცენტი</h3>
              <CheckboxContainer>
                <CheckBox id="checkbox" type="checkbox" />
                <CheckBoxLabel htmlFor="checkbox" />
              </CheckboxContainer>
            </ForPerCent>
          </IconsContainer>
          <button>
            <img src={Delete} alt="" />
          </button>
        </MoneyChanger>
      </Money>
    </ChooseDiv>
  );
};

export default ChooseCandidat;

const ChooseDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #eaeaeb;
  border-bottom: 1px solid #eaeaeb;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const Choose = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #292d33;
  }
`;

const Money = styled.div`
  display: flex;
  flex-direction: column;
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

const SelectD = styled.div``;

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

const ForGed = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #292d33;
  gap: 5px;
  margin-left: 12px;
`;
const ForPerCent = styled.div`
  display: flex;
  h3 {
    margin-left: 10px;
  }
`;
