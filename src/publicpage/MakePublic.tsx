import styled from "styled-components";
import Xicon from "../images/xIcon.svg";
import statusImg from "../images/Status.png";

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

const MakePublic = () => {
  return (
    <ModalContainer>
      <Modal>
        <ModalHeader>
          <h3>გაასაჯაროვე პროფილი</h3>
          <img src={Xicon} alt="cancel" style={{ cursor: "pointer" }} />
        </ModalHeader>
        <ModalBody>
          <ModalCenter>
            <img src={statusImg} alt="status-img" />
          </ModalCenter>
          <ModalInput>
            <h4>პარტიული სიის გამოსაქვეყნებლად საჭიროა პროფილის გასაჯაროება</h4>
          </ModalInput>
        </ModalBody>
        <ButtonContainer>
          <span>გასაგებია</span>
          <button>დადასტურება</button>
        </ButtonContainer>
      </Modal>
    </ModalContainer>
  );
};

export default MakePublic;

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

const ModalCenter = styled.div`
  img {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
`;

const ModalInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  h4 {
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #6f7680;
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
