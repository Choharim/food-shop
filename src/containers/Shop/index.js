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
    <ShopContainer>
      <HomeBtn onClick={() => history.push("/")} />
      <Container>
        <MenuSelect setFilterMenu={setFilterMenu} />
        <Menu filterMenu={filterMenu} pageCount={pageCount} step={step} />
      </Container>
    </ShopContainer>
  );
};

export default Shop;

const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HomeBtn = styled(RiArrowGoBackLine)`
  align-self: flex-start;
  margin: 20px 0 0 20px;
  font-size: 1.5rem;
  color: #493c3b;
  cursor: pointer;
`;

const HeadContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Title = styled.span`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  color: #493c3b;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 40px);
  margin: 0 20px;
`;
