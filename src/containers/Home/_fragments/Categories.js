import React from "react";
import styled from "styled-components";
import drink from "icons/drink.png";
import dish from "icons/food.png";
import snack from "icons/snack.png";
import SmallButton from "components/Button/SmallButton";

const Categories = ({ foodSlider, filterFoodArray }) => {
  return (
    <MenuFilterContainer>
      <MenuFilterItem
        color={foodSlider[0].category === "dish" ? "#e0cfcd" : "#c9aca9"}
        onClick={() => {
          filterFoodArray("dish");
        }}
      >
        <MenuFilterIcon src={dish} />
        <MenuFilterText>Dish</MenuFilterText>
      </MenuFilterItem>
      <MenuFilterItem
        color={foodSlider[0].category === "drink" ? "#e0cfcd" : "#c9aca9"}
        onClick={() => {
          filterFoodArray("drink");
        }}
      >
        <MenuFilterIcon src={drink} />
        <MenuFilterText>Drink</MenuFilterText>
      </MenuFilterItem>
      <MenuFilterItem
        color={foodSlider[0].category === "snack" ? "#e0cfcd" : "#c9aca9"}
        onClick={() => {
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

  &:hover {
    background-color: #e0cfcd;
  }
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
