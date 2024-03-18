// Calendar.jsx
import { useState, useEffect } from "react";
import styles from "./calendar.module.css";
import CalendarBody from "../calendarBody/CalendarBody";
import Toolbar from "../toolbar/Toolbar";

const Calendar = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [currDate, setCurrDate] = useState(new Date());
  const [currMonth, setCurrMonth] = useState(currDate.getMonth());
  const [currYear, setCurrYear] = useState(currDate.getFullYear());

  useEffect(() => {
    setCurrDate(new Date());
  }, []);

  const nextHandler = () => {
    if (currMonth === 11) {
      setCurrMonth(0);
      setCurrYear(currYear + 1);
    } else {
      setCurrMonth(currMonth + 1);
    }
  };

  const prevHandler = () => {
    if (currMonth === 0) {
      setCurrMonth(11);
      setCurrYear(currYear - 1);
    } else {
      setCurrMonth(currMonth - 1);
    }
  };

  const todayHandler = () => {
    setCurrMonth(currDate.getMonth());
    setCurrYear(currDate.getFullYear())
  }

  return (
    <div className={styles.mainCalendarBody}>
      <Toolbar
        currMonth={months[currMonth]}
        currYear={currYear}
        nextHandler={nextHandler}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
      />
      <CalendarBody
        currDate={currDate}
        currMonth={currMonth}
        currYear={currYear}
      />
    </div>
  );
};

export default Calendar;
