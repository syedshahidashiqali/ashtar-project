import styles from "./index.module.scss";
import { Col } from "react-bootstrap";

const RecommendStaffCard = ({ title, para, icon }) => {
  return (
    <Col xs={12} sm={12} md={6} lg={6} className={styles.recommendStaffCardCol}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardTextWrapper}>
          <h6>{title}</h6>
          <p>{para}</p>
        </div>
        <div className={styles.cardImgWrapper}>
          <img src={icon} alt="" />
        </div>
      </div>
    </Col>
  );
};

export default RecommendStaffCard;
