import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { app_routes } from "../../../router/routes";
import CampaignFormContentEditor from "./campaign-form-content-editor";
import CampaignHeader from "./campaign-header";
import NextButton from "./next-button";

const CampaignForm = () => {
    const navigate = useNavigate();

    const [subjectLine, setSubjectLine] = useState("");
    const [previewText, setPreviewText] = useState("");
    const [senderName, setSenderName] = useState("");
    const [senderEmail, setSenderEmail] = useState("");
    const [replyToEmail, setReplyToEmail] = useState("");
    const [isSenderEmailReplyToEmail, setIsSenderEmailReplyToEmail] = useState(false);

    const [content, setContent] = useState("");

    const [isFormValid, setIsFormValid] = useState(false);

    const [editorType, setEditorType] = useState("text");

    const goToCampaignForm = () => {
        let emailContentObj;

        if (isFormValid) {
            emailContentObj = {
                subjectLine: subjectLine,
                previewText: previewText,
                senderName: senderName,
                senderEmail: senderEmail,
                replyToEmail: replyToEmail,
                content: content
            };
        }

        localStorage.setItem("emailContentObj", JSON.stringify(emailContentObj));

        navigate(app_routes.Dashboard.campaign.create_review);
    };

    useEffect(() => {
        setIsFormValid(false);
        console.log(content)

        if (content && subjectLine && senderName && senderEmail && (replyToEmail || (isSenderEmailReplyToEmail && !replyToEmail))) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [content, subjectLine, senderName, senderEmail, isSenderEmailReplyToEmail, replyToEmail]);

    return (
        <>
            <CampaignHeader />

            <section className="campaign-form-view d-flex flex-column">
                <div className="form-container d-flex flex-column flex-md-row">
                    <form className="email-content-form w-100 h-100">
                        <h2 className="title">Email Content</h2>

                        <div className="form-group d-flex flex-column">
                            <label htmlFor="subjectLine" className="label text-capitalize">
                                Subject line
                            </label>
                            <input
                                type="text"
                                name="subjectLine"
                                id="subjectLine"
                                className="input"
                                aria-label="Subject line"
                                value={subjectLine}
                                onChange={(e) => {
                                    setSubjectLine(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group d-flex flex-column">
                            <label htmlFor="previewText" className="label text-capitalize">
                                Preview Text
                            </label>
                            <input
                                type="text"
                                name="previewText"
                                id="previewText"
                                className="input"
                                aria-label="Preview text"
                                value={previewText}
                                onChange={(e) => {
                                    setPreviewText(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group d-flex flex-column">
                            <label htmlFor="senderName" className="label text-capitalize">
                                Sender Name
                            </label>
                            <input
                                type="text"
                                name="senderName"
                                id="senderName"
                                className="input"
                                aria-label="Sender name"
                                value={senderName}
                                onChange={(e) => {
                                    setSenderName(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group d-flex flex-column">
                            <label htmlFor="senderEmail" className="label text-capitalize">
                                Sender Email Address
                            </label>
                            <input
                                type="text"
                                name="senderEmail"
                                id="senderEmail"
                                className="input"
                                aria-label="Sender email address"
                                value={senderEmail}
                                onChange={(e) => {
                                    setSenderEmail(e.target.value);
                                }}
                            />

                            <div className="check-input d-flex align-items-center">
                                <input
                                    type="checkbox"
                                    name="useAsReplyToAddress"
                                    id="useAsReplyToAddress"
                                    aria-label="Use sender email as reply-to address checkbox"
                                    defaultChecked={isSenderEmailReplyToEmail}
                                    onChange={(e) => {
                                        setIsSenderEmailReplyToEmail(e.target.checked)
                                    }}
                                />

                                <label
                                    htmlFor="useAsReplyToAddress"
                                    className="label mb-0"
                                >
                                    Use this as your Reply-to address
                                </label>
                            </div>
                        </div>

                        <div className="form-group d-flex flex-column">
                            <label htmlFor="replyToEmail" className="label text-capitalize">
                                Reply-to Email Address
                            </label>
                            <input
                                type="text"
                                name="replyToEmail"
                                id="replyToEmail"
                                className="input"
                                aria-label="Reply-to email address"
                                value={isSenderEmailReplyToEmail ? senderEmail : replyToEmail}
                                disabled={isSenderEmailReplyToEmail}
                                onChange={(e) => {
                                    setReplyToEmail(e.target.value);
                                }}
                            />
                        </div>
                    </form>

                    <div className="email-content-editor w-100 h-100 d-flex flex-column justify-content-between">
                        <div className="email-content-editor-cta w-100 d-flex justify-content-between align-items-center">
                            <div className="editor-toggler d-flex">
                                <button
                                    className={`${editorType === 'text' && 'active '} button d-flex justify-content-center align-items-center text-center`}
                                    onClick={(e: any) => setEditorType((e.target.innerText).toLowerCase())}
                                >
                                    Text
                                </button>
                                <button
                                    className={`${editorType === 'html' && 'active '} button d-flex justify-content-center align-items-center text-center`}
                                    onClick={(e: any) => setEditorType((e.target.innerText).toLowerCase())}
                                >
                                    HTML
                                </button>
                            </div>

                            <div className="preview-cta">
                                <button
                                    className="button d-flex justify-content-center align-items-center text-center"
                                >
                                    Preview
                                </button>
                            </div>
                        </div>

                        <div className="content-editor">
                            <CampaignFormContentEditor
                                setContent={setContent}
                                content={content}
                            />
                        </div>
                    </div>
                </div>

                <NextButton
                    buttonText="Next"
                    containerWidth="100%"
                    isDisabled={!isFormValid}
                    goToNextPage={goToCampaignForm}
                />
            </section>
        </>
    );
};
export default CampaignForm;
