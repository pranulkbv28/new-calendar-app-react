import { useDispatch } from "react-redux";
import MainCalendarBody from "../mainCalendarBody/MainCalendarBody";
import MainToolbar from "../mainToolBar/MainToolbar";
import styles from "./maincalendar.module.css";
import { setDate } from "../../features/calendar/calendarSlice";
import { useEffect } from "react";

const MainCalendar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDate());

    const now = new Date();
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const msUntilMidnight = nextMidnight - now;

    const timeoutId = setTimeout(() => {
      dispatch(setDate());
    }, msUntilMidnight);

    // Clear the timeout when the component is unmounted
    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch]);

  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <MainToolbar />
        <MainCalendarBody />
      </main>
    </div>
  );
};

export default MainCalendar;
