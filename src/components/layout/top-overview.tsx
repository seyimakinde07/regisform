// import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { app_routes } from "../../router/routes";
import HodButton from "./hod-button";

const TopOverview = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ] as const;

  const navigate = useNavigate();
  // const [campaignList, setCampaignList] = useState<any[]>([]);

  const goToCreateCampaign = () => {
    navigate(app_routes.Dashboard.campaign.create_setup);
  };

  return (
    <section className="campaign_container">
      <div className="campaign-header d-flex justify-content-start justify-content-md-between campaign-header">
        <div>
          <h1 className="header-title mb-0">Overview</h1>
          <p className="user-name mb-0">Hello! Name</p>
        </div>

        <div className="dropdown_Button">
          <div className="dropdown">
            <button className="dropBtn">Month</button>
            <div className="dropdown-content">
              {monthNames.map((name, i) => {
                return [
                  <a href="#/" key={i}>
                    {name}
                  </a>,
                ];
              })}
            </div>
          </div>

          {/* <div className="flex items-center">
            <button className="transition ease-in-out delay-150 bg-indigo-950 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 flex items-center rounded-full bg-indigo-950 p-2 text-white  ">
              <FaPlus />
              &#160; Create Campaign
            </button>
          </div> */}

          <HodButton
            title="Create Campaign"
            onClick={goToCreateCampaign}
          />
        </div>
      </div>
    </section>
  );
};

export default TopOverview;
