import React from "react";
import styled from "styled-components";
import SmallButton from "components/Button/SmallButton";

const Except = ({ food, order, setOrder, index }) => {
  let check;
  let copy = order.slice();

  const handleChoice = (index) => (e) => {
    if (e.target.value === "no") {
      copy[index].except = ["no"];
    } else {
      if (order[index].except.some((item) => item === e.target.value)) {
        //제외 재료 눌렀을 때 똑같은 값을 눌렀으면 삭제되고, 이전에 no 눌렀으면 no 사라지게
        check = order[index].except.filter(
          (item) => item !== e.target.value && item !== "no"
        );
        copy[index].except = check;
      } else {
        //제외 재료 눌렀을 때 같은 값이 없으면 추가, 이전에 no 눌렀으면 no 사라지게
        check = order[index].except.filter((item) => item !== "no");
        copy[index].except = check;
        copy[index].except.push(e.target.value);
      }
    }
    setOrder(copy);
  };

  return (
    <>
      <HeadContainer>
        <Title>제외할 재료</Title>
        <CheckBoxContainer>
          <CheckBoxLabel>없음</CheckBoxLabel>
          <CheckBox
            type="checkbox"
            name="except"
            value="no"
            onChange={handleChoice(index)}
            checked={order[index].except.some((item) => item === "no")}
          />
        </CheckBoxContainer>
      </HeadContainer>
      <BtnContainer>
        {food.ingredients.map((ing, i) => (
          <SmallButton
            key={i}
            color={
              order[index].except.some((item) => item === ing)
                ? "#b89995"
                : "#fff"
            }
            name="except"
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

export default Except;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`;

const Title = styled.span`
  font-size: 16px;
  margin-bottom: 5px;
  color: #493c3b;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBoxLabel = styled.label`
  margin-right: 5px;
  font-size: 13px;
  color: #493c3b;
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
