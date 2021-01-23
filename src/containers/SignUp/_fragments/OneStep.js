import React, { useContext } from "react";
import styled from "styled-components";
import { BsPlusSquare } from "react-icons/bs";
import basicProfile from "icons/basicProfile.png";
import Input from "components/Input";
import { Context } from "components/ContextProvider/ContextProvider";

const OneStep = ({ userObj, showPicture, handleChange }) => {
  const { users } = useContext(Context);

  return (
    <>
      <Container>
        {userObj.userPicture === basicProfile ? (
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
          <LabelContainer>
            <Input
              onChange={handleChange("name")}
              value={userObj.name}
              type="text"
              width="100%"
            >
              이름
            </Input>
            {userObj.name === "" && <Warning>이름을 적어주세요.</Warning>}
          </LabelContainer>
          <LabelContainer>
            <Input
              onChange={handleChange("phone")}
              value={userObj.phone}
              type="text"
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
          </LabelContainer>
        </InputContainer>
      </Container>
    </>
  );
};

export default OneStep;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
`;

const UserPicture = styled.input`
  display: none;
`;

const PictureContainer = styled.div`
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #7d6765;
  border-radius: 50%;
`;

const UserPictureLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  background-image: url(${basicProfile});
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
`;

const PreviewPicture = styled.div`
  width: 75px;
  height: 75px;
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

const LabelContainer = styled(InputContainer)`
  height: 100px;
`;

const Warning = styled.span`
  margin: 0 0 0 20px;
  font-size: 13px;
  color: #493c3b;
`;
