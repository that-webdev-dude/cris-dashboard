import React from "react";
import "./Dashboard.scss";
import { InfoChart, InfoCard, ScoreCard, ChartLine } from "../components";

const Dashboard = ({ data }) => {
  return (
    <div className="dashboard text-grey-1 text-weight-medium">
      <div className="dashboard-stats">
        <div className="dashboard-stats-scores">
          <ScoreCard type="Loyalty" value={data[0].feedback.loyalty} />
          <ScoreCard type="Technical" value={data[0].feedback.technical} />
          <ScoreCard type="Service" value={data[0].feedback.service} />
          <ScoreCard type="NPS" value={data[0].feedback.NPS} />
        </div>

        <div className="dashboard-stats-line">
          <div className="dashboard-stats-line-title">Score History</div>
          <ChartLine />
        </div>
      </div>
      <div className="dashboard-summary tertiary">
        <InfoCard data={data} />
        <InfoChart data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
