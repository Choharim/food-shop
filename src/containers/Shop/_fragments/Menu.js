import React, { useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styled from "styled-components";
import { Context } from "components/ContextProvider/ContextProvider";
import { useHistory } from "react-router-dom";

const Menu = ({ filterMenu, pageCount, step }) => {
  let history = useHistory();
  const { favorite, setFavorite } = useContext(Context);

  const clickCard = (food) => (e) => {
    if (e.target.id === "card") {
      history.push({
        pathname: "/orderDetails",
        state: { food },
      });
    }
  };

  return (
    <>
      {[...Array(pageCount)].map(
        (n, page) =>
          step === page + 1 &&
          filterMenu.map(
            (food, index) =>
              index < 5 * (page + 1) &&
              index >= 5 * page && (
                <ItemContainer key={index} id="card" onClick={clickCard(food)}>
                  <Picture image={food.image}></Picture>
                  <TextContainer>
                    <Name>{food.name}</Name>
                    <Desc>{food.desc.slice(0, 20)}...</Desc>
                    <Price>{food.price} 원</Price>
                  </TextContainer>
                  {food.name === favorite.find((item) => item === food.name) ? (
                    <FillHeartIcon
                      onClick={() =>
                        setFavorite(
                          favorite.filter((item) => item !== food.name)
                        )
                      }
                    />
                  ) : (
                    <HeartIcon
                      onClick={() => setFavorite([...favorite, food.name])}
                    />
                  )}
                </ItemContainer>
              )
          )
      )}
    </>
  );
};

export default Menu;

const ItemContainer = styled.div`
  position: relative;
  display: flex;
  width: calc(100% - 40px);
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 20px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  cursor: pointer;
`;

const HeartIcon = styled(AiOutlineHeart)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  color: #493c3b;
`;

const FillHeartIcon = styled(AiFillHeart)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  color: rgb(237, 73, 86);
`;

const Picture = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 20px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  pointer-events: none;
`;

const Name = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bolder;
  color: #493c3b;
`;

const Price = styled.span`
  font-size: 13px;
  color: #7d6765;
`;

const Desc = styled(Price)`
  margin-bottom: 5px;
  font-size: 12px;
`;
