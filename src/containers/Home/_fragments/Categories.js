import React, { useState } from "react";
import styled from "styled-components";
import drink from "icons/drink.png";
import dish from "icons/food.png";
import snack from "icons/snack.png";
import SmallButton from "components/Button.js/SmallButton";

const Categories = ({ filterFoodArray }) => {
  const [choice, setChoice] = useState("all");

  return (
    <MenuFilterContainer>
      <MenuFilterItem
        color={choice === "dish" ? "#c9aca9" : "#eadedd"}
        onClick={() => {
          setChoice("dish");
          filterFoodArray("dish");
        }}
      >
        <MenuFilterIcon src={dish} />
        <MenuFilterText>Dish</MenuFilterText>
      </MenuFilterItem>
      <MenuFilterItem
        color={choice === "drink" ? "#c9aca9" : "#eadedd"}
        onClick={() => {
          setChoice("drink");
          filterFoodArray("drink");
        }}
      >
        <MenuFilterIcon src={drink} />
        <MenuFilterText>Drink</MenuFilterText>
      </MenuFilterItem>
      <MenuFilterItem
        color={choice === "snack" ? "#c9aca9" : "#eadedd"}
        onClick={() => {
          setChoice("snack");
          filterFoodArray("snack");
        }}
      >
        <MenuFilterIcon src={snack} />
        <MenuFilterText>Snack</MenuFilterText>
      </MenuFilterItem>
    </MenuFilterContainer>
  );
};

export default Categories;

const MenuFilterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 40px;
`;

const MenuFilterItem = styled(SmallButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95px;
  width: 95px;
`;

const MenuFilterIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 5px;
`;

const MenuFilterText = styled.span`
  margin-top: 5px;
  font-size: 1.2rem;
`;
