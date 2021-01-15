import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Context } from "components/ContextProvider/ContextProvider";
import Intro from "./_fragments/Intro";
import Except from "./_fragments/Except";

const OrderDetails = () => {
  const { favorite, setFavorite } = useContext(Context);
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
              {favorite.some((item) => item === location.state.food.name) ? (
                <FillHeartIcon
                  onClick={() =>
                    setFavorite(
                      favorite.filter(
                        (item) => item !== location.state.food.name
                      )
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
              <Intro
                food={location.state.food}
                count={count}
                setCount={setCount}
                setOrder={setOrder}
                order={order}
              />
              {[...Array(count)].map((detail, index) => (
                <Except
                  key={index}
                  food={location.state.food}
                  order={order}
                  setOrder={setOrder}
                  index={index}
                />
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
  //bottom: -375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 100%;
  z-index: 100;
  visibility: visible;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0 -7px 20px 0 rgba(0, 0, 0, 0.14);
`;

const HeartIcon = styled(AiOutlineHeart)`
  align-self: flex-end;
  position: relative;
  right: 50px;
  top: -25px;
  padding: 10px;
  background-color: #9e8380;
  color: white;
  border-radius: 50%;
  font-size: 2.5rem;
  cursor: pointer;
`;

const FillHeartIcon = styled(AiFillHeart)`
  align-self: flex-end;
  position: relative;
  right: 50px;
  top: -25px;
  padding: 10px;
  background-color: #9e8380;
  color: rgb(237, 73, 86);
  border-radius: 50%;
  font-size: 2.5rem;
  cursor: pointer;
`;
