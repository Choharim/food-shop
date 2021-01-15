import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "components/ContextProvider/ContextProvider";
import { useHistory } from "react-router-dom";

const Choice = () => {
  let history = useHistory();
  const { count, setCount, orderData, setOrderData } = useContext(Context);
  const addItemArray = ["맛보기 랜덤", "맛보기 연어쿠키", "미니 양치츄"];
  let check;
  let copy = orderData.slice();

  /*
  [{
    foodName: "",
    totalPrice: 0,
    allergy: "",
    allergyText: "",
    except: [],
    add: [],
  }]
  */
  const handleChoice = (input, index) => (e) => {
    copy[index] = Object.assign(orderData[index], {
      [input]: e.target.value,
    });
    if (e.target.value === "no") {
      copy[index] = Object.assign(orderData[index], {
        allergyText: "",
      });
    }
    setOrderData(copy);
  };
  const handleExcept = (index) => (e) => {
    if (e.target.value === "no") {
      copy[index].except = ["no"];
    } else {
      if (orderData[index].except.some((item) => item === e.target.value)) {
        check = orderData[index].except.filter(
          (item) => item !== e.target.value && item !== "no"
        );
        copy[index].except = check;
      } else {
        check = orderData[index].except.filter((item) => item !== "no");
        copy[index].except = check;
        copy[index].except.push(e.target.value);
      }
    }
    setOrderData(copy);
  };
  const handleAdd = (index) => (e) => {
    if (e.target.value === "no") {
      copy[index].add = ["no"];
    } else {
      if (orderData[index].add.some((item) => item === e.target.value)) {
        check = orderData[index].add.filter(
          (item) => item !== e.target.value && item !== "no"
        );
        copy[index].add = check;
      } else {
        check = orderData[index].add.filter((item) => item !== "no");
        copy[index].add = check;
        copy[index].add.push(e.target.value);
      }
    }
    setOrderData(copy);
  };
  const handleValidaion = () => {
    if (
      orderData.every(
        (obj) => obj.allergy !== "" && obj.except.length && obj.add.length
      )
    ) {
      if (
        orderData.some((obj) => obj.allergy === "yes" && obj.allergyText === "")
      ) {
        alert("알러지 종류를 적어주세요!");
        return;
      } else {
        alert("수업 신청이 완료되었습니다.");
        history.push("/");
      }
    } else {
      alert("알러지 유무, 제외할 재료, 추가할 재료를 모두 선택해주세요!");
    }
  };

  return <Container>choice</Container>;
};

export default Choice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`;
