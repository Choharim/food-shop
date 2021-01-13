import React from "react";
import styled from "styled-components";
import { BsPlusSquare } from "react-icons/bs";
import basicProfile from "images/basicProfile.jpg";
import Input from "components/Input";

const OneStep = ({ users, showPicture, userObj, handleChange }) => {
  return (
    <>
      <Container>
        {userObj.userPicture === "" ? (
          <PictureContainer>
            <UserPictureLabel htmlFor="userPicture">
              <PicturePlusIcon />
            </UserPictureLabel>
          </PictureContainer>
        ) : (
          <PictureContainer>
            <PreviewPicture image={userObj.userPicture} />
          </PictureContainer>
        )}
        <UserPicture
          id="userPicture"
          type="file"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          onChange={showPicture}
        />
        <InputContainer>
          <Input
            onChange={handleChange("name")}
            value={userObj.name}
            autocomplete="off"
            type="text"
            width="100%"
          >
            이름
          </Input>
          {userObj.name === "" && <Warning>이름을 적어주세요.</Warning>}
          <Input
            onChange={handleChange("phone")}
            value={userObj.phone}
            autocomplete="off"
            type="tel"
            placeholder="ex) 010-1234-5678"
            width="100%"
          >
            전화번호
          </Input>
          {users.some((user) => user.phone === userObj.phone) && (
            <Warning>이미 등록된 전화번호입니다.</Warning>
          )}
          {userObj.phone === "" && <Warning>전화번호를 적어주세요.</Warning>}
          {!userObj.phone.match("[0-9]{3}-[0-9]{4}-[0-9]{4}") &&
            userObj.phone !== "" && (
              <Warning>010-1234-5678 형식으로 적어주세요.</Warning>
            )}
        </InputContainer>
      </Container>
    </>
  );
};

export default OneStep;

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const UserPicture = styled.input`
  display: none;
`;

const PictureContainer = styled.div`
  padding: 5px;
  margin-right: 10px;
  border: 2px solid #c9aca9;
  border-radius: 50%;
`;

const UserPictureLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 85px;
  background-image: url(${basicProfile});
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
`;

const PreviewPicture = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const PicturePlusIcon = styled(BsPlusSquare)`
  color: white;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Warning = styled.span`
  text-align: center;
  font-size: 13px;
`;
