import React from "react";
import styled from "styled-components";
import { BsPlusSquare } from "react-icons/bs";
import basicProfile from "images/basicProfile.jpg";
import Input from "components/Input";

const OneStep = ({ showPicture, userObj, handleChange }) => {
  return (
    <>
      <Container>
        {userObj.userPicture === "" ? (
          <UserPictureLabel htmlFor="userPicture">
            <PicturePlusIcon />
          </UserPictureLabel>
        ) : (
          <PreviewPicture image={userObj.userPicture} />
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
            type="text"
            width="100%"
          >
            이름
          </Input>
          <Input
            onChange={handleChange("phone")}
            value={userObj.phone}
            type="tel"
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            placeholder="ex) 010-1234-5678"
            width="100%"
          >
            전화번호
          </Input>
        </InputContainer>
      </Container>
    </>
  );
};

export default OneStep;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const UserPicture = styled.input`
  display: none;
`;

const UserPictureLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background-image: url(${basicProfile});
  background-size: cover;
  border: 2px solid #c9aca9;
  border-radius: 50%;
  cursor: pointer;
`;

const PreviewPicture = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const PicturePlusIcon = styled(BsPlusSquare)`
  font-size: 1.2rem;
  color: white;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
