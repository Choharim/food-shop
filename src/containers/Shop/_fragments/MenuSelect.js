import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import styled from "styled-components";
import { Data } from "Data";

const animatedComponents = makeAnimated();

const MenuSelect = ({ setFilterMenu }) => {
  const options = [
    { value: "0 4000", label: "0 ~ 4000원" },
    { value: "4000 7000", label: "4000원 ~ 7000원" },
    { value: "7000 11000", label: "7000원 ~ 11000원" },
  ];

  const Filter = (option) => {
    const valueArray = option.map((obj) => obj.value.split(" "));
    const priceValue = valueArray.filter((array) => array.length === 2);
    const priceFilterIndex = [];
    for (let dataIndex = 0; dataIndex < Data.length; dataIndex++) {
      for (
        let optionIndex = 0;
        optionIndex < priceValue.length;
        optionIndex++
      ) {
        if (
          Data[dataIndex].price > priceValue[optionIndex][0] &&
          Data[dataIndex].price <= priceValue[optionIndex][1]
        ) {
          priceFilterIndex.push(dataIndex);
        }
      }
    }
    const priceFilterMenu = [];
    for (let index = 0; index < priceFilterIndex.length; index++) {
      priceFilterMenu.push(Data[priceFilterIndex[index]]);
    }

    if (valueArray.some((array) => array.length === 1)) {
      setFilterMenu(Data);
    } else {
      setFilterMenu(priceFilterMenu);
    }
  };
  const customStyles = {
    control: (base) => ({
      ...base,
      background: "#e9e9e9",
      borderRadius: "10px",
      padding: "3px 5px",
      borderColor: "#e9e9e9",
      boxShadow: "none",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "10px",
      marginTop: "5px",
    }),
    menuList: (base, state) => ({
      ...base,
      color: "#493c3b",
    }),
    multiValueLabel: (base) => ({
      ...base,
      backgroundColor: "#b89995",
      color: "#fff",
    }),
    multiValueRemove: (base) => ({
      ...base,
      backgroundColor: "#b89995",
      color: "#fff",
    }),
  };

  return (
    <>
      <FilterSelect
        styles={customStyles}
        closeMenuOnSelect={true}
        components={animatedComponents}
        isMulti
        placeholder="가격 별 상품 보기"
        options={options}
        onChange={(option) =>
          Array.isArray(option) && option.length !== 0
            ? Filter(option)
            : Filter([{ value: "all", label: "All" }])
        }
      />
    </>
  );
};

export default MenuSelect;

const FilterSelect = styled(Select)`
  width: 100%;
  margin-bottom: 20px;
`;
