import { VerticalTimeline } from "react-vertical-timeline-component";
import "./index.scss";
import lockImg from "../../images/lock.svg";
import inDepthImg from "../../images/in-depth.svg";
import planningImg from "../../images/planning.svg";
import designImg from "../../images/design.svg";
import agileImg from "../../images/agile.svg";
import deploymentImg from "../../images/deployment.svg";
import supportImg from "../../images/support.svg";
import growthImg from "../../images/growth.svg";

import TimelineElementLeft from "./TimelineElementLeft";
import TimelineElementRight from "./TimelineElementRight";

function Timeline() {
  return (
    <div className="timeLineWrapper">
      <VerticalTimeline lineColor="#000000" className="verticalTimelineMain">
        <TimelineElementLeft
          number="01"
          h3Text="We protect your idea"
          pText="We start every project by signing NDA, to keep your intellectual
          wealth secure, no compromising with proprietorship on your idea."
          imgPath={lockImg}
        />
        <TimelineElementRight
          number="02"
          h3Text="In-Depth Consultation"
          pText="Make us a participant in your journey trust us with your idea, your
          enterprise requirements, engage with us in deep discussions."
          imgPath={inDepthImg}
        />
        <TimelineElementLeft
          number="03"
          h3Text="Planning, Analysis & prototype"
          pText="We never start unprepared, ultimate analysis of market and sublime
          strategies are formulated to make a prototype of your project to
          begin with."
          imgPath={planningImg}
        />
        <TimelineElementRight
          number="04"
          h3Text="Design: User Interface (UI) & User Experience t(UX)"
          pText="With concern to your futuristic needs, we make strikingly beautiful
          and responsive applications and websites that captures high user
          engagement."
          imgPath={designImg}
        />
        <TimelineElementLeft
          number="05"
          h3Text="Rapid Agile Development"
          pText="With your active engagement and our experience, we manage 
          to bring you highly functional apps and websites within no time."
          imgPath={agileImg}
        />
        <TimelineElementRight
          number="06"
          h3Text="Testing and Quality Assurance"
          pText="No app and website pass by uninspected, extensive test and 
          ameliorations are done to give you only the best of the best."
        />
        <TimelineElementLeft
          number="07"
          h3Text="Deployment & Final Launch"
          pText="We seamlessly launch your apps and websites by integrating 
          it with advance technology, to give you unparalleled experience of 
          high-rated technology."
          imgPath={deploymentImg}
        />
        <TimelineElementRight
          number="08"
          h3Text="Support & Maintenance"
          pText="We work with you throughout your app cycle, 
          we welcome your problems and issues and deploy an expert 
          team to help you maintain app experience"
          imgPath={supportImg}
        />
        <TimelineElementLeft
          number="9"
          h3Text="Growth Hacking"
          pText="We share your load in whichever manner is possible, 
          our outstanding SEO and market solutions will help you in 
          converging your target market easily."
          imgPath={growthImg}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
