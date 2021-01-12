import React from "react";
import styled, { css } from "styled-components";

const Modal = ({
  center,
  bottom,
  position,
  closeModal,
  visible,
  children,
  ...props
}) => {
  return (
    <ModalBackground {...props} visible={visible} onClick={closeModal}>
      <ModalContainer
        position={position}
        center={center}
        bottom={bottom}
        visible={visible}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90;
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
  display: flex;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  z-index: 100;
  opacity: 1;
  visibility: visible;
  > div {
    transition: 0.2s ease;
  }
  ${(props) =>
    props.position === "bottom" &&
    css`
      > div {
        position: absolute;
        bottom: ${(props) => props.bottom};
        ${(props) =>
          props.visible &&
          css`
            bottom: 0px;
          `}
      }
    `}
  ${(props) =>
    props.position === "middle" &&
    css`
      > div {
        position: absolute;
        bottom: ${(props) => props.bottom};
        ${(props) =>
          props.visible &&
          css`
            bottom: 20%;
          `}
      }
    `}
`;
