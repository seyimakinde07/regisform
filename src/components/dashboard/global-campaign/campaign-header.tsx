import { useEffect, useState } from "react";
import { RxCaretRight } from "react-icons/rx"
import { useLocation } from "react-router-dom";

const CampaignHeader = () => {
    let location = useLocation();

    const [activeStep, setActiveStep] = useState({
        isRecipientConfigured: true,
        isFormValid: true,
        canProceed: true
    });

    useEffect(() => {
        if (location?.pathname === "/dashboard/create-campaign") {
            setActiveStep({
                ...activeStep,
                isFormValid: false,
                canProceed: false
            });
        }

        if (location?.pathname === "/dashboard/form-campaign") {
            setActiveStep({
                ...activeStep,
                canProceed: false
            });
        }
    }, [location]);

    return (
        <section className="campaign-header d-flex">
            <h1 className="header-title d-flex align-items-center">
                <span>Campaign</span>
                <RxCaretRight className="icon" />
                <span className="new-campaign">New Campaign 1</span>
            </h1>

            <div className="step-container d-flex">
                <div className={activeStep.isRecipientConfigured ? "active-step step" : "step"}>
                    <div className="step-number d-flex justify-content-center align-items-center mx-auto">1</div>
                    <div className="step-title">Configure Recipients</div>
                </div>

                <div className={activeStep.isFormValid ? "active-step step" : "step"}>
                    <div className="step-number d-flex justify-content-center align-items-center mx-auto">2</div>
                    <div className="step-title">Email Content Creation</div>
                </div>

                <div className={activeStep.canProceed ? "active-step step" : "step"}>
                    <div className="step-number d-flex justify-content-center align-items-center mx-auto">3</div>
                    <div className="step-title">Review</div>
                </div>
            </div>
        </section>
    )
}

export default CampaignHeader
