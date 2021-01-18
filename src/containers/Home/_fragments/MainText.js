import React from "react";
import styled from "styled-components";

const MainText = () => {
  return (
    <TextContainer>
      <Text>더 건강하게, 더 오랫동안 </Text>
      <Text>함께하기 위해</Text>
    </TextContainer>
  );
};

export default MainText;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  margin: 100px 20px 0;
`;

const Text = styled.span`
  margin-bottom: 10px;
  font-size: 23px;
  font-weight: bolder;
  color: #493c3b;
`;
