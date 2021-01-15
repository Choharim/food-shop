import React from "react";
import styled from "styled-components";
import SmallButton from "components/Button/SmallButton";

const Add = ({ order, setOrder, index }) => {
  const addItemArray = ["맛보기 랜덤", "맛보기 연어쿠키", "미니 양치츄"];
  let check;
  let copy = order.slice();

  const handleChoice = (index) => (e) => {
    if (e.target.value === "no") {
      copy[index].add = ["no"];
    } else {
      if (order[index].add.some((item) => item === e.target.value)) {
        //추가 재료 눌렀을 때 똑같은 값을 눌렀으면 삭제되고, 이전에 no 눌렀으면 no 사라지게
        check = order[index].add.filter(
          (item) => item !== e.target.value && item !== "no"
        );
        copy[index].add = check;
      } else {
        //추가 재료 눌렀을 때 같은 값이 없으면 추가, 이전에 no 눌렀으면 no 사라지게
        check = order[index].add.filter((item) => item !== "no");
        copy[index].add = check;
        copy[index].add.push(e.target.value);
      }
    }
    setOrder(copy);
  };

  return (
    <>
      <HeadContainer>
        <Title>추가할 재료</Title>
        <CheckBoxContainer>
          <CheckBoxLabel>없음</CheckBoxLabel>
          <CheckBox
            type="checkbox"
            name="add"
            value="no"
            onChange={handleChoice(index)}
            checked={order[index].add.some((item) => item === "no")}
          />
        </CheckBoxContainer>
      </HeadContainer>
      <BtnContainer>
        {addItemArray.map((ing, i) => (
          <SmallButton
            key={i}
            color={
              order[index].add.some((item) => item === ing)
                ? "#b89995"
                : "#d7d2cb"
            }
            name="add"
            value={ing}
            onClick={handleChoice(index)}
          >
            {ing}
          </SmallButton>
        ))}
      </BtnContainer>
    </>
  );
};

export default Add;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

const Title = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBoxLabel = styled.label`
  font-size: 13px;
  color: #7d6765;
`;
const CheckBox = styled.input`
  width: 18px;
  height: 18px;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;
