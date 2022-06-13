import styles from "./index.module.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import RecommendStaffCard from "./RecommendStaffCard";
import costEffectiveImg from "../../images/cost-effective.svg";
import directAccessImg from "../../images/direct-access.svg";
import timeEffImg from "../../images/time-efficient.svg";
import ipProtectionImg from "../../images/ip-protection.svg";

const RecommendStaff = () => {
  return (
    <div className={styles.recommendStaffWrapper}>
      <Container>
        <Row className="mb-5">
          <Col xs={12} sm={12} md={12} lg={12}>
            <SectionHeading text="Why we recommend Staff Augmentation ?" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4}>
            <div className={styles.textWrapper}>
              <p>
                Looking at all the staff augmentation benefits we recommend you
                it for your enterprise benefits. It allows you to successfully
                evaluate your enterprise potential by analysing your staff and
                resources which enables you to work on additional skills and
                training and acquiring benefits.
              </p>
              <p>
                Specially if you have just started out or a Small or mid-sized
                enterprise, you would not voluntarily participate into the
                process of staffing, hiring, providing employment benefits and
                taxes etc. Thus, we at Dev Technosys, keeping in mind all these
                things recommend you staff augmentation from which you will not
                only dough the problems but will be efficient enough to see to
                your technical and business needs.
              </p>
              <Button>Get Free Consultation Now</Button>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={8}>
            <div className={styles.cardWrapperMain}>
              <Row>
                <RecommendStaffCard
                  title="Cost Effectiveness"
                  para="Not to mention the other perks, this alone is a great reason you
                  should switch to staff augmentation, if a start-up or a SME you will
                  be able to save a fortune."
                  icon={costEffectiveImg}
                />
                <RecommendStaffCard
                  title="Direct Access"
                  para="You will have complete freedom to involve in the development 
                  process right from initiation to accomplishment. We always welcome 
                  suggestions from the clients to make the product impactfuls."
                  icon={directAccessImg}
                />
                <RecommendStaffCard
                  title="Time Efficient"
                  para="Not to mention the other perks, 
                  this alone is a great reason you 
                  should switch to staff augmentation, if a start-up or a SME you will be 
                  able to save a fortune."
                  icon={timeEffImg}
                />
                <RecommendStaffCard
                  title="IP Protection"
                  para="Complete protection and confidentiality is maintained, you don’t 
                  lose your ownership on the intellectual property and copyrights on the 
                  projects. we strictly maintain our work ethics."
                  icon={ipProtectionImg}
                />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecommendStaff;
