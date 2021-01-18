import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Confirm = ({ food, order, step, setStep, orderData, setOrderData }) => {
  const backStep = () => {
    setOrderData(orderData.slice(0, -1));
    setStep(step - 1);
  };

  return (
    <>
      <Container>
        {order.map((obj, index) => (
          <DataContainer key={index}>
            <Cart />
            <Name>
              {obj.foodName} {index + 1}
            </Name>
            <Card>
              <TextContainer>
                <Title>제외할 재료 : </Title>
                {obj.except.map((item, index) =>
                  item === "no" ? (
                    <Text key={index}>없음</Text>
                  ) : (
                    <Text key={index}>{item}</Text>
                  )
                )}
              </TextContainer>
              <TextContainer>
                <Title>추가할 재료 : </Title>
                {obj.add.map((item, index) =>
                  item === "no" ? (
                    <Text key={index}>없음</Text>
                  ) : (
                    <Text key={index}>{item}</Text>
                  )
                )}
              </TextContainer>
              <TextContainer>
                <Title>알러지 유무 : </Title>
                {obj.allergy === "no" ? (
                  <Text>없음</Text>
                ) : (
                  <Text>있음 ( {obj.allergyText} )</Text>
                )}
              </TextContainer>
            </Card>
          </DataContainer>
        ))}
      </Container>
      <TotalContainer>
        <BackBtn onClick={backStep} />
        <Total>
          <TotalPrice>Total</TotalPrice>
          <TotalPrice> {order.length * food.price} 원</TotalPrice>
        </Total>
      </TotalContainer>
    </>
  );
};

export default Confirm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 40px);
  margin: 20px 20px 0;
  border-left: 3px solid #b89995;
  overflow-y: auto;
`;

const DataContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
`;

const Cart = styled(AiOutlineShoppingCart)`
  position: absolute;
  left: -16px;
  font-size: 1.2rem;
  padding: 5px;
  color: white;
  background-color: #b89995;
  border-radius: 50%;
`;

const Name = styled.span`
  margin-left: 20px;
  font-size: 16px;
  font-weight: bolder;
  color: #493c3b;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 40px);
  margin: 10px 0 10px 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: #b89995;
`;

const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-bottom: 10px;
`;

const Title = styled.span`
  margin-right: 10px;
  font-size: 16px;
  color: #fff;
`;

const Text = styled.span`
  margin-right: 10px;
  font-size: 13px;
  color: #fff;
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 40px);
  margin: 15px 20px 0;
  padding-top: 10px;
  border-top: 1px solid #b89995;
`;

const BackBtn = styled(BsArrowLeft)`
  font-size: 1.5rem;
  color: #493c3b;
  cursor: pointer;
`;

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
`;

const TotalPrice = styled.span`
  font-size: 20px;
  font-weight: bolder;
  color: #493c3b;
`;
