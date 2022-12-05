import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import styled from 'styled-components'
import Xicon from '../images/xIcon.svg'
import Ged from '../images/GeD.png'

export interface ModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalPayment: React.FC<ModalProps> = ({ setModal }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    type Inputs = {
        example: number,
        exampleRequired: string,
    };

    const closeHandler = () => {
        setModal(prev => !prev)
    }


    return (
        <ModalContainer>
            <Modal>
                <ModalHeader>
                    <h3>შეიყვანე თანხა</h3>
                    <img onClick={closeHandler} src={Xicon} alt="cancel" />
                </ModalHeader>
                <ModalBody onSubmit={handleSubmit(onSubmit)}>
                    <BalanceDiv>
                        <h3>პირადი ბალანსი</h3>
                        <h4>10 000 000 GeD</h4>
                    </BalanceDiv>
                    <ModalCenter>
                        <h3>
                            შეიყვანე შენი პარტიის მხარდასაჭერი რაოდენობა შენი ბალანსიდან
                        </h3>
                    </ModalCenter>
                    <ModalInput>
                        <h3>მხარდასაჭერი თანხა</h3>
                        <MoneyInput style={{ borderColor: errors.exampleRequired ? 'red' : '' }} type="number" placeholder='0' {...register("exampleRequired", { required: true })} />
                        <ErrorDiv> {errors.exampleRequired && <span style={{ fontSize: '13px' }}>შეიყვანე თანხა!</span>}</ErrorDiv>
                        <IconsContainer>
                            <h3 style={{ display: 'block', width: '100px' }}>მთელი ბალანსი</h3>
                            <CheckboxContainer>
                                <CheckBox id="checkbox" type="checkbox" />
                                <CheckBoxLabel htmlFor="checkbox" />
                            </CheckboxContainer>
                            <img src={Ged} alt="ged" />
                        </IconsContainer>
                    </ModalInput>

                </ModalBody>
                <ButtonContainer>
                    <span onClick={closeHandler}>უკან</span>
                    <button>
                        დადასტურება
                    </button>
                </ButtonContainer>

            </Modal>
        </ModalContainer>
    )
}

export default ModalPayment


const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    background-color: rgba(27, 33, 39, 0.56);
    display: flex;
    align-items: center;
    justify-content: center;
`


const Modal = styled.div`
    max-width: 432px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 8px;
`

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-width: 1px ;
    border-bottom: 1px solid #E0E2E7;
    padding: 18px 24px;
`

const ModalBody = styled.form`
    display: flex;
    flex-direction: column;
    padding: 24px 24px 0 24px;
    flex-direction: column;
    gap: 24px;
    font-family: 'TBC Contractica1';
    line-height: 24px;
`

const BalanceDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(41, 45, 51, 0.04);
    border-radius: 6px;
    padding: 16px;
`

const ModalCenter = styled.div`
    
`

const ModalInput = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    position: relative;
`

const MoneyInput = styled.input`
margin-top: 10px;
    padding: 16px 14px;
    border: none;
    background: #FFFFFF;
    border: 1px solid #E0E2E7;
    border-radius: 6px;
    :focus {
        outline: none;
    }
   
`

const IconsContainer = styled.div`
position: absolute;
display: flex;
align-items: center;
gap: 10px;
top: 36%;
left: 50%;
h3{
    font-size: 12px;
    line-height: 16px;
    color: rgba(114, 122, 130, 0.75);
}
`

const CheckboxContainer = styled.div`
    position: relative;
`

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
   
    border-top: 1px solid #E0E2E7;
    button{
        width: 154px;
        height: 40px;
        background: #1A8917;
        border-radius: 32px;
        border: none;
        padding: 8px 24px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        margin-left: 30px;
        opacity: 1;
    } 
`

const ErrorDiv = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
`