import React, { useState } from "react";
import styled from "styled-components";
import Input from "components/Input";
import Modal from "components/Modal";
import DaumPostcode from "react-daum-postcode";

const ThreeStep = ({ userObj, setUserObj, handleChange }) => {
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
    await setUserObj({ ...userObj, zoneCode, address });
    setSearchAddress(false);
  };

  return (
    <>
      <ZoneCodeContainer>
        <ZoneCode defaultValue={userObj.zoneCode} type="number" width="40%">
          우편번호
        </ZoneCode>
        <SearchBtn onClick={() => setSearchAddress(true)}>검색</SearchBtn>
      </ZoneCodeContainer>
      <LabelContainer>
        <Input defaultValue={userObj.address} width="100%" type="text">
          주소
        </Input>
        {userObj.address === "" && <Warning>주소를 검색하세요.</Warning>}
      </LabelContainer>
      <LabelContainer>
        <Input
          onChange={handleChange("extraAddress")}
          value={userObj.extraAddress}
          width="100%"
          type="text"
        >
          상세 주소
        </Input>
        {userObj.extraAddress === "" && (
          <Warning>상세 주소를 입력해주세요.</Warning>
        )}
      </LabelContainer>
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

export default ThreeStep;

const ZoneCodeContainer = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
`;

const ZoneCode = styled(Input)`
  height: 30px;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
`;

const SearchBtn = styled.button`
  width: 70px;
  height: 30px;
  margin-left: 20px;
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
  margin: 0 0 5px 20px;
  font-size: 13px;
  color: #493c3b;
`;
