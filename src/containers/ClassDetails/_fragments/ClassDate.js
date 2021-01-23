import React from "react";
import styled from "styled-components";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import { ko } from "date-fns/locale";

const ClassDate = ({ setFoodClass, foodClass }) => {
  const handleCalendar = (data) => {
    let year = data.getFullYear();
    let month = 1 + data.getMonth();
    month = month >= 10 ? month : `0${month}`;
    let day = data.getDate();
    day = day >= 10 ? day : `0${day}`;

    setFoodClass({
      ...foodClass,
      date: `${year}.${month}.${day}`,
    });
  };

  return (
    <Container>
      <Text>날짜를 선택하세요</Text>
      <CalendarContainer
        date={new Date()}
        onChange={handleCalendar}
        showMonthAndYearPickers={false}
        minDate={new Date()}
        color="#b89995"
        locale={ko}
      />
    </Container>
  );
};

export default ClassDate;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 5px;
`;

const CalendarContainer = styled(Calendar)`
  width: 100%;
  .rdrMonthAndYearWrapper {
    padding-top: 0;
    height: 50px;
  }
  .rdrNextPrevButton {
    background-color: #fff;
  }
  .rdrMonthAndYearPickers {
    width: auto;
    font-size: 16px;
    color: #493c3b;
  }
  .rdrMonths {
    padding-top: 10px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
  .rdrMonth {
    padding: 0;
    width: 100%;
  }
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: bolder;
  color: #493c3b;
`;
