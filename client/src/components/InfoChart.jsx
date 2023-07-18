import React from "react";
import { ChartBar } from "./index";
import { RiLeafLine, RiRefreshLine, RiDownloadLine } from "react-icons/ri";
import "./InfoChart.scss";

const InfoStat = ({
  title,
  value,
  card = false,
  cardColor = "black",
  IconRef = null,
  IconSize = "1rem",
}) => {
  return (
    <div className="info-stat">
      {card && IconRef ? (
        <div className={`info-stat-card ${cardColor} text-white`}>
          <IconRef size={IconSize} />
        </div>
      ) : (
        <></>
      )}
      <div className="info-stat-content">
        <span className="text-small text-grey-2 text-weight-medium">
          {title}
        </span>
        <div className="display-3 text-grey-1 text-weight-bold">{value}</div>
      </div>
    </div>
  );
};

const InfoChart = ({ data }) => {
  const { projects } = data[0];
  return (
    <div className="info-chart">
      <div className="info-chart-title">
        <InfoStat
          title={"Total Projects"}
          value={projects.completed + projects.ongoing} // change dataset
        />
        <button className="info-chart-button">
          <RiDownloadLine />
        </button>
      </div>
      <div className="info-chart-area">
        <ChartBar data={data} />
      </div>
      <div className="info-chart-footer">
        <InfoStat
          title={"Completed"}
          value={projects.completed}
          card={true}
          cardColor="secondary"
          IconRef={RiLeafLine}
          IconSize="1.5rem"
        />
        <InfoStat
          title={"Ongoing"}
          value={projects.ongoing}
          card={true}
          cardColor="primary"
          IconRef={RiRefreshLine}
          IconSize="1.5rem"
        />
      </div>
    </div>
  );
};

export default InfoChart;
