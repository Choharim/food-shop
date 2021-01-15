import React from "react";
import BigButton from "components/Button/BigButton";
import styled from "styled-components";

const OrderBtn = ({ food, order }) => {
  return (
    <>
      <Btn color={true ? "#d7d2cb" : "#9e8380"}>
        {food.name} 주문하기 / 총 {order.length * food.price} 원
      </Btn>
    </>
  );
};

export default OrderBtn;

const Btn = styled(BigButton)`
  position: absolute;
  bottom: 0;
  width: 72%;
  visibility: visible;
`;
