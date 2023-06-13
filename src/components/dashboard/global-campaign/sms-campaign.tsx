import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFilter, FaSearch } from "react-icons/fa";
import { SMSList } from "../../../mockData/MockData";

const CampaignSMS = () => {
  return (
    <div>
      <Col className="mx-4">
        <Row className="my-4">
          <div className="flex justify-between">
            <div className="container flex">
              <div className="relative border flex items-center rounded-sm mr-6">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search Campaign"
                  className="..."
                />
              </div>

              <button
                className="btn border d-inline-flex items-center"
                type="submit"
              >
                <FaFilter /> &nbsp; Filter
              </button>
            </div>

            <div className="dropdown d-inline-flex">
              <p>Sort by</p>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Last modified</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </Row>
        <Row>
          <div className="table-responsive border rounded m-4">
            <table className="table ">
              <thead className="table-light">
                <tr>
                  <th className="col">Name</th>
                  <th className="col">Date</th>
                  <th className="col">Delivered</th>
                  <th className="col">Open Rate</th>
                  <th className="col">Clicked</th>
                  <th className="col">Status</th>
                </tr>
              </thead>
              <tbody className="table-borderless">
                {SMSList.map((sms, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{sms.Name}</td>
                      <td>{sms.Date}</td>
                      <td>{sms.Delivered}</td>
                      <td>{sms.Open_Rate}</td>
                      <td>{sms.Clicked}</td>
                      <td>{sms.Status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Row>
      </Col>
    </div>
  );
};

export default CampaignSMS;
