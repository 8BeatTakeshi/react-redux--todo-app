import styles from "./Clock.module.css";
import useDate from "../../hooks/useDate";

const Clock = () => {
  const currentDate = useDate();
  return (
    <div className={styles.clock}>
      <div className={styles.left}>
        <p className={styles.day}>{currentDate.day}</p>
        <div className={styles.left_right}>
          <p className={styles.day_number}>{currentDate.dayNum}</p>
          <div>
            <p className={styles.month}>{currentDate.month}</p>
            <p className={styles.year}>{currentDate.year}</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.time}>
          <div className={styles.time_top}>
            <p className={styles.hours}>{currentDate.hours}</p>:
            <p className={styles.minutes}>{currentDate.minutes}</p>
          </div>
          <p className={styles.seconds}>{currentDate.seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default Clock;
