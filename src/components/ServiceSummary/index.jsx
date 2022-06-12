import styles from "./index.module.scss";
import { Container, Row } from "react-bootstrap";
import ServiceSummaryCard from "./ServiceSummaryCard";
import qualityImg from "../../images/quality.svg";
import speedImg from "../../images/speed.svg";
import flexibilityImg from "../../images/flexibility.svg";
import engagementImg from "../../images/engagement.svg";

const ServiceSummary = () => {
  return (
    <div className={styles.serviceSummaryWrapper}>
      <Container>
        <Row>
          <ServiceSummaryCard
            // iconWidth="75px"
            // iconHeight="98px"
            icon={qualityImg}
            title="Quality"
            para="We work on certain ethics and our development process 
            is a reflection of the same, we bring you unparalleled quality 
            stuff and highly functional websites and applications"
          />
          <ServiceSummaryCard
            // iconWidth="91px"
            // iconHeight="68px"
            icon={speedImg}
            title="Speed"
            para="We understand how important time is for our clients, 
            and we gauge our speed in accordance to it, now don’t wait 
            for your web projects and web products because we deliver you 
            before time."
          />
          <ServiceSummaryCard
            // iconWidth="101px"
            // iconHeight="102px"
            icon={flexibilityImg}
            title="Flexibility"
            para="Customise us, mould us, personalise us – in short exploit 
            our services under your terms and conditions. Now, take control of 
            your projects, and guide us with your wonderful insights as per your 
            needs."
          />
          <ServiceSummaryCard
            // iconWidth="88px"
            // iconHeight="88px"
            icon={engagementImg}
            title="Engagement"
            para="We work on certain ethics and our development process is a 
            reflection of the same, we bring you unparalleled quality stuff and 
            highly functional websites and applications"
          />
        </Row>
      </Container>
    </div>
  );
};

export default ServiceSummary;