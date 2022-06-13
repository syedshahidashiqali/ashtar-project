import { useEffect, useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const TimelineElementLeft = ({ h3Text, pText, imgPath, number }) => {
  const [width, setWidth] = useState(document.body.clientWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(document.body.clientWidth);
    });
  }, [width]);
  console.log(width);
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
        {width <= 1169 ? (
          <>
            <div className="left">
              <div className="iconWrapper">
                {imgPath != undefined && <img src={imgPath} alt="" />}
              </div>
            </div>
            <div className="right">
              <h3 className="vertical-timeline-element-title">{h3Text}</h3>
              <p>{pText}</p>
            </div>
          </>
        ) : (
          <>
            <div className="left d-flex fd-c justify-content-end">
              <h3 className="vertical-timeline-element-title">{h3Text}</h3>
              <p>{pText}</p>
            </div>
            <div className="right">
              <div className="iconWrapper">
                {imgPath != undefined && <img src={imgPath} alt="" />}
              </div>
            </div>
          </>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

export default TimelineElementLeft;
