import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import qaTestingImg from "../../images/profound-qa-testing.svg";
import docAndCodeRevImg from "../../images/documentation-code-review.svg";
import detectImg from "../../images/detect-monitoring.svg";
import configureImg from "../../images/configure-update.svg";
import processImg from "../../images/process-progress.svg";
import riskImg from "../../images/risk-handling.svg";
import QaStackDepartmentCard from "./QaDepartmentCard";

const DevStackQaDepartment = () => {
  return (
    <div className={styles.qaDeptWrapper}>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={styles.textWrapper}>
              <SectionHeading text="Devstack QA Department" />
              <p>
                We are reserved with an extraordinary division that is truly meant
                for processing thetesting in the right way. Our team of astute and
                skilled engineers’ works dedicatedly on the assigned projects order
                to bring the best out of it, Depending on the project's complexity,
                we deploy our team that can be shifted to other in case of urgency:
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <QaStackDepartmentCard
            text="Profound QA Testing"
            icon={qaTestingImg}
          />
          <QaStackDepartmentCard
            text="Documentation and code review"
            icon={docAndCodeRevImg}
          />
          <QaStackDepartmentCard
            text="Defect monitoring, tracking, and fixation"
            icon={detectImg}
          />
        </Row>
        <Row className="mt-5">
          <QaStackDepartmentCard
            text="Configuration update and management"
            icon={configureImg}
          />
          <QaStackDepartmentCard
            text="Process and progress management"
            icon={processImg}
          />
          <QaStackDepartmentCard
            text="Risk handling"
            icon={riskImg}
          />
        </Row>
      </Container>
    </div>
  );
};

export default DevStackQaDepartment;