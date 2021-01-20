import React, { useContext } from "react";
import { Data } from "Data";
import styled from "styled-components";
import { Context } from "components/ContextProvider/ContextProvider";

const OrderList = () => {
  const { setOrderData, orderData } = useContext(Context);

  /*
  [
    {
      foodName: "",
      except: [],
      add: [],
      allergy: "",
      allergyText: "",
    },
  ]
  */

  //엑스버튼 누르면 삭제 (체크한거 삭제)
  return (
    <>
      {orderData.map((data, index) => (
        <Container key={index}>
          {data.map((obj, i) => (
            <OrderCard key={i}>
              <Picture
                image={Data.find((food) => food.name === obj.foodName).image2}
              ></Picture>
              <InfoContainer>
                <Name>{obj.foodName}</Name>
                <TextContainer>
                  <Title>제외할 재료 : </Title>
                  {obj.except.map((ec, eci) =>
                    ec === "no" ? (
                      <Text key={eci}>없음</Text>
                    ) : (
                      <Text key={eci}>{ec}</Text>
                    )
                  )}
                </TextContainer>
                <TextContainer>
                  <Title>추가할 상품 : </Title>
                  {obj.add.map((ad, adi) =>
                    ad === "no" ? (
                      <Text key={adi}>없음</Text>
                    ) : (
                      <Text key={adi}>{ad}</Text>
                    )
                  )}
                </TextContainer>
                <TextContainer>
                  <Title>알러지 유무 : </Title>
                  {obj.allergy === "no" ? (
                    <Text>없음</Text>
                  ) : (
                    <Text>{obj.allergyText}</Text>
                  )}
                </TextContainer>
              </InfoContainer>
            </OrderCard>
          ))}
        </Container>
      ))}
    </>
  );
};

export default OrderList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

const OrderCard = styled.div`
  display: flex;
  width: 100%;
  margin: 15px;
`;

const Picture = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 10px;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bolder;
  color: #493c3b;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  margin-right: 5px;
  font-size: 13px;
  color: #493c3b;
`;

const Text = styled.span`
  margin-right: 5px;
  font-size: 13px;
  font-weight: bolder;
  color: #493c3b;
`;