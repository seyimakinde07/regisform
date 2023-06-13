import { useEffect, useState } from "react";
import { Col, Row, Form } from "react-bootstrap"
import AuthContainer from "./auth-container"
import { useFormik } from 'formik';
import * as Yup from "yup";
import './auth.css'
import HodLogo from "../layout/hod-logo"
import { useLocation, useNavigate } from "react-router-dom";
import HodButton from "../layout/hod-button";
import { connect } from "react-redux";
import { confirmQuestionAnswer, getUserQuestion, loginInUser } from "../../store/actions/auth-actions";
import { UserQuestion } from "../../models/question";
import { app_routes } from "../../router/routes";




const Verification = (props: any) => {

    const locations = useLocation();
    const queryParams = new URLSearchParams(locations.search);
    const questionId = queryParams.get("token");
    const email = queryParams.get("email");
    const [question, setQuestion] = useState<UserQuestion>(new UserQuestion());
    const navigate = useNavigate();

    useEffect(() => {
        questionId && props.getQuestion(questionId).then((result: UserQuestion) => {
            setQuestion(result);
        });
    }, [questionId]);

    const validation = Yup.object().shape({
        answer: Yup.string()
            .required("Answer is required to login"),
    });

    const { handleChange, handleSubmit, values, setFieldValue, handleBlur } = useFormik({
        initialValues: {
            answer: "",
            questionId: questionId,
            email: email
        },
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: (values) => {
            props.confirm(values).then((token: string) => {

                if (token) {
                    props.loginInUser(token);
                    // navigate(app_routes.Dashboard.index)
                }
            });
        }
    });

    return (
        <>
            <AuthContainer >
                <Col className="verification-card w-100 d-flex flex-column justify-content-center align-items-center m-auto bg-white">
                    <Row className="header-section justify-content-center">
                        <Col sm={12} className="header-logo text-center mb-4">
                            <HodLogo
                                width="105px"
                                height="auto"
                            />
                        </Col>
                        <Col sm={12}>
                            <h1 className="welcome-header hod-header-color text-center mb-4">Verification</h1>
                            <p className="welcome-text hod-text-color text-center mx-auto mb-0">What is the name of your Head Of Department (HOD)? </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Form className="form w-100">
                                <Form.Group controlId="secretQuestion" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="answer"
                                        className="hod-input"
                                        placeholder="David Diken"
                                        onChange={(e: any) => {
                                            handleChange("answer")
                                            setFieldValue("answer", e.target.value)
                                        }}
                                        value={values.answer}
                                        onBlur={() => handleBlur('answer')}
                                    />
                                </Form.Group>

                                <div className="mb-4">
                                    <HodButton
                                        onClick={handleSubmit}
                                        title={'Submit'}
                                    />
                                </div>

                                <div className="d-flex justify-content-center">
                                    <Form.Text className="text-center hod-text-color mt-0">For assistance, contact your Head of Department.</Form.Text>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Col>

                <Col className="img-section email-verification"></Col>
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
        getQuestion: (questionId: string) => getUserQuestion(questionId)(dispatch),
        confirm: (values: any) => confirmQuestionAnswer(values)(dispatch),
        loginInUser: (payload: string) => loginInUser(payload)(dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Verification);
