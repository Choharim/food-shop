import React from "react";
import styled from "styled-components";
import { ImFire } from "react-icons/im";
import { Data } from "Data";
import { useHistory } from "react-router-dom";

const ClassList = ({ pageCount, step }) => {
  let history = useHistory();

  const clickCard = (foodClass) => (e) => {
    if (e.target.id === "card") {
      history.push({
        pathname: "/classDetails",
        state: { foodClass },
      });
    }
  };

  return (
    <>
      {[...Array(pageCount)].map(
        (n, page) =>
          step === page + 1 &&
          Data.map(
            (foodClass, index) =>
              index < 6 * (page + 1) &&
              index >= 6 * page && (
                <ClassCard
                  key={index}
                  id="card"
                  image={foodClass.image2}
                  onClick={clickCard(foodClass)}
                >
                  <ClassContents>
                    <ClassName>{foodClass.name}</ClassName>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {[...Array(foodClass.difficulty)].map((a, i) => (
                        <Fire key={i} />
                      ))}
                      {[...Array(5 - foodClass.difficulty)].map((a, i) => (
                        <FakeFire key={i} />
                      ))}
                    </div>
                    <Price>{foodClass.price * 2} 원</Price>
                  </ClassContents>
                </ClassCard>
              )
          )
      )}
    </>
  );
};

export default ClassList;

const ClassCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 48%;
  height: calc(100% / 3 - 10px);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.image});
  background-size: cover;
  border-radius: 20px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  cursor: pointer;
`;

const ClassContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: calc(100% - 20px);
  margin: 0 10px 15px;
  pointer-events: none;
`;

const ClassName = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bolder;
  color: #fff;
`;

const Fire = styled(ImFire)`
  margin-left: 2px;
  font-size: 1.1rem;
  color: #ff5733;
`;

const FakeFire = styled(ImFire)`
  margin-left: 2px;
  font-size: 1.1rem;
  color: #e3e0db;
`;

const Price = styled.span`
  margin-top: 5px;
  font-size: 16px;
  color: #fff;
`;
