import { Route } from "react-router-dom";
import CampaignForm from "../components/dashboard/global-campaign/campaign-form";
import CampaignIndex from "../components/dashboard/global-campaign/campaign-index";
import CreateCampaign from "../components/dashboard/global-campaign/create-campaign";
import CampaignReview from "../components/dashboard/global-campaign/review-campaign";
import { app_routes } from "./routes";

const CampaignRouter = () => {
  return (
    <>
      <Route
        path={app_routes.Dashboard.campaign.create_index}
        element={<CampaignIndex />}
      />
      <Route
        path={app_routes.Dashboard.campaign.create_setup}
        element={<CreateCampaign />}
      />
      <Route
        path={app_routes.Dashboard.campaign.create_form}
        element={<CampaignForm />}
      />
      <Route
        path={app_routes.Dashboard.campaign.create_review}
        element={<CampaignReview />}
      />
    </>
  );
};
export default CampaignRouter;
