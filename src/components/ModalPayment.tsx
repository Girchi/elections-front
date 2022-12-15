import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import Xicon from "../images/xIcon.svg";
import Ged from "../images/GeD.png";

export interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPoliticalList: React.Dispatch<React.SetStateAction<boolean>>;
  input: number;
  setInput: React.Dispatch<React.SetStateAction<number>>;
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
}

const ModalPayment: React.FC<ModalProps> = ({
  setShowPoliticalList,
  input,
  setInput,
  money,
  setMoney,
  balance,
  setBalance,
  setModal
}) => {
  // const [input, setInput] = useState<number | string>("");
  const [checkboxInput, setCheckboxInput] = useState<string | boolean>(true);

  // console.log(balance);
  const correctNumber = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.valueAsNumber <= 5000000000) {
      setInput(e.target.valueAsNumber);
    }
    if (e.target.value === "") {
      setInput(0);
    }
  };
  const remainingBalance = correctNumber(Math.abs(balance - Number(input)));

  if (input < 0) {
    setInput(0);
  }

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxInput((prev) => !prev);
    if (checkboxInput) {
      setInput(balance);
    } else {
      setInput(0);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  type Inputs = {
    example: number;
    exampleRequired: string;
  };

  const closeHandler = () => {
    setModal(false);
  };
  const closeAndShowPoliticalListHandler = () => {
    if (input && input <= balance) {
      setModal(false);
      setShowPoliticalList(false);
      setMoney(input);
      // setBalance(input);
      setInput(0);
      setBalance(balance - input + money);
    }
  };

  return (
    <ModalContainer>
      <Modal>
        <ModalHeader>
          <h3>შეიყვანე თანხა</h3>
          <img
            onClick={closeHandler}
            src={Xicon}
            alt="cancel"
            style={{ cursor: "pointer" }}
          />
        </ModalHeader>
        <ModalBody onSubmit={handleSubmit(onSubmit)}>
          <BalanceDiv>
            <BalancedContainer>
              <BalanseInfo>
                <h3>პირადი ბალანსი</h3>
                {input > 0 && <h3>ფსონი</h3>}
              </BalanseInfo>
              <BalanseNumbers>
                <h4>{correctNumber(balance)} GeD</h4>
                {input > 0 && <h5>{correctNumber(input)} GeD</h5>}
              </BalanseNumbers>
            </BalancedContainer>
            {input > 0 && <BorderLine></BorderLine>}

            {input > 0 && (
              <RemainingBalance>
                <h4
                  style={{
                    color: input > balance ? "red" : "",
                  }}
                >
                  {input > balance ? "არასაკმარისი GeD" : "ნაშთი"}
                </h4>
                <h5
                  style={{
                    color: input > balance ? "red" : "",
                  }}
                >
                  {balance >= Number(input) ? "" : "-"} {remainingBalance} Ged
                </h5>
              </RemainingBalance>
            )}
          </BalanceDiv>
          <ModalCenter>
            <h3>
              შეიყვანე შენი პარტიის მხარდასაჭერი რაოდენობა შენი ბალანსიდან
            </h3>
          </ModalCenter>
          <ModalInput>
            <h3>მხარდასაჭერი თანხა</h3>
            <MoneyInput
              {...register("exampleRequired", { required: true })}
              onChange={changeInputHandler}
              value={input > 0 ? input : ""}
              style={{ borderColor: errors.exampleRequired ? "red" : "" }}
              type="number"
              placeholder="0"
            />
            <ErrorDiv>
              {" "}
              {errors.exampleRequired && (
                <span style={{ fontSize: "13px" }}>შეიყვანე თანხა!</span>
              )}
            </ErrorDiv>
            <IconsContainer>
              <h3 style={{ display: "block", width: "100px" }}>
                მთელი ბალანსი
              </h3>
              <CheckboxContainer>
                <CheckBox
                  id="checkbox"
                  type="checkbox"
                  onChange={checkboxHandler}
                />
                <CheckBoxLabel htmlFor="checkbox" />
              </CheckboxContainer>
              <img src={Ged} alt="ged" />
            </IconsContainer>
          </ModalInput>
        </ModalBody>
        <ButtonContainer>
          <span onClick={closeHandler}>უკან</span>
          <button onClick={closeAndShowPoliticalListHandler}>
            დადასტურება
          </button>
        </ButtonContainer>
      </Modal>
    </ModalContainer>
  );
};

export default ModalPayment;

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: rgba(27, 33, 39, 0.56);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Modal = styled.div`
  max-width: 432px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-width: 1px;
  border-bottom: 1px solid #e0e2e7;
  padding: 18px 24px;
`;

const ModalBody = styled.form`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0 24px;
  flex-direction: column;
  gap: 24px;
  font-family: "TBC Contractica1";
  line-height: 24px;
`;

const BalanceDiv = styled.div`
  background: rgba(41, 45, 51, 0.04);
  border-radius: 6px;
  padding: 16px;
`;
const BalancedContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BalanseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h3 {
    font-style: normal;
    font-weight: 500;
    color: #727a82;
    font-size: 14px;
    line-height: 16px;
  }
`;
const BalanseNumbers = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    color: red;
    text-align: end;
  }
`;
const BorderLine = styled.div`
  border-bottom: 1px solid #e0e2e7;
  margin-top: 16px;
`;
const RemainingBalance = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  h4 {
    color: #727a82;
  }
`;

const ModalCenter = styled.div`
  h3 {
    opacity: 0.5;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
`;

const ModalInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
`;

const MoneyInput = styled.input`
  margin-top: 10px;
  padding: 16px 14px;
  border: none;
  background: #ffffff;
  border: 1px solid #e0e2e7;
  border-radius: 6px;

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

const IconsContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  top: 36%;
  left: 50%;
  h3 {
    font-size: 12px;
    line-height: 16px;
    color: rgba(114, 122, 130, 0.75);
  }
`;

const CheckboxContainer = styled.div`
  position: relative;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 24px;
  border-width: 1px;

  border-top: 1px solid #e0e2e7;
  button {
    width: 154px;
    height: 40px;
    background: #1a8917;
    border-radius: 32px;
    border: none;
    padding: 8px 24px;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin-left: 30px;
    opacity: 1;
    cursor: pointer;
  }
  span {
    cursor: pointer;
  }
`;

const ErrorDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
`;
