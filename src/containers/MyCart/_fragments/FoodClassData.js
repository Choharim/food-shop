import React, { useContext } from "react";
import { Context } from "components/ContextProvider/ContextProvider";
import styled from "styled-components";
import myCart2 from "icons/myCart2.png";
import BigButton from "components/Button/BigButton";
import { useHistory } from "react-router-dom";
import ClassList from "./ClassList";

const FoodClassData = () => {
  let history = useHistory();
  const { classData, logInSuccess } = useContext(Context);

  return (
    <DataContainer>
      {!logInSuccess ? (
        <Container>
          <Cart image={myCart2}></Cart>
          <Title>로그인을 해주세요</Title>
          <BigButton color="#7d6765" onClick={() => history.push("/logIn")}>
            로그인
          </BigButton>
        </Container>
      ) : Array.isArray(classData) && classData.length === 0 ? (
        <Container>
          <Cart image={myCart2}></Cart>
          <Title>예약한 수업이 없습니다</Title>
          <BigButton color="#7d6765" onClick={() => history.push("/class")}>
            신청하러 가기
          </BigButton>
        </Container>
      ) : (
        <ClassList />
      )}
    </DataContainer>
  );
};

export default FoodClassData;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 40px);
  margin: 0 20px 80px;
  height: calc(100% - 80px);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Cart = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const Title = styled.span`
  font-size: 23px;
  font-weight: bolder;
  color: #493c3b;
`;
