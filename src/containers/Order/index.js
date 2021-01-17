import React, { useContext, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Context } from "components/ContextProvider/ContextProvider";
import Address from "./_fragments/Address";

const Order = () => {
  /*
  -logInsccess가 true이면 users에서 currentUser find해서  
  이름,주소,핸드폰번호 기본값으로 지정
  -완료버튼 누르면 성공멘트나오고 cart페이지로

  -cart페이지에는 orderData와 userInfo나와있음
 */
  const {
    userInfo,
    setUserInfo,
    logInSuccess,
    currentUser,
    users,
  } = useContext(Context);

  const checkLogIn = useCallback(() => {
    if (logInSuccess) {
      setUserInfo({
        ...userInfo,
        name: users.find(
          (user) => user.id === currentUser.id && user.pw === currentUser.pw
        ).name,
        phone: users.find(
          (user) => user.id === currentUser.id && user.pw === currentUser.pw
        ).phone,
      });
    }
  }, [setUserInfo, logInSuccess, userInfo, users, currentUser]);

  useEffect(() => {
    checkLogIn();
  }, [checkLogIn]);

  const handleChange = (input) => (e) => {
    setUserInfo({ ...userInfo, [input]: e.target.value });
  };
  console.log(userInfo);

  return (
    <ClassContainer>
      <Title>주문자 정보</Title>
      <Form>
        <InputLabel>이름</InputLabel>
        <InputBox
          onChange={handleChange("name")}
          value={userInfo.name}
          autocomplete="off"
          type="text"
        />
        {userInfo.name === "" && <Warning>이름을 적어주세요.</Warning>}
        <InputLabel>전화번호</InputLabel>
        <InputBox
          onChange={handleChange("phone")}
          value={userInfo.phone}
          autocomplete="off"
          type="tel"
          placeholder="ex) 010-1234-5678"
        />
        {userInfo.phone === "" && <Warning>전화번호를 적어주세요.</Warning>}
        {!userInfo.phone.match("[0-9]{3}-[0-9]{4}-[0-9]{4}") &&
          userInfo.phone !== "" && (
            <Warning>010-1234-5678 형식으로 적어주세요.</Warning>
          )}
        <Address />
      </Form>
    </ClassContainer>
  );
};

export default Order;

const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.span`
  margin-top: 100px;
  font-size: 23px;
  font-weight: bolder;
  color: #493c3b;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 120px);
  height: 100%;
  padding: 0 60px;
  margin-top: 50px;
`;

const InputLabel = styled.label`
  margin: 10px 0 5px;
  font-size: 13px;
`;

const InputBox = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
`;

const Warning = styled.span`
  margin-top: 5px;
  text-align: center;
  font-size: 13px;
`;
