import React, { useContext } from "react";
import { Context } from "components/ContextProvider/ContextProvider";
import styled from "styled-components";
import myCart from "icons/myCart.png";
import BigButton from "components/Button/BigButton";
import { useHistory } from "react-router-dom";
import OrderList from "./OrderList";

const OrderData = () => {
  let history = useHistory();
  const { orderData } = useContext(Context);
  console.log(orderData);
  return (
    <DataContainer>
      {Array.isArray(orderData) && orderData.length === 0 ? (
        <Container>
          <Cart image={myCart}></Cart>
          <Title>주문한 것이 없습니다</Title>
          <BigButton color="#7d6765" onClick={() => history.push("/shop")}>
            주문하러 가기
          </BigButton>
        </Container>
      ) : (
        <OrderList />
      )}
    </DataContainer>
  );
};

export default OrderData;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 40px);
  margin: 20px 20px 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Cart = styled.div`
  width: 120px;
  height: 120px;
  margin: 150px 0 30px;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const Title = styled.span`
  font-size: 23px;
  font-weight: bolder;
  color: #493c3b;
`;
