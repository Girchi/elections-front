import React from "react";
import styled from "styled-components";
import Plus from "../../images/coolicon.jpg";

const AddPolitican = () => {
  return (
    <AddPoliticanD>
      <button>
        <h5>დაამატე პოლიტიკოსი</h5>
        <img src={Plus} alt="" />
      </button>
    </AddPoliticanD>
  );
};

export default AddPolitican;

const AddPoliticanD = styled.div`
    border-top: 1px solid #EAEAEB;
    padding-top: 32px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 264px;
    height: 48px;
    background: #f3f3f4;
    border-radius: 56px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #292d33;
  }
  img {
    height: 14px;
    width: 14px;
    margin-left: 11px;
  }
`;
