import List from "../../images/Group.png";
import RatingImage from "../../images/rating.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Rating = () => {
  return (
    <RatingContainer>
      <ListDiv>
        <img src={List} alt="" />
        <h3>ჩემი პარტიული სია</h3>
      </ListDiv>
      <RatingDiv>
        <img src={RatingImage} alt="" />
        <Link
          style={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "24px",
            color: "#6f7680",
            textDecoration: "none",
          }}
          to="/ratinglist"
        >
          რეიტინგი
        </Link>
      </RatingDiv>
    </RatingContainer>
  );
};

export default Rating;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(41, 45, 51, 0.04),
    inset 0px -1px 0px rgba(41, 45, 51, 0.1);
  border-radius: 8px;
  padding: 16px;
  min-width: 318px;
`;
const ListDiv = styled.div`
  display: flex;
  align-items: center;
  background: #1a8917;
  border-radius: 6px;
  padding-top: 12px;
  padding-left: 12px;
  padding-bottom: 12px;
  /* font-family: "TBC Contractica"; */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #ffffff;
  gap: 12px;
  img {
    height: 12px;
    width: 24px;
  }
`;
const RatingDiv = styled.div`
  display: flex;
  padding-top: 12px;
  padding-left: 12px;
  gap: 12px;
  /* font-family: "TBC Contractica"; */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #6f7680;
`;
