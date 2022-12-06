import styled from "styled-components";
import gedImg from "../../images/Gedimg.png";
import editImage from "../../images/coolicon.png";

interface ListProps {
  input: string | number;
}

const SeperatedMoney: React.FC<ListProps> = ({ input }) => {
  return (
    <MainDiv>
      <MoneyDiv>
        <EditInfo>
          <h3>{input}</h3>
          <img src={editImage} alt="edit" style={{ cursor: "pointer" }} />
        </EditInfo>
        <span>გამოყოფილი საპარტიო თანხა</span>
      </MoneyDiv>
      <img src={gedImg} alt="geDimg" />
    </MainDiv>
  );
};

export default SeperatedMoney;

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
const MoneyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #727a82;
  }
`;

const EditInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #292d33;
  }
`;
