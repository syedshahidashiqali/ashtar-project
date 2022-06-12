import styles from "./index.module.scss";
import { Col } from "react-bootstrap";

const ServiceSummaryCard = ({ title, para, icon, iconWidth, iconHeight }) => {
  return (
    <Col xs={12} sm={12} md={6} lg={3}>
      <div className={styles.serviceSummaryCardWrapper}>
        <div className={styles.imgWrapper}>
          <img
            // style={{ width: iconWidth, height: iconHeight }}
            src={icon}
            alt="icon"
          />
        </div>
        <div className={styles.textWrapper}>
          <h3>{title}</h3>
          <p>{para}</p>
        </div>
      </div>
    </Col>
  );
};

export default ServiceSummaryCard;