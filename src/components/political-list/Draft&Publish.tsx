import React from "react";
import styled from "styled-components";
import Draft from "../../images/draft.png";
import Publish from "../../images/publish.png";

interface ListProps {
  setShowPublicPage: React.Dispatch<React.SetStateAction<boolean>>
}

const DraftPublish = ({ setShowPublicPage }: any) => {
  return (
    <Both>
      <SaveD>
        <h4>დრაფტად შენახვა</h4>
        <img src={Draft} alt="draft" />
      </SaveD>
      <PublishD>
        <h4 onClick={() => setShowPublicPage(true)}>სიის გამოქვეყნება</h4>
        <img src={Publish} alt="draft" />
      </PublishD>
    </Both>
  );
};

export default DraftPublish;

const Both = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 470px;
  margin-left: auto;
  gap: 12px;
`;

const SaveD = styled.button`
  width: 227px;
  height: 48px;
  background: #f3f3f4;
  border-radius: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #292d33;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  border: none;
  cursor: pointer;
`;

const PublishD = styled.button`
  width: 227px;
  height: 48px;
  background: #1a8917;
  border-radius: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 9px;
  align-items: center;
  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
`;
