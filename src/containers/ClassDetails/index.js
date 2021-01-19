import React, { useState } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import BigButton from "components/Button/BigButton";
import ClassDate from "./_fragments/ClassDate";

const ClassDetails = () => {
  let data = new Date();
  let year = data.getFullYear();
  let month = 1 + data.getMonth();
  month = month >= 10 ? month : `0${month}`;
  let day = data.getDate();
  day = day >= 10 ? day : `0${day}`;
  const [foodClass, setFoodClass] = useState({
    date: `${year}.${month}.${day}`,
    time: "",
    people: 1,
  });
  let history = useHistory();
  const location = useLocation();
  // 다 쓰면 classData,setClassData에 넣기

  return (
    <>
      {location.state === undefined ? (
        history.push("/class")
      ) : (
        <DetailsContainer>
          <BackBtn onClick={() => history.push("/class")} />
          <Title>{location.state.foodClass.name} 수업</Title>
          <ContentsContainer>
            <ClassDate foodClass={foodClass} setFoodClass={setFoodClass} />
          </ContentsContainer>
          <BigButton color={true ? "#7d6765" : "#d7d2cb"}>신청하기</BigButton>
        </DetailsContainer>
      )}
    </>
  );
};

export default ClassDetails;

const DetailsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const BackBtn = styled(BsArrowLeft)`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  color: #493c3b;
  cursor: pointer;
`;

const Title = styled.span`
  margin-top: 50px;
  font-size: 23px;
  font-weight: bolder;
  color: #493c3b;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  margin: 50px 20px 0;
`;
