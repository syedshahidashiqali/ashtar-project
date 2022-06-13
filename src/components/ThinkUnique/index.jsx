import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import ThinkUniqueCard from "./ThinkUniqueCard";

const ThinkUnique = () => {
  return (
    <div className={styles.thinkUniqueWrapper}>
      <Container>
        <Row className="mb-5">
          <Col xs={12} sm={12} md={12} lg={12}>
            <SectionHeading text="Think Unique? Then why settle for Generic?" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={styles.cardMainWrapper}>
              <ThinkUniqueCard number="01" text="Cost-Effective Pricing" />
              <ThinkUniqueCard number="02" text="Flexible Billing Plans" />
              <ThinkUniqueCard number="03" text="Dedicated Development" />
              <ThinkUniqueCard number="04" text="Build-Operate Transfer (BOT) Model" />
              <ThinkUniqueCard number="05" text="Project Based Pricing or Fixed Bid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThinkUnique;
