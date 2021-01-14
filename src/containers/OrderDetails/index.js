import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";

const OrderDetails = () => {
  let history = useHistory();
  const location = useLocation();
  //const foodObj = location.state.food;

  return (
    <>
      {location.state === undefined ? (
        history.push("/shop")
      ) : (
        <button>order</button>
      )}
    </>
  );
};

export default OrderDetails;
