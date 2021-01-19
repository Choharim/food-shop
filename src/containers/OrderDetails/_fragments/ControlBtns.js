import React from "react";
import styled from "styled-components";
import { GrPowerReset, GrTrash } from "react-icons/gr";

const ControlBtns = ({ index, order, setOrder, setCount, count }) => {
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

  const Del = () => {
    if (count !== 1) {
      setCount(count - 1);
      setOrder(order.filter((obj, i) => i !== index));
    }
  };

  return (
    <Container>
      <DelBtn onClick={Del} />
      <ResetBtn onClick={reset} />
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
  font-size: 1.2rem;
  color: #493c3b;
  cursor: pointer;
`;

const DelBtn = styled(GrTrash)`
  margin-right: 10px;
  font-size: 1.2rem;
  color: #493c3b;
  cursor: pointer;
`;
