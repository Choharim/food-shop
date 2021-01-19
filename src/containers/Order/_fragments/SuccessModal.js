import React from "react";
import Modal from "components/Modal";
import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";

const SuccessModal = ({ showModal }) => {
  return (
    <>
      <Modal position="middle" bottom="0" visible={showModal}>
        <ModalContainer>
          <Title>주문이 완료되었습니다</Title>
          <Check />
          <Text>주문해주셔서 감사합니다</Text>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default SuccessModal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 40px;
  border-radius: 15px;
  background-color: #fff;
`;

const Title = styled.span`
  margin-bottom: 20px;
  font-size: 23px;
  font-weight: bolder;
  color: #7d6765;
`;

const Check = styled(AiOutlineCheckCircle)`
  font-size: 4rem;
  color: #7d6765;
`;

const Text = styled.span`
  margin-top: 15px;
  font-size: 16px;
  font-weight: bolder;
  color: #7d6765;
`;
