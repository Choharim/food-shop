import React from "react";
import styled from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Data } from "Data";
import { useHistory } from "react-router-dom";

const Shop = () => {
  let history = useHistory();
  const color = ["#FBB1B5", "#F0B791", "#F3AF97", "#FBB9AB", "#F9D7D1"];

  return (
    <ClassContainer>
      <HomeBtn onClick={() => history.push("/")} />
      <Container>
        <Title>Shop</Title>
        {Data.map((item, index) => (
          <ItemContainer key={index}>
            <PictureContainer
              bg={color[Math.floor(Math.random() * color.length)]}
            >
              <Picture image={item.image}></Picture>
            </PictureContainer>
            <TextContainer></TextContainer>
          </ItemContainer>
        ))}
      </Container>
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

const Title = styled.span`
  align-self: flex-start;
  font-size: 23px;
  font-weight: bolder;
  color: #493c3b;
`;

const Container = styled.div`
  width: calc(100% - 80px);
  margin: 0 40px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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

const TextContainer = styled.div``;
