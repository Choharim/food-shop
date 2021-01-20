import React, { useState } from "react";
import styled, { css } from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import FoodClassData from "./_fragments/FoodClassData";
import OrderData from "./_fragments/OrderData";

const MyCart = () => {
  let history = useHistory();
  const [filter, setFilter] = useState("order");

  return (
    <ShopContainer>
      <HeadContainer>
        <HomeBtn onClick={() => history.push("/")} />
        <Title>장바구니</Title>
      </HeadContainer>
      <BtnContainer>
        <OrderBtn color={filter} onClick={() => setFilter("order")}>
          내 주문
        </OrderBtn>
        <FoodClassBtn color={filter} onClick={() => setFilter("foodClass")}>
          내 수업
        </FoodClassBtn>
      </BtnContainer>
      <Container>
        {filter === "order" ? <OrderData /> : <FoodClassData />}
      </Container>
    </ShopContainer>
  );
};

export default MyCart;

const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HeadContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const HomeBtn = styled(RiArrowGoBackLine)`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  color: #493c3b;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bolder;
  color: #493c3b;
`;

const BtnContainer = styled.div`
  display: flex;
  width: 100%;
`;

const OrderBtn = styled.div`
  text-align: center;
  width: 50%;
  padding: 10px 0;
  font-size: 16px;
  font-weight: bolder;
  color: #493c3b;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  cursor: pointer;
  ${(props) =>
    props.color === "order" &&
    css`
      background-color: #b89995;
      color: #fff;
    `}
`;

const FoodClassBtn = styled.div`
  text-align: center;
  width: 50%;
  padding: 10px 0;
  font-size: 16px;
  font-weight: bolder;
  color: #493c3b;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  cursor: pointer;
  ${(props) =>
    props.color === "foodClass" &&
    css`
      background-color: #b89995;
      color: #fff;
    `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 40px);
  margin: 20px 20px 40px;
`;
