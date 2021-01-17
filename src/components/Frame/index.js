import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Frame = ({ children }) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const setFrameSize = () => {
      setHeight(window.innerHeight);
    };
    setFrameSize();
    window.addEventListener("resize", setFrameSize);
    return window.removeEventListener("resize", setFrameSize);
  }, []);

  return (
    <Container>
      <Body height={height}>
        <Navbar height={height} />
        {children}
      </Body>
    </Container>
  );
};

export default Frame;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ccc;
`;

const Body = styled.div`
  position: relative;
  display: flex;
  max-width: 600px;
  width: 100%;
  min-height: ${(props) => `${props.height}px`};
  background: #fff;
`;
