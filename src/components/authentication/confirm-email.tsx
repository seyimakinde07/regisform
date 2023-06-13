import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap"
import AuthContainer from "./auth-container"
import './auth.css'
import HodLogo from "../layout/hod-logo"
import { MdOutlineEmail } from "react-icons/md";
import { app_purple } from "../layout/tools/colors";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { app_routes } from "../../router/routes";




export const ConfirmEmail = () => {
    const navigate = useNavigate();
    const locations = useLocation();
    const queryParams = new URLSearchParams(locations.search);
    const email = queryParams.get("email");
    const [emailTo, setEmailTo] = useState<string>('hodemail@gmail.com');

    useEffect(() => {
        email && setEmailTo(email);
    }, []);

    return (
        <>
            <AuthContainer>
                <Col md={6} className="auth-content my-auto py-4">
                    <Row className="mb-4 mb-md-5 justify-content-center">
                        <Col sm={12} className="header-logo text-center">
                            <HodLogo
                                width="105px"
                                height="auto"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="email-sent-wrapper d-flex flex-column align-items-center justify-content-center w-100 mx-auto px-2 px-md-4">
                                <div className="position-relative text-center mb-3">
                                    <MdOutlineEmail size={80} color={app_purple} />

                                    <div className="unread position-absolute d-flex justify-content-center align-items-center bg-white rounded-circle">
                                        <span className="circle rounded-circle"></span>
                                    </div>
                                </div>

                                <div className="header-section text-center">
                                    <h1 className="welcome-header hod-header-color text-center mb-3">Email Sent!</h1>
                                    <p className="hod-text-color mb-0">We have sent a message to {emailTo} with a magic link to sign in to account</p>
                                </div>

                                <div className="text-center">
                                    <p className="hod-text-color mb-2">Didn't get an email? Check your "spam folder"</p>
                                    <Link to={app_routes.authentication.sign_in} className="link-primary">Re-enter your email and try again</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col md={6} className="img-section confirm-email"></Col>
            </AuthContainer >
        </>
    )
}
