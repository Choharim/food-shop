import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import { ko } from "date-fns/locale";

const ClassDate = () => {
  const handleCalendar = (data) => {
    let year = data.getFullYear();
    let month = 1 + data.getMonth();
    month = month >= 10 ? month : `0${month}`;
    let day = data.getDate();
    day = day >= 10 ? day : `0${day}`;

    console.log(`${year}.${month}.${day}`);
  };

  return (
    <Calendar
      date={new Date()}
      onChange={handleCalendar}
      showMonthAndYearPickers={false}
      minDate={new Date()}
      color="#b89995"
      locale={ko}
    />
  );
};

export default ClassDate;
