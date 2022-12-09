import styled from "styled-components";
import Delete from "../../images/trash.png";
import Select from "react-select";

const ChooseCandidat = () => {
  const options: any = [
    {
      value: "ანი ავაზნელი",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
          />
          ანი ავაზნელი
        </div>
      ),
    },
    {
      value: "ვალერია ზანგური",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg"
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
          />
          ვალერია ზანგური
        </div>
      ),
    },
    {
      value: "დიმა ჭილაია",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400046/alexvolot200400046.jpg?ver=6"
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
          />
          დიმა ჭილაია
        </div>
      ),
    },
  ];
  return (
    <ChooseDiv>
      <Choose>
        <h2>1</h2>
        <SelectD>
          <h3>აირჩიე კანდიდატი</h3>
          <Select
            placeholder="პოლიტიკოსის სახელი და გვარი"
            options={options}
            styles={{
              option: (base, state) => ({
                ...base,
                "*": {
                  boxShadow: "none !important",
                },
                minWidth: "200px",
                display: "flex",
                columnGap: "15px",
                alignItems: "center",
                border: 0,
                backgroundColor: "#FFFFFF",
                color: "black",
                fontSize: "15px",
                lineHeight: "24px",
                // This line disable the blue border
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F3F3F4",
                },
              }),
              control: (base, state) => ({
                ...base,
                border: "1px solid #E0E2E7",
                boxShadow: "none",
                cursor: "pointer",
                fontSize: "15px",
                "&:hover": {
                  border: "1px solid #E0E2E7",
                },
              }),
            }}
            components={{ ...options }}
          />
        </SelectD>
      </Choose>
      <Money>
        <h3>მხარდასაჭერი თანხა</h3>
        <MoneyChanger>
          <IconsContainer>
            <ForGed placeholder={0 +" GeD"}>
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
  padding-top: 24px;
  padding-bottom: 24px;
`;

const Choose = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const SelectD = styled.div`
  width: 340px;

  h3 {
    margin-bottom: 6px;
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
const ForPerCent = styled.div`
  display: flex;
  h3 {
    transform: translateX(25px);
  }
`;
