import styles from "./index.module.scss";
import { Col } from "react-bootstrap";

const QaDepartmentCard = ({ icon, text }) => {
  return (
    <Col xs={12} sm={12} md={6} lg={4} className={styles.qaDepartmentCardCol}>
      <div className={styles.cardWrapper}>
        <img className="img-fluid" src={icon} alt="icon" />
        <h6>{text}</h6>
      </div>
    </Col>
  );
};

export default QaDepartmentCard;