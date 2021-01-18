import React, { useState, useContext } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
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
  const { orderData, setOrderData, favorite, setFavorite } = useContext(
    Context
  );
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
          {favorite.some((item) => item === location.state.food.name) ? (
            <FillHeartIcon
              onClick={() =>
                setFavorite(
                  favorite.filter((item) => item !== location.state.food.name)
                )
              }
            />
          ) : (
            <HeartIcon
              onClick={() =>
                setFavorite([...favorite, location.state.food.name])
              }
            />
          )}
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
                <ScrollContainer>
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
                </ScrollContainer>
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
            <BigButton
              color={orderSuccess ? "#7d6765" : "#d7d2cb"}
              onClick={check}
            >
              주문하기 / 총 {count * location.state.food.price} 원
            </BigButton>
          ) : (
            <BigButton color={"#7d6765"} onClick={check}>
              저장
            </BigButton>
          )}
        </DetailsContainer>
      )}
    </>
  );
};

export default OrderDetails;

const DetailsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FoodPicture = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.image});
  background-size: contain;
`;

const BackBtn = styled(BsArrowLeft)`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 3px;
  font-size: 1.7rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
`;

const HeartIcon = styled(AiOutlineHeart)`
  position: absolute;
  top: 190px;
  right: 50px;
  padding: 8px;
  border-radius: 50%;
  color: white;
  background-color: #b89995;
  font-size: 2rem;
  z-index: 10;
  cursor: pointer;
`;

const FillHeartIcon = styled(AiFillHeart)`
  position: absolute;
  top: 190px;
  right: 50px;
  padding: 8px;
  border-radius: 50%;
  color: rgb(237, 73, 86);
  background-color: #b89995;
  font-size: 2rem;
  z-index: 10;
  cursor: pointer;
`;

const ContentsContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 510px;
  margin-bottom: 100px;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-y: auto;
`;
