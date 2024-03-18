// import React from 'react';
import styles from "./calendarside.module.css";

const CalendarSide = () => {
  return (
    <div className={styles.body}>
      <div className={styles.eventTypesConatiner}>
        <div
          style={{
            borderColor: "rgb(61, 162, 61)",
            backgroundColor: "rgba(101, 202, 101, 0.399)",
          }}
          className={styles.eventType}
        >
          <span
            style={{ backgroundColor: "rgba(101, 202, 101, 0.399)" }}
          ></span>
          Event
        </div>
        <div
          style={{
            borderColor: "rgb(156, 53, 53)",
            backgroundColor: "rgba(152, 52, 52, 0.541)",
          }}
          className={styles.eventType}
        >
          <span style={{ backgroundColor: "rgba(152, 52, 52, 0.541)" }}></span>
          Assignment
        </div>
        <div
          style={{
            borderColor: "rgb(81, 9, 81)",
            backgroundColor: "rgba(90, 19, 90, 0.36)",
          }}
          className={styles.eventType}
        >
          <span style={{ backgroundColor: "rgba(90, 19, 90, 0.36)" }}></span>
          Focus Period
        </div>
        <div
          style={{
            borderColor: "rgb(255, 255, 64)",
            background: "rgba(196, 196, 65, 0.47)",
          }}
          className={styles.eventType}
        >
          <span style={{ background: "rgba(196, 196, 65, 0.47)" }}></span>
          Test
        </div>
      </div>
      <hr className={styles.horizontal} />
      <div className={styles.showOnly}>
        <div>
          <input
            type="checkbox"
            style={{
              borderColor: "rgb(61, 162, 61)",
              backgroundColor: "rgba(101, 202, 101, 0.399)",
            }}
            className={styles.customCheckbox}
            id="checkbox1"
          />
          <label htmlFor="checkbox1"></label>
          <span>Event</span>
        </div>
        <div>
          <input
            type="checkbox"
            style={{
              borderColor: "rgb(156, 53, 53)",
              backgroundColor: "rgba(152, 52, 52, 0.541)",
            }}
            className={styles.customCheckbox}
            id="checkbox2"
          />
          <label htmlFor="checkbox2"></label>
          <span>Assignments</span>
        </div>
        <div>
          <input
            type="checkbox"
            style={{
              borderColor: "rgb(81, 9, 81)",
              backgroundColor: "rgba(90, 19, 90, 0.36)",
            }}
            className={styles.customCheckbox}
            id="checkbox3"
          />
          <label htmlFor="checkbox3"></label>
          <span>Focus Period</span>
        </div>
        <div>
          <input
            type="checkbox"
            style={{
              borderColor: "rgb(255, 255, 64)",
              background: "rgba(196, 196, 65, 0.47)",
            }}
            className={styles.customCheckbox}
            id="checkbox4"
          />
          <label htmlFor="checkbox4"></label>
          <span>Tests</span>
        </div>
      </div>
      <hr className={styles.horizontal} />
    </div>
  );
};

export default CalendarSide;
