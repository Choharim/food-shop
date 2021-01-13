import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Data } from "Data";
import { useHistory } from "react-router-dom";

const Shop = () => {
  let history = useHistory();
  const color = ["#FBB1B5", "#F0B791", "#F3AF97", "#FBB9AB", "#F9D7D1"];
  const pageCount = Math.ceil(Data.length / 5);
  const [step, setStep] = useState(1);

  return (
    <ClassContainer>
      <HomeBtn onClick={() => history.push("/")} />
      <Container>
        <Title>Shop</Title>
        {[...Array(pageCount)].map(
          (n, page) =>
            step === page + 1 &&
            Data.map(
              (item, index) =>
                index < 5 * (page + 1) &&
                index >= 5 * page && (
                  <ItemContainer key={index}>
                    <PictureContainer
                      bg={color[Math.floor(Math.random() * color.length)]}
                    >
                      <Picture image={item.image}></Picture>
                    </PictureContainer>
                    <TextContainer>
                      <Name>{item.name}</Name>
                      <Desc>{item.desc}</Desc>
                      <Price>{item.price} 원</Price>
                    </TextContainer>
                  </ItemContainer>
                )
            )
        )}
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

const HomeBtn = styled(RiArrowGoBackLine)`
  align-self: flex-start;
  padding: 5px;
  font-size: 2rem;
  cursor: pointer;
`;

const Container = styled.div`
  width: calc(100% - 80px);
  margin: 10px 40px 0;
`;

const Title = styled.span`
  align-self: flex-start;
  font-size: 23px;
  font-weight: bolder;
  color: #493c3b;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
`;

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 20px;
  background-color: ${(props) => props.bg};
`;

const Picture = styled.div`
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  margin-left: 15px;
`;

const Name = styled.span`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bolder;
  color: #493c3b;
`;

const Desc = styled.span`
  margin-bottom: 2px;
  font-size: 12px;
  color: #9e8380;
`;

const Price = styled.span`
  font-size: 13px;
  color: #d5bfbc;
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
