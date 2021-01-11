import React from "react";
import styled from "styled-components";

const MainText = () => {
  return (
    <TextContainer>
      <Text>더 건강하게 더 오랫동안 </Text>
      <Text>함께하기 위해</Text>
    </TextContainer>
  );
};

export default MainText;

const TextContainer = styled.div`
  width: 100%;
  margin-top: 75px;
`;

const Text = styled.p`
  margin: 5px;
  font-size: 23px;
  color: #493c3b;
`;
