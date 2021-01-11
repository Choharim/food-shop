import React from "react";
import styled, { css } from "styled-components";

const Modal = ({ closeModal, visible, children, position, ...props }) => {
  return (
    <ModalBackground {...props} visible={visible} onClick={closeModal}>
      <ModalContainer
        visible={visible}
        position={position}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.2s ease;
  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
    `};
`;

const ModalContainer = styled.div`
  max-width: 600px;
  width: 100%;
  z-index: 100;
  opacity: 1;
  visibility: visible;
  > div {
    transition: 0.2s ease;
  }
  > div {
    position: absolute;
    bottom: -400px;
    ${(props) =>
      props.visible &&
      css`
        bottom: 0px;
      `}
  }
`;
