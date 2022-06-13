import styles from "./index.module.scss";
import { Col } from "react-bootstrap";

const ThinkUniqueCard = ({ number, text }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardBoxCircle}>
        <span>{number}</span>
      </div>
      <div className={styles.cardTextWrapper}>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default ThinkUniqueCard;
