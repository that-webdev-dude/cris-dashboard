import React from "react";
import { RiStarFill, RiPushpin2Line } from "react-icons/ri";
import "./InfoCard.scss";

const InfoCard = ({ data }) => {
  return (
    <div id="info-card" className="info-card text-white pa-2">
      <div className="info-card-header mb-3">
        <div className="info-card-header-rank">
          <RiStarFill size="1.5rem" />
          <small className="mx-1">{data[0].client.rank}</small>
        </div>
        <div className="info-card-header-bookmark">
          <button className="transparent text-white">
            <RiPushpin2Line size="1.25rem" />
          </button>
        </div>
      </div>

      <div className="info-card-content mb-2">
        <div className="display-2">{data[0].client.name}</div>
        <div className="text-weight-regular">
          <span className="text-small text-primary text-lighten-30 text-weight-medium">
            {data[0].client.business} - {data[0].client.HQ}
          </span>
        </div>
      </div>

      <div className="info-card-footer">
        <dir>
          <small className="text-primary text-lighten-30 text-weight-medium">
            Centers
          </small>
          <div>{data[0].client.centers}</div>
        </dir>
        <dir className="text-align-right">
          <small className="text-primary text-lighten-30 text-weight-medium">
            Period
          </small>
          <div>
            {data[0].client.period[0]} - {data[0].client.period[1]}
          </div>
        </dir>
      </div>
    </div>
  );
};

export default InfoCard;
