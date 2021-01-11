import React, { useState } from "react";
import Modal from "components/Modal";
import styled, { css } from "styled-components";
import cookingClass from "images/cookingClass.jpg";

const ClassModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Modal visible={showModal} closeModal={() => setShowModal(false)}>
      <ModalContainer>
        <TouchLineArea onClick={() => setShowModal(!showModal)}>
          <TouchLine></TouchLine>
        </TouchLineArea>
        <ModalHeadTitle>직접 요리해보고 싶나요?</ModalHeadTitle>
        <ModalPicture></ModalPicture>
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
`;

const ModalPicture = styled.div`
  margin: 20px 0 10px;
  background-image: url(${cookingClass});
  background-size: cover;
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;
