import { FaEllipsisV } from "react-icons/fa";
import { listOfEmail } from "../../mockData/MockData";

import { NumberOfType } from "../../mockData/MockData";

const EmailList = () => {
  return (
    <div>
      <div className="lowerDashboard">
        <div className="tableColumn">
          <table className="table emailTable table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
                <th scope="col">No.of Clicks</th>
                <th scope="col">Open Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {listOfEmail.map((emails, idx) => {
                return (
                  <tr key={idx}>
                    <td>{emails.title}</td>
                    <td>{emails.date}</td>
                    <td>{emails.clicks}</td>
                    <td>{emails.rate}</td>
                    <td>
                      <FaEllipsisV />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="campaignType">
          <div className="campaignType-header ">
            <p>Campaign Type</p>
            <FaEllipsisV />
          </div>
          <div>
            <span className="emails">{NumberOfType.emailCount} Emails</span>
            <span className="sms">{NumberOfType.smsCount} SMS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailList;
