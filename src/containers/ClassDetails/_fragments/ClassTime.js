import React from "react";
import styled from "styled-components";

const ClassTime = ({ setFoodClass, foodClass, className }) => {
  const handleChange = (e) => {
    setFoodClass({
      ...foodClass,
      [e.target.name]: e.target.value,
      name: className,
    });
  };

  return (
    <Container>
      <Text>시간을 선택하세요</Text>
      <InputContainer>
        <InputContainer>
          <Input
            type="radio"
            id="am"
            name="time"
            value="am"
            onChange={handleChange}
          />
          <Label htmlFor="am">오전</Label>
        </InputContainer>
        <InputContainer>
          <Input
            type="radio"
            id="pm"
            name="time"
            value="pm"
            onChange={handleChange}
          />
          <Label htmlFor="pm">오후</Label>
        </InputContainer>
      </InputContainer>
    </Container>
  );
};

export default ClassTime;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

const Text = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bolder;
  color: #493c3b;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input``;

const Label = styled.label`
  margin-right: 10px;
  font-size: 16px;
  font-weight: bolder;
  color: #493c3b;
`;
