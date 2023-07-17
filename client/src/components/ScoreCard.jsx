import React from "react";
import "./ScoreCard.scss";

const ScoreCard = ({ type, value }) => {
  return (
    <div id="score-card" className="score-card pa-1">
      <div className="display-1 text-weight-medium">{value}</div>
      <div className="display-small text-weight-semibold text-primary text-lighten-10">
        {type}
      </div>
    </div>
  );
};

export default ScoreCard;
