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
    slidesToShow: 1.666,
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
  height: 370px;
  margin-top: 15px;
  .slick-dots {
    > li {
      margin: 0 -2px;
    }
  }
  .slick-slide > div {
    padding: 0 20px;
  }
  .slick-track {
    height: 100%;
  }
`;

const MenuItemContainer = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 20px;
  outline: none;
  border: none;
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
`;

const HeartIcon = styled(AiOutlineHeart)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
`;

const FillHeartIcon = styled(AiFillHeart)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  color: rgb(237, 73, 86);
`;

const FoodPicture = styled.div`
  width: 190px;
  height: 190px;
  margin-bottom: 25px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 50%;
  pointer-events: none;
`;

const FoodName = styled.p`
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  pointer-events: none;
`;
const FoodPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  pointer-events: none;
`;
