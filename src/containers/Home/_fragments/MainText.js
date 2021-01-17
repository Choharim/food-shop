import React from "react";
import styled from "styled-components";

const MainText = () => {
  return (
    <TextContainer>
      <ProfileContainer></ProfileContainer>
      <Text>더 건강하게, 더 오랫동안 </Text>
      <Text>함께하기 위해</Text>
    </TextContainer>
  );
};

export default MainText;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: calc(100% - 50px);
  margin: 10px 0 30px;
`;

const Text = styled.p`
  margin: 0 0 5px 10px;
  font-size: 23px;
  color: #493c3b;
`;
