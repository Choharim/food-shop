import React from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import BigButton from "components/Button/BigButton";
import ClassDate from "./_fragments/ClassDate";

const ClassDetails = () => {
  let history = useHistory();
  const location = useLocation();

  return (
    <>
      {location.state === undefined ? (
        history.push("/class")
      ) : (
        <DetailsContainer>
          <BackBtn onClick={() => history.push("/class")} />
          <Title>{location.state.foodClass.name} 수업</Title>
          <ContentsContainer>
            <ClassDate />
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
  margin: 0 20px 0;
`;
