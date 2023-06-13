import { useEffect, useState } from "react";
import { FaReplyAll, FaUsers } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { app_routes } from "../../../router/routes";
import CampaignHeader from "./campaign-header";
import NextButton from "./next-button";

const RecipientCount = 455;

const CampaignReview = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [visible, setVisible] = useState(false);
  const [canProceed, setCanProceed] = useState(false);

  const goToCampaignForm = () => {
    let reviewObj;

    if (canProceed) {
      reviewObj = {
        content: content,
      };
    }

    localStorage.setItem("reviewObj", JSON.stringify(reviewObj));

    navigate(app_routes.Dashboard.campaign.create_review);
  };

  useEffect(() => {
    setCanProceed(false);

    if (content) {
      // if (visible && (||)) {
      //   setCanProceed(true);
      // } else {
      //   setCanProceed(false);
      // }
      setCanProceed(true);
    } else {
      setCanProceed(false);
    }

  }, [content, canProceed]);

  return (
    <>
      <CampaignHeader />

      <section className="review-campaign-view mx-auto d-flex flex-column align-items-center">
        <h2 className="title">Review you Campaign</h2>

        <div className="review-tabs w-100 d-flex flex-column">
          <div className="recipient-tab tab d-flex">
            <div className="info d-flex gap-3">
              <span className="icon d-flex justify-content-center align-items-center">
                <FaUsers />
              </span>

              <div>
                <p className="tab-name">Recipients ({RecipientCount})</p>
                <small>River of Life, Audio Unit and Media Unit</small>
              </div>
            </div>

            <div className="edit-button">
              <button
                className="button d-flex justify-content-center align-items-center"
                onClick={() => navigate(app_routes.Dashboard.campaign.create_setup)}
              >
                Edit Recipient
              </button>
            </div>
          </div>

          <div className="content-tab tab d-flex">
            <div className="info d-flex gap-3">
              <span className="icon d-flex justify-content-center align-items-center">
                <RiProfileLine />
              </span>

              <div>
                <p className="tab-name">Content</p>
                <small>Invitation to Workers' Meeting</small>
              </div>
            </div>

            <div className="edit-button">
              <button
                className="button d-flex justify-content-center align-items-center"
                onClick={() => navigate(app_routes.Dashboard.campaign.create_form)}
              >
                Edit Content
              </button>
            </div>
          </div>

          <div className="address-tab tab d-flex">
            <div className="info d-flex gap-3">
              <span className="icon d-flex justify-content-center align-items-center">
                <FaReplyAll />
              </span>

              <div>
                <p className="tab-name">From &amp; Replies</p>
                <small>From hod@gmail.com, reply to hod@gmail.com</small>
              </div>
            </div>

            <div className="edit-button">
              <button
                className="button d-flex justify-content-center align-items-center"
                onClick={() => navigate(app_routes.Dashboard.campaign.create_form)}
              >
                Edit Address
              </button>
            </div>
          </div>
        </div>

        <div className="choice-tab">
          <div className="radio-section">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sendCampaignRadioButton"
                id="sendImmediately"
                onClick={() => setVisible(false)}
              />

              <label className="form-check-label" htmlFor="sendImmediately">
                I want to send campaign immediately
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sendCampaignRadioButton"
                id="sendLater"
                onClick={() => setVisible(true)}
              />

              <label className="form-check-label" htmlFor="sendLater">
                I want to schedule campaign for later
              </label>
            </div>
          </div>

          {visible && (
            <div className="date-time-section">
              <div className="form-group date-time d-flex flex-column">
                <label htmlFor="dateInput">Select Date:</label>
                <input type="date" id="dateInput" name="date-select" />
              </div>

              <div className="form-group date-time d-flex flex-column">
                <label htmlFor="timeInput">Select Time:</label>
                <input type="time" id="timeInput" name="time-select"></input>
              </div>
            </div>
          )}
        </div>

        <NextButton
          buttonText="Proceed Now"
          containerWidth="100%"
          isDisabled={!canProceed}
          goToNextPage={goToCampaignForm}
        />
      </section>
    </>
  );
};

export default CampaignReview;
