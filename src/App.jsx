import "./App.css";
import Calendar from "./components/calendar/Calendar";
import CalendarSide from "./components/calendarSide/CalendarSide";
import MainCalendar from "./components/mainCalendar/MainCalendar";
import TopBar from "./components/tobar/TopBar";
import logo from "./assets/logoImage.jpeg";
import schoolLogo from "./assets/schoolLogo.png";
import { Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import QuizIcon from "@mui/icons-material/Quiz";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./components/app.module.css";
// import { Flare } from "@mui/icons-material";

function App() {
  return (
    <div
      style={{
        width: "100%",
        background: "#000000",
        padding: "24px",
        display: "flex",
        // alignItems: "center",
      }}
    >
      <div style={{ width: "20%" }}>
        <div
          style={{ width: "100%", padding: "5px" }}
          className={StyleSheet.logoContainer}
        >
          <img
            style={{ width: "80%", height: "100px" }}
            src={logo}
            alt="logo pic"
          />
        </div>
        <div style={{ width: "100%", padding: "5px" }}>
          <img
            style={{ width: "80%", height: "100px" }}
            src={schoolLogo}
            alt="schoolLogo-pic"
          />
        </div>
        <div style={{ width: "100%", padding: "5px" }}>
          <Avatar />
        </div>
        <div className={styles.iconContainer}>
          <div>
            <span>
              <HomeIcon />
            </span>
            <span>Home</span>
          </div>
          <div>
            <span>
              <TaskIcon />
            </span>
            <span>Task</span>
          </div>
          <div>
            <span>
              <CalendarTodayIcon />
            </span>
            <span>Calendar</span>
          </div>
          <div>
            <span>
              <QuizIcon />
            </span>
            <span>Test</span>
          </div>
          <div>
            <span>
              <AssignmentIcon />
            </span>
            <span>Assignment</span>
          </div>
          <div>
            <span>
              <HelpIcon />
            </span>
            <span>Help</span>
          </div>
          <div>
            <span>
              <LogoutIcon />
            </span>
            <span>Logout</span>
          </div>
        </div>
      </div>
      <div style={{ width: "80%" }}>
        <div>
          <TopBar />
        </div>
        <div
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <h1>Calendar</h1>
          <div>
            <h1>
              <input type="radio" name="todo" id="todo" />
              <label htmlFor="todo">To-do-List</label>
            </h1>
          </div>
          <div>
            <h1>
              <input type="radio" name="attendance" id="attendance" />
              <label htmlFor="attendance">Attendance</label>
            </h1>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "auto",
            background: "#000000",
            display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            // paddingBottom: "40px",
          }}
        >
          <div>
            <Calendar />
            <CalendarSide />
          </div>
          <MainCalendar />
        </div>
      </div>
    </div>
  );
}

export default App;
