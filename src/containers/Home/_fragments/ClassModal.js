import React, { useState } from "react";
import Modal from "components/Modal";
import styled, { css } from "styled-components";
import { ImFire } from "react-icons/im";
import cookingClass from "images/cookingClass.jpg";

const ClassModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [difficulty, setDifficulty] = useState({});
  const difficultyData = [
    { score: 1, desc: "매우 쉬워요! 요리 초보자에게 추전합니다!" },
    { score: 2, desc: "칼만 잡을 수 있으면 누구나 가능합니다!" },
    { score: 3, desc: "복잡하지 않은 간단한 레시피로 진행돼요!" },
    { score: 4, desc: "조금 시간이 걸리고 들어가는 재료가 많지만 재밌어요!" },
    { score: 5, desc: "섬세함이 필요한 레시피에요! 요리고수에게 추천합니다!" },
  ];

  return (
    <Modal visible={showModal} closeModal={() => setShowModal(false)}>
      <ModalContainer>
        <TouchLineArea onClick={() => setShowModal(!showModal)}>
          <TouchLine></TouchLine>
        </TouchLineArea>
        <ModalHeadTitle>직접 요리해보고 싶나요?</ModalHeadTitle>
        <ModalPicture></ModalPicture>
        <DifficultyContainer>
          <DifficultyText>난이도 선택</DifficultyText>
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
        </DifficultyContainer>
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
  width: 100%;
  cursor: pointer;
`;

const TouchLine = styled.div`
  width: 70px;
  height: 6px;
  margin: 18px auto 35px;
  background-color: rgb(217, 217, 217);
  border-radius: 20px;
`;

const ModalHeadTitle = styled.span`
  font-size: 23px;
  color: #493c3b;
`;

const ModalPicture = styled.div`
  margin: 20px 0;
  background-image: url(${cookingClass});
  background-size: cover;
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

const DifficultyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 50px;
  width: calc(100% - 50px);
`;

const DifficultyText = styled.span`
  margin-bottom: 5px;
  padding-left: 5px;
  font-size: 16px;
  color: #7d6765;
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
  padding: 5px;
  font-size: 1.7rem;
  color: #e3e0db;
  cursor: pointer;
`;

const Desc = styled.span`
  margin-left: 5px;
  font-size: 13px;
  color: #b89995;
`;
