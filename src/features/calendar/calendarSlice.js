import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  days: [[]],
  events: [],
  startDate: null,
  endDate: null,
  currDate: null,
  currMonth: null,
  currYear: null,
  active: "Month",
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setDate: (state) => {
      const date = new Date();
      const currMonth = date.getMonth();
      const currYear = date.getFullYear();
      const startDate = new Date(currYear, currMonth, 1);
      const endDate = new Date(currYear, currMonth + 1, 0);

      state.startDate = startDate.getDate();
      state.endDate = endDate.getDate();
      state.currDate = date.getDate();
      state.currMonth = currMonth;
      state.currYear = currYear;
    },
    nextMonth: (state) => {
      if (state.currMonth === 11) {
        state.currMonth = 0;
        state.currYear++;
      } else {
        state.currMonth++;
      }
    },
    prevMonth: (state) => {
      if (state.currMonth === 0) {
        state.currMonth = 11;
        state.currYear--;
      } else {
        state.currMonth--;
      }
    },
    goToToday: (state) => {
      const date = new Date();
      state.currDate = date.getDate();
      state.currMonth = date.getMonth();
      state.currYear = date.getFullYear();
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setDays: (state) => {
      state.days = [[]];
      let newDays = [...state.days];
      let week = 0;

      const currentDate = new Date();
      const startDay = new Date(state.currYear, state.currMonth, 1).getDay();
      const lastDateOfLastMonth = new Date(
        state.currYear,
        state.currMonth,
        0
      ).getDate();
      let dateObj = {};

      for (let i = startDay; i > 0; i--) {
        dateObj = {
          date: lastDateOfLastMonth - i + 1,
          activeClass: false,
        };
        newDays[week].push(dateObj);
      }

      for (let i = 1; i <= state.endDate; i++) {
        if (newDays[week].length === 7) {
          week++;
          newDays[week] = [];
        }
        dateObj = {
          date: i,
          activeClass:
            i === state.currDate && currentDate.getMonth() === state.currMonth
              ? "active"
              : true,
        };
        newDays[week].push(dateObj);
      }

      let i = 1;

      while (newDays[week].length < 7) {
        dateObj = {
          date: i++,
          activeClass: false,
        };
        newDays[week].push(dateObj);
      }

      state.days = newDays;
    },
    setEvents: (state, action) => {
      const {
        eventName,
        eventType,
        fullDate,
        eventDate,
        eventMonth,
        eventYear,
        eventHour,
        eventMinute,
      } = action.payload;
      const newEvent = {
        id: nanoid(),
        title: eventName,
        type: eventType,
        fullDate: fullDate,
        eventDate: eventDate,
        eventMonth: eventMonth,
        eventYear: eventYear,
        eventHour: eventHour,
        eventMinute: eventMinute,
      };

      return {
        ...state,
        events: [...state.events, newEvent],
      };
    },
  },
});

export const {
  setDate,
  nextMonth,
  prevMonth,
  goToToday,
  setActive,
  setDays,
  setEvents,
} = calendarSlice.actions;

export default calendarSlice.reducer;
