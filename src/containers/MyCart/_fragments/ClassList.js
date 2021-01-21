import React, { useContext, useState } from "react";
import { Data } from "Data";
import styled from "styled-components";
import { Context } from "components/ContextProvider/ContextProvider";
import { GrTrash } from "react-icons/gr";

const ClassList = () => {
  const { classData, setClassData } = useContext(Context);
  const [checkArray, setCheckArray] = useState([]);
  let updateArray = classData.slice();

  const handleCheck = (index) => (e) => {
    if (checkArray.length !== classData.length && index === "all") {
      setCheckArray([...Array(classData.length).keys()]);
    } else if (checkArray.length === classData.length && index === "all") {
      setCheckArray([]);
    } else {
      if (checkArray.some((i) => i === index)) {
        setCheckArray(checkArray.filter((i) => i !== index));
      } else {
        setCheckArray([...checkArray, index]);
      }
    }
  };
  const deleteCard = () => {
    if (checkArray.some((i) => i === "all")) {
      setClassData([]);
    } else {
      for (let i = 0; i < checkArray.length; i++) {
        updateArray = updateArray.filter(
          (obj, index) => index !== checkArray[i]
        );
      }
      setClassData(updateArray);
      setCheckArray([]);
    }
  };

  console.log(checkArray);
  return (
    <ListContainer>
      <CheckContainer>
        <CancleCheck
          type="checkbox"
          onChange={handleCheck("all")}
          checked={checkArray.length === classData.length}
        />
        <CancleBtn onClick={deleteCard} />
      </CheckContainer>
      <Container>
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
            <CancleCheck
              type="checkbox"
              onChange={handleCheck(index)}
              checked={checkArray.some((i) => i === index)}
            />
          </Card>
        ))}
      </Container>
    </ListContainer>
  );
};

export default ClassList;

const ListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  // overflow-y: auto;
`;

const CheckContainer = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45px;
`;

const CancleBtn = styled(GrTrash)`
  color: #493c3b;
  font-size: 1.3rem;
  cursor: pointer;
`;

const CancleCheck = styled.input`
  width: 15px;
  height: 15px;
`;

const Container = styled.div`
  margin-top: 40px;
  width: 100%;
`;

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
