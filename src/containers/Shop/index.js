import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
    <ClassContainer>
      <HomeBtn onClick={() => history.push("/")} />
      <Container>
        <HeadContainer>
          <Title>쇼핑</Title>
          <MenuSelect setFilterMenu={setFilterMenu} />
        </HeadContainer>
        <Menu filterMenu={filterMenu} pageCount={pageCount} step={step} />
      </Container>
      <PageMoveBtnContainer>
        <PrevBtn onClick={() => (step === 1 ? null : setStep(step - 1))} />
        <NextBtn
          onClick={() => (step === pageCount ? null : setStep(step + 1))}
        />
      </PageMoveBtnContainer>
    </ClassContainer>
  );
};

export default Shop;

const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HomeBtn = styled(BsArrowLeft)`
  align-self: flex-start;
  padding: 5px;
  margin: 5px;
  font-size: 2rem;
  cursor: pointer;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: calc(100% - 80px);
  margin: 0 40px;
`;

const Title = styled.span`
  align-self: flex-start;
  font-size: 23px;
  font-weight: bolder;
  color: #493c3b;
`;

const PageMoveBtnContainer = styled.div`
  position: absolute;
  bottom: 20px;
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const PrevBtn = styled(IoIosArrowBack)`
  padding: 2px;
  font-size: 2rem;
  cursor: pointer;
`;

const NextBtn = styled(IoIosArrowForward)`
  padding: 2px;
  font-size: 2rem;
  cursor: pointer;
`;
