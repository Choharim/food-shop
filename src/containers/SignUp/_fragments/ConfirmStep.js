import React from "react";
import basicProfile from "icons/basicProfile.png";
import styled from "styled-components";

const ConfirmStep = ({ userObj }) => {
  return (
    <>
      <Title>내 정보</Title>
      <Card>
        <Container>
          {userObj.userPicture === "" ? (
            <PictureContainer>
              <UserPictureLabel htmlFor="userPicture"></UserPictureLabel>
            </PictureContainer>
          ) : (
            <PictureContainer>
              <PreviewPicture image={userObj.userPicture} />
            </PictureContainer>
          )}
          <InputContainer>
            <InfoText>아이디 : {userObj.id}</InfoText>
            <InfoText>이름 : {userObj.name}</InfoText>
            <InfoText>핸드폰 번호 : {userObj.phone}</InfoText>
          </InputContainer>
        </Container>
        <InputContainer>
          <InfoText>우편번호 : ({userObj.zoneCode})</InfoText>
          <InfoText>주소 : {userObj.address}</InfoText>
          <InfoText>상세 주소 : {userObj.extraAddress}</InfoText>
        </InputContainer>
      </Card>
    </>
  );
};

export default ConfirmStep;

const Title = styled.span`
  align-self: center;
  font-size: 23px;
  color: #493c3b;
  font-weight: bolder;
`;
const Card = styled.div`
  width: calc(100% - 40px);
  margin-top: 20px;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const PictureContainer = styled.div`
  padding: 5px;
  margin-right: 10px;
  border: 2px solid #7d6765;
  border-radius: 50%;
`;

const UserPictureLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-image: url(${basicProfile});
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
`;

const PreviewPicture = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InfoText = styled.div`
  width: calc(100% - 10px);
  padding: 5px 0 5px 10px;
  border-bottom: 1px solid #7d6765;
  color: #7d6765;
  font-size: 16px;
`;
