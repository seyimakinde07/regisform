import { Route, Routes } from "react-router-dom";
import { app_routes } from "./routes";
import { DashComponents } from "../components/dashboard/dashboard-components";
import CampaignForm from "../components/dashboard/global-campaign/campaign-form";
import CampaignIndex from "../components/dashboard/global-campaign/campaign-index";
import CreateCampaign from "../components/dashboard/global-campaign/create-campaign";
import CampaignReview from "../components/dashboard/global-campaign/review-campaign";
import CampaignSMS from "../components/dashboard/global-campaign/sms-campaign";
import AudienceIndex from "../components/dashboard/global-audience/audience-index";
import TemplateIndex from "../components/dashboard/global-template/template-index";

export function DashboardRouters() {
  return (
    <Routes>
      <Route path={"/*"} element={<DashComponents />} />
      <Route path={app_routes.Dashboard.index} element={<DashComponents />} />
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
      <Route
        path={app_routes.Dashboard.campaign.create_sms}
        element={<CampaignSMS />}
      />
      <Route
        path={app_routes.Dashboard.audience.create_index}
        element={<AudienceIndex />}
      />
      <Route
        path={app_routes.Dashboard.template.create_index}
        element={<TemplateIndex />}
      />
    </Routes>
  );
}
