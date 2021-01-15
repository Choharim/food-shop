import React from "react";
import styled from "styled-components";
import SmallButton from "components/Button/SmallButton";
import { GrPowerReset, GrTrash } from "react-icons/gr";

const ControlBtns = ({ index, order, setOrder }) => {
  //리셋,삭제버튼
  let copy = order.slice();

  const reset = () => {
    copy[index] = Object.assign(copy[index], {
      foodName: "",
      except: [],
      add: [],
      allergy: "",
      allergyText: "",
    });
    setOrder(copy);
  };
  console.log(order);
  const cancle = () => {};
  return (
    <Container>
      <ResetBtn onClick={reset} />
      <CancleBtn onClick={cancle} />
    </Container>
  );
};

export default ControlBtns;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 5px 0;
`;

const ResetBtn = styled(GrPowerReset)`
  font-size: 1.5rem;
  color: #493c3b;
  cursor: pointer;
`;

const CancleBtn = styled(GrTrash)`
  font-size: 1.5rem;
  color: #493c3b;
  margin-left: 20px;
  cursor: pointer;
`;
