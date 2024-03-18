// import React from 'react';
import { Avatar } from "@mui/material";
import styles from "./topbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const TopBar = () => {
  return (
    <div className={styles.body}>
      <div className={styles.inputContainer}>
        <input
          placeholder="Search all important reqirements"
          type="text"
          name=""
          id=""
        />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className={styles.iconConatiner}>
        <ChatBubbleIcon />
        <CalendarTodayIcon />
        <NotificationsNoneIcon />
      </div>
      <div>
        <Avatar />
      </div>
    </div>
  );
};

export default TopBar;
