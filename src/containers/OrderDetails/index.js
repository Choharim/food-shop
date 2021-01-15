import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import Intro from "./_fragments/Intro";
import Except from "./_fragments/Except";
import Add from "./_fragments/Add";
import Allergy from "./_fragments/Allergy";

const OrderDetails = () => {
  let history = useHistory();
  const location = useLocation();
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
              <Intro
                food={location.state.food}
                count={count}
                setCount={setCount}
                setOrder={setOrder}
                order={order}
              />
              {[...Array(count)].map((detail, index) => (
                <Container key={index}>
                  <Except
                    food={location.state.food}
                    order={order}
                    setOrder={setOrder}
                    index={index}
                  />
                  <Add order={order} setOrder={setOrder} index={index} />
                  <Allergy order={order} setOrder={setOrder} index={index} />
                </Container>
              ))}
            </ContentsContainer>
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
  height: 400px;
  background-image: url(${(props) => props.image});
  background-size: cover;
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
  height: 600px;
  z-index: 100;
  overflow-y: auto;

  visibility: visible;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0 -7px 20px 0 rgba(0, 0, 0, 0.14);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 2px dashed #b89995;
`;
