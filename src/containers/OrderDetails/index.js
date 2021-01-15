import React, { useState, useContext } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import Intro from "./_fragments/Intro";
import Except from "./_fragments/Except";
import Add from "./_fragments/Add";
import Allergy from "./_fragments/Allergy";
import Confirm from "./_fragments/Confirm";
import ControlBtns from "./_fragments/ControlBtns";
import ToggleBtn from "components/ToggleBtn";
import BigButton from "components/Button/BigButton";
import { Context } from "components/ContextProvider/ContextProvider";

const OrderDetails = () => {
  let history = useHistory();
  const { orderData, setOrderData } = useContext(Context);
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [count, setCount] = useState(1);
  const [order, setOrder] = useState([
    {
      foodName: "",
      except: [],
      add: [],
      allergy: "",
      allergyText: "",
    },
  ]);
  let copy = order.slice();

  const check = () => {
    if (step === 1) {
      if (
        order.every(
          (obj) => obj.except.length && obj.add.length && obj.allergy !== ""
        )
      ) {
        if (
          order.some((obj) => obj.allergy === "yes" && obj.allergyText === "")
        ) {
          setOrderSuccess(false);
          alert("알러지 종류를 적어주세요!");
        } else {
          for (let i = 0; i < order.length; i++) {
            copy[i].foodName = location.state.food.name;
          }
          setOrderSuccess(true);
          setOrder(copy);
          setOrderData([...orderData, copy]);
          setStep(step + 1);
        }
      } else {
        alert("제외할 재료, 추가할 재료, 알러지 유무를 모두 체크해주세요!");
        setOrderSuccess(false);
      }
    } else {
      history.push("/order");
    }
  };
  ///////alert두번 나옴 두번 렌더링되는 이유는???????

  return (
    <>
      {location.state === undefined ? (
        history.push("/shop")
      ) : (
        <DetailsContainer>
          <FoodPicture image={location.state.food.image2}>
            <BackBtn onClick={() => history.push("/shop")} />
          </FoodPicture>
          <ContainerBg>
            <ContentsContainer>
              {step === 1 ? (
                <>
                  <Intro
                    food={location.state.food}
                    count={count}
                    setCount={setCount}
                    setOrder={setOrder}
                    order={order}
                  />
                  {[...Array(count)].map((detail, index) => (
                    <ToggleBtn
                      key={index}
                      food={location.state.food}
                      index={index}
                    >
                      <Except
                        food={location.state.food}
                        order={order}
                        setOrder={setOrder}
                        index={index}
                      />
                      <Add order={order} setOrder={setOrder} index={index} />
                      <Allergy
                        order={order}
                        setOrder={setOrder}
                        index={index}
                      />
                      <ControlBtns
                        index={index}
                        order={order}
                        setOrder={setOrder}
                      />
                    </ToggleBtn>
                  ))}
                </>
              ) : (
                <Confirm
                  food={location.state.food}
                  order={order}
                  step={step}
                  setStep={setStep}
                  orderData={orderData}
                  setOrderData={setOrderData}
                />
              )}
            </ContentsContainer>
            {step === 1 ? (
              <Btn color={orderSuccess ? "#9e8380" : "#d7d2cb"} onClick={check}>
                주문하기 / 총 {count * location.state.food.price} 원
              </Btn>
            ) : (
              <Btn color={"#9e8380"} onClick={check}>
                저장
              </Btn>
            )}
          </ContainerBg>
        </DetailsContainer>
      )}
    </>
  );
};

export default OrderDetails;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FoodPicture = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.image});
  background-size: contain;
`;

const BackBtn = styled(BsArrowLeft)`
  align-self: flex-start;
  padding: 5px;
  margin: 5px;
  background-color: #f3eceb;
  border-radius: 50%;
  opacity: 0.8;
  font-size: 2rem;
  cursor: pointer;
`;

const ContainerBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 90;
  visibility: hidden;
`;

const ContentsContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 520px;
  margin-bottom: 100px;
  z-index: 100;
  overflow-y: auto;
  visibility: visible;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0 -7px 20px 0 rgba(0, 0, 0, 0.14);
`;

const Btn = styled(BigButton)`
  position: absolute;
  bottom: 0;
  width: 75%;
  visibility: visible;
`;
