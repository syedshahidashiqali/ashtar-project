import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.scss";
import SectionHeading from "../SectionHeading";
import QaStandardsCard from "./QaStandardsCard";

const QaStandards = () => {
  return (
    <div className={styles.qaStandardsWrapper}>
      <Container>
        <Row className="pb-5">
          <Col xs={12} sm={12} md={12} lg={12}>
            <SectionHeading
              text="QA Standards That Shaped The Development And Quality"
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <QaStandardsCard
            number="01"
            title="Planning and requirement analysis"
            para="We specify the project test cases along with its 
            elaboration. Teams are assigned as required."
          />
          <QaStandardsCard
            number="02"
            title="Code Review"
            para="Profound testing is being conducted at the time of 
            delivering and according to the test cases and plans is 
            refined."
          />
          <QaStandardsCard
            number="03"
            title="Immediate testing"
            para="For the just build products, we ensure to run QA 
            test for to meet with the foreseen challenges."
          />
          <QaStandardsCard
            number="04"
            title="Final verification"
            para="Testing is given a final shape and accordingly 
            is processed for deployment."
          />
        </Row>
      </Container>
    </div>
  );
};

export default QaStandards;