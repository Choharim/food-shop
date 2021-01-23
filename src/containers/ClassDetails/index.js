import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import BigButton from "components/Button/BigButton";
import ClassDate from "./_fragments/ClassDate";
import ClassTime from "./_fragments/ClassTime";
import ClassPeople from "./_fragments/ClassPeople";
import SuccessModal from "./_fragments/SuccessModal";
import { Context } from "components/ContextProvider/ContextProvider";

const ClassDetails = () => {
  let data = new Date();
  let year = data.getFullYear();
  let month = 1 + data.getMonth();
  month = month >= 10 ? month : `0${month}`;
  let day = data.getDate();
  day = day >= 10 ? day : `0${day}`;
  const [foodClass, setFoodClass] = useState({
    name: "",
    date: `${year}.${month}.${day}`,
    time: "",
    people: 1,
  });
  let history = useHistory();
  const location = useLocation();
  const [successClass, setSuccessClass] = useState(false);
  const { classData, setClassData, logInSuccess } = useContext(Context);

  useEffect(() => {
    if (successClass) {
      window.setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [successClass, history]);

  useEffect(() => {
    if (!logInSuccess) {
      window.setTimeout(() => {
        alert("수업 신청은 로그인을 먼저 해주세요");
        history.push("/logIn");
      }, 1000);
    }
  }, [logInSuccess, history]);

  const checkValidation = () => {
    if (foodClass.time === "") {
      return false;
    } else {
      return true;
    }
  };

  const successApply = () => {
    if (checkValidation()) {
      setClassData([...classData, foodClass]);
      setSuccessClass(true);
    } else {
      setSuccessClass(false);
    }
  };

  return (
    <>
      {location.state === undefined ? (
        history.push("/class")
      ) : (
        <>
          <DetailsContainer>
            <BackBtn onClick={() => history.push("/class")} />
            <Title>{location.state.foodClass.name} 수업</Title>
            <ContentsContainer>
              <ClassDate foodClass={foodClass} setFoodClass={setFoodClass} />
              <ClassTime
                foodClass={foodClass}
                setFoodClass={setFoodClass}
                className={location.state.foodClass.name}
              />
              <ClassPeople foodClass={foodClass} setFoodClass={setFoodClass} />
            </ContentsContainer>
            <BigButton
              color={checkValidation() ? "#7d6765" : "#d7d2cb"}
              onClick={successApply}
            >
              신청하기
            </BigButton>
          </DetailsContainer>
          {successClass && (
            <SuccessModal foodClass={foodClass} successClass={successClass} />
          )}
        </>
      )}
    </>
  );
};

export default ClassDetails;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 20px;
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
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bolder;
  color: #493c3b;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 60px;
`;
