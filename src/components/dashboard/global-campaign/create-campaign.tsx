import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { app_routes } from "../../../router/routes";
import CampaignHeader from "./campaign-header";
import NextButton from "./next-button";

import "./global-campaign.css";

// MdOutlineFileUpload
// MdOutlinePeople
// RxClipboardCopy

const CreateCampaignMode = ({
    id,
    icon,
    title,
    option,
    setUseOption,
}: {
    id: String;
    icon: any;
    title: String;
    option: String;
    setUseOption: Function;
}) => {
    const audienceStyle = {
        borderColor: "#273472",
        backgroundColor: "#C0C0D833",
    };
    const uploadStyle = {
        borderColor: "#196B2B",
        backgroundColor: "#D9FCD966",
    };
    const copyStyle = {
        borderColor: "#F89C11",
        backgroundColor: "#F89C110D",
    };

    return (
        <div
            className={`${option === id
                ? "selected-option campaign-mode"
                : "campaign-mode"
                } ${id}`}
            onClick={() => setUseOption(id)}
        >
            <div className="active-dot"></div>

            <div
                className="icon-wrapper"
                style={
                    id === "upload-file"
                        ? uploadStyle
                        : id === "copy-paste"
                            ? copyStyle
                            : audienceStyle
                }
            >
                {icon}
            </div>

            <p className="mode-type">{title}</p>
        </div>
    );
};

const CreateCampaign = () => {
    const navigate = useNavigate();

    const allCreateModes = [
        {
            id: "existing-audience",
            title: "Use Existing Audience",
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.754 10C15.72 10 16.504 10.784 16.504 11.75V15H16.5V15.25C16.5 15.4489 16.421 15.6397 16.2803 15.7803C16.1397 15.921 15.9489 16 15.75 16C15.5511 16 15.3603 15.921 15.2197 15.7803C15.079 15.6397 15 15.4489 15 15.25V13H15.004V11.75C15.004 11.6837 14.9777 11.6201 14.9308 11.5732C14.8839 11.5263 14.8203 11.5 14.754 11.5H9.252C9.1857 11.5 9.12211 11.5263 9.07522 11.5732C9.02834 11.6201 9.002 11.6837 9.002 11.75V15H9V15.25C9 15.4489 8.92098 15.6397 8.78033 15.7803C8.63968 15.921 8.44891 16 8.25 16C8.05109 16 7.86032 15.921 7.71967 15.7803C7.57902 15.6397 7.5 15.4489 7.5 15.25V13H7.502V11.75C7.502 10.784 8.285 10 9.252 10H14.754ZM20.5 11.75V15.25C20.5 15.4489 20.579 15.6397 20.7197 15.7803C20.8603 15.921 21.0511 16 21.25 16C21.4489 16 21.6397 15.921 21.7803 15.7803C21.921 15.6397 22 15.4489 22 15.25V11.75C22 11.2859 21.8156 10.8408 21.4874 10.5126C21.1592 10.1844 20.7141 10 20.25 10H16.875C17.218 10.415 17.442 10.932 17.493 11.5H20.25C20.3163 11.5 20.3799 11.5263 20.4268 11.5732C20.4737 11.6201 20.5 11.6837 20.5 11.75ZM2 15.25C2 15.4489 2.07902 15.6397 2.21967 15.7803C2.36032 15.921 2.55109 16 2.75 16C2.94891 16 3.13968 15.921 3.28033 15.7803C3.42098 15.6397 3.5 15.4489 3.5 15.25V11.75C3.5 11.6837 3.52634 11.6201 3.57322 11.5732C3.62011 11.5263 3.6837 11.5 3.75 11.5H6.513C6.56274 10.949 6.7782 10.4261 7.131 10H3.75C3.28587 10 2.84075 10.1844 2.51256 10.5126C2.18437 10.8408 2 11.2859 2 11.75V15.25ZM12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6C15 6.79565 14.6839 7.55871 14.1213 8.12132C13.5587 8.68393 12.7956 9 12 9C11.2044 9 10.4413 8.68393 9.87868 8.12132C9.31607 7.55871 9 6.79565 9 6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3ZM12 4.5C11.6022 4.5 11.2206 4.65804 10.9393 4.93934C10.658 5.22064 10.5 5.60218 10.5 6C10.5 6.39782 10.658 6.77936 10.9393 7.06066C11.2206 7.34196 11.6022 7.5 12 7.5C12.3978 7.5 12.7794 7.34196 13.0607 7.06066C13.342 6.77936 13.5 6.39782 13.5 6C13.5 5.60218 13.342 5.22064 13.0607 4.93934C12.7794 4.65804 12.3978 4.5 12 4.5ZM18.5 4C19.163 4 19.7989 4.26339 20.2678 4.73223C20.7366 5.20107 21 5.83696 21 6.5C21 7.16304 20.7366 7.79893 20.2678 8.26777C19.7989 8.73661 19.163 9 18.5 9C17.837 9 17.2011 8.73661 16.7322 8.26777C16.2634 7.79893 16 7.16304 16 6.5C16 5.83696 16.2634 5.20107 16.7322 4.73223C17.2011 4.26339 17.837 4 18.5 4ZM18.5 5.5C18.2348 5.5 17.9804 5.60536 17.7929 5.79289C17.6054 5.98043 17.5 6.23478 17.5 6.5C17.5 6.76522 17.6054 7.01957 17.7929 7.20711C17.9804 7.39464 18.2348 7.5 18.5 7.5C18.7652 7.5 19.0196 7.39464 19.2071 7.20711C19.3946 7.01957 19.5 6.76522 19.5 6.5C19.5 6.23478 19.3946 5.98043 19.2071 5.79289C19.0196 5.60536 18.7652 5.5 18.5 5.5ZM5.5 4C6.16304 4 6.79893 4.26339 7.26777 4.73223C7.73661 5.20107 8 5.83696 8 6.5C8 7.16304 7.73661 7.79893 7.26777 8.26777C6.79893 8.73661 6.16304 9 5.5 9C4.83696 9 4.20107 8.73661 3.73223 8.26777C3.26339 7.79893 3 7.16304 3 6.5C3 5.83696 3.26339 5.20107 3.73223 4.73223C4.20107 4.26339 4.83696 4 5.5 4ZM5.5 5.5C5.23478 5.5 4.98043 5.60536 4.79289 5.79289C4.60536 5.98043 4.5 6.23478 4.5 6.5C4.5 6.76522 4.60536 7.01957 4.79289 7.20711C4.98043 7.39464 5.23478 7.5 5.5 7.5C5.76522 7.5 6.01957 7.39464 6.20711 7.20711C6.39464 7.01957 6.5 6.76522 6.5 6.5C6.5 6.23478 6.39464 5.98043 6.20711 5.79289C6.01957 5.60536 5.76522 5.5 5.5 5.5ZM2.75 17C2.55109 17 2.36032 17.079 2.21967 17.2197C2.07902 17.3603 2 17.5511 2 17.75V18.25C2 19.2446 2.39509 20.1984 3.09835 20.9017C3.80161 21.6049 4.75544 22 5.75 22H18.25C19.2446 22 20.1984 21.6049 20.9017 20.9017C21.6049 20.1984 22 19.2446 22 18.25V17.75C22 17.5511 21.921 17.3603 21.7803 17.2197C21.6397 17.079 21.4489 17 21.25 17H2.75ZM5.75 20.5C5.19656 20.5 4.66254 20.296 4.25004 19.927C3.83754 19.5581 3.57549 19.05 3.514 18.5H20.486C20.4245 19.05 20.1625 19.5581 19.75 19.927C19.3375 20.296 18.8034 20.5 18.25 20.5H5.75Z"
                        fill="#273472"
                    />
                </svg>
            ),
        },
        {
            id: "upload-file",
            title: "Upload a file",
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 16.0008C11.7167 16.0008 11.479 15.9048 11.287 15.7128C11.095 15.5208 10.9993 15.2834 11 15.0008V7.85078L9.125 9.72578C8.925 9.92578 8.69167 10.0258 8.425 10.0258C8.15834 10.0258 7.91667 9.91745 7.7 9.70078C7.5 9.50078 7.40434 9.26345 7.413 8.98878C7.42167 8.71411 7.51733 8.48478 7.7 8.30078L11.3 4.70078C11.4 4.60078 11.5083 4.53011 11.625 4.48878C11.7417 4.44745 11.8667 4.42645 12 4.42578C12.1333 4.42578 12.2583 4.44678 12.375 4.48878C12.4917 4.53078 12.6 4.60145 12.7 4.70078L16.3 8.30078C16.5 8.50078 16.596 8.73845 16.588 9.01378C16.58 9.28911 16.484 9.51811 16.3 9.70078C16.1 9.90078 15.8623 10.0051 15.587 10.0138C15.3117 10.0224 15.0743 9.92645 14.875 9.72578L13 7.85078V15.0008C13 15.2841 12.904 15.5218 12.712 15.7138C12.52 15.9058 12.2827 16.0014 12 16.0008ZM6 20.0008C5.45 20.0008 4.979 19.8048 4.587 19.4128C4.195 19.0208 3.99934 18.5501 4 18.0008V16.0008C4 15.7174 4.096 15.4798 4.288 15.2878C4.48 15.0958 4.71733 15.0001 5 15.0008C5.28333 15.0008 5.521 15.0968 5.713 15.2888C5.905 15.4808 6.00067 15.7181 6 16.0008V18.0008H18V16.0008C18 15.7174 18.096 15.4798 18.288 15.2878C18.48 15.0958 18.7173 15.0001 19 15.0008C19.2833 15.0008 19.521 15.0968 19.713 15.2888C19.905 15.4808 20.0007 15.7181 20 16.0008V18.0008C20 18.5508 19.804 19.0218 19.412 19.4138C19.02 19.8058 18.5493 20.0014 18 20.0008H6Z"
                        fill="#196B2B"
                    />
                </svg>
            ),
        },
        {
            id: "copy-paste",
            title: "Copy & Paste",
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 11V5C20 3.897 19.103 3 18 3H15C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2H8C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3H4C2.897 3 2 3.897 2 5V18C2 19.103 2.897 20 4 20H11C11 21.103 11.897 22 13 22H20C21.103 22 22 21.103 22 20V13C22 11.897 21.103 11 20 11ZM11 13V18H4V5H7V7H15V5H18V11H13C11.897 11 11 11.897 11 13ZM13 20V13H20L20.001 20H13Z"
                        fill="#F89C11"
                    />
                </svg>
            ),
        },
    ];

    const sendToItems = [
        {
            id: "id1",
            title: "Item One",
        },
        {
            id: "id2",
            title: "Item Two",
        },
        {
            id: "id3",
            title: "Item Three",
        },
    ];

    const dontSendToItems = [
        {
            id: "id1",
            title: "Item One",
        },
        {
            id: "id2",
            title: "Item Two",
        },
        {
            id: "id3",
            title: "Item Three",
        },
    ]

    const [useOption, setUseOption] = useState(allCreateModes[0].id);

    // use existing audience
    const [dontSendToValue, setDontSendToValue] = useState("");
    const [sendToValue, setSendToValue] = useState("");

    const [enableSmartEmail, setEnableSmartEmail] = useState(false);

    // upload contact file
    const [contactFile, setContactFile] = useState<any>(null);
    const [isFileSelected, setIsFileSelected] = useState<Boolean>(false);
    const [isUploadFieldActive, setIsUploadFieldActive] = useState<Boolean>(false);
    const [wrongFileFormat, setWrongFileFormat] = useState({
        status: false,
        message: "Wrong file format! Please upload a CSV or XLSX file."
    });

    const [isRecipientConfigured, setIsRecipientConfigured] = useState(false);

    const resetFileUploadField = () => {
        setIsUploadFieldActive(false);
        setIsFileSelected(false);
        setContactFile(null);
        setIsRecipientConfigured(false);
    };

    const handleFileChange = (e: any, file: any) => {
        e.preventDefault();
        console.log(e, file);

        if (file) {
            setIsFileSelected(true);
            console.log(file.type);

            const fileTypes = [
                ".csv",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "application/vnd.ms-excel"
            ];

            if (!fileTypes.includes(file.type)) {
                setWrongFileFormat({
                    ...wrongFileFormat,
                    status: true,
                });

                setIsUploadFieldActive(false);
                setContactFile(null);
            } else {
                setWrongFileFormat({
                    ...wrongFileFormat,
                    status: false,
                });

                setIsUploadFieldActive(true);
                setContactFile(file);
            }
        } else {
            resetFileUploadField();
        }
    };

    const handleDragOver = (e: any) => {
        e.preventDefault();
        setIsUploadFieldActive(true);
    };

    const handleDragLeave = (e: any) => {
        e.preventDefault();

        if (!contactFile) {
            setIsUploadFieldActive(false);
        }
    };

    const handleDrop = (e: any) => {
        const file = e.dataTransfer.files[0];
        handleFileChange(e, file);
    };

    const goToCampaignForm = () => {
        let recipientObj;

        if (isRecipientConfigured) {
            recipientObj = {
                contactFile: contactFile,
                sendToValue: sendToValue,
                dontSendToValue: dontSendToValue,
                enableSmartEmail: enableSmartEmail
            };
        }

        localStorage.setItem("recipientObj", JSON.stringify(recipientObj));

        navigate(app_routes.Dashboard.campaign.create_form);
    };

    useEffect(() => {
        setIsRecipientConfigured(false);

        if (sendToValue || contactFile) {
            setIsRecipientConfigured(true);
        } else {
            setIsRecipientConfigured(false);
        }
    }, [sendToValue, contactFile]);

    return (
        <>
            <CampaignHeader />

            <section className="create-campaign-view mx-auto d-flex flex-column align-items-center">
                <h2 className="title">Select or Add Contacts</h2>

                <div className="campaign-mode-wrapper">
                    {allCreateModes.map((mode) => (
                        <CreateCampaignMode
                            key={mode.id}
                            {...mode}
                            option={useOption}
                            setUseOption={setUseOption}
                        />
                    ))}
                </div>

                <div
                    className="campaign-mode-info"
                    style={{
                        padding: useOption === "existing-audience" ? "32px" : "16px 32px"
                    }}
                >
                    {useOption === "existing-audience" && (
                        <>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="sendTo">Send to:</label>
                                    <select
                                        name="sendTo"
                                        id="sendTo"
                                        aria-label="Select list to send to"
                                        value={sendToValue}
                                        onChange={(e) => {
                                            setSendToValue(e.target.value)
                                        }}
                                    >
                                        <option value="" disabled>Select List or Segment</option>

                                        {sendToItems.map(item => (
                                            <option key={item.id} value={item.title}>{item.title}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="dontSendTo">Don't Send to (Optional):</label>
                                    <select
                                        name="dontSendTo"
                                        id="dontSendTo"
                                        aria-label="Select list to not send to"
                                        value={dontSendToValue}
                                        onChange={(e) => {
                                            setDontSendToValue(e.target.value)
                                        }}
                                    >
                                        <option value="" disabled>Select List or Segment</option>

                                        {dontSendToItems.map(item => (
                                            <option key={item.id} value={item.title}>{item.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </form>

                            <div className="enable-smart-email">
                                <label htmlFor="enableSmartMailing">Enable Smart Mailing</label>

                                <div className="form-check-inline form-switch">
                                    <input
                                        name="enableSmartMailing"
                                        type="checkbox"
                                        id="enableSmartMailing"
                                        aria-label="Enable smart mailing checkbox"
                                        className="form-check-input"
                                        defaultChecked={enableSmartEmail}
                                        onChange={(e) => {
                                            // console.log("enabled:", e.target.checked)
                                            setEnableSmartEmail(e.target.checked)
                                        }}
                                    />
                                </div>
                            </div>

                            <p>
                                Smart Mailing lets you skip recipients who received
                                an email in the past 12 hours
                            </p>
                        </>
                    )}

                    {useOption === "upload-file" && (
                        <>
                            <div className="form-group drop-file-upload">
                                <span className="title">Upload your contacts</span>

                                <label
                                    className="form-label"
                                    htmlFor="uploadContact"
                                    onDragOver={(e) => handleDragOver(e)}
                                    onDragLeave={(e) => handleDragLeave(e)}
                                    onDrop={(e) => handleDrop(e)}
                                    onClick={(e: any) => {
                                        e.target.value = null;
                                        resetFileUploadField();
                                    }}
                                    style={{ background: isUploadFieldActive ? '#fff' : '#dff2f411' }}
                                >
                                    <input
                                        type="file"
                                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        id="uploadContact"
                                        className="input form-control"
                                        onChange={(e: any) => handleFileChange(e, e.target.files[0])}
                                    />

                                    <span className="input-placeholder">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_417_1737)">
                                                <path d="M19.35 10.04C19.0141 8.33772 18.0976 6.80486 16.7571 5.70325C15.4165 4.60163 13.7351 3.99961 12 4C9.11 4 6.6 5.64 5.35 8.04C3.88023 8.19883 2.52101 8.89521 1.53349 9.99532C0.545971 11.0954 -0.000171702 12.5217 4.04928e-08 14C4.04928e-08 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C7.58988 8.07478 8.28787 7.32382 9.14712 6.79979C10.0064 6.27577 10.9936 5.99902 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C19.9717 12.0906 20.6764 12.424 21.1922 12.9732C21.708 13.5224 21.9966 14.2466 22 15C22 16.65 20.65 18 19 18ZM8 13H10.55V16H13.45V13H16L12 9L8 13Z" fill="#3A3A3A" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_417_1737">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        Upload File
                                    </span>

                                    <span className="file-upload-description">
                                        {isFileSelected ? (
                                            <>
                                                {wrongFileFormat.status ? (
                                                    <span>{wrongFileFormat.message}</span>
                                                ) : (
                                                    <span className="file-name">{contactFile.name}</span>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <span className="supported-formats">
                                                    Drop file or <b>Import</b> contacts from a CSV or XLSX file
                                                </span>
                                            </>
                                        )}
                                    </span>
                                </label>
                            </div>
                        </>
                    )}

                    {useOption === "copy-paste" && (
                        <>
                            <div className="form-group">
                                <p className="title">
                                    Paste your contacts into this field <span>(Contact Information must follow the format below)</span>
                                </p>
                            </div>
                        </>
                    )}
                </div>

                <NextButton
                    buttonText="Next"
                    containerWidth="100%"
                    isDisabled={!isRecipientConfigured}
                    goToNextPage={goToCampaignForm}
                />
            </section>
        </>
    );
};

export default CreateCampaign;
