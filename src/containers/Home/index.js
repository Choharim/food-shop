import React, { useState } from "react";
import styled from "styled-components";
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
      <MenuSlider foodSlider={foodSlider} />
      <Categories filterFoodArray={filterFoodArray} />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
