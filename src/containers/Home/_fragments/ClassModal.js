import React, { useState, useEffect, useRef } from "react";
import Modal from "components/Modal";
import styled, { css, keyframes } from "styled-components";
import { ImFire } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import cookingClass from "images/cookingClass.jpg";
import { Data } from "Data";
import BigButton from "components/Button/BigButton";
import { useHistory } from "react-router-dom";

const ClassModal = () => {
  let history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const difficultyData = [
    { score: 1, desc: "매우 쉬워요! 요리 초보자에게 추전합니다!" },
    { score: 2, desc: "칼만 잡을 수 있으면 누구나 가능합니다!" },
    { score: 3, desc: "복잡하지 않은 간단한 레시피로 진행돼요!" },
    { score: 4, desc: "조금 시간이 걸리고 들어가는 재료가 많지만 재밌어요!" },
    { score: 5, desc: "섬세함이 필요한 레시피에요! 요리 고수가 될거에요!" },
  ];
  const [difficulty, setDifficulty] = useState(difficultyData[2]);
  const [height, setHeight] = useState(0);
  const modal = useRef();

  useEffect(() => {
    const updateModalHeight = () => {
      setHeight(window.innerHeight - 420);
    };
    updateModalHeight();
    window.addEventListener("resize", updateModalHeight);
    return window.removeEventListener("resize", updateModalHeight);
  }, []);

  const clickClass = (foodClass) => (e) => {
    if (e.target.id === "class") {
      history.push({
        pathname: "classDetails",
        state: { foodClass },
      });
    }
  };

  return (
    <Modal
      position="bottom"
      bottom={`-${height}px`}
      visible={showModal}
      closeModal={() => setShowModal(false)}
    >
      <ModalContainer ref={modal}>
        <TouchLineArea onClick={() => setShowModal(!showModal)}>
          <TouchLine></TouchLine>
        </TouchLineArea>
        <ModalHeadTitle>직접 요리해보고 싶나요?</ModalHeadTitle>
        <ModalPicture></ModalPicture>
        <div style={{ width: "calc(100% - 40px)", margin: "0 20px" }}>
          <Container>
            <Text>난이도 선택</Text>
            <div style={{ display: "flex", alignItems: "center" }}>
              {difficultyData.map((score, index) => (
                <FireContainer key={index} score={difficulty.score}>
                  <FireIcon
                    onClick={() => setDifficulty(difficultyData[index])}
                  />
                </FireContainer>
              ))}
              <Desc>{difficulty.desc}</Desc>
            </div>
          </Container>
          <RecommContainer>
            <Text>추천 수업</Text>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ArrowIcon />
              {Data.map((foodClass, index) =>
                foodClass.difficulty === difficulty.score ? (
                  <ClassList
                    key={index}
                    id="class"
                    onClick={clickClass(foodClass)}
                  >
                    {foodClass.name}
                  </ClassList>
                ) : null
              )}
            </div>
          </RecommContainer>
          <ClassBtn onClick={() => history.push("/class")}>
            수업 더보기
          </ClassBtn>
        </div>
      </ModalContainer>
    </Modal>
  );
};

export default ClassModal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0 -7px 20px 0 rgba(0, 0, 0, 0.14);
`;

const TouchLineArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  cursor: pointer;
`;

const TouchLine = styled.div`
  width: 70px;
  height: 6px;
  background-color: rgb(217, 217, 217);
  border-radius: 20px;
`;

const ModalHeadTitle = styled.span`
  font-size: 23px;
  color: #493c3b;
`;

const ModalPicture = styled.div`
  margin: 10px 0;
  background-image: url(${cookingClass});
  background-size: cover;
  width: 270px;
  height: 270px;
  border-radius: 50%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
`;

const Text = styled.span`
  margin-bottom: 5px;
  font-size: 16px;
  color: #493c3b;
`;

const FireContainer = styled.div`
  &:nth-child(1) {
    > svg {
      ${(props) =>
        props.score === 1 &&
        css`
          color: #ffc300;
        `};
    }
  }
  &:nth-child(-n + 2) {
    > svg {
      ${(props) =>
        props.score === 2 &&
        css`
          color: #ff5733;
        `};
    }
  }
  &:nth-child(-n + 3) {
    > svg {
      ${(props) =>
        props.score === 3 &&
        css`
          color: #c70039;
        `};
    }
  }
  &:nth-child(-n + 4) {
    > svg {
      ${(props) =>
        props.score === 4 &&
        css`
          color: #900c3f;
        `};
    }
  }
  &:nth-child(-n + 5) {
    > svg {
      ${(props) =>
        props.score === 5 &&
        css`
          color: #651c4f;
        `};
    }
  }
`;

const FireIcon = styled(ImFire)`
  margin-right: 5px;
  font-size: 1.5rem;
  color: #e3e0db;
  cursor: pointer;
`;

const Desc = styled.span`
  margin-left: 5px;
  font-size: 13px;
  color: #b89995;
`;

const MoveArrow = keyframes`
  from {
    transform: translateX(0);
  }to {
    transform: translateX(10px);
  }
`;

const RecommContainer = styled(Container)`
  margin-bottom: 100px;
`;

const ArrowIcon = styled(BsArrowRight)`
  margin-right: 5px;
  font-size: 1.5rem;
  color: #493c3b;
  animation: ${MoveArrow} 1s infinite;
`;

const ClassList = styled.span`
  margin: 0 10px;
  color: #493c3b;
  font-size: 16px;
`;

const ClassBtn = styled(BigButton)`
  background-color: #b89995;
  color: #fff;
`;
