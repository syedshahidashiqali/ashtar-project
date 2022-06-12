import "./index.scss";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import comprehensiveImg from "../../images/comprehensive-approach.svg";

const ComprehensiveApproach = () => {
  return (
    <div className="comprehensiveApproachWrapper">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SectionHeading text="Comprehensive Approach To Quality" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={8} lg={8}>
            <div className="comprehensiveTabWrapper">
              <Tabs defaultActiveKey="control" className="my-5">
                <Tab eventKey="planning" title="Planning" disabled>
                  Hello home
                </Tab>
                <Tab eventKey="assurance" title="Assurance" disabled>
                  Hello profile
                </Tab>
                <Tab eventKey="control" title="Control">
                  <div className="tabItemWrapper">
                    <h3>Quality Control</h3>
                    <p>
                      In order to test the code and to monitor its consistency,
                      we stick to the remarkable performance standards that are
                      sound on the grounds of quality and excellence.
                    </p>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="comprehensiveImgWrapper">
              <img className="img-fluid" src={comprehensiveImg} alt="comprehensive approach" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ComprehensiveApproach;