import React, { useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styled from "styled-components";
import { Context } from "components/ContextProvider/ContextProvider";
import { useHistory } from "react-router-dom";

const Menu = ({ filterMenu, pageCount, step }) => {
  let history = useHistory();
  const { favorite, setFavorite } = useContext(Context);
  const color = ["#FBB1B5", "#F0B791", "#F3AF97", "#FBB9AB", "#F9D7D1"];

  return (
    <>
      {[...Array(pageCount)].map(
        (n, page) =>
          step === page + 1 &&
          filterMenu.map(
            (food, index) =>
              index < 5 * (page + 1) &&
              index >= 5 * page && (
                <ItemContainer
                  key={index}
                  onClick={() =>
                    history.push({
                      pathname: "/orderDetails",
                      state: { food },
                    })
                  }
                >
                  <PictureContainer
                    bg={color[Math.floor(Math.random() * color.length)]}
                  >
                    <Picture image={food.image}></Picture>
                  </PictureContainer>
                  <TextContainer>
                    <Name>{food.name}</Name>
                    <Desc>{food.desc}</Desc>
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
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.4px 1.4px;
  cursor: pointer;
`;

const HeartIcon = styled(AiOutlineHeart)`
  position: relative;
  bottom: -40px;
  right: -40px;
  font-size: 1.5rem;
`;

const FillHeartIcon = styled(AiFillHeart)`
  position: relative;
  bottom: -40px;
  right: -40px;
  font-size: 1.5rem;
  color: rgb(237, 73, 86);
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
