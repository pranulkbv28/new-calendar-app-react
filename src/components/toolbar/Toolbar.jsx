/* eslint-disable react/prop-types */
// Toolbar.jsx
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./toolbar.module.css";

const Toolbar = (props) => {
  return (
    <div>
      <div className={styles.toolbarContainer}>
        <button onClick={props.todayHandler} className={styles.todayButton}>
          Today
        </button>
        <div className={styles.buttonContainer}>
          <button onClick={props.prevHandler} className={styles.iconBtn}>
            <ChevronLeftIcon />
          </button>
          <button onClick={props.nextHandler} className={styles.iconBtn}>
            <ChevronRightIcon />
          </button>
        </div>
        <div className={styles.dateContainer}>
          <span>{props.currMonth}</span>,<span> {props.currYear}</span>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
