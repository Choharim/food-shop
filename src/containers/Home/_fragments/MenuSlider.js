import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MenuSlider = ({ foodSlider }) => {
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

  return (
    <MenuContainer {...settings}>
      {foodSlider.map((food, index) => (
        <MenuItemContainer key={index}>
          <HeartIcon />
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
  padding: 60px 0 20px;
  outline: none;
  border: none;
  background-color: #e0cfcd;
  border-radius: 15px;
  cursor: pointer;
`;

const HeartIcon = styled(AiOutlineHeart)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
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