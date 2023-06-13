import { Form, Dropdown } from "react-bootstrap"
import HodButton from "../../layout/hod-button";
import './global-campaign.css'
import { useEffect, useState } from "react";
import CampaignList from "./campaign-list";
import { app_routes } from "../../../router/routes";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getCampaigns } from "../../../store/actions/campaign-cactions";
import { RiFilterLine, RiSearchLine } from "react-icons/ri";

const CampaignIndex = (props: any) => {
    const navigate = useNavigate();
    // const [campaignList, setCampaignList] = useState<any[]>([]);

    const goToCreateCampaign = () => {
        navigate(app_routes.Dashboard.campaign.create_setup);
    };

    useEffect(() => {
        props.getCampaign();
    }, []);

    console.log('campaign list', props.campaign.campaignList);


    return (
        <>
            <div className="campaign_container w-100 h-100">
                <section className={`${props.campaign.campaignList.length <= 0 ? "" : "justify-content-center justify-content-md-between"} campaign-header d-flex`}>
                    <div>
                        <h1 className="header-title">Campaign</h1>
                    </div>


                    <div className={`${props.campaign.campaignList.length <= 0 ? "d-none" : "d-none d-md-flex"} gap-3 gap-xl-4`}>
                        {props.campaign.campaignList.length > 0 && (
                            <div className="d-flex gap-3 gap-xl-4 me-md-2">
                                <div className="search-campaign">
                                    <RiSearchLine className="search-icon" />

                                    <Form.Control
                                        type="search"
                                        name="text"
                                        className="hod-input"
                                        placeholder="Search Campaign"
                                    />
                                </div>

                                <Dropdown className="filter-campaign">
                                    <Dropdown.Toggle
                                        variant="outline"
                                        className="d-flex justify-content-center align-items-center"
                                    >
                                        <RiFilterLine /> Filter
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as="button">Action</Dropdown.Item>
                                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        )}

                        <div className="d-none d-md-flex">
                            <HodButton
                                title="Create Campaign"
                                onClick={goToCreateCampaign}
                            />
                        </div>
                    </div>
                </section>

                <section className="campaign_list h-100">
                    {
                        props.campaign.campaignList.length > 0 ? (
                            <CampaignList list={props.campaign.campaignList} />
                        ) :
                            (
                                <div className="create_campaign_btn h-100 d-flex align-items-center justify-content-center flex-column text-center">
                                    <h2>No Campaigns</h2>
                                    <p>Create a new email SMS campaign</p>

                                    <div className="mt-4">
                                        <HodButton
                                            title="Create Campaign"
                                            onClick={goToCreateCampaign}
                                        />
                                    </div>
                                </div>
                            )
                    }
                </section>
            </div>
        </>
    )

}
function mapStateToProps(state: any) {
    return {
        campaign: state.campaign,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        getCampaign: () => getCampaigns()(dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CampaignIndex);