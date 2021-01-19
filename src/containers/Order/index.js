import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "components/ContextProvider/ContextProvider";
import Address from "./_fragments/Address";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

const Order = () => {
  let history = useHistory();
  const location = useLocation();
  const { userInfo, setUserInfo, orderData, setOrderData } = useContext(
    Context
  );
  //로그인했으면 그거 정보 가져오기
  //취소버튼 누르면 orderSuccess false되면서 orderData맨마지막 값 제거,
  //주문하기 버튼누르면 주문성공나오고 홈으로

  /*
  const getUserInfo = useCallback(() => {
    if (location.state !== undefined && logInSuccess) {
      let info= users.find(
          (user) => user.id === currentUser.id && user.pw === currentUser.pw
        )
      setUserInfo({
        ...userInfo,
        name: info.name,
        phone: info.phone,
        zoneCode: info.zoneCode,
        address: info.address,
        extraAddress: info.extraAddress,
      });
    }
  }, [logInSuccess, setUserInfo, userInfo, location]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);
*/
  const handleChange = (input) => (e) => {
    setUserInfo({ ...userInfo, [input]: e.target.value });
  };
  const CancleOrder = () => {
    setOrderData(orderData.slice(0, -1));
    history.push("/");
  };

  console.log(orderData);

  return (
    <>
      {location.state === undefined ? (
        history.push("/")
      ) : (
        <ClassContainer>
          <CancleBtn onClick={CancleOrder} />
          <Title>주문자 정보</Title>
          <Form>
            <InputContainer>
              <InputLabel>이름</InputLabel>
              <Input
                onChange={handleChange("name")}
                defaultValue={userInfo.name !== "" ? userInfo.name : ""}
                type="text"
              />
              {userInfo.name === "" && <Warning>이름을 적어주세요.</Warning>}
            </InputContainer>
            <InputContainer>
              <InputLabel>전화번호</InputLabel>
              <Input
                onChange={handleChange("phone")}
                defaultValue={userInfo.phone !== "" ? userInfo.phone : ""}
                autocomplete="off"
                type="tel"
                placeholder="ex) 010 - 1234 - 5678"
              />
              {userInfo.phone === "" && (
                <Warning>전화번호를 적어주세요.</Warning>
              )}
              {!userInfo.phone.match("[0-9]{3}-[0-9]{4}-[0-9]{4}") &&
                userInfo.phone !== "" && (
                  <Warning>010 - 1234 - 5678 형식으로 적어주세요.</Warning>
                )}
            </InputContainer>
            <Address handleChange={handleChange} />
          </Form>
        </ClassContainer>
      )}
    </>
  );
};

export default Order;

const ClassContainer = styled.div`
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  margin-bottom: 5px;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
  color: #493c3b;
`;

const Input = styled.input`
  width: calc(100% - 10px);
  height: 30px;
  padding: 0 5px;
  outline: none;
  border: none;
  border-bottom: 2px solid #7d6765;
`;

const Warning = styled.span`
  margin-top: 5px;
  font-size: 13px;
  color: #493c3b;
`;
