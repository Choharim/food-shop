import React from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Intro = ({ food, count, setCount, setOrder, order }) => {
  const clickMinus = () => {
    if (count !== 1) {
      setCount(count - 1);
      setOrder(order.slice(0, -1));
    }
  };

  const clickPlus = () => {
    setCount(count + 1);
    setOrder(
      order.concat({
        foodName: "",
        except: [],
        add: [],
        allergy: "",
        allergyText: "",
      })
    );
  };

  return (
    <Container>
      <Title style={{ marginBottom: "10px" }}>{food.name}</Title>
      <Text> {food.desc}</Text>
      <TextContainer>
        <Title>가격</Title>
        <Text> {food.price} / 개당</Text>
      </TextContainer>
      <TextContainer>
        <Title>개수</Title>
        <CountContainer>
          <MinusBtn onClick={clickMinus} />
          <Text style={{ fontSize: "23px" }}>{count}</Text>
          <PlusBtn onClick={clickPlus} />
        </CountContainer>
      </TextContainer>
      <TextContainer>
        <Title>총 금액</Title>
        <Text>{food.price * count} 원</Text>
      </TextContainer>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 30px;
  border-bottom: 1px solid #b89995;
`;

const Title = styled.span`
  margin-right: 10px;
  font-size: 23px;
  font-weight: bolder;
  color: #493c3b;
`;

const Text = styled.span`
  margin-bottom: 5px;
  font-size: 16px;
  color: #7d6765;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 5px;
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MinusBtn = styled(AiOutlineMinus)`
  padding: 2px;
  margin-right: 25px;
  background-color: #b89995;
  border-radius: 50%;
  color: white;
  cursor: pointer;
`;

const PlusBtn = styled(AiOutlinePlus)`
  padding: 2px;
  margin-left: 25px;
  background-color: #b89995;
  color: white;
  border-radius: 50%;
  cursor: pointer;
`;
