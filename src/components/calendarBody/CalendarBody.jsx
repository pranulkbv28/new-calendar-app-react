/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styles from "./calendarbody.module.css";

const CalendarBody = (props) => {
  const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let [firstDayOfCurrMonth, setFirstDayOfCurrMonth] = useState(0);
  let [lastDayOfCurrMonth, setLastDayOfCurrMonth] = useState(0);
  let [lastDateOfLastMonth, setLastDateOfLastMonth] = useState(0);
  let [lastDateOfCurrMonth, setLastDateOfCurrMonth] = useState(0);
  let [days, setDays] = useState([]);

  useEffect(() => {
    setFirstDayOfCurrMonth(
      new Date(props.currYear, props.currMonth, 1).getDay()
    );
    setLastDateOfCurrMonth(
      new Date(props.currYear, props.currMonth + 1, 0).getDate()
    );
    setLastDayOfCurrMonth(
      new Date(props.currYear, props.currMonth, lastDateOfCurrMonth).getDay()
    );
    setLastDateOfLastMonth(
      new Date(props.currYear, props.currMonth, 0).getDate()
    );
  }, [props.currYear, props.currMonth, lastDateOfCurrMonth]);

  const renderDays = () => {
    return daysOfTheWeek.map((day, index) => (
      <span className={styles.daysConatiner} key={index}>
        {day}
      </span>
    ));
  };

  useEffect(() => {
    const renderDaysOfMonth = () => {
      let daysArray = [];
      let dayClass = styles.days;
      let inactiveClass = styles.inactive;
      let activeClass = styles.active;
      for (let i = firstDayOfCurrMonth; i > 0; i--) {
        daysArray.push(
          <span className={`${dayClass} ${inactiveClass}`}>
            {lastDateOfLastMonth - i + 1}
          </span>
        );
      }
      for (let i = 1; i <= lastDateOfCurrMonth; i++) {
        let isToday =
          i === props.currDate.getDate() &&
          props.currMonth === new Date().getMonth() &&
          props.currYear === new Date().getFullYear()
            ? activeClass
            : "";
        daysArray.push(<span className={`${isToday} ${dayClass}`}>{i}</span>);
      }
      for (let i = lastDayOfCurrMonth; i < 6; i++) {
        daysArray.push(
          <span className={`${inactiveClass} ${dayClass}`}>
            {i - lastDayOfCurrMonth + 1}
          </span>
        );
      }

      return daysArray;
    };

    setDays(renderDaysOfMonth());
  }, [
    firstDayOfCurrMonth,
    lastDateOfCurrMonth,
    lastDateOfLastMonth,
    lastDayOfCurrMonth,
    props.currDate,
    props.currMonth,
    props.currYear,
  ]);

  return (
    <div>
      <div>
        <div className={styles.calendarBody}>
          {renderDays()}
          {days.map((day, index) => (
            <React.Fragment key={index}>{day}</React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarBody;
