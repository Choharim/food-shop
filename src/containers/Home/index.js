import React, { useState } from "react";
import styled from "styled-components";
import MainText from "./_fragments/MainText";
import MenuSlider from "./_fragments/MenuSlider";
import Categories from "./_fragments/Categories";
import { Data } from "Data";

const Home = () => {
  const [foodSlider, setFoodSlider] = useState(Data);

  const filterFoodArray = (category) => {
    setFoodSlider(Data.filter((food) => food.category === category));
  };

  return (
    <HomeContainer>
      <MainText />
      <MenuSlider foodSlider={foodSlider} />
      <Categories filterFoodArray={filterFoodArray} />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #b89995;
`;
