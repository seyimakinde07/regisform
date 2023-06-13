
export const app_routes = {
  index: "/",
  authentication: {
    sign_in: "/sign-in",
    confirm_email: "/confirm-email",
    verification: "/verification",
    form:"/form",
  },
  Dashboard: {
    index: "/dashboard",
    campaign: {
      create_index: "/dashboard/campaign-index",
      create_form: "/dashboard/form-campaign",
      create_setup: "/dashboard/create-campaign",
      create_review: "/dashboard/review-campaign",
      create_sms: "/dashboard/create-sms"
    },
    audience: {
      create_index: "/dashboard/audience-index",
    },
    template: {
      create_index: "/dashboard/template-index",
    }
  },

};