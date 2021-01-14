import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Context } from "components/ContextProvider/ContextProvider";

const Intro = ({ food }) => {
  const { count, setCount } = useContext(Context);

  return (
    <Container>
      <h1 style={{ margin: "0 0 10px" }}>{food.name}</h1>
      <Text> {food.desc}</Text>
      <TextContainer>
        <TextContainer>
          <Title>가격</Title>
          <Text> {food.price} / 개당</Text>
        </TextContainer>
        <TextContainer>
          <Title>개수</Title>
          <CountContainer>
            <MinusBtn onClick={() => count !== 1 && setCount(count - 1)} />
            <Text>{count}</Text>
            <PlusBtn onClick={() => setCount(count + 1)} />
          </CountContainer>
        </TextContainer>
      </TextContainer>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  border-bottom: 1px solid #b89995;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin: 5px 0;
`;

const Title = styled.span`
  margin-right: 20px;
  font-size: 23px;
  font-weight: bolder;
`;

const Text = styled.span`
  font-size: 18px;
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 130px;
`;
const MinusBtn = styled(AiOutlineMinus)`
  background-color: #f3eceb;
  font-size: 1.2rem;
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;
`;

const PlusBtn = styled(AiOutlinePlus)`
  background-color: #f3eceb;
  font-size: 1.2rem;
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;
`;
