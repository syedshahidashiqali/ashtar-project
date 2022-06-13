import "./index.scss";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import projectImg from "../../images/project-base-pricing.svg";

const RecommendDevStack = () => {
  return (
    <div className="recommendDevStackWrapper">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SectionHeading text="Why we recommend Devstack?" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="recommendTabWrapper">
              <Tabs defaultActiveKey="pricing" className="my-5">
                <Tab eventKey="pricing" title="Project Based Pricing">
                  <div className="tabItemWrapper">
                    <Row>
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="imgWrapper">
                          <img src={projectImg} alt="" className="img-fluid" />
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="textWrapper">
                          <h3>Project Based Pricing or Fixed Bid</h3>
                          <p>
                            Where there is great clarity in the development
                            requirement this is something for you, here you can
                            choose between different models, with pre-decided
                            number of hours a developer is going to dedicate on
                            your project, time-limit and cost of the
                            development.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab>
                <Tab
                  eventKey="dedicated"
                  title="Dedicated Development"
                  disabled
                >
                  Dedicated Development
                </Tab>
                <Tab eventKey="milestone" title="Milestone-based" disabled>
                  Milestone-based
                </Tab>
                <Tab eventKey="effort" title="Effort Based Pricing" disabled>
                  Effort Based Pricing
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecommendDevStack;
