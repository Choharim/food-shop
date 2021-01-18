import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Data } from "Data";
import { useHistory } from "react-router-dom";
import MenuSelect from "./_fragments/MenuSelect";
import Menu from "./_fragments/Menu";

const Shop = () => {
  let history = useHistory();
  const [step, setStep] = useState(1);
  const [filterMenu, setFilterMenu] = useState(Data);
  const pageCount = Math.ceil(filterMenu.length / 5);

  return (
    <>
      <ShopContainer>
        <HeadContainer>
          <HomeBtn onClick={() => history.push("/")} />
          <Title>쇼핑</Title>
        </HeadContainer>
        <Container>
          <MenuSelect setFilterMenu={setFilterMenu} />
          <Menu filterMenu={filterMenu} pageCount={pageCount} step={step} />
        </Container>
      </ShopContainer>
    </>
  );
};

export default Shop;

const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HeadContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const HomeBtn = styled(RiArrowGoBackLine)`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  color: #493c3b;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bolder;
  color: #493c3b;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 40px);
  margin: 20px 20px 0;
`;
