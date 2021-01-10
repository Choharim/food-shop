import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
    <div style={{ background: "#ccc" }}>
      <Body height={height}>{children}</Body>
    </div>
  );
};

export default Frame;

const Body = styled.div`
  display: flex;
  max-width: 600px;
  width: 100%;
  min-height: ${(props) => `${props.height}px`};
  margin: 0 auto;
  background: #fff;
`;
