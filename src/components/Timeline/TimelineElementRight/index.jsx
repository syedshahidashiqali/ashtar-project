import { VerticalTimelineElement } from "react-vertical-timeline-component";

const TimelineElementRight = ({ h3Text, pText, imgPath, number }) => {
  return (
    <VerticalTimelineElement
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
      icon={number}
    >
      <div className="timeLineItemWrapper">
        <div className="left">
          <div className="iconWrapper">
            {imgPath != undefined && <img src={imgPath} alt="" />}
          </div>
        </div>
        <div className="right">
          <h3 className="vertical-timeline-element-title">
            {h3Text}
          </h3>
          <p>
            {pText}
          </p>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default TimelineElementRight;