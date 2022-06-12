import styles from "./index.module.scss";
import { Col } from "react-bootstrap";

const QaStandardsCard = ({ number, title, para }) => {
  return (
    <Col xs={12} sm={12} md={6} lg={3}>
      <div className={styles.cardWrapper}>
        <div className={styles.tag}>
          <span>{number}</span>
        </div>
        <div className={styles.textWrapper}>
          <h5>{title}</h5>
          <p>{para}</p>
        </div>
      </div>
    </Col>
  );
};

export default QaStandardsCard;