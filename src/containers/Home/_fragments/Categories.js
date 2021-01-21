import React, { useState } from "react";
import styled from "styled-components";
import drink from "icons/drink.png";
import dish from "icons/food.png";
import snack from "icons/snack.png";
import logo from "images/logo.png";
import SmallButton from "components/Button/SmallButton";

const Categories = ({ filterFoodArray }) => {
  const [filter, setFilter] = useState("all");

  return (
    <MenuFilterContainer>
      <MenuFilterItem
        color={filter === "all" ? "#b89995" : "#fff"}
        onClick={() => {
          filterFoodArray("all");
          setFilter("all");
        }}
      >
        <MenuFilterIcon src={logo} />
        <MenuFilterText>모두</MenuFilterText>
      </MenuFilterItem>
      <MenuFilterItem
        color={filter === "dish" ? "#b89995" : "#fff"}
        onClick={() => {
          filterFoodArray("dish");
          setFilter("dish");
        }}
      >
        <MenuFilterIcon src={dish} />
        <MenuFilterText>식사</MenuFilterText>
      </MenuFilterItem>
      <MenuFilterItem
        color={filter === "drink" ? "#b89995" : "#fff"}
        onClick={() => {
          filterFoodArray("drink");
          setFilter("drink");
        }}
      >
        <MenuFilterIcon src={drink} />
        <MenuFilterText>음료</MenuFilterText>
      </MenuFilterItem>
      <MenuFilterItem
        color={filter === "snack" ? "#b89995" : "#fff"}
        onClick={() => {
          filterFoodArray("snack");
          setFilter("snack");
        }}
      >
        <MenuFilterIcon src={snack} />
        <MenuFilterText>간식</MenuFilterText>
      </MenuFilterItem>
    </MenuFilterContainer>
  );
};

export default Categories;

const MenuFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px);
  margin: 25px 20px 0;
`;

const MenuFilterItem = styled(SmallButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

const MenuFilterIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 5px;
`;

const MenuFilterText = styled.span`
  margin-top: 5px;
  font-size: 16px;
`;
