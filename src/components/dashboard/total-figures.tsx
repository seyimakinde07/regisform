import React, { useState } from "react";
import { FaAngleDown, FaSortDown, FaSortUp } from "react-icons/fa";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import { FiguresOfData } from "../../mockData/MockData";

let percentage = 26.6;

const TotalFigures = () => {
  const [percentage, setpercentage] = useState(<FaAngleDown />);

  return (
    <div className="figure-boxes d-grid w-100">
      <div className="d-flex flex-column justify-content-center box total-campaign">
        <p className="value">{FiguresOfData.campaignTotal}</p>
        <h2 className="title">Total Campaigns</h2>
      </div>

      <div className="d-flex flex-column justify-content-center box emails-sent">
        <div className="percent d-flex">
          <p className="value">{FiguresOfData.totalEmailSent}</p>

          <div className="rates increase">
            <small className="d-flex align-items-center gap-1">
              <BiCaretUp />
              <span>2.5%</span>
            </small>
          </div>
        </div>

        <h2 className="title">Emails Sent</h2>
      </div>

      <div className="d-flex flex-column justify-content-center box open-rate">
        <div className="percent d-flex">
          <p className="value">{FiguresOfData.rateAmount}</p>

          <div className="rates decrease">
            <small className="d-flex align-items-center gap-1">
              <BiCaretDown />
              <span>-0.09%</span>
            </small>
          </div>
        </div>

        <h2 className="title">Open Rate</h2>
      </div>

      <div className="d-flex flex-column justify-content-center box active-subscribers">
        <div className="percent d-flex">
          <p className="value">{FiguresOfData.totalActiveSubscribers}</p>

          <div className="rates increase">
            <small className="d-flex align-items-center">
              <BiCaretUp />
              <span>4%</span>
            </small>
          </div>
        </div>

        <h2 className="title">Active Subscribers</h2>
      </div>
    </div>
  );
};

export default TotalFigures;
