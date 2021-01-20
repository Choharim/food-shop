import React, { useContext } from "react";
import { Data } from "Data";
import styled from "styled-components";
import { Context } from "components/ContextProvider/ContextProvider";

const ClassList = () => {
  const { classData, setClassData } = useContext(Context);

  /*
  [
    {
      name: "",
      date: "",
      time: "",
     people: 1
    },
  ]
  */

  //엑스버튼 누르면 삭제 (체크한거 삭제)
  return (
    <>
      {classData.map((data, index) => (
        <Card key={index}>
          <Picture
            image={Data.find((food) => food.name === data.name).image2}
          ></Picture>
          <InfoContainer>
            <Text>
              {data.name} 수업 ({data.people}명)
            </Text>
            <TextContainer>
              <Text>{data.date}</Text>
              <Text>{data.time === "am" ? "오전" : "오후"}</Text>
            </TextContainer>
          </InfoContainer>
        </Card>
      ))}
    </>
  );
};

export default ClassList;

const Card = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

const Picture = styled.div`
  width: 100px;
  height: 100px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 110px);
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Text = styled.span`
  margin-right: 10px;
  font-size: 16px;
  font-weight: bolder;
  color: #493c3b;
`;
