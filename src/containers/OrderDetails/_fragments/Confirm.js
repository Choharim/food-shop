import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

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
            <TextContainer>
              <Dot />
              <Title>
                {obj.foodName} {index + 1}
              </Title>
            </TextContainer>
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
  width: 80%;
  height: auto;
  margin-top: 20px;
  border-left: 3px solid #9e8380;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 30px;
`;

const Dot = styled.div`
  position: relative;
  left: -9px;
  width: 15px;
  height: 15px;
  background-color: #9e8380;
  border-radius: 50%;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: bolder;
  margin-right: 5px;
  color: #493c3b;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 30px);
  padding: 10px;
  margin: 0 0 10px 10px;
  border-radius: 5px;
  background-color: #e0cfcd;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const Text = styled.span`
  margin-right: 15px;
  font-size: 13px;
  color: #493c3b;
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 15px;
  padding: 10px 0;
  border-top: 1px solid #b89995;
`;

const BackBtn = styled(BsArrowLeft)`
  font-size: 2rem;
  color: #9e8380;
  cursor: pointer;
`;

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
`;

const TotalPrice = styled.span`
  font-size: 23px;
  font-weight: bolder;
  color: #493c3b;
`;
