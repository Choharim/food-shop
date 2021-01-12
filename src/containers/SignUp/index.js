import React, { useState } from "react";
import styled from "styled-components";
import { BsPlusSquare } from "react-icons/bs";
import { RiArrowGoBackLine } from "react-icons/ri";
import BigButton from "components/Button/BigButton";
import Input from "components/Input";
import { useHistory } from "react-router-dom";

const SingUp = () => {
  // let history = useHistory();
  const [userObj, setUserObj] = useState({
    id: "",
    pw: "",
    name: "",
    extraAddress: "",
    zoneCode: "",
    address: "",
    phone: "",
    userPicture: "",
  });
  const [validation, setValidation] = useState(false);
  const [step, setStep] = useState(1);

  const showPicture = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    reader.onloadend = () => {
      setUserObj({ ...userObj, userPicture: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <SignUpContainer>
      <SignUpForm>
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
        <Input type="text" width="100%">
          아이디
        </Input>
        <Input type="text" width="100%">
          이름
        </Input>
        <Input
          autocomplete="current-password"
          type="password"
          placeholder="4글자 이상"
          width="100%"
        >
          비밀번호
        </Input>
        <Input
          type="tel"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          placeholder="ex) 010-1234-5678"
          width="100%"
        >
          전화번호
        </Input>
      </SignUpForm>
      <BigButton type="submit" color={validation ? "#9e8380" : "#d7d2cb"}>
        확인
      </BigButton>
    </SignUpContainer>
  );
};

export default SingUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 60px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 120px;
`;

const UserPicture = styled.input`
  display: none;
`;

const UserPictureLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  margin-bottom: 30px;
  //background-image:url();
  background-color: powderblue;
  border-radius: 50%;
  cursor: pointer;
`;

const PreviewPicture = styled.div`
  width: 180px;
  height: 180px;
  margin-bottom: 30px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const PicturePlusIcon = styled(BsPlusSquare)`
  font-size: 1.2rem;
  color: white;
`;
