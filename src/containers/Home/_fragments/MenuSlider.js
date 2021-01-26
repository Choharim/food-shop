import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Context } from "components/ContextProvider/ContextProvider";
import { useHistory } from "react-router-dom";

const MenuSlider = ({ foodSlider }) => {
  let history = useHistory();
  const { favorite, setFavorite } = useContext(Context);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1.6666,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    autoplay: true,
  };

  const clickCard = (food) => (e) => {
    if (e.target.id === "card") {
      history.push({
        pathname: "/orderDetails",
        state: { food },
      });
    }
  };

  return (
    <MenuContainer {...settings}>
      {foodSlider.map((food, index) => (
        <MenuItemContainer key={index} id="card" onClick={clickCard(food)}>
          {favorite.some((item) => item === food.name) ? (
            <FillHeartIcon
              onClick={() =>
                setFavorite(favorite.filter((item) => item !== food.name))
              }
            />
          ) : (
            <HeartIcon onClick={() => setFavorite([...favorite, food.name])} />
          )}
          <FoodPicture image={food.image} />
          <FoodName>{food.name}</FoodName>
          <FoodPrice>{food.price} 원</FoodPrice>
        </MenuItemContainer>
      ))}
    </MenuContainer>
  );
};

export default MenuSlider;

const MenuContainer = styled(Slider)`
  display: flex;
  width: 100%;
  margin: 5px 0 10px;
  .slick-dots {
    > li {
      margin: 2px -2px;
    }
  }

  .slick-slide > div {
    padding: 0 5%;
  }
`;

const MenuItemContainer = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  outline: none;
  border: none;
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
`;

const HeartIcon = styled(AiOutlineHeart)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.7rem;
  color: #493c3b;
`;

const FillHeartIcon = styled(AiFillHeart)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.7rem;
  color: rgb(237, 73, 86);
`;

const FoodPicture = styled.div`
  width: 120px;
  height: 120px;
  margin: 30px 0 20px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 50%;
  pointer-events: none;
`;

const FoodName = styled.p`
  margin: 0 0 5px;
  font-size: 16px;
  font-weight: bold;
  pointer-events: none;
`;
const FoodPrice = styled.p`
  margin: 0 0 15px;
  font-size: 16px;
  font-weight: 300;
  pointer-events: none;
`;
