import React from "react";
import styled from "styled-components";
import SmallButton from "components/Button/SmallButton";

const Allergy = ({ order, setOrder, index }) => {
  let copy = order.slice();

  const handleChoice = (input, index) => (e) => {
    copy[index] = Object.assign(order[index], {
      [input]: e.target.value,
    });
    if (e.target.value === "no") {
      copy[index] = Object.assign(order[index], {
        allergyText: "",
      });
    }
    setOrder(copy);
  };

  return (
    <>
      <Title>알러지 유무</Title>
      <BtnContainer>
        <SmallButton
          color={order[index].allergy === "no" ? "#b89995" : "#d7d2cb"}
          onClick={handleChoice("allergy", index)}
          value="no"
        >
          X
        </SmallButton>
        <SmallButton
          color={order[index].allergy === "yes" ? "#b89995" : "#d7d2cb"}
          onClick={handleChoice("allergy", index)}
          value="yes"
        >
          O
        </SmallButton>
      </BtnContainer>
      {order[index].allergy === "yes" && (
        <AllergyInput
          onChange={handleChoice("allergyText", index)}
          type="text"
          placeholder="알러지 종류를 적어주세요."
        />
      )}
    </>
  );
};

export default Allergy;

const Title = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const AllergyInput = styled.textarea`
  outline: none;
  border: 2px solid #b89995;
  width: calc(100% - 20px);
  margin: 15px 0;
  padding: 5px 10px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  color: #493c3b;
`;
