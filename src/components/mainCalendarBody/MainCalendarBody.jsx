import { useEffect, useState } from "react";
import styles from "./maincalenddarbody.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setDays, setEvents } from "../../features/calendar/calendarSlice";
import { nanoid } from "@reduxjs/toolkit";
import CloseIcon from "@mui/icons-material/Close";

const MainCalendarBody = () => {
  const dispatch = useDispatch();
  const days = useSelector((state) => state.calendarReducer.days);
  const currMonth = useSelector((state) => state.calendarReducer.currMonth);
  const currYear = useSelector((state) => state.calendarReducer.currYear);
  const events = useSelector((state) => state.calendarReducer.events);
  const [close, setClose] = useState(false);
  const [eventDate, setEventDate] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventType, setEventType] = useState("");

  useEffect(() => {
    dispatch(setDays());
  }, [dispatch, currMonth, currYear]);

  const handleClick = (date) => {
    setEventDate(date);
    setClose((prevClose) => !prevClose);
  };

  const addEventHandler = () => {
    const dateOfEvent = new Date(eventTime);
    const fullDate = dateOfEvent.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const event = {
      eventName: eventTitle,
      eventType: eventType,
      fullDate: fullDate,
      eventDate: dateOfEvent.getDate(),
      eventMonth: dateOfEvent.getMonth(),
      eventYear: dateOfEvent.getFullYear(),
      eventHour: dateOfEvent.getHours(),
      eventMinute: dateOfEvent.getMinutes(),
    };
    dispatch(setEvents(event));
    setClose((prevClose) => !prevClose);
  };

  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <div className={styles.weekdDayContainer}>
          <h3 className={styles.weekDay}>Mon</h3>
          <h3 className={styles.weekDay}>Tue</h3>
          <h3 className={styles.weekDay}>Wed</h3>
          <h3 className={styles.weekDay}>Thu</h3>
          <h3 className={styles.weekDay}>Fri</h3>
          <h3 className={styles.weekDay}>Sat</h3>
          <h3 className={styles.weekDay}>Sun</h3>
        </div>
        {days.map((day) => (
          <div className={styles.week} key={nanoid()}>
            {day.map((date) => (
              <span
                onClick={
                  date.activeClass === true || date.activeClass === "active"
                    ? () => handleClick(date.date)
                    : null
                }
                style={
                  !date.activeClass
                    ? { color: "lightgray", cursor: "no-drop" }
                    : { cursor: "pointer" }
                }
                key={nanoid()}
              >
                <span
                  style={
                    !date.activeClass
                      ? { color: "lightgray", cursor: "no-drop" }
                      : date.activeClass === "active"
                      ? { backgroundColor: "blue" }
                      : { fontWeight: "bolder" }
                  }
                  key={nanoid()}
                >
                  {date.date}
                </span>
                <div className={styles.eventsContainer}>
                  {events.map((event) =>
                    event.eventYear === currYear &&
                    event.eventMonth === currMonth &&
                    event.eventDate === date.date ? (
                      <div
                        className={`${styles.event} ${
                          event.type === "Event"
                            ? styles.green
                            : event.type === "Assignment"
                            ? styles.red
                            : event.type === "Focus Period"
                            ? styles.purple
                            : styles.yellow
                        }`}
                        key={nanoid()}
                      >
                        {event.title}
                      </div>
                    ) : null
                  )}
                </div>
              </span>
            ))}
          </div>
        ))}
      </div>
      <div
        className={`${styles.eventCollector} ${
          close ? styles.visible : styles.hidden
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.eventHeader}>
          <span className={styles.titleName}>
            <h3>
              {`Add an event on ${eventDate}/${currMonth + 1}/${currYear}`}
            </h3>
          </span>
          <span onClick={() => setClose(false)} className={styles.closeIcon}>
            <CloseIcon />
          </span>
        </div>
        <input
          type="text"
          name="eventName"
          id="eventName"
          placeholder="Enter the event"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
        <select onChange={(e) => setEventType(e.target.value)} name="" id="">
          <option disabled>Select Event</option>
          <option value="Event">Event</option>
          <option value="Assignment">Assignment</option>
          <option value="Focus Period">Focus Period</option>
          <option value="Test">Test</option>
        </select>
        <input
          type="datetime-local"
          name=""
          id=""
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
        <div className={styles.btnContainer}>
          <button onClick={addEventHandler}>Add Event</button>
        </div>
      </div>
    </div>
  );
};

export default MainCalendarBody;
