import { Col, Row, Form } from "react-bootstrap"
import AuthContainer from "./auth-container"
import './auth.css'
import HodLogo from "../layout/hod-logo"
import { useFormik } from 'formik';
import * as Yup from "yup";
import HodButton from "../layout/hod-button";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { verifyEmail } from "../../store/actions/auth-actions";



const SignIn = (props: any) => {
    const navigate = useNavigate();
    const validation = Yup.object().shape({
        email: Yup.string()
            .email("Please provide a valid email address")
            .required("Email address is required to login"),
    });

    const { handleChange, handleSubmit, values, setFieldValue, handleBlur, errors, touched } = useFormik({
        initialValues: {
            email: ""
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: (values) => {
            props.verifyEmail(values, navigate);
        }
    });

    // const gotoConfirmEmail = (email: string) => {
    //     navigate(app_routes.authentication.confirm_email + '?questionId=' + email)
    // }

    return (
        <>
            <AuthContainer>
                <Col md={6} className="auth-content my-auto py-4 py-md-5">
                    <Row className="header-section justify-content-center">
                        <Col sm={12} className="header-logo text-center mb-3">
                            <HodLogo
                                width="105px"
                                height="auto"
                            />
                        </Col>
                        <Col sm={12}>
                            <h1 className="welcome-header hod-header-color text-center">Welcome!</h1>
                            <p className="welcome-text hod-text-color text-center mb-0">Kindly sign in with your account</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Form className="form w-100 px-2 px-md-4">
                                <Form.Group controlId="email" className="mb-3 mb-md-4">
                                    {(touched.email && errors.email) && (
                                        <div className="d-flex">
                                            <Form.Text className="text-danger mt-0 mb-2">{errors.email}</Form.Text>
                                        </div>
                                    )}

                                    <Form.Label className="hod-text-color">Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        className="hod-input"
                                        placeholder="Enter email address"
                                        onChange={(e: any) => {
                                            handleChange("email")
                                            setFieldValue("email", e.target.value)
                                        }}
                                        value={values.email}
                                        onBlur={() => handleBlur('email')}
                                    />
                                </Form.Group>

                                <div className="mb-3">
                                    <HodButton
                                        onClick={handleSubmit}
                                        title={'Get Magic Link'}
                                    />
                                </div>

                                <div className="d-flex justify-content-center">
                                    <Form.Text className="magic-link-text hod-text-color mt-0">We'll send a magic link to your inbox.</Form.Text>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Col>

                <Col md={6} className="img-section"></Col>
            </AuthContainer >
        </>
    )
}

function mapStateToProps(state: any) {
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        verifyEmail: (value: any, navigate: any) => verifyEmail(value, navigate)(dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);