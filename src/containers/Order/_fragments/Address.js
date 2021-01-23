import React, { useState, useContext } from "react";
import Modal from "components/Modal";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";
import { Context } from "components/ContextProvider/ContextProvider";

const Address = ({ handleChange }) => {
  const { userInfo, setUserInfo } = useContext(Context);
  const [searchAddress, setSearchAddress] = useState(false);

  const handleAddress = async (data) => {
    let address = data.address;
    let extraAddress = "";
    let zoneCode = data.zonecode;
    if (data.userSelectedType === "R") {
      address = data.roadAddress;
    } else {
      address = data.jibunAddress;
    }
    if (data.userSelectedType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      address += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    await setUserInfo({ ...userInfo, zoneCode, address });
    setSearchAddress(false);
  };

  return (
    <>
      <ZoneCodeContainer>
        <InputContainer>
          <InputLabel>우편번호</InputLabel>
          <ZoneCode
            onChange={handleChange("zoneCode")}
            value={userInfo.zoneCode}
            type="number"
          />
        </InputContainer>
        <SearchBtn
          onClick={(e) => {
            e.preventDefault();
            setSearchAddress(true);
          }}
        >
          검색
        </SearchBtn>
      </ZoneCodeContainer>
      <InputContainer>
        <InputLabel>주소</InputLabel>
        <Input
          onChange={handleChange("address")}
          value={userInfo.address}
          type="text"
        />
        {userInfo.address === "" && <Warning>주소를 검색하세요.</Warning>}
      </InputContainer>
      <InputContainer>
        <InputLabel>상세 주소</InputLabel>
        <Input
          onChange={handleChange("extraAddress")}
          value={userInfo.extraAddress}
          type="text"
        />
        {userInfo.extraAddress === "" && (
          <Warning>상세 주소를 입력해주세요.</Warning>
        )}
      </InputContainer>
      {searchAddress && (
        <Modal
          position="middle"
          bottom="25%"
          visible={searchAddress}
          closeModal={() => setSearchAddress(false)}
        >
          <ModalContainer>
            <DaumPostcode onComplete={handleAddress} autoClose={true} />
          </ModalContainer>
        </Modal>
      )}
    </>
  );
};

export default Address;

const ZoneCodeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 5px;
  width: 250px;
`;

const ZoneCode = styled.input`
  width: 100%;
  padding: 0 5px;
  outline: none;
  border: none;
  border-bottom: 2px solid #7d6765;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5px;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
  color: #493c3b;
`;

const Input = styled(ZoneCode)`
  width: calc(100% - 10px);
  height: 30px;
`;

const SearchBtn = styled.button`
  width: 70px;
  height: 30px;
  margin: 0 0 5px 20px;
  outline: none;
  background-color: transparent;
  border: 1px solid #7d6765;
  border-radius: 5px;
  color: #7d6765;
  font-size: 13px;
  font-weight: bolder;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  width: 350px;
  height: 400px;
  border-radius: 20px;
  background-color: white;
`;

const Warning = styled.span`
  margin-top: 5px;
  font-size: 13px;
  color: #493c3b;
`;
