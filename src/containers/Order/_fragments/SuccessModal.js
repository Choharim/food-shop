import React from "react";
import Modal from "components/Modal";
import styled from "styled-components";

const SuccessModal = ({ setShowModal, showModal }) => {
  //3초뒤에 setTimeOut으로 setShowModal(false)하면서 history.push
  return (
    <>
      <Modal position="middle" bottom="0" visible={showModal}>
        <div>hi</div>
      </Modal>
    </>
  );
};

export default SuccessModal;
