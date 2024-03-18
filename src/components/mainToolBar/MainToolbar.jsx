import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import styles from "./maintoolbbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  goToToday,
  nextMonth,
  prevMonth,
  setActive,
} from "../../features/calendar/calendarSlice";

const MainToolbar = () => {
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
  const dispatch = useDispatch();
  const active = useSelector((state) => state.calendarReducer.active);
  const currMonth =
    months[useSelector((state) => state.calendarReducer.currMonth)];
  const currYear = useSelector((state) => state.calendarReducer.currYear);
  const nextHandler = () => {
    dispatch(nextMonth());
  };
  const prevHandler = () => {
    dispatch(prevMonth());
  };
  const todayHandler = () => {
    dispatch(goToToday());
  };

  const selectCalendarType = (e) => {
    dispatch(setActive(e.target.innerText));
  };

  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <div className={styles.toolbarContainer}>
          <button onClick={todayHandler} className={styles.todayButton}>
            <h2>Today</h2>
          </button>
          <div className={styles.buttonContainer}>
            <button onClick={prevHandler} className={styles.iconBtn}>
              <ChevronLeft />
            </button>
            <button onClick={nextHandler} className={styles.iconBtn}>
              <ChevronRight />
            </button>
          </div>
          <div className={styles.dateContainer}>
            <span>
              <h2>{currMonth}</h2>
            </span>
            <h2>,</h2>
            <span>
              {" "}
              <h2>{currYear}</h2>
            </span>
          </div>
          <div className={styles.calendarTypes}>
            <div
              onClick={selectCalendarType}
              className={`${styles.calendarType} ${
                active === "Day" ? styles.active : ""
              }`}
            >
              <h4>Day</h4>
            </div>
            <div
              onClick={selectCalendarType}
              className={`${styles.calendarType} ${
                active === "Week" ? styles.active : ""
              }`}
            >
              <h4>Week</h4>
            </div>
            <div
              onClick={selectCalendarType}
              className={`${styles.calendarType} ${
                active === "Month" ? styles.active : ""
              }`}
            >
              <h4>Month</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainToolbar;
