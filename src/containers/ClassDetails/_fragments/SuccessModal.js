import React from "react";
import Modal from "components/Modal";
import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";

const SuccessModal = ({ foodClass, successClass }) => {
  return (
    <>
      <Modal position="middle" bottom="40%" visible={successClass}>
        <ModalContainer>
          <Title>예약이 완료되었습니다</Title>
          <Check />
          <Text>
            {foodClass.date}{" "}
            {foodClass.time === "am"
              ? `오전 ${foodClass.name} 수업`
              : `오후 ${foodClass.name} 수업`}
          </Text>
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
  font-size: 13px;
  font-weight: bolder;
  color: #7d6765;
`;
