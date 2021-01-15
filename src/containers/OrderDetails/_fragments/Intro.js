import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Context } from "components/ContextProvider/ContextProvider";

const Intro = ({ food, count, setCount, setOrder, order }) => {
  const { favorite, setFavorite } = useContext(Context);
  const clickMinus = () => {
    if (count !== 1) {
      setCount(count - 1);
      setOrder(order.slice(0, -1));
    }
  };

  const clickPlus = () => {
    setCount(count + 1);
    setOrder(
      order.concat({
        foodName: "",
        except: [],
        add: [],
        allergy: "",
        allergyText: "",
      })
    );
  };
  console.log(order);
  return (
    <Container>
      {favorite.some((item) => item === food.name) ? (
        <FillHeartIcon
          onClick={() =>
            setFavorite(favorite.filter((item) => item !== food.name))
          }
        />
      ) : (
        <HeartIcon onClick={() => setFavorite([...favorite, food.name])} />
      )}
      <h1 style={{ margin: "0 0 10px" }}>{food.name}</h1>
      <Text> {food.desc}</Text>
      <TextContainer>
        <TextContainer>
          <Title>가격</Title>
          <Text> {food.price} / 개당</Text>
        </TextContainer>
        <TextContainer>
          <Title>개수</Title>
          <CountContainer>
            <MinusBtn onClick={clickMinus} />
            <Text style={{ fontSize: "23px" }}>{count}</Text>
            <PlusBtn onClick={clickPlus} />
          </CountContainer>
          <CountContainer>
            <Title>총 금액</Title>
            <Text>{food.price * count} 원</Text>
          </CountContainer>
        </TextContainer>
      </TextContainer>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  border-bottom: 1px solid #b89995;
`;

const HeartIcon = styled(AiOutlineHeart)`
  align-self: flex-end;
  position: relative;
  top: 10px;
  right: -20px;
  padding: 5px;
  color: white;
  background-color: #b89995;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
`;

const FillHeartIcon = styled(AiFillHeart)`
  align-self: flex-end;
  position: relative;
  top: 10px;
  right: -20px;
  padding: 5px;
  color: rgb(237, 73, 86);
  background-color: #b89995;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin: 5px 0;
`;

const Title = styled.span`
  margin-right: 20px;
  font-size: 23px;
  font-weight: bolder;
`;

const Text = styled.span`
  font-size: 18px;
  color: #7d6765;
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
`;
const MinusBtn = styled(AiOutlineMinus)`
  padding: 2px;
  margin-right: 25px;
  background-color: #b89995;
  border-radius: 50%;
  color: white;
  cursor: pointer;
`;

const PlusBtn = styled(AiOutlinePlus)`
  padding: 2px;
  margin-left: 25px;
  background-color: #b89995;
  color: white;
  border-radius: 50%;
  cursor: pointer;
`;
