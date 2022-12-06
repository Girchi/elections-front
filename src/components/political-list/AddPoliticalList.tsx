import styled from "styled-components";
import gedImg from "../../images/Gedimg.png";

const AddPoliticalList = () => {
  return (
    <PoliticalList>
      <div>
        <h3>10 010 000</h3>
        <span>გამოყოფილი საპარტიო თანხა</span>
      </div>
      <div>
        <img src={gedImg} alt="ged-img" />
      </div>
    </PoliticalList>
  );
};

export default AddPoliticalList;

const PoliticalList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  h3 {
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #292d33;
    font-weight: bold;
    padding-bottom: 7px;
  }
  span {
    color: #727a82;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
