import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import styles from "./index.module.scss";
import AIImg from "../../images/logo.png";

import lockImg from "../../images/lock.svg";

function Timeline() {
  return (
    <div className={styles.timeLineWrapper}>
      <VerticalTimeline lineColor="#000000">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconClassName={"Mybefore"}
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // contentArrowStyle={{ borderRight: "35px solid  #fdd800" }}
          iconStyle={{
            width: "58px",
            height: "58px",
            display: "grid",
            placeItems: "center",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#fff",
            border: "4px solid #FDD800",
            boxShadow: "none",
          }}
          icon="01"
        >
          <div className={styles.timeLineItemWrapper}>
            <div className={styles.left}>
              <h3 className="vertical-timeline-element-title">
                We protect your idea
              </h3>
              <p>
                We start every project by signing NDA, to keep your intellectual
                wealth secure, no compromising with proprietorship on your idea.
              </p>
            </div>
            <div className={styles.right}>
              <div className={styles.iconWrapper}>
                <img src={lockImg} alt="" />
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{
            width: "58px",
            height: "58px",
            display: "grid",
            placeItems: "center",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#fff",
            border: "4px solid #FDD800",
            boxShadow: "none",
          }}
          icon="02"
        >
          <h3 className="vertical-timeline-element-title">
            In-Depth Consultation
          </h3>
          <p>
            Make us a participant in your journey trust us with your idea, your
            enterprise requirements, engage with us in deep discussions.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "35px solid  #fdd800" }}
          iconStyle={{
            width: "58px",
            height: "58px",
            display: "grid",
            placeItems: "center",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#fff",
            border: "4px solid #FDD800",
            boxShadow: "none",
          }}
          icon="03"
        >
          <h3 className="vertical-timeline-element-title">
            Planning, Analysis & prototype
          </h3>
          <p>
            We never start unprepared, ultimate analysis of market and sublime
            strategies are formulated to make a prototype of your project to
            begin with.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "35px solid  #fdd800" }}
          iconStyle={{
            width: "58px",
            height: "58px",
            display: "grid",
            placeItems: "center",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#fff",
            border: "4px solid #FDD800",
            boxShadow: "none",
          }}
          icon="04"
        >
          <h3 className="vertical-timeline-element-title">
            Design: User Interface (UI) & User Experience t(UX)
          </h3>
          <p>
            With concern to your futuristic needs, we make strikingly beautiful
            and responsive applications and websites that captures high user
            engagement.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "35px solid  #fdd800" }}
          iconStyle={{
            width: "58px",
            height: "58px",
            display: "grid",
            placeItems: "center",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#fff",
            border: "4px solid #FDD800",
            boxShadow: "none",
          }}
          icon="05"
        >
          <h3 className="vertical-timeline-element-title">
            Rapid Agile Development
          </h3>
          <p>
            With your active engagement and our experience, we manage to bring
            you highly functional apps and websites within no time.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "35px solid  #fdd800" }}
          iconStyle={{
            width: "58px",
            height: "58px",
            display: "grid",
            placeItems: "center",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#fff",
            border: "4px solid #FDD800",
            boxShadow: "none",
          }}
          icon="06"
        >
          <h3 className="vertical-timeline-element-title">
            Testing and Quality Assurance
          </h3>
          <p>
            No app and website pass by uninspected, extensive test and
            ameliorations are done to give you only the best of the best.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "35px solid  #fdd800" }}
          iconStyle={{
            width: "58px",
            height: "58px",
            display: "grid",
            placeItems: "center",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#fff",
            border: "4px solid #FDD800",
            boxShadow: "none",
          }}
          icon="07"
        >
          <h3 className="vertical-timeline-element-title">
            Deployment & Final Launch
          </h3>
          <p>
            We seamlessly launch your apps and websites by integrating it with
            advance technology, to give you unparalleled experience of
            high-rated technology.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "35px solid  #fdd800" }}
          iconStyle={{
            width: "58px",
            height: "58px",
            display: "grid",
            placeItems: "center",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#fff",
            border: "4px solid #FDD800",
            boxShadow: "none",
          }}
          icon="08"
        >
          <h3 className="vertical-timeline-element-title">
            Support & Maintenance
          </h3>
          <p>
            We work with you throughout your app cycle, we welcome your problems
            and issues and deploy an expert team to help you maintain app
            experience
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "35px solid  #fdd800" }}
          iconStyle={{
            width: "58px",
            height: "58px",
            display: "grid",
            placeItems: "center",
            fontWeight: "bold",
            color: "#333",
            backgroundColor: "#fff",
            border: "4px solid #FDD800",
            boxShadow: "none",
          }}
          icon="09"
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Growth Hacking</h4>
          <p>
            We share your load in whichever manner is possible, our outstanding
            SEO and market solutions will help you in converging your target
            market easily.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
