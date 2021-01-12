import React, { useState } from "react";
import styled from "styled-components";
import Input from "components/Input";
import DaumPostcode from "react-daum-postcode";

const ThreeStep = ({ userObj, setUserObj, handleChange }) => {
  const [searchAddress, setSearchAddress] = useState(false);

  const handleAddress = (data) => {
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
    setUserObj({ ...userObj, zoneCode, address });
  };

  return (
    <>
      <ZoneCodeContainer>
        <ZoneCode
          defaultValue={userObj.zoneCode}
          type="number"
          width="30%"
          boxWidth="80%"
        >
          우편번호
        </ZoneCode>
        <SearchBtn onClick={() => setSearchAddress(true)}>검색</SearchBtn>
      </ZoneCodeContainer>
      <Input
        onChange={handleChange("address")}
        value={userObj.address}
        width="100%"
        type="text"
      >
        주소
      </Input>
      <Input
        onChange={handleChange("extraAddress")}
        value={userObj.extraAddress}
        width="100%"
        type="text"
      >
        상세 주소
      </Input>
      {searchAddress && (
        <>
          <DaumPostcode onComplete={handleAddress} />
        </>
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
  height: 20px;
`;

const SearchBtn = styled.button`
  width: 80px;
  height: 30px;
  margin-left: 20px;
  outline: none;
  background-color: transparent;
  border: 1px solid #9e8380;
  border-radius: 5px;
  color: #9e8380;
  font-size: 13px;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    background-color: #9e8380;
    color: #f3eceb;
  }
`;
