import TopOverview from "../layout/top-overview";
import EmailList from "./email-list";
import GlobalCampaign from "./global-campaign";
import TotalFigures from "./total-figures";

export function DashComponents() {
  return (
    <div className="dashboard-overview">
      <TopOverview />

      <div className="overview-content d-flex flex-column w-100">
        <TotalFigures />
        <GlobalCampaign />
        <EmailList />
      </div>
    </div>
  );
}
