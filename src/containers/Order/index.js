import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "components/ContextProvider/ContextProvider";
import Address from "./_fragments/Address";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import BigButton from "components/Button/BigButton";
import SuccessModal from "./_fragments/SuccessModal";
import NamePhone from "./_fragments/NamePhone";

const Order = () => {
  let history = useHistory();
  const location = useLocation();
  const {
    userInfo,
    setUserInfo,
    orderData,
    setOrderData,
    users,
    currentUser,
    logInSuccess,
  } = useContext(Context);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      window.setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [showModal, history]);

  useEffect(() => {
    const getUserInfo = () => {
      if (logInSuccess) {
        let info = users.find(
          (user) => user.id === currentUser.id && user.pw === currentUser.pw
        );
        setUserInfo({
          ...userInfo,
          ...info,
        });
      }
    };
    getUserInfo();
  }, []);

  const handleChange = (input) => (e) => {
    setUserInfo({ ...userInfo, [input]: e.target.value });
  };
  const CancleOrder = () => {
    setOrderData(orderData.slice(0, -1));
    history.push("/");
  };
  const checkValidaion = () => {
    if (
      userInfo.name !== "" &&
      userInfo.phone !== "" &&
      userInfo.phone.match("[0-9]{3}-[0-9]{4}-[0-9]{4}") &&
      userInfo.address &&
      userInfo.extraAddress
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = () => {
    if (checkValidaion()) {
      setShowModal(true);
      //  localStorage.setItem("orderData", JSON.stringify(orderData));
    } else {
      setShowModal(false);
    }
  };

  console.log(userInfo);

  return (
    <>
      {location.state === undefined ? (
        history.push("/")
      ) : (
        <>
          <ClassContainer>
            <ContentsContainer>
              <CancleBtn onClick={CancleOrder} />
              <Title>주문자 정보</Title>
              <Form>
                <NamePhone handleChange={handleChange} />
                <Address handleChange={handleChange} />
              </Form>
            </ContentsContainer>
            <BigButton
              color={checkValidaion() ? "#7d6765" : "#d7d2cb"}
              onClick={handleSubmit}
            >
              완료
            </BigButton>
          </ClassContainer>
          {showModal && <SuccessModal showModal={showModal} />}
        </>
      )}
    </>
  );
};

export default Order;

const ClassContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 40px);
  margin: 0 20px 0;
`;

const CancleBtn = styled(AiOutlineClose)`
  position: absolute;
  top: 20px;
  left: 0;
  font-size: 1.5rem;
  color: #493c3b;
  cursor: pointer;
`;

const Title = styled.span`
  margin-top: 150px;
  font-size: 23px;
  font-weight: bolder;
  color: #493c3b;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 30px;
`;
