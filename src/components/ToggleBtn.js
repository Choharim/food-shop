import React, { useState } from "react";
import styled, { css } from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

const ToggleBtn = ({ food, index, children }) => {
  const [show, setShow] = useState(true);

  return (
    <Container>
      <HeadContainer>
        <Title>
          {food.name} {index + 1}
        </Title>
        <UpBtn onClick={() => setShow(!show)} show={show ? "up" : "down"} />
      </HeadContainer>
      {show && children}
    </Container>
  );
};

export default ToggleBtn;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 2px dashed #b89995;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bolder;
`;

const UpBtn = styled(IoIosArrowUp)`
  margin-left: 10px;
  padding: 5px;
  font-size: 1.2rem;
  ${(props) =>
    props.show === "up"
      ? css`
          transform: rotate(360deg);
        `
      : props.show === "down"
      ? css`
          transform: rotate(180deg);
        `
      : null}
  cursor: pointer;
`;
